import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWJlaHRlbWFtIiwiYSI6ImNqcndoMndsaDBiaTUzeW81Z204Ymhud3cifQ.Kyp8cElli7B9Zott5-O-oQ"
});
interface IProps {
  lat: number;
  lng: number;
}
export default function UserMap(props: IProps) {
  console.log(props);
  return (
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "40rem",
        minWidth: "30rem"
      }}
      center={[props.lat, props.lng]}
      zoom={[-4]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[props.lat, props.lng]} />
      </Layer>
    </Map>
  );
}
