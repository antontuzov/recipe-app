const COLORS = {
	green: {
		bg: "bg-[#6b7db3]",
		badge: "bg-[#99b3ff]",
	},
	orange: {
		bg: "bg-[#ffff99]",
		badge: "bg-[#b3b36b]",
	},
	red: {
		bg: "bg-[#ff9999]",
		badge: "bg-[#ff7d7d]",
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};