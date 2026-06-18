export default function Footer() {
  return (
    <footer className="bg-neutral-100 pt-32 pb-12 px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Gigantic Footer Text */}
        <div className="mb-40">
          <h2 className="heading-ultra-tight text-7xl md:text-[14rem] font-semi uppercase leading-none">
            Focused on Growth<br />
            Driven by creativity
          </h2>
          <div className="flex justify-center mt-20">
            <button className="bg-black text-white text-[10px] font-black uppercase py-4 px-12 rounded-full">
              Tell us about your project +
            </button>
          </div>
        </div>
        {/* Footer Info Grid */}
        <div id="contact" className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-24 border-b border-neutral-300">
          <div>
            <div className="text-[2rem] font-black tracking-tighter mb-8">
              saadiyah daycare.
            </div>
          </div>
          <div>
            <span className="label-text block mb-6 font-bold">(NAVIGATION)</span>
            <ul className="space-y-2 text-2xl font-bold tracking-tighter">
              <li>
                <a className="hover:underline" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#facilities">
                  Facilities
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#program">
                  Program
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="label-text block mb-6 font-bold">(ABOUT US)</span>
            <p className="text-[10px] leading-relaxed uppercase tracking-wider text-neutral-600">
              Our mission is to support parents by creating a safe, engaging, and
              educational environment where children can thrive under the guidance
              of Islamic values. By integrating creative play with foundational
              Islamic habits, we stimulate your child&apos;s curiosity while
              fostering a love for kindness, respect, and prayer. We ensure a
              seamless balance between modern developmental milestones
              and strong spiritual foundations.
            </p>
          </div>
          <div>
            <span className="label-text block mb-6 font-bold">(INFO)</span>
            <div className="text-[10px] uppercase tracking-wider space-y-4 text-neutral-600">
              <p>
                A: Jl. Balai Pustaka Barat.358 D, RT.4/RW.12, Rawamangun,
                Kec. Pulo Gadung, Kota Jakarta Timur
              </p>
              <p>E: saadiyahdaycare@gmail.com</p>
              <p>P: +62 852-8559-7440</p>
              <p>W: Monday to Friday, 7.00am-6.00pm</p>
            </div>
          </div>
        </div>
        {/* Sub Footer */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] uppercase tracking-widest text-neutral-400">
            &copy; {new Date().getFullYear()} saadiyah daycare. all rights reserved.
          </div>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest text-neutral-400">
            <a className="hover:text-black transition-colors" href="#">
              privacy
            </a>
            <a className="hover:text-black transition-colors" href="#">
              terms
            </a>
            <a className="hover:text-black transition-colors" href="#">
              cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}