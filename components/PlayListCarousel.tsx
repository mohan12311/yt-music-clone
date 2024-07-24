import { Playlist } from "@/type";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}: PlayListCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <section className="flex flex-row justify-between items-end my-2">
        <article className="flex flex-row gap-3">
          <div>{Thumbnail}</div>
          <div className="flex flex-col justify-center">
            <div>
              {subTitle && <div className="text-neutral-500">{subTitle}</div>}
            </div>
            <div className="text-3xl font-bold">{title}</div>
          </div>
        </article>
        <div className="relative left-[-45px]">
          <div className="absolute bottom-5">
            <CarouselPrevious className="right-2" />
            <CarouselNext className="left-2" />
          </div>
        </div>
      </section>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">Card</div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">Card</div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">Card</div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default PlayListCarousel;
