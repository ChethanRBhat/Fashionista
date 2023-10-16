import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div 
    className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71ZQHw-dIIL._SX3000_.jpg"
            alt=""
            />


            <div className="home__row">
                <Product 
                id="253673484"
                title='OORA Mens Poly Viscose V-Shape Tuxedo Style Waistcoat' 
                price={15799} 
                image="https://m.media-amazon.com/images/I/61kwbxcaVjL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                
                />
                <Product
                id="2643875795"
                title='Cottinfab WomenBlack & Beige Striped Single-Breasted Blazer' 
                price={999} 
                image="https://m.media-amazon.com/images/I/71GzavsN1nL._AC_UL480_FMwebp_QL65_.jpg"
                rating={3}
                
                />


            </div>


            
            <div className="home__row">
                <Product
                id="2536298479"
                title='ADRO Mens Be Fearless Design Printed Cotton Hoodies' 
                price={969} 
                image="https://m.media-amazon.com/images/I/51Lrih2R1tS._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
                
                />
                <Product
                id="253738839"
                title='SIRIL Womens Printed Poly Silk Saree ' 
                price={5000} 
                image="https://m.media-amazon.com/images/I/71AYPbuBrhL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                
                />
                <Product
                id="25338383"
                title='AITITIA Mens Biker Zipper Deco Washed Straight Fit Jeans' 
                price={897} 
                image="https://m.media-amazon.com/images/I/81JYpmK-87L._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
                
                />
            </div>


            
            <div className="home__row">
                <Product
                id="2536237637"
                title='Benstoke mens silk blend kurta pajama with woven silk ethnic jacket set' 
                price={1899} 
                image="https://m.media-amazon.com/images/I/61cr2tjDz1L._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                
                />

                <Product
                id="6374638799283"
                title='CHROES® Mens Silk Tee Crew Neck Long Sleeve Classic Printed Tee Summer Lightweight T-Shirt' 
                price={1687} 
                image="https://m.media-amazon.com/images/I/71jhrImGWRL._UX679_.jpg"
                rating={4}
                
                />

                <Product
                id="2985963784"
                title='Satyam Ladies Wear Womens Designer Western Ball Gown, Stone Work One Piece Color : Black' 
                price={7999} 
                image="https://m.media-amazon.com/images/I/41-y+IxKIFL.jpg"
                rating={5}
                
                />
                
            </div>


            <div className="home__row">
                <Product
                id="34782789383"
                title='Vastramay Mens Beige Silk Blend Sherwani Set' 
                price={3959} 
                image="https://m.media-amazon.com/images/I/61aqgoUBmSL._UX679_.jpg"
                rating={3}
                
                />

                <Product
                id="32536936523"
                title='Satyam Ladies Wear Womens Designer Western Ball Gown, Stone Work One Piece Color : Black' 
                price={2000} 
                image="https://m.media-amazon.com/images/I/41q5Vka0VzL.jpg"
                rating={5}
                
                />

                <Product
                id="27526387833"
                title='Ben Martin Mens Quilted Bomber Jacket' 
                price={929} 
                image="https://m.media-amazon.com/images/I/61eMJalktNL._UY879_.jpg"
                rating={3}
                
                />
                
            </div>



        </div>    
    </div>
  )
}

export default Home