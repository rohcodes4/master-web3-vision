const TrustedBySection = () => {
  const brands = [
    'UNISWAP',
    'AAVE',
    'CHAINLINK',
    'POLYGON',
    'ARBITRUM',
    'OPENSEA',
  ];

  return (
    <section className="py-20 border-y border-glass-border">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <p className="text-center text-xs tracking-[0.15em] text-muted-foreground mb-12">
          TRUSTED BY LEADING WEB3 COMPANIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              <span className="text-primary text-xs">◆</span>
              <span className="text-sm tracking-[0.15em] font-medium">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
