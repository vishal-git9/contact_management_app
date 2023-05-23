import React from "react";
import { useQuery } from "@tanstack/react-query";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getCountryWiseData } from "../api/api";
const MapWithMarkers: React.FC = () => {
  const ChartQuery = useQuery({
    queryKey: ["country"],
    queryFn: getCountryWiseData,
  });

  if (ChartQuery.status === "loading") return <h1>Loading...</h1>;
  if (ChartQuery.status === "error")
    return <h1>{JSON.stringify(ChartQuery.error)}</h1>;

    // sending any as type due to the big size of response object 
  const markers: any = [];
  ChartQuery.data.map((el: any) => {
    markers.push({
      position: { lat: el.countryInfo.lat, lng: el.countryInfo.long },
      name: el.country,
      active: el.active,
      recovered: el.recovered,
      death: el.deaths,
    });
  });
  return (
    <div>
      <h1 className="mb-10 font-bold text-lg">World wide Cases Map</h1>
      <MapContainer
        center={[13.084622, 80.248357]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker: any, index: any) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              <div className="flex items-center gap-4">
                <span className="font-bold">Country</span>
                <p className="text-base">{marker.name} </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-Amber-500 font-bold">Active</span>
                <p className="text-base">{marker.active} </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-Lime-600 font-bold">Recovered</span>
                <p className="text-base">{marker.recovered}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-700 font-bold	">Deaths</span>
                <p className="text-base">{marker.death} </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithMarkers;
