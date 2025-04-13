import Image from "next/image";
import GeneralDescription from "./Components/GeneralDescription.js";

export default function Home() {
  return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-[32px] row-start-2 items-center">
    <Image
      src="/travelbot.svg"
      alt="Travelbot logo"
      width={180}
      height={38}
      priority
    />

        <GeneralDescription/>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/gmail.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          travelbot.suport@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/andrei-haba-1007942aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Developer account →
        </a>
      </footer>
    </div>
  );
}
