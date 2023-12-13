import { Component } from 'react';
import './Product.css'


export default class Product extends Component{
    constructor(props){
        super(props)
        this.product = props.product
    }

    render(){
        const {name, price, soldPrice, imageUrl, category, status} = this.product
        return <div className="product-item box flex column relative" id="1">
                <div className="product-badge Sold flex ai jc box absolute">{status}</div>
                <div className="product-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="product-details">
                    <div className="product-name bold">
                    {name}
                    </div>
                    <div className="product-price flex ai jc">

                        <div className="product-sold-price">{soldPrice/100} €</div>
                        <div className="product-regular-price"><del>{price/100}€</del></div>
                    </div>
                    <div className="product-reviews start">
                    
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>(5 notes)</span>
                    </div>
                </div>
            </div>
    }
}
/*
var Product = (props) =>{
    //console.log(props);
    const {name, price, soldPrice, imageUrl, category, status} = props.product
    return <div className="product-item box flex column relative" id="1">
                <div className="product-badge Sold flex ai jc box absolute">{status}</div>
                <div className="product-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="product-details">
                    <div className="product-name bold">
                    {name}
                    </div>
                    <div className="product-price flex ai jc">

                        <div className="product-sold-price">{soldPrice/100} €</div>
                        <div className="product-regular-price"><del>{price/100}€</del></div>
                    </div>
                    <div className="product-reviews start">
                    
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>(5 notes)</span>
                    </div>
                </div>
            </div>
}

export default Product*/