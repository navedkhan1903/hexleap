import Image from "next/image";
import ad from "../../../public/ad.png";

export default function Ad() {
  return (
    <article className="relative p-3 shadow-lg dark:bg-[#3B3E47]">
      <p className="absolute right-3 bg-black px-3 py-1 text-[12.8px] font-bold text-white">
        Ad
      </p>
      <Image src={ad} alt="Ad" className="w-full" />
      <section className="border-x-[1px] border-b-[1px] border-[#006555] p-3">
        <h2 className="pb-3 pt-6 text-[20px] font-semibold text-[#222D3A] dark:text-white">
          Advertisement title
        </h2>
        <p className="text-[12.8px] text-[#525965] dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </article>
  );
}
