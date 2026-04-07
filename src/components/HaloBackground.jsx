import { useEffect, useRef } from "react";

const HaloBackground = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    // Check if VANTA is loaded
    if (window.VANTA && window.VANTA.HALO) {
      effectRef.current = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        baseColor: 0x09216d,
        backgroundColor: 0xb,
        amplitudeFactor: 1.6,
        xOffset: -0.01,
        size: 1.5,
      });
    } else {
      console.error("VANTA.HALO not loaded");
    }

    return () => {
      effectRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default HaloBackground;