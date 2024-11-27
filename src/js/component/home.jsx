import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
    return (
		<div className="container-fluid">
<Navbar/>

<Jumbotron/>

<div className= "d-flex gap-4 d-flex justify-content-center row p-5" >
<Card />
<Card/>
<Card/>
<Card/>
</div>

<Footer/>

		</div>
	);
}  ;


export default Home;

