import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./YanMap.scss";
function YanMap() {
 
  return (
    <div className="map">
      <YMaps  style={{ width: "100%", height: "800px" }}>
        <Map
          style={{ width: "100%", height: "800px" }}
          defaultState={{
            center: [55.75, 37.57],
            zoom: 4,
            scrollable: false,
            restrictMapArea: true,
            controls: []
          }}
          options={{ draggable: false }}

        >
          <h1>Наши дистрибьютеры</h1>
          <Placemark geometry={[55.684758, 37.738521]} />
          <Placemark geometry={[43.237288, 76.945784]} />
          <Placemark geometry={[51.533688, 46.033948]} />
          <Placemark geometry={[53.243328, 34.363708]} />
          <Placemark geometry={[50.595245, 36.587134]} />
          <Placemark geometry={[52.970602, 36.063894]} />
          <Placemark geometry={[53.195108, 45.017682]} />
          <Placemark geometry={[55.796043, 49.106094]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default YanMap;
