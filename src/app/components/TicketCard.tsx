import Image from "next/image";
import { Poppins } from "next/font/google";

interface Props {
  image: any;
  title: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  cta: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function TicketCard(props: Props) {
  const { image, title, date, day, time, venue, cta } = props;

  return (
    <>
      <article className="py-3 text-center shadow-lg dark:bg-[#3B3E47]">
        <Image src={image} alt="Ticket Image" className="w-full" />
        <div className="mx-6 flex flex-col items-center border-t-2 border-dashed border-[#A9ACB2] pt-3 dark:border-[#818A97] dark:text-white">
          <h2 className={`${poppins.className} text-[17px] font-medium`}>
            {title}
          </h2>
          <div
            className={`${poppins.className} my-3 flex items-center text-[14px]`}
          >
            <time className="border-r-[1px] border-black pr-2 dark:border-white">
              {date}
            </time>
            <time className="border-r-[1px] border-black px-2 dark:border-white">
              {day}
            </time>
            <time className="pl-2">{time}</time>
          </div>
          <p className="w-11/12 text-[14px] text-[#525965] dark:text-[#DFDFDF]">
            {venue}
          </p>
          <button className="mt-3 w-full bg-black py-3 text-[12.73px] text-white">
            {cta}
          </button>
        </div>
      </article>
    </>
  );
}
