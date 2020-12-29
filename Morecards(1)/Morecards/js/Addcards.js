class BookManager {
	// Create a constructor with a parameter current id set to 0
	constructor(currentId = 0) {
		// Initialize an empty array to save the books added
		this.books = [];
		// Set the currentId value to currentId
		this.currentId = currentId;
	}

	/*Display list of books*/
	renderOneMore() {
		const currentList = document.querySelector("#card-list");
		const cardsHTMLList = [`${currentList.innerHTML}`];
		const CardHtml = createCardHtml();

		cardsHTMLList.push(CardHtml);

		const cardsHtml = cardsHTMLList.join("\n");

		const cardsList = document.querySelector("#card-list");
		cardsList.innerHTML = cardsHtml;
	}
}

const createCardHtml = () => {
	return `
  <li class="card">
  <div class="card__upper">
    <video class="card__upper-video" controls>
      <source src="./assets/video_florence.mp4" type="video/mp4" />
    </video>
    <i class="far fa-heart fa-2x card__upper-heart"></i>
    <i class="far fa-share-square fa-2x card__upper-share"></i>
  </div>
  <div class="card__lower">
    <h1 class="card__lower-header">Monuments in Florence</h1>
    <p class="card__lower-body">
      Creating content isn't always a walk in the park. (In fact, it can
      sometimes feel more like trying to swim against the current.) While
      other parts of business and marketing are becoming increasingly
      automated, content creation is still a very manual job. That being
      said, there are plenty of tools out there to make creating content
    </p>
    <button class="button button-playpause card__lower-button">
      View The Video
    </button>
  </div>
</li>`;
};
