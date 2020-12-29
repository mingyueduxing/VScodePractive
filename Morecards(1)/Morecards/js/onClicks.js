const bookManager = new BookManager(0);
const bookCard = document.querySelector("#card-list");

document.body.addEventListener("click", (event) => {
	let className = event.target.className.split(" ");
	console.log(event.target);
	//handle click
	if (className.includes("button-utility")) {
		bookManager.renderOneMore();
	} else if (className[0] === "far" || className[0] === "fa") {
		className[0] === "fa" ? (className[0] = "far") : (className[0] = "fa");
	} else if (className.includes("button-playpause")) {
		event.target.innerHTML = "Doesn't Work yet";
	} else {
		return;
	}
	event.target.className = className.join(" ");
});
