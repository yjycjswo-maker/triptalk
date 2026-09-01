"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import styles from "./styles.module.css";

type OpenStreetMapProps = {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
};

export default function OpenStreetMap({
  latitude,
  longitude,
  title,
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
          html: "📍",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        }),
      })
        .addTo(map)
        .bindPopup(`<strong>${title}</strong><br />${address}`)
        .openPopup();
    };

    void createMap();

    return () => {
      isUnmounted = true;
      map?.remove();
    };
  }, [address, latitude, longitude, title]);

  return <div ref={mapElement} className={styles.map} aria-label={`${address} 지도`} />;
}
