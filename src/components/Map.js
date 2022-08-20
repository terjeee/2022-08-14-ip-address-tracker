import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import css from './Map.module.css';

// ChangeCoords endrer location på kartet gjennom map.setView()/flyTo() da MapContainer (onMount render) er immutable - https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes
const ChangeCoords = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
};

function Map(props) {
  const coords = [props.location.latitude, props.location.longitude];

  return (
    <div className={css.map}>
      <MapContainer center={coords} zoom={13} scrollWheelZoom={false} keyboard={true}>
        <ChangeCoords center={coords} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
