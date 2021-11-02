import React from "react";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import logo from "./img/enactLogo.svg";

function App() {
	return (
		<div className="layout">
			<div className="inner-layout">
				<div className="logo-container"></div>

				<div className="content">
					<img src={logo} alt="enact logo" />
					<AboutUs />
					<Services />
					<ContactUs />
				</div>
			</div>
		</div>
	);
}

export default App;
