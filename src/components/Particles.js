'use client';

import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "#1E2F97" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 140 },
        repulse: { distance: 200 },
      },
    },
    particles: {
      color: { value: "#00cfdd" },
      links: {
        color: "#00cfdd",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: { value: 120, density: { enable: true, area: 800 } },
      opacity: { value: 1 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Particles id={id} init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesComponent;
