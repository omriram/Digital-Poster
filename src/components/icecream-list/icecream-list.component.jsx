import React from 'react';
import IceCreamItem from "../icecream-item/icecream-item.component";
import {Carousel} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./icecream-list.style.scss";
import coffee from "../../assets/coffee1.jpg";
import icecreamList from '../../assets/icecream-list';



const IceCreamList = ({iceCreamList, coffeeList}) => {
    let iceCreamArr = "", iceCreamBox = "";
    let iceCreamArr2 = "", iceCreamBox2 = "";
    if(icecreamList.length > 0) {
        iceCreamArr = iceCreamList.map((item, idx) => {
            if(idx < 6) {
                return <IceCreamItem key={item.Code} item={item} />
            }
        })
        iceCreamBox = <div className="icecream-list__car-item">
            {iceCreamArr}
        </div>  
        iceCreamArr2 = iceCreamList.map((item, idx) => {
            if(idx > 5) {
                return <IceCreamItem key={item.Code} item={item} />
            }
        })
        iceCreamBox2 = <div className="icecream-list__car-item">
            {iceCreamArr2}
        </div>  
    }
    

    return ( 
         <div className="icecream-list"> 
        <Carousel>
            <Carousel.Item>
                {iceCreamBox2}
            </Carousel.Item>
        
            <Carousel.Item>
                {iceCreamBox}
            </Carousel.Item>
        </Carousel>
           
         </div>
     );
}


 
export default IceCreamList;