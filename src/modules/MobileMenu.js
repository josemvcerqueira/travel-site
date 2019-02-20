class MobileMenu {
	constructor() {
		this.icon = document.querySelector(".header__checkbox");
		this.content = document.querySelector(".header__nav");
		this.title = document.querySelector(".large-hero__text-content");
	}

	events() {
		this.icon.addEventListener("click", () => {
			if (window.innerWidth < 1100) {
				this.content.classList.toggle("header__nav--is-visible");
				this.title.classList.toggle("margin-top--title");
			}
		});
	}
}

export default MobileMenu;
