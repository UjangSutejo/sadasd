export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-font relative min-h-[100svh] w-full overflow-hidden bg-[#5a3d2f] md:h-screen md:bg-neutral-900"
    >
      {/* Mobile Hero Layout */}
      <div className="md:hidden absolute inset-0 z-0 opacity-80" data-hero-bg>
        <img
          alt="Hero Project"
          className="h-full w-full object-cover"
          src="/aset/gambar fasilitas/IMG_9921.png"
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
      <div className="md:hidden absolute inset-0 z-10 flex flex-col justify-end p-5 text-white pointer-events-none">
        <div className="space-y-4 pb-1">
          <h1 className="max-w-[320px] text-[21px] font-semibold leading-[1.06] tracking-[-0.04em]">
            Sa&apos;adiyah is committed to providing the best environment for
            children to grow with strong Islamic values and limitless creativity.
          </h1>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">
            (Scroll Down)
          </div>
        </div>
      </div>

      {/* Desktop Hero Layout */}
      <div className="hidden md:block absolute inset-0 z-0" data-hero-bg>
        <img
          alt="Hero Project"
          className="h-full w-full object-cover"
          src="/aset/gambar fasilitas/IMG_9921.png"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="hidden md:flex absolute inset-0 z-10 items-end px-10 pb-12 text-white">
        <div className="flex w-full justify-between items-end">
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight">
              Sa&apos;adiyah is committed to providing the best environment for
              children to grow with strong Islamic values and limitless
              creativity.
            </h1>
          </div>
          <div className="pb-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
            (Scroll Down)
          </div>
        </div>
      </div>
    </section>
  );
}