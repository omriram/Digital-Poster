import React from 'react'
import "./icecream-item.style.scss";
import Mag from "../../assets/mag.png";
import PriceTag from "../../assets/price-tag.png";
import Mivza from "../../assets/mivza.png";
import New from "../../assets/new.png";
import Azal from "../../assets/azal.png";

const status = {
    NOT_AVAILABLE: 0,
    NORMAL: 1,
    PROMOTION: 2,
    NEW: 3,
    SOON: 4
}

const IceCreamItem = ({item}) => {
    let statusImg = "";
    let priceTag = <div className="icecream-item__price-tag">
                        <img className="icecream-item__price-img" src={PriceTag} alt="price-tag" />
                        <span className="icecream-item__price">&#8362;{`${item.Price.toFixed(2)}`}</span>    
                    </div>;
    let IceCreamClass = "icecream-item";

    
    switch(item.Status) {
        case status.NOT_AVAILABLE:
            priceTag = ""
            statusImg = <img className="icecream-item__not-available" src={Azal} alt="Not Available" />;
            IceCreamClass += " not-available";
            break;
        case status.PROMOTION:
            statusImg = <img className="icecream-item__promotion" src={Mivza} alt="promotion" />;
            IceCreamClass += " animate__animated animate__rubberBand animate__infinite infinite";
            break;
        case status.NEW:
            statusImg = <img className="icecream-item__new" src={New} alt="new" />
           // IceCreamClass += " animate__animated animate__heartBeat animate__infinite infinite";
        case status.NORMAL:
            default:
        break;
    }
    return ( <div className={IceCreamClass}>
        <img className="icecream-item__img" src={item.Image} alt={item.Id} />
        {priceTag}
        {statusImg}
        <span className="icecream-item__name">{item.Description}</span>
    </div> );
}

 
export default IceCreamItem;