import "./sass/main.scss";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import MoveTo from "../node_modules/moveto/src/moveTo";
import Modal from "./modules/Modal";

const mobileMenu = new MobileMenu();
mobileMenu.events();

const features = new RevealOnScroll(".features__container", "85%");
features.hideInit();
features.createWayPoints();

const testimonials = new RevealOnScroll(".card", "60%");
testimonials.hideInit();
testimonials.createWayPoints();

const stickyHeader = new StickyHeader();
stickyHeader.createHeaderWaypoint();
stickyHeader.createPageSectionWaypoints();

const modal = new Modal();
modal.events();

document.addEventListener("DOMContentLoaded", function() {
	const easeFunctions = {
		easeInQuad: function(t, b, c, d) {
			t /= d;
			return c * t * t + b;
		},
		easeOutQuad: function(t, b, c, d) {
			t /= d;
			return -c * t * (t - 2) + b;
		}
	};
	const moveTo = new MoveTo(
		{
			ease: "easeInQuad"
		},
		easeFunctions
	);
	const triggers = Array.from(document.querySelectorAll(".js-trigger"));
	triggers.forEach(el => {
		moveTo.registerTrigger(el);
	});
});
