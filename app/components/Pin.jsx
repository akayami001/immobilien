import Image from "next/image";
import Link from "next/link";
import { Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <Image src={item.images[0]} alt="item" width={24} height={32}/>
          <div className="textContainer">
            <Link href={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;