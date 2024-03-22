export default function CarouselBtn({ icon }: { icon: JSX.Element }) {
  return (
    <button className="hidden border-2 border-[#2C9CF0] px-1 py-2 text-[#2C9CF0] md:block">
      {icon}
    </button>
  );
}
