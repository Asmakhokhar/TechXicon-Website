import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const NeuronParticles = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } }, // ✅ Fixed color
        style: {
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#00cfdd" },
          links: {
            enable: true,
            distance: 150,
            color: "#00cfdd",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2 },
          size: { value: 3 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuronParticles;
