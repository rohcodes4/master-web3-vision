import { EtheralShadow } from './ui/etheral-shadow';

const BackgroundEffects = () => {
  return (
    <>
      {/* Ethereal Shadow Background */}
      <div className="fixed inset-0 -z-10">
        <EtheralShadow
          color="rgba(75, 0, 130, 0.8)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Animated Grid */}
      <div className="grid-bg" />

      {/* Floating Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </>
  );
};

export default BackgroundEffects;
