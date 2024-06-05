"use client";

import { FunctionComponent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RecentListingsProps {}

const RecentListings: FunctionComponent<RecentListingsProps> = () => {
  const [existingSearch, setExistingSearch] = useState(false);

  return (
    <section className="max-w-screen-xl mx-auto w-full">
      {existingSearch ? (
        <>
          <div>
            <div>
              <h2>
                Continue searching for: San Francisco, CA, For Rent, Max
                $2k/month, Houses
              </h2>
              <p>7+ new listings</p>
            </div>
            <div>buttons here</div>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-96">
          <div className="flex items-center justify-center">
            <div>
              <h2 className="font-bold text-xl">Get home recommendations</h2>
              <p className="text-base text-muted-foreground mt-0.5 mb-4">
                Sign in for a more personalized experience
              </p>
              <Button variant="default"> Sign In </Button>
            </div>
          </div>
          <div className="flex items-center w-9/12 mx-auto md:m-0 md:w-full">
            <Image
              src="/home-section.png"
              width={400}
              height={400}
              alt="homes with badges overlaid"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentListings;
