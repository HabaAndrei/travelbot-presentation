"use client"
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = (props) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-70 h-150 overflow-hidden rounded-xl">
      <div className="relative">

        {props?.images?.length > 1 &&
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>
        }
        {props?.images?.length > 1 &&
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        }

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {props?.images?.map((_, index) => (
            <div
              key={index}
              className="flex-none w-full aspect-[9/19.5] relative snap-center"
            >
              <Image
                src={_}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Ecran Telefon ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel