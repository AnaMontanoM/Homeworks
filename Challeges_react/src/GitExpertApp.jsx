import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const categories = ["empanada", "hamborguesa"];

export const GitExpertApp = () => {
	const [categories, setCategories] = useState(["Animales"]);

	const onAddCategory = (category) => {
		setCategories((list) => [...list, category]);
	};

	return (
		<>
			<h1>GitExpert</h1>

			<AddCategory onAddCategory={onAddCategory} />

			{categories.map((category, key) => {
				return <GifGrid category={category} key={key} />;
			})}
		</>
	);
};

export default GitExpertApp;
