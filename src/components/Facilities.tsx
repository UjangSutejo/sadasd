export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="px-6 md:px-8 w-full">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="heading-ultra-tight text-6xl md:text-[7.8rem] uppercase leading-[0.86] max-w-[70%]">
            Our<br />Facilities
          </h2>
          <span className="text-5xl md:text-[6.5rem] font-black opacity-10 tracking-tighter leading-none shrink-0">
            (04)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-4 gap-y-12 md:gap-y-20">
          {/* Learning Hall */}
          <div className="flex flex-col md:mt-[500px]">
            <div className="overflow-hidden mb-4">
              <img
                alt="Learning Hall"
                className="w-full aspect-[1.778/1] object-cover"
                src="/aset/gambar fasilitas/IMG_9921.png"
              />
            </div>
            <div className="flex justify-between items-end pt-1">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  (01)
                </span>
                <h3 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  Learning hall
                </h3>
              </div>
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em] text-neutral-700">
                2024
              </span>
            </div>
          </div>

          {/* Art Room */}
          <div className="flex flex-col md:mt-10">
            <div className="overflow-hidden mb-4">
              <img
                alt="Art Room"
                className="w-full aspect-[0.75/1] object-cover"
                src="/aset/gambar anak/galery 1.jpeg"
              />
            </div>
            <div className="flex justify-between items-end pt-1">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  (02)
                </span>
                <h3 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  Art room
                </h3>
              </div>
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em] text-neutral-700">
                2024
              </span>
            </div>
          </div>

          {/* Boys Bedroom */}
          <div className="flex flex-col md:-mt-20">
            <div className="w-full md:w-[88%]">
              <div className="overflow-hidden mb-4">
                <img
                  alt="Boys Bedroom"
                  className="w-full aspect-[0.562/1] object-cover origin-top-left"
                  src="/aset/gambar fasilitas/IMG_9952 (1).png"
                />
              </div>
              <div className="flex justify-between items-end pt-1">
                <div className="flex items-baseline gap-4">
                  <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                    (03)
                  </span>
                  <h3 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                    Boys Bedroom
                  </h3>
                </div>
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em] text-neutral-700">
                  2023
                </span>
              </div>
            </div>
          </div>

          {/* Girls Bedroom */}
          <div className="flex flex-col md:mt-6">
            <div className="overflow-hidden mb-4">
              <img
                alt="Girls Bedroom"
                className="w-full aspect-[0.609/1] object-cover"
                src="/aset/gambar fasilitas/IMG_0769.png"
              />
            </div>
            <div className="flex justify-between items-end pt-1">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  (04)
                </span>
                <h3 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em]">
                  Girls Bedroom
                </h3>
              </div>
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.02em] text-neutral-700">
                2023
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-32">
          <a
            className="bg-black text-white text-[10px] font-black uppercase py-4 px-12 rounded-full hover:bg-neutral-800 transition-colors"
            href="#"
          >
            View More Facilities +
          </a>
        </div>
      </div>
    </section>
  );
}