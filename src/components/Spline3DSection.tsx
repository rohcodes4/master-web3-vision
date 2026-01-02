import { Interactive3DCard } from "@/components/ui/interactive-3d-card";

interface Spline3DSectionProps {
  position: 'above' | 'below';
}

const Spline3DSection = ({ position }: Spline3DSectionProps) => {
  // Only render the "above" section now
  if (position === 'below') {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <Interactive3DCard
          subtitle="Next-Gen Development"
          title="Building the Decentralized Future"
          description="We craft cutting-edge Web3 solutions that push the boundaries of what's possible. From DeFi protocols to NFT infrastructure, our team delivers products that define the next era of the internet."
          splineScene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          ctaText="Explore Our Work"
          ctaHref="#portfolio"
          spotlightColor="hsl(153, 100%, 50%)"
        />
      </div>
    </section>
  );
};

export default Spline3DSection;
