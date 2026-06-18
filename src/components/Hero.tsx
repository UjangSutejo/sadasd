export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-font relative min-h-[100svh] w-full overflow-hidden bg-[#5a3d2f] md:h-screen md:bg-neutral-900"
    >
      {/* Mobile Hero Layout */}
      <div className="md:hidden relative z-10 flex min-h-[100svh] items-stretch justify-center bg-[#5a3d2f] p-0">
        <div className="relative flex h-[100svh] w-full overflow-hidden bg-neutral-900">
          <img
            alt="Hero Project"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90 pointer-events-none"
            src="/aset/gambar fasilitas/IMG_9921.png"
          />
          <div className="absolute inset-0 z-10 bg-black/15 pointer-events-none"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 text-white">
            <div className="relative z-20 flex items-start justify-between">
              <div className="text-[22px] font-bold tracking-tighter uppercase">
                SA&apos;ADIYAH DAYCARE
              </div>
              <button
                id="mobile-menu-open"
                type="button"
                className="relative z-30 text-[13px] font-bold uppercase tracking-[0.16em] pt-1"
              >
                MENU
              </button>
            </div>
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
        </div>
      </div>

      {/* Desktop Hero Layout */}
      <div className="hidden md:block absolute inset-0 z-0">
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