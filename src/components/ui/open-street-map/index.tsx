"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import styles from "./styles.module.css";

type OpenStreetMapProps = {
  latitude: number;
  longitude: number;
  address: string;
};

export default function OpenStreetMap({
  latitude,
  longitude,
  address,
}: OpenStreetMapProps) {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: LeafletMap | undefined;
    let isUnmounted = false;

    const createMap = async () => {
      const L = await import("leaflet");

      if (isUnmounted || !mapElement.current) return;

      map = L.map(mapElement.current, { scrollWheelZoom: true }).setView(
        [latitude, longitude],
        15,
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([latitude, longitude], {
        icon: L.divIcon({
          className: styles.marker,
          html: `
            <svg viewBox="0 0 32 40" width="32" height="40" aria-hidden="true">
              <path
                d="M16 1C8.27 1 2 7.27 2 15c0 10.5 14 24 14 24s14-13.5 14-24C30 7.27 23.73 1 16 1Z"
                fill="#f66a6a"
                stroke="#ffffff"
                stroke-width="2"
              />
              <circle cx="16" cy="15" r="5" fill="#ffffff" />
            </svg>
          `,
          iconSize: [32, 40],
          iconAnchor: [16, 40],
        }),
      }).addTo(map);
    };

    void createMap();

    return () => {
      isUnmounted = true;
      map?.remove();
    };
  }, [address, latitude, longitude]);

  return <div ref={mapElement} className={styles.map} aria-label={`${address} 지도`} />;
}
