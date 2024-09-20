import Image from "next/image";
import Link from "next/link";

function Card({ item }) {
  return (
    <div className="card">
      <Link href={`/${item.id}`} className="imageContainer">
        <Image src={item.images[0]} alt="item" width={24} height={32}/>
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link href={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <Image src="/pin.png" alt="pin" width={24} height={32}/>
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <Image src="/bed.png" alt="bedroom" width={24} height={32}/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <Image src="/bath.png" alt="bathroom" width={24} height={32}/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <Image src="/save.png" alt="save" width={24} height={32}/>
            </div>
            <div className="icon">
              <Image src="/chat.png" alt="chat" width={24} height={32}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;