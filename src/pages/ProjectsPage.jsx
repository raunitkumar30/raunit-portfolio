import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

function SortableProjectItem({ id, project, isMobile }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: isMobile });

  const style = {
    transform:
      transform && !isDragging
        ? `translate3d(0px, ${transform.y}px, 0)`
        : undefined,
    transition: isDragging ? undefined : transition,
    zIndex: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!isMobile ? attributes : {})}
      {...(!isMobile ? listeners : {})}
      className={`h-full ${!isMobile ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <ProjectCard project={project} />
    </div>
  );
}

export default function ProjectsPage() {
  const [items, setItems] = useState(() => projectsData.map((p) => p.id));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id);
        const newIndex = prev.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const projectMap = new Map(projectsData.map((p) => [p.id, p]));

  return (
    <main className="min-h-screen py-5 flex justify-center w-full px-4">
      <div className="max-w-[1200px] w-full">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold font-decorative text-gray-900 dark:text-white">
            Featured Projects
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Production systems, web platforms, and open-source packages
          </p>
        </div>

        <DndContext
          id="projects-dnd-grid"
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          measuring={{
            droppable: { strategy: MeasuringStrategy.Always },
          }}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div role="list" aria-label="Projects list" className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {items.map((id) => {
                const proj = projectMap.get(id);
                if (!proj) return null;
                return (
                  <div role="listitem" key={id}>
                    <SortableProjectItem
                      id={id}
                      project={proj}
                      isMobile={isMobile}
                    />
                  </div>
                );
              })}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
}
