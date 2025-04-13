import GeneralDescription from "./Components/GeneralDescription.js";
import Link from 'next/link';

export default function Home() {
  return (
    <div className=" items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center">
        <GeneralDescription/>

        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="/functionalities"
          rel="noopener noreferrer"
        >
          Functionalities
        </Link>

      </main>
    </div>
  );
}
