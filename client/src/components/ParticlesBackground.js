import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ children }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Initialize Particles with the slim version
    }, []);

    return (
        <div
            style={{
                backgroundImage: "url(https://www.engroenergy.com/app/media/2020/07/home-page-slider-qadirpur.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
                position: "relative",
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            outModes: { default: "bounce" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 80,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
            {children}
        </div>
    );
};

export default ParticlesBackground;
