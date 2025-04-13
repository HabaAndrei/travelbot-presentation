import Image from "next/image";

export default function Header() {
  return (
  <hearder className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-[32px] row-start-2 items-center">
      <Image
        src="/travelbot.svg"
        alt="Travelbot logo"
        width={180}
        height={38}
        priority
      />
    </div>
  </hearder>
  )
}
