//moving animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
//Movement animation event
container.addEventListener("mousemove", (e) => {
	let Xaxis = (window.innerWidth / 2 - e.pageX) / 20;
	let Yaxis = (window.innerHeight / 2 - e.pageY) / 20;
	card.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	//popout
	title.style.transform = "translateZ(150px)";
	sneaker.style.transform = "translateZ(200px) rotateZ(-40deg)";
	sizes.style.transform = "translateZ(100px)";
	description.style.transform = "translateZ(125px)";
	purchase.style.transform = "translateZ(75px)";
});
// Animate out
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "All 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	title.style.transform = "translateZ(0px)";
	sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
	sizes.style.transform = "translateZ(0px)";
	description.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(0px)";
});
