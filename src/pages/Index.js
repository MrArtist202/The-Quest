import React, { Fragment } from 'react';
import { useState } from 'react';

function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitmsg = async(e) => {
        console.log("submitting message to node server with " + e);
        e.preventDefault();

        let result = await fetch('http://localhost:3030/contact', {
            method: 'post',
            body: JSON.stringify({name, email, message}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json;
        localStorage.setItem("user", JSON.stringify(result));
    }

    return (

        <Fragment>
            <>
                {/*----------------------------------  HEADER STARTING ------------------------------------*/}
                <header>
                    {/* logo for website */}
                    <a href="#">
                        <img id="logo" src="assets/CSS, HTML, icons/logo.png" />
                    </a>
                    {/* Navigation bar for home , main ,etc */}
                    <ul id="nav">
                        <li>
                            <a className="nav-btn" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn" href="#categories">
                                Book Shelf
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn" href="#contact">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn" href="assets/LoginPage/Login.html">
                                Login/Sign Up
                            </a>
                        </li>
                    </ul>
                </header>
                {/*----------------------------------  HEADER ENDING ------------------------------------*/}
                {/*----------------------------------  NAV-BAR SMALL FOR SMALLER DEVICES STARTING ------------------------------------*/}
                <div>
                    <ul className="nav-small" style={{ fontFamily: '"Georgia"' }}>
                        <li>
                            <a className="nav-btn" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn" href="#categories">
                                Book Shelf
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn" href="#contact">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                {/*----------------------------------  NAV-BAR SMALL FOR SMALLER DEVICES ENDING ------------------------------------*/}
                {/*------------------------------------------------  HOME STARTING -------------------------------------------------*/}
                <div id="bg">
                    <div id="home">
                        <h1>
                            <center>Welcome To The World Of</center>
                        </h1>
                        <h1 style={{ marginTop: "-50px" }}>
                            <center>Books</center>
                        </h1>
                        <a href="#categories" className="about-btn">
                            Book Shelf
                        </a>
                    </div>
                </div>
                <section id="categories">
                    {/* anim here means animated */}
                    {/* Div(s) for cards with class "card"*/}
                    <span id="space" />
                    <div className="card">
                        <a href="assets/Second_Page/Sci_fi.html">
                            <img src="assets/ALL COVERS GENRES/sci fi.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Sci-Fi</center>
                                </h1>
                                <p>
                                    Be it engaging yourself into the world of George Orwell or finding
                                    your lost curiosity in the oddyyseys of space, this section won't
                                    let you disappointed!
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/Finance.html">
                            <img src="assets/ALL COVERS GENRES/finance.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Finance</center>
                                </h1>
                                <p>
                                    From the great walls of the Wallstreet to knowing everything about
                                    Warren Buffet, this section would be your own building block for
                                    knowing more about investment and compounding.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/romance.html">
                            <img src="assets/ALL COVERS GENRES/romance.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Romance</center>
                                </h1>
                                <p>
                                    Behold the power of love and cherish the simple yet lifelong joys it
                                    brings, romance seeks no season, nor shall the genre should! Explore
                                    it now and feel like autumn.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/Mystery.html">
                            <img src="assets/ALL COVERS GENRES/mystery.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Mystery</center>
                                </h1>
                                <p>
                                    From the best-sellers of Agatha Christie to the lost symbol of Dan
                                    Brown, there's a book for every Sherlock Holmes intrigued reader! Be
                                    mindful of this section, it will make your time bound-less
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/non_fiction.html">
                            <img src="assets/ALL COVERS GENRES/history.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Non-Fiction</center>
                                </h1>
                                <p>
                                    Be it unravelling the lost history, or exploring what beauty does
                                    our world behold, this section won't keep you disappointed in
                                    seeking all your unanswerd curiosities. Explore the non fiction
                                    category now!{" "}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/self_help.html">
                            <img src="assets/ALL COVERS GENRES/self help.jfif" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Self-Help</center>
                                </h1>
                                <p>
                                    At the end, it does not matter at what position do you stand in
                                    comparison to your peers, what truly matters is where you stand
                                    today in comparison to your earlier self. Behold and explore the
                                    world of self help in this section!
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/thriller.html">
                            <img src="assets/ALL COVERS GENRES/thriller.jfif" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Thriller</center>
                                </h1>
                                <p>
                                    Come, let's fall together into the high degree drama of intrigue,
                                    adventure and suspense. From the captivating girl on the train to
                                    the mind thrilling behind closed doors, this section would subsitute
                                    for all your lost goosebumps!
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="assets/Second_Page/biography.html">
                            <img src="assets/ALL COVERS GENRES/biographies.jpg" alt="books" />
                            <div className="card-content">
                                <h1>
                                    <center>Biography</center>
                                </h1>
                                <p>
                                    What you seek is what you become! From the challenges faced by
                                    Barack Obama, to the upliftment by Malala Yousafzai to knowing all
                                    about the founder of Apple and epitome of technology, Steve Jobs.
                                    This section has got you covered!{" "}
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
                {/*-------------------------------------------  HOME ENDING ---------------------------------------------*/}
                {/*-------------------------------------------  Contact STARTING ---------------------------------------------*/}
                <section id="contact">
                    <div id="contact-heading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contactInfoBox">
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-map-marker" />
                                    </div>
                                    <div className="text">
                                        <h3 className="c-type">Address</h3>
                                        <p className="contact_info">Sector-26</p>
                                        <p className="contact_info">Chandigarh, India</p>
                                        <p className="contact_info">160019</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="text">
                                        <h3 className="c-type">Phone</h3>
                                        <p className="contact_info">8965471235</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="text">
                                        <h3 className="c-type">Email</h3>
                                        <p className="contact_info">lost_n_bound@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="formBox">
                            <form method="post" action='/contact' onSubmit={submitmsg}>
                                <h1 id="mssg">Message Us</h1>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your Name " 
                                    required=""
                                    value = {name}
                                    onChange = {(e)=> setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Example123@abc.com"
                                    required=""
                                    value = {email}
                                    onChange = {(e)=> setEmail(e.target.value)}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required=""
                                    defaultValue={""}
                                    value = {message}
                                    onChange = {(e)=> setMessage(e.target.value)}
                                />
                                <input type="submit" defaultValue="Send"/>

                            </form>
                        </div>
                        <div className="social">
                            <a href="#">
                                <i className="fa fa-facebook" style={{ padding: "0 5px" }} />
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fa fa-pinterest" />
                            </a>
                        </div>
                    </div>
                </section>
            </>

        </Fragment>
    )
}

export default Index;