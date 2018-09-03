"use strict";

var HomeComponent = Vue.component("home", {
	template: "\n\t\t<div class=\"home\">\n\n\t\t\t<a href=\"javascript:;\"><img src=\"dist/img/home/bagPurple.png\" ref=\"checkoutRef\" class=\"checkout\"></a>\n\t\t\t\n\t\t\t<div class=\"crystal-titles\" >\n\t\t\t\t<h1 ref=\"titlesRef\" :style=\" 'color: '+crystals[chosenCrystal].homeh1Color \">{{ crystals[chosenCrystal].title }}</h1>\n\t\t\t</div>\n\n\t\t\t<h3 ref=\"logoRef\" class=\"healing-crystals\">Healing Crystals</h3> \n\t\t\t\t\n\t\t\t<div class=\"max-container\">\n\n\t\t\t\t<div class=\"kaleidoscope-images\">\n\t\t\t\t\t<img src=\"dist/img/home/rose-kaleidoscope.png\" ref=\"kaleidoImgsRef\" class=\"rose kaleidoscope\">\n\t\t\t\t\t<div v-for=\"i in 48\" v-bind:class=\"'dot dot'+i\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'amethyst'\">\n\t\t\t\t\t\t\t<router-link to=\"/amethyst\" v-if=\"i == 1\">Amethyst</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'citrine'\">\n\t\t\t\t\t\t\t<router-link to=\"/citrine\" v-if=\"i == 9\">citrine</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'jasper'\">\n\t\t\t\t\t\t\t<router-link to=\"/jasper\" v-if=\"i == 17\">jasper</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'rosequartz'\">\n\t\t\t\t\t\t\t<router-link to=\"/rosequartz\" v-if=\"i == 25\">rose</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'greenfluorite'\">\n\t\t\t\t\t\t\t<router-link to=\"/greenfluorite\" v-if=\"i == 33\">crystal 5</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'hematite'\">\n\t\t\t\t\t\t\t<router-link to=\"/hematite\" v-if=\"i == 41\">crystal 6</router-link>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div ref=\"homeTextRef\" class=\"home-text\">\n\t\t\t\t\t<p ref=\"paraOneRef\" :style=\" 'color: '+crystals[chosenCrystal].homeTextColor \"> \n\t\t\t\t\t\tCrystals are alive. They connect us to the earth, because they are\n\t\t\t\t\t\ttangible, physical forms that have powerful vibrations.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p ref=\"paraTwoRef\" :style=\" 'color: '+crystals[chosenCrystal].homeTextColor \">\n\t\t\t\t\t\tThis energy continues to connect with you when you wear them close\n\t\t\t\t\t\tto the skin or place them in your environment. With every thought,\n\t\t\t\t\t\tcrystals pick up on your unique vibrational energy and amplify the\n\t\t\t\t\t\tpositive vibes that you're cultivating.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t</div>\n\t",
	props: ["crystals"],
	data: function data() {
		return {
			chosenCrystal: "rosequartz"
		};
	},
	methods: {},
	mounted: function mounted() {
		console.log("right when the component is created");
		console.log(document.querySelector('.home-text'));
		console.log(this.$refs.homeTextRef);
		console.log(this.$refs.kaleidoImgsRef);
		var kaliedo = this.$refs.kaleidoImgsRef;
		var checkout = this.$refs.checkoutRef;
		var titles = this.$refs.titlesRef;
		var logo = this.$refs.logoRef;
		var homeText = this.$refs.homeTextRef;

		var tl = new TimelineMax();
		tl.from(titles, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }).from(kaliedo, 0.8, { rotation: 720, transformOrigin: '50% 50%', x: -700, autoAlpha: 0, ease: Power1.easeOut }, '+=0.15').from(homeText, 0.2, { y: -15, autoAlpha: 0, ease: Power1.easeOut }).from(logo, 0.1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '+=0.25').from(checkout, 0.1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '+=0.15');
	}
});
//# sourceMappingURL=HomeComponent.js.map
