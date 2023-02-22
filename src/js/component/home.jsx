import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx"
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	let cardContent = [
		{
		  title: "LA IA",
		  content: "La IA dominará el mundo",
		},
		{
			title: "El Mundo",
			content: "El mundo es grande",
		},
		{
			title: "Turquía",
			content: "Sismo en Turquía",
		},
		{
			title: "Costa Rica",
			content: "Belleza Natural",
		},
	  ];
	return (
		<>
		<Navbar/>
		
		<div className="album py-5 bg-light">
		<Jumbotron/>
		</div>
			<div className="container ">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
				{cardContent.map((item, index) => {
        return (
          <Card
            title={item.title}
            content={item.content}
            
			key={index}
          />
        );
      })}
			</div>
		</div>
      
		<Footer/>
		</>
	);
};

export default Home;
