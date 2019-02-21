import waypoints from "waypoints/lib/noframework.waypoints";

class RevealOnScroll {
	constructor(els, offset) {
		this.reveal = Array.from(document.querySelectorAll(els));
		this.offsetValue = offset;
	}

	hideInit() {
		this.reveal.forEach(el => el.classList.add("reveal-item"));
	}

	createWayPoints() {
		const self = this;
		this.reveal.forEach(el => {
			new Waypoint({
				element: el,
				handler: () => {
					el.classList.add("reveal-item--is-visible");
				},
				offset: self.offsetValue
			});
		});
	}
}

export default RevealOnScroll;
