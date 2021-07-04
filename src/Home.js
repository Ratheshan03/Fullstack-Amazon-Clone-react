import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Amazon Banner"
            />
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                /> 
                <Product
                    id="325431341"
                    title="JBL Go 3: Portable Speaker with Bluetooth, Builtin Battery, Waterproof and Dustproof Feature Gray JBLGO3GRYAM"
                    price={129.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/811XCRw3UmL._AC_SL1500_.jpg"
                /> 
            </div>

            <div className="home__row">
                <Product
                    id="233298401"
                    title="Beats by Dre Studio 3 Wireless Over-Ear Headphones - White739/3174"
                    price={189.99}
                    rating={5}
                    image="https://media.4rgos.it/i/Argos/7393174_R_Z001A?w=1000&h=1000&qlt=70&fmt=webp"
                />
                <Product
                    id="785342341"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={4}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                /> 
                <Product
                    id="988971341"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                /> 
            </div>

            <div className="home__row">
                <Product
                    id="645454341"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div> 
        </div>
    )
}

export default Home;
