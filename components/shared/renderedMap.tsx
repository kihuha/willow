"use client";

import { ElementRef, FunctionComponent, useRef } from "react";
import { mapbox } from "@/lib/mapbox";

interface RenderedMapProps {
  height: string;
  width: string;
}

const RenderedMap: FunctionComponent<RenderedMapProps> = ({
  height,
  width,
}) => {
  const mapRef = useRef<ElementRef<"div"> | null>(null);

  if (mapRef.current) {
    const map = new mapbox.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.5, 40],
      zoom: 9,
    });
  }

  return <div ref={mapRef} style={{ height, width }}></div>;
};

export default RenderedMap;
