import Image from "next/image";

interface Props {
  image: any;
  title: string;
  events: number;
  sport: string;
}

function Details({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="pb-1 text-[12px] text-[#525965] dark:text-[#DFDFDF]">
        {title}
      </p>
      <p className="text-[14px] font-medium dark:text-white">{value}</p>
    </div>
  );
}

export default function TeamCard({ image, title, events, sport }: Props) {
  return (
    <article className="p-3 shadow-lg dark:bg-[#3B3E47]">
      <Image src={image} alt="Team Image" className="w-full" />
      <h2 className="py-3 text-[17px] font-medium dark:text-white">{title}</h2>
      <div className="grid grid-cols-2 bg-[#F7F7F8] p-2 dark:bg-[#292B32]">
        <Details title="Total Events" value={`${events} Events`} />
        <Details title="Sport" value={sport} />
      </div>
    </article>
  );
}
