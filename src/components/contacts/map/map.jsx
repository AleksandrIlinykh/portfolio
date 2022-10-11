import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import mapStyles from './map.module.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../../images/marker-icon.png'),
  iconUrl: require('../../../images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default function Map() {
  return (
    <MapContainer
      center={[51.125923, 71.49017]}
      zoom={3}
      scrollWheelZoom={false}
      id="map"
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank"> </a>'
        url="https://api.maptiler.com/maps/toner/{z}/{x}/{y}@2x.png?key=iza1QcuNemyROgMFhb5W"
      />
      <Marker position={[51.125923, 71.49017]}>
        <Popup>
          Kazakhstan, Astana <br /> Rakhimzhan Qoshqarbaeva str. 40/1
        </Popup>
      </Marker>
    </MapContainer>
  );
}
