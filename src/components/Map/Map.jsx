import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// https://www.youtube.com/watch?v=rEwZWQ13iwc&list=PLUMzvQeEutXByISA6opo0vUHoVxLfuUTQ&index=18&t=0s
const position = [51.505, -0.09]
const map = (
    <Map center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </Map>
)

render(map, document.getElementById('map-container'))
//render(map, document.getElementById('root'))

