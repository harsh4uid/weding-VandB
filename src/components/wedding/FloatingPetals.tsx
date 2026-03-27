import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 10 + Math.random() * 14,
      hue: Math.random() > 0.5 ? 350 : 30,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: petal.size,
            height: petal.size,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill={`hsla(${petal.hue}, 80%, 65%, ${petal.opacity})`}
            className="w-full h-full"
          >
            <path d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
