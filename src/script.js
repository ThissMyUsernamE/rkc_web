import loadCSS from "./utils/load-css.js";
loadCSS('./styles/modern-normalise.css');
loadCSS('./styles/style.css');
loadCSS('./styles/components/header.css');
loadCSS('./styles/components/hero.css');
loadCSS('./styles/components/mobile-nav.css');
loadCSS('./styles/components/footer.css');
loadCSS('./styles/utils.css');


import darkMode from "./utils/dark-mode.js";
import mobileNav from "./utils/mobile-nav.js";

darkMode();
mobileNav();

