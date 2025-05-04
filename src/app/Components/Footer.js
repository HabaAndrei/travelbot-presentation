import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 border-t flex gap-6 flex-wrap items-center justify-center text-sm text-white">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://apps.apple.com/us/app/travel-bot/id6744552358"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/app-store.svg"
          alt="App store icon"
          width={16}
          height={16}
        />
        Download from App Store →
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://play.google.com/store/apps/details?id=com.haba03.expoapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/google-play.svg"
          alt="Google play icon"
          width={16}
          height={16}
        />
        Download from Google play →
      </a>
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
        Suport: travelbot.suport@gmail.com
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