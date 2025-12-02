"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CarouselPlugin({ list }: { list?: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Calculate the original index from duplicated list
  const getOriginalIndex = (index: number) => {
    if (!list?.length) return 0;
    return index % list.length;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-[300px]"
        opts={{
          loop: true,
          align: "start",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent
          style={{
            backgroundColor: "transparent",
          }}
        >
          {list?.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="min-h-[200px] bg-[#0C0C0C] flex flex-col items-center justify-around space-y-4 p-2">
                <CardContent>
                  <div
                    className={`bg-[#1F2228] z-10 w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]`}
                  >
                    {item?.icon}
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex-1">
                    <h3 className="text-sm transition-all text-center duration-300 hover:text-white">
                      <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                        {item?.title}
                      </span>
                      <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                        {item?.subtitle}
                      </span>
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Optional: Uncomment if you want navigation arrows */}
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>

      {/* Fixed Dot Tracker */}
      <div className="flex gap-2 items-center justify-center">
        {list?.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (api) {
                // Scroll to the correct slide
                api.scrollTo(index);
                // Reset autoplay timer
                plugin.current.reset();
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              getOriginalIndex(current) === index
                ? "bg-blue-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}