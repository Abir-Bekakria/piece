const BRANDS = [
  "HYUNDAI", "KIA", "BRIDGESTONE", "AUTHONIET", "BMW", "FORD", "BISSOH",
  "TOYOTA", "RENAULT", "PEUGEOT", "VOLKSWAGEN", "MERCEDES", "BOSCH", "CONTINENTAL",
];

export function BrandsBar() {
  const list = [...BRANDS, ...BRANDS];
  return (
    <section className="py-10 bg-card border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex marquee whitespace-nowrap gap-12 px-6">
          {list.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="shrink-0 text-xl md:text-2xl font-extrabold tracking-wider text-muted-foreground hover:text-[var(--orange)] transition-smooth font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {b}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-card to-transparent" />
      </div>
    </section>
  );
}
