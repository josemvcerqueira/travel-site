import waypoints from "waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.siteHeader = document.querySelector(".header__large-screen");
		this.trigger = document.querySelector(".large-hero__subtitle");
		this.logo = document.querySelector(".header__img");
	}

	createHeaderWaypoint() {
		const self = this;
		new Waypoint({
			element: self.trigger,
			handler: direction => {
				if (direction === "down") {
					self.siteHeader.classList.add("header__large-screen--dark");
					this.shrinklogo();
				} else {
					self.siteHeader.classList.remove(
						"header__large-screen--dark"
					);
					this.shrinklogo();
				}
			}
		});
	}

	shrinklogo() {
		if (this.siteHeader.classList.contains("header__large-screen--dark")) {
			this.logo.classList.remove("grow");
			this.logo.classList.add("shrink");
		} else {
			this.logo.classList.remove("shrink");
			this.logo.classList.add("grow");
		}
	}
}

export default StickyHeader;
