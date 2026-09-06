import React from "react";
import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggleTile = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledWrapper>
      <div className="w-full h-full">
        <input
          id="theme-switch"
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="app w-full h-full">
          <div className="body bg-white rounded-4xl dark:ring-2 dark:ring-gray-700 w-full h-full flex flex-col justify-center">
            <div className="content">
              <div className="circle">
                <div className="crescent" />
              </div>
              <label htmlFor="theme-switch" className="ring-2 ring-transparent dark:ring-gray-700">
                <div className="toggle" />
                <div className="names">
                  <p className="light">Light</p>
                  <p className="dark">Dark</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  .body {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    width: 70%;
    transform: translateY(2%);
  }

  .circle {
    position: relative;
    border-radius: 100%;
    width: 7.5rem;
    height: 7.5rem;
    background: linear-gradient(40deg, #FF0080, #FF8C00 70%);
    margin: auto;
    transition: background 0.5s ease;
  }

  .crescent {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 5.6rem;
    height: 5.6rem;
    background: white;
    transform: scale(0);
    transform-origin: top right;
    transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  label {
    height: 2.6rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    position: relative;
    margin: 1.5rem 0 1rem 0;
    cursor: pointer;
    display: block;
  }

  .toggle {
    position: absolute;
    width: 50%;
    height: 2.6rem;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .names {
    font-size: 85%;
    font-weight: bolder;
    color: black;
    width: 65%;
    margin-left: 17.5%;
    margin-top: 6%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    user-select: none;
  }

  .dark {
    opacity: 0.5;
  }

  [type="checkbox"] {
    display: none;
  }

  [type="checkbox"]:checked + .app .toggle {
    transform: translateX(100%);
    background-color: #34323D;
  }

  [type="checkbox"]:checked + .app .dark {
    opacity: 1;
    color: white;
  }

  [type="checkbox"]:checked + .app .light {
    opacity: 0.5;
    color: white;
  }

  [type="checkbox"]:checked + .app .body {
    background-color: #0D1117;
    color: white;
  }

  [type="checkbox"]:checked + .app .crescent {
    transform: scale(1);
    background: #0D1117;
  }

  [type="checkbox"]:checked + .app .circle {
    background: linear-gradient(40deg, #8983F7, #A3DAFB 70%);
  }
`;

export default ThemeToggleTile;
