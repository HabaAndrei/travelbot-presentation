import Link from 'next/link';
import Presentation from "../Components/Presentation.js";

export default function Functionalities() {
  return (
    <div className=" items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Presentation/>

      <Link
        className="rounded-full border border-solid border-black/[.08] flex items-center justify-center bg-[#f2f2f2] font-medium text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        href="/"
        rel="noopener noreferrer"
      >
        Home
      </Link>
    </div>
  )
};