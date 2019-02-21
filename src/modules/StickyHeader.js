import waypoints from "waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.siteHeader = document.querySelector(".header__large-screen");
		this.trigger = document.querySelector(".large-hero__subtitle");
		this.logo = document.querySelector(".header__img");
		this.sections = Array.from(document.querySelectorAll(".page-section"));
		this.largeHeroParagraph = document.querySelector(
			".large-hero__paragraph"
		);
		this.headerLinks = Array.from(
			document.querySelectorAll(".header__large-screen a")
		);
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

	createPageSectionWaypoints() {
		const self = this;
		this.sections.forEach(el => {
			new Waypoint({
				element: self.largeHeroParagraph,
				handler: () => {
					self.headerLinks.forEach(el => {
						el.classList.remove("is-current-link");
					});
				}
			});

			new Waypoint({
				element: el,
				handler: direction => {
					if (direction === "down") {
						let matchingHeaderLink = el.getAttribute(
							"data-matching-link"
						);
						self.headerLinks.forEach(el => {
							el.classList.remove("is-current-link");
						});
						document
							.querySelector(matchingHeaderLink)
							.classList.add("is-current-link");
					}
				},
				offset: "30%"
			});

			new Waypoint({
				element: el,
				handler: direction => {
					if (direction === "up") {
						let matchingHeaderLink = el.getAttribute(
							"data-matching-link"
						);
						self.headerLinks.forEach(el => {
							el.classList.remove("is-current-link");
						});
						document
							.querySelector(matchingHeaderLink)
							.classList.add("is-current-link");
					}
				},
				offset: "-35%"
			});
		});
	}
}

export default StickyHeader;
