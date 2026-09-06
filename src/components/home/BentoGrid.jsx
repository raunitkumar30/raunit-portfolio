import React, { useState, useEffect, useRef } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  MeasuringStrategy,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import IntroTile from "./tiles/IntroTile";
import MapTile from "./tiles/MapTile";
import TechStackTile from "./tiles/TechStackTile";
import ThemeToggleTile from "./tiles/ThemeToggleTile";
import SocialsTile from "./tiles/SocialsTile";
import ProjectDetailsTile from "./tiles/ProjectDetailsTile";
import CertificatesTile from "./tiles/CertificatesTile";
import GitHubTile from "./tiles/GitHubTile";
import BusinessPreviewTile from "./tiles/BusinessPreviewTile";
import ContactTile from "./tiles/ContactTile";

const TILE_CONFIG = {
  intro: { className: "md:col-span-2 lg:col-span-2 h-75", component: <IntroTile /> },
  mapView: { className: "col-span-1 h-75", component: <MapTile /> },
  techStack: { className: "col-span-1 lg:row-span-2 h-155", component: <TechStackTile /> },
  themeToggle: { className: "col-span-1 h-75", component: <ThemeToggleTile /> },
  instagram: { className: "col-span-1 h-75", component: <SocialsTile /> },
  portrait: { className: "col-span-1 lg:row-span-2 h-155", component: <ProjectDetailsTile /> },
  certificates: { className: "md:col-span-2 h-75", component: <CertificatesTile /> },
  github: { className: "col-span-1 h-75", component: <GitHubTile /> },
  business: { className: "md:col-span-2 h-75", component: <BusinessPreviewTile /> },
  contact: { className: "md:col-span-2 h-75", component: <ContactTile /> },
};

export default function BentoGrid() {
  const [items, setItems] = useState(() => Object.keys(TILE_CONFIG));
  const [activeId, setActiveId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastUpdate = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);
    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id.toString());
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeIdStr = active.id.toString();
    const overIdStr = over.id.toString();

    if (activeIdStr !== overIdStr) {
      const now = Date.now();
      if (now - lastUpdate.current > 150) {
        setItems((prev) => {
          const oldIndex = prev.indexOf(activeIdStr);
          const newIndex = prev.indexOf(overIdStr);
          return arrayMove(prev, oldIndex, newIndex);
        });
        lastUpdate.current = now;
      }
    }
  };

  const handleDragEnd = () => {
    setActiveId(null);
  };

  if (!isMounted) {
    return (
      <div className="w-full relative" aria-busy="true" aria-label="Loading dashboard">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-min">
          {items.map((id) => {
            const config = TILE_CONFIG[id];
            if (!config) return null;
            return (
              <div
                key={id}
                className={`${config.className} rounded-4xl bg-gray-100/70 dark:bg-[#0d1117]/70 border border-gray-100 dark:border-gray-800/80 animate-pulse`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section aria-label="Portfolio Overview" className="w-full relative">
      <DndContext
        id="react-bento-grid"
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-min">
            {items.map((id) => {
              if (!TILE_CONFIG[id]) return null;
              return (
                <SortableItem
                  key={id}
                  id={id}
                  className={TILE_CONFIG[id].className}
                  disabled={isMobile}
                >
                  {TILE_CONFIG[id].component}
                </SortableItem>
              );
            })}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <div className="w-full h-full rounded-4xl bg-white dark:bg-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden scale-105 pointer-events-none">
              {TILE_CONFIG[activeId].component}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </section>
  );
}
