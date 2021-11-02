import React, { useState } from "react";
import { data } from "../data";
import { HiOutlineArrowUp } from "react-icons/hi";
import { HiOutlineArrowDown } from "react-icons/hi";

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
		<div className="section">
			<h4>OUR SERVICES</h4>
			<p className="para-large">
				We believe in providing solutions and practical capabilities that guarantee sustainable business value to our
				clients
			</p>
			{data.map((service) => {
				const { id, title, items } = service;
				return (
					<div key={id}>
						<div className="service-title">
							<h3 onClick={() => toggleOpen(id)}>{title}</h3>
							{isOpen === id && <HiOutlineArrowUp /> ? (
								<HiOutlineArrowUp onClick={() => toggleOpen(id)} />
							) : (
								<HiOutlineArrowDown onClick={() => toggleOpen(id)} />
							)}
						</div>

						{/* list items */}
						{isOpen === id && (
							<ul className="service-list">
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
