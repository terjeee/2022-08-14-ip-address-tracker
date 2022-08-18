import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import css from './Map.module.css';

function Map(props) {
  const { lat: latitude, lng: longitude } = props.location.location;
  // console.log(latitude, longitude);

  return (
    <div className={css.map}>
      <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>:)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
