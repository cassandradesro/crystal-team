"use strict";

console.log();
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: "\n\n\t\t<section class=\"page\" v-bind:style=\"{ backgroundColor: crystal.backgroundColor, backgroundImage: crystal.backgroundTexture }\">\n\t\t\t<a href=\"javascript:;\"><img class=\"bag-icon\" src=\"dist/img/bag.png\"></a>\n\n\t\t\t<nav>\n\t\t\t\t<router-link to=\"/\"><span class=\"nav-home circle\"></span></router-link>\n\n\t\t\t\t<router-link to=\"/amethyst\"><span class=\"nav-a circle\"></span></router-link>\n\t\t\t\t<router-link to=\"/citrine\"><span class=\"nav-c circle\"></span></router-link>\n\t\t\t\t<router-link to=\"/jasper\"><span class=\"nav-j circle\"></span></router-link>\n\t\t\t\t<router-link to=\"/greenfluorite\"><span class=\"nav-f circle\"></span></router-link>\n\t\t\t\t<router-link to=\"/rosequartz\"><span class=\"nav-r circle\"></span></router-link>\n\t\t\t\t<router-link to=\"/hematite\"><span class=\"nav-h circle\"></span></router-link>\n\t\t\t</nav>\n\n\t\t\t<div class=\"column-1\">\n\t\t\t\t<h1 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.title}}</h1>\n\t\t\t\t<h2>{{crystal.subtitle}}</h2>\n\t\t\t\t<div class=\"hide-on-desktop column-3\">\n\t\t\t\t\t\n\t\t\t\t\t<ul class=\"facts\">\n\t\t\t\t\t\t<li class=\"fact\" v-for=\"fact in crystal.facts\">\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t\t{{fact}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"chakras\">\n\t\t\t\t\t<div class=\"chakra-area\">\n\t\t\t\t\t\t<h3>{{crystal.chakraName}}</h3>\n\t\t\t\t\t\t<img class=\"chakra-shape\" v-bind:src=\"crystal.chakraImage\" alt=\"chakra shape\">\n\t\t\t\t\t\t<h4 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.chakraNickname}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"chakra-area\" v-if=\"crystal.chakra2Name\">\n\t\t\t\t\t\t<h3>{{crystal.chakra2Name}}</h3>\n\t\t\t\t\t\t<img class=\"chakra-shape\" v-bind:src=\"crystal.chakra2Image\" alt=\"chakra shape\">\n\t\t\t\t\t\t<h4 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.chakra2Nickname}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"hide-on-mobile\">{{crystal.description}}</p>\n\t\t\t</div>\n\t\t\t<p class=\"vertical-text\">{{crystal.verticalText}}</p>\n\t\t\t<div class=\"column-2\">\n\n\t\t\t\t<div @click=\"prev(1)\"  class=\"hide-on-desktop prev\" v-bind:style=\"'border-color:' + crystal.homeh1Color\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main\">\n\t\t\t\t\t<div class=\"numbers\">\n\t\t\t\t\t\t<img v-for=\"(numberImage, index) in crystal.numberImages\"  v-if=\"index == crystalSlideshowActive\" v-bind:src=\"numberImage\" alt=\"number one\">\n\t\t\t\t\t\t<div class=\"crystals\">\n\t\t\t\t\t\t\t<img v-for=\"(crystalImage, index) in crystal.crystalImages\" v-if=\"index == crystalSlideshowActive\" v-bind:src=\"crystalImage\" alt=\"crystal\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ul class=\"dots\">\n\t\t\t\t\t\t<div v-for=\"(crystalImage, index) in crystal.crystalImages\" v-bind:style=\"(index == crystalSlideshowActive)?'border: 2px solid ' + crystal.homeh1Color : '' \" v-on:click=\"jump(index)\" ></div>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p class=\"price\" v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.price}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div @click=\"next(1)\" class=\"hide-on-desktop next\" v-bind:style=\"'border-color:' + crystal.homeh1Color\">\n\t\t\t\t</div>\n\t\t\t</div> <!--function module to updates numbers, crystals and dots simultaneously-->\t\n\t\t\t<div class=\"add-button hide-on-desktop\" v-bind:style=\"'background-color: ' + crystal.backgroundColor\">add</div> <!--position absolute-->\n\n\t\t\t<div class=\"column-3\">\n\t\t\t\t<p class=\"hide-on-desktop\">{{crystal.description}}</p>\n\t\t\t\t<div class=\"hide-on-mobile  bullets\">\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"hide-on-mobile facts\">\n\t\t\t\t\t<li class=\"fact\" v-for=\"fact in crystal.facts\">\n\t\t\t\t\t\t{{fact}}\n\t\t\t\t\t</li>\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"add-button hide-on-mobile\" v-bind:style=\"'background-color: ' + crystal.backgroundColor\">add</div> <!--position absolute-->\n\t\t\t\n\t\t</section>\n\t",
	data: function data() {
		return {
			crystalSlideshowActive: 0,
			intervalID: null
		};
	},
	created: function created() {
		var _this = this;

		// if (window.innerWidth < 768) return; //this code prevents the function from running on mobile
		this.intervalID = setInterval(function () {
			console.log("slide changed:");
			_this.crystalSlideshowActive++;
			if (_this.crystalSlideshowActive > _this.crystal.crystalImages.length - 1) {
				_this.crystalSlideshowActive = 0;
			}
		}, 8000);
	},
	methods: {
		jump: function jump(index) {
			console.log("jump: ", index);
			clearInterval(this.intervalID);
			this.crystalSlideshowActive = index;
		},
		next: function next(amount) {
			console.log("next");
			clearInterval(this.intervalID);
			this.crystalSlideshowActive++;
			if (this.crystalSlideshowActive > this.crystal.crystalImages.length - 1) {
				this.crystalSlideshowActive = 0;
			}
		},
		prev: function prev(amount) {
			console.log("prev");
			clearInterval(this.intervalID);
			this.crystalSlideshowActive--;
			if (this.crystalSlideshowActive < 0) {
				this.crystalSlideshowActive = this.crystal.crystalImages.length - 1;
			}
		}
	}
});
//# sourceMappingURL=CrystalComponent.js.map
