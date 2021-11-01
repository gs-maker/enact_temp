import React, { useState } from "react";
import { data } from "../data";

const Services = () => {
	const [isOpen, setIsOpen] = useState(false);

	// handle open item
	const toggleOpen = (id) => {
		if (isOpen === id) {
			setIsOpen(id);
		}
		return setIsOpen(id);
	};

	return (
		<div>
			<h4>OUR SERVICES</h4>
			<p className="para-large">
				We believe in providing solutions and practical capabilities that guarantee sustainable business value to our
				clients
			</p>
			{data.map((service) => {
				const { id, title, items } = service;
				return (
					<div key={id}>
						<h3 onClick={() => toggleOpen(id)}>{title}</h3>
						{/* list items */}
						{isOpen === id && (
							<ul>
								{items.map((item) => {
									return <li key={item.id}>{item.label}</li>;
								})}
							</ul>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Services;
