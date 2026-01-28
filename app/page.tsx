// HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="bg-surface">
      {/* 'font-heading' and 'text-hero' are from your SCSS via Tailwind Config */}
      <h1 className="font-heading text-hero font-bold  text-3xl">
        Build <span className="text-neon">Faster</span>
      </h1>

      <p className="text-gray-400 text-lg">
        This UI is powered by a centralized SCSS theme piped through Tailwind
        utility classes.
      </p>

      {/* 'bg-neon' and 'rounded-brand' are your custom tokens */}
      <button className="bg-neon text-black font-bold rounded-custom">
        Get Started
      </button>
    </section>
  );
}
