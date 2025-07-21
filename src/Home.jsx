import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// end of slide import
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { FaUtensils } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import './style/home.css'

function Home() {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    });
    useEffect(() => {
        setInterval(() => {
            let Width = window.innerWidth;
            if (Width >= "860") {
                setSettings((prev) => {
                    return { ...prev, slidesToShow: 3 }
                })
            }
            if (Width <= "860") {
                setSettings((prev) => {
                    return { ...prev, slidesToShow: 2 }
                })
            }
            if (Width <= "620") {
                setSettings((prev) => {
                    return { ...prev, slidesToShow: 1 }
                })
            }
        }, 1000);
    }, [])


    const card = [
        { id: 1, name: "Burger", url: "./rest-img/burger.jpg", price: "200 $" },
        { id: 2, name: "Pizza", url: "./rest-img/pizza.jpg", price: "100 $" },
        { id: 3, name: "Salad", url: "./rest-img/salad.jpg", price: "150 $" },
        { id: 4, name: "Sandwitch", url: "./rest-img/sandwitch.jpg", price: "90 $" },
        { id: 5, name: "Meat", url: "./rest-img/meat.jpg", price: "300 $" },
        { id: 6, name: "Beef Burgers", url: "./rest-img/burge2.jpg", price: "200 $" }
    ]
    const Chefs = [
        { id: 1, img: "./rest-img/Chef1.jpg", alt: "chef1", name: "Mohamed", experience: "20 ans" },
        { id: 2, img: "./rest-img/Chef2.jpg", alt: "chef2", name: "Alassane", experience: "01 ans" },
        { id: 3, img: "./rest-img/Chef3.jpg", alt: "chef3", name: "Fanta", experience: "10 ans" },
        { id: 4, img: "./rest-img/Chef4.jpg", alt: "chef4", name: "Oumar", experience: "05 ans" },
        { id: 5, img: "./rest-img/Chef5.jpg", alt: "chef5", name: "Hamath", experience: "02 ans" },
        { id: 6, img: "./rest-img/Chef6.jpg", alt: "chef6", name: "Joe", experience: "15 ans" },
        { id: 7, img: "./rest-img/Chef7.jpg", alt: "chef7", name: "Kalidy", experience: "07 ans" },
        { id: 8, img: "./rest-img/Chef8.jpg", alt: "chef7", name: "Moussa", experience: "20 ans" }
    ]
    const testimonial = [
        { id: 1, message: "One of the best dining experiences I’ve had in a while. The chefs deserve all the praise for their creativity and skill.", url: "./rest-img/Chef1.jpg", name: "Abouzari" },
        { id: 2, message: "One of the best dining experiences I’ve had in a while. The chefs deserve all the praise for their creativity and skill.", url: "./rest-img/Chef1.jpg", name: "Abouzari" },
        { id: 3, message: "One of the best dining experiences I’ve had in a while. The chefs deserve all the praise for their creativity and skill.", url: "./rest-img/Chef1.jpg", name: "Abouzari" },
        { id: 4, message: "One of the best dining experiences I’ve had in a while. The chefs deserve all the praise for their creativity and skill.", url: "./rest-img/Chef1.jpg", name: "Abouzari" },
    ]

    return (
        <>
            <header>
                <div className="logo"><span>AS</span>-Code</div>
                <Navbar />
            </header>
            <main>
                <section className="hero">
                    <div className="ac-container">
                        <div className="Dark">
                            <h1>Sweat-Meal</h1>
                            <p>Great-food| Great People | Great Time | That's how we do it . </p>
                            <div className="ac-button">
                                <a href="#"><button type="button" className="button1">Order</button></a>
                                <a href="#"><button type="button" className="button2" > View Menu</button></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-menu" id="menu">
                    <div className="ac-menu">
                        <h2>Our<span>-</span>Menu</h2>
                        <div className="ac-card">
                            {
                                card.map(food => (
                                    <div className="ac-card-item" key={food.id}>
                                        <img src={food.url} alt="" height={100} />
                                        <div className="food-text">
                                            <h3>{food.name}</h3>
                                            <p>{food.price}</p>
                                            <div className="button">
                                                <button type="button">Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="cards">
                    <div className="ac-cards">
                        <div className="cards">
                            <div className="card">
                                <FaUserTie className="cardIcon" />
                                <h1>Master Chefs</h1>
                                <p>Master Chefs turn cooking into art, blending skill, passion, and creativity on every plate.</p>
                            </div>
                            <div className="card">
                                <GiMeal className="cardIcon" />
                                <h1>Quality Food</h1>
                                <p>At the heart of every great meal is quality food made with fresh ingredients, expert technique, and a passion for flavor that you can taste in every bite.</p>
                            </div>
                            <div className="card">
                                <FaCartShopping className="cardIcon" />
                                <h1>Online Order</h1>
                                <p>Enjoy restaurant-quality food from the comfort of your home freshly prepared, carefully packaged, and just a click away with our easy online ordering</p>

                            </div>
                            <div className="card">
                                <MdRoomService className="cardIcon" />
                                <h1>Service</h1>
                                <p>Exceptional service isn’t just about speed—it’s about care, attention to detail, and making every customer feel valued from the moment they order to the last bite.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="AboutUs" id="about">
                    <div className="ac-about">
                        <h2>About <span>Us</span></h2>
                        <div className="ac-content">
                            <div className="imgBox">
                                <div className="ac-img"><img className="ac-img1" src="./rest-img/2.jpg" alt="ours Restaurant" /></div>
                                <div className="ac-img"><img className="ac-img2" src="./rest-img/3.jpg" alt="ours Restaurant" /></div>
                                <div className="ac-img"><img className="ac-img3" src="./rest-img/4.jpg" alt="ours Restaurant" /></div>
                                <div className="ac-img"><img className="ac-img4" src="./rest-img/6.jpg" alt="ours Restaurant" /></div>
                            </div>
                            <div className="ac-text">
                                <h3>Welcome to <span>Sweat <FaUtensils className="Utensils" /> Meal </span>  Restaurant</h3>
                                <p>At our restaurant, we serve more than just food — we create memorable dining experiences. With fresh ingredients, creative dishes, and welcoming service, every visit is a chance to enjoy great flavors and warm hospitality. Whether it’s a casual meal or a special occasion, we’re here to make it feel special.</p>
                                <p>Whether you're stopping by for a quick bite or celebrating something special, we aim to make every visit feel welcoming and memorable. Our menu blends fresh, local ingredients with creative flavors to offer something for everyone.</p>
                                <div className="button">
                                    <a href="#"><button type="button">Read More</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="teams" id="teams">
                    <div className="ac-teams">
                        <h1>Our Teams</h1>
                        <h2>Our Teams</h2>
                        <div className="teams slider-container">
                            <Slider {...settings}>
                                {
                                    Chefs.map((chef, index) => (
                                        <div className="team" key={index}>
                                            <div className="img">
                                                <img src={chef.img} alt={chef.alt} width={5} />
                                            </div>
                                            <h3>{chef.name}</h3>
                                            <p>{chef.experience} Experiences</p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </section>
                <section className="testimonial">
                    <div className="ac-testimonial">
                        <h1>Testimonials</h1>
                        <h2>Ours Clients Said</h2>
                        <div className="ac-messages">
                            {
                                testimonial.map((testi) => (
                                    <div className="contente" key={testi.key}>
                                        <div className="image">
                                            <img src={testi.url} alt="" />
                                        </div>
                                        <div className="">
                                            <h3> {testi.name} </h3>
                                            <p>{testi.message} </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default Home;