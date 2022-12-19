import React from 'react';
import './Home.css';
import Product from './Product';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [

  <video autoPlay loop muted
  className=" vedio"
  src="https://m.media-amazon.com/images/I/A1-N9Uc2PaL.mp4">
</video>,
  
    <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
    />,
    <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        alt="banner"
    />,
    <img
        className="home__image "
        src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
        alt="banner"
    />,
    <img
        className="home__image "
        src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
        alt="banner"
    />,
];



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}



<AliceCarousel
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={4500}
                    animationDuration={4500}
                    animationType="slideout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                />



<div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="	https://m.media-amazon.com/images/I/41REeQ25T2L._AC_SY230_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Home/XCM_CUTTLE_1473327_2602452_379x304_1X_en_CA._SY304_CB610011231_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={356.0}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51sT8f0YRuL._AC_SY200_.jpg"
                    />
                    <div className="prizes">
                        <div className="prizes__textbtn">
                            <h2>Sign in for your best experience</h2>
                            <button>sign in securely</button>
                        </div>
                        <div>
                            <img
                                src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/86d85960-8cd6-4c86-bf51-8a761994617a.jpg"
                                alt="World cup trophy"
                            />
                        </div>
                    </div>
                </div>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="	https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Events/2022/BFCM/XCM_CUTTLE_1493644_2702623_379x304_1X_en_US._SY304_CB606834237_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Home/XCM_CUTTLE_1473327_2602452_379x304_1X_en_CA._SY304_CB610011231_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Subscribe_and_Save/XCM_CUTTLE_1336056_1724690_CA_3888293_758x608_2X_en_CA._SY304_CB667622275_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Shop early and save"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Events/2022/Epic_Deals_Oct/XCM_CUTTLE_1481055_2636092_379x304_1X_en_CA_ED_Event_Card_BTF._SY304_CB607318864_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Toys & games for all"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/HTL_21/htl21BTFoctdesktop_379x304._SY304_CB639652221_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Save 5% with Subscribe & Save"
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71Yt2GHtcOL._AC_SX360_SY210_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Island of Bryan"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/subs/benefit-id/s-z/tvfavouritesca/heroes/asin2022/RB-6094_LiveOfBryan_Tentpole/EN/AMZN_Desktop_Dashboard_cards_RB-6094_IslandOfBryan_1X_379x304._SY304_CB624953598_.jpg"
                    />
                </div>

                <div className="prime-vedio">
                    <img src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/b4ce1d37-6024-4779-86f7-eacd357ca900.jpg"
                        alt="The lord of the Rings of Power poster" />
                </div>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>



        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        {/* <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div> */}
      </div>
    </div>
  )
}

export default Home