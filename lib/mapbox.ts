import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

export { mapboxgl as mapbox };
