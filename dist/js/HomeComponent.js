"use strict";

var HomeComponent = Vue.component("home", {
	template: "\n\t\t<div class=\"home\">\n\n\t\t\t<a href=\"javascript:;\"><img src=\"dist/img/bag.png\" class=\"checkout\"></a>\n\t\t\t\n\t\t\t<div class=\"crystal-titles\" >\n\t\t\t\t<h1 :style=\" 'color: '+crystals[chosenCrystal].homeh1Color \">{{ crystals[chosenCrystal].title }}</h1>\n\t\t\t</div>\n\n\t\t\t<h3 class=\"healing-crystals\">Healing Crystals</h3> \n\t\t\t\t\n\t\t\t<div class=\"max-container\">\n\n\t\t\t\t<div ref=\"kaleidoscopeholder\" class=\"kaleidoscope-images\">\n\t\t\t\t\t<!--<img src=\"dist/img/home/rose-kaleidoscope.png\">-->\n\t\t\t\t\t<div v-for=\"i in 48\" v-bind:class=\"'dot dot'+i\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'amethyst'\">\n\t\t\t\t\t\t\t<router-link to=\"/amethyst\" v-if=\"i == 1\">Amethyst</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'citrine'\">\n\t\t\t\t\t\t\t<router-link to=\"/citrine\" v-if=\"i == 9\">citrine</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'jasper'\">\n\t\t\t\t\t\t\t<router-link to=\"/jasper\" v-if=\"i == 17\">jasper</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'rosequartz'\">\n\t\t\t\t\t\t\t<router-link to=\"/rosequartz\" v-if=\"i == 25\">rose</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'greenfluorite'\">\n\t\t\t\t\t\t\t<router-link to=\"/greenfluorite\" v-if=\"i == 33\">crystal 5</router-link>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div @mouseover=\"chosenCrystal = 'hematite'\">\n\t\t\t\t\t\t\t<router-link to=\"/hematite\" v-if=\"i == 41\">crystal 6</router-link>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"home-text\">\n\t\t\t\t\t<p :style=\" 'color: '+crystals[chosenCrystal].homeTextColor \"> \n\t\t\t\t\t\tCrystals are alive. They connect us to the earth, because they are\n\t\t\t\t\t\ttangible, physical forms that have powerful vibrations.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p :style=\" 'color: '+crystals[chosenCrystal].homeTextColor \">\n\t\t\t\t\t\tThis energy continues to connect with you when you wear them close\n\t\t\t\t\t\tto the skin or place them in your environment. With every thought,\n\t\t\t\t\t\tcrystals pick up on your unique vibrational energy and amplify the\n\t\t\t\t\t\tpositive vibes that you're cultivating.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t</div>\n\t",
	props: ["crystals"],
	data: function data() {
		return {
			chosenCrystal: "rosequartz",
			kaleidoscope: null
		};
	},
	watch: {
		chosenCrystal: function chosenCrystal() {
			this.kaleidoscope.image.src = this.crystals[this.chosenCrystal].homeKaleidoscope;
		}
	},
	mounted: function mounted() {
		this.kaleidoscope = makeKaleidoscope(this.$refs.kaleidoscopeholder);
	}
});
//# sourceMappingURL=HomeComponent.js.map
