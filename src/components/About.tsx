import ButtonTextHover from "./ButtonTextHover";

export default function About() {
  return (
    <section
      id="about"
      className="experience-section py-32 bg-white border-t border-neutral-100"
    >
      <div className="px-6 md:px-8 w-full">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="heading-ultra-tight experience-headline text-6xl md:text-[7.8rem] uppercase leading-[0.86] max-w-[100%] text-black">
            Experience<br />
            Child Care education
          </h2>
        </div>
        <div className="mt-[2px] flex justify-center">
          <div className="w-full max-w-[520px]">
            <img
              alt="Studio Interior"
              className="w-full aspect-[4/3] object-cover mb-9"
              data-purpose="studio-image"
              src="/aset/gambar anak/galery 1.jpeg"
            />
            <div className="space-y-7">
              <p className="text-[20px] leading-[1.2] text-black font-medium tracking-[-0.01em]">
                We work closely with parents right from the start, with clear
                communication and expert guidance along the way. We also work closely
                with educators, pediatric consultants, and other partners to make
                sure each child&apos;s journey runs smoothly and their development
                delivers well beyond our shared aspirations.
              </p>
              <p className="text-[20px] leading-[1.2] text-black font-medium tracking-[-0.01em]">
                While our educational approach is recognisable, each child&apos;s
                experience evolves to embody its own shape and character, crafted
                in response to the aspirations of our parents, the unique potential
                of the child, and the creative vision of our childcare team.
              </p>
              <a
                className="relative inline-flex items-center gap-2 bg-black text-white text-[11px] font-black uppercase py-4 px-11 rounded-full tracking-[0.02em]"
                href="#"
              >
                <span className="invisible">Learn More About Our Buisness +</span>
                <ButtonTextHover label="Learn More About Our Buisness +" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}