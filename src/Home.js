import React from "react";
import "./Home.css";
import Product from "./Product";

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
          id={6}
          title={
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
          }
          price={999.99}
          image="https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UY218_.jpg"
          rating={4}
        />
        <Product
          id={2}
          title={
            "Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          }
          price={949.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
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
        <Product
          id={5}
          title={
            "Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Black (Latest Model)"
          }
          price={179.0}
          image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL320_.jpg"
          rating={4}
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
      <div className="home__row">
        <Product
          id="267678401"
          title="APPLE IPhone 12 Pro Max - Artic White 256gb storage"
          price={949.99}
          rating={4}
          image="https://crystaltelecom.lk/wp-content/uploads/2020/12/iphone-12-pro-max-silver-hero-1.jpg"
        />
        <Product
          id="785342231"
          title="Compare Nautilus Treadmil-2xpro | Nautilus-2021 "
          price={498.99}
          rating={3}
          image="https://www.nautilus.com/dw/image/v2/AAYW_PRD/on/demandware.static/-/Sites-nautilus-master-catalog/default/dw83947c0c/images/nautilus/treadmills/t618/100647/nautilus-treadmill-t618-1.jpg?sw=700&sh=700&sm=fit"
        />
        <Product
          id={1}
          title="Dell Inspiron 27 AIO, 27 inch, FHD Touchscreen, Intel Core i7-10510U, NVIDIA MX110 2GB, 1TB HDD + 512GB SSD Storage, 16GB RAM, i7790-7388SLV-PUS, 15-15.99 inches"
          price={1333.98}
          image="https://images-na.ssl-images-amazon.com/images/I/717mmm0oqnL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="1687721341"
          title="Google Pixel Buds | 2020 - Premium Noice Cancelling Ear-buds"
          price={239.99}
          rating={4}
          image="https://media.4rgos.it/s/Argos/9297560_R_SET?$Main768$&w=620&h=620"
        />
        <Product
          id="325987341"
          title="Boosted Stealth | New extend version 2021 "
          price={1149.99}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0109/5181/9321/products/boosted-stealth-grip_1024x1024@2x.jpg?v=1593036957"
        />
      </div>

      <div className="home__footer"></div>
    </div>
  );
}

export default Home;
