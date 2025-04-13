import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 border-t flex gap-6 flex-wrap items-center justify-center text-sm text-white">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:travelbot.suport@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/gmail.svg"
          alt="Gmail icon"
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
          alt="LinkedIn icon"
          width={16}
          height={16}
        />
        Developer account →
      </a>
    </footer>
  );
}