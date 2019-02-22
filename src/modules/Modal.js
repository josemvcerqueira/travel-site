class Modal {
	constructor() {
		this.openModalBtn = Array.from(
			document.querySelectorAll(".open-modal")
		);
		this.modal = document.querySelector(".modal");
		this.closeModalBtn = document.querySelector(".modal__close");
		console.log(this.modal);
	}

	openModal() {
		this.modal.classList.add("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.classList.remove("modal--is-visible");
	}

	keyPressHandler(e) {
		if (e.keyCode === 27 || e.which === 27) {
			this.closeModal();
		}
	}

	events() {
		// clickin the open modal button
		this.openModalBtn.forEach(el => {
			el.addEventListener("click", this.openModal.bind(this));
		});

		// clicking the x close modal button
		this.closeModalBtn.addEventListener(
			"click",
			this.closeModal.bind(this)
		);

		// pushes any key
		document.addEventListener("keyup", this.keyPressHandler.bind(this));
	}
}

export default Modal;
