"use strict";

console.log("Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, \n\tCassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt");

var crystals = {
	rosequartz: {
		title: "Rose Quartz"
	},
	amethyst: {
		title: "Amethyst",
		subtitle: 'the "intuitive eye"',
		chakraName: "Sahasrara",
		chakraNickname: "Crown Chakra",
		description: "Lorem ipsum dolor sit amet, con enim, exercitationem quibusdam similique porro est voluptatem impedit deserunt natus numquam, asperiores voluptates consequuntur!",
		verticalText: "oxide mineral"
	},
	citrine: {
		title: "Citrine"
	},
	jasper: {
		title: "Red Jasper"
	},
	greenfluorite: {
		title: "Green Fluorite"
	},
	hematite: {
		title: "Hematite"
	}
};

var router = new VueRouter({
	routes: [{ path: '', component: HomeComponent }, { path: '/amethyst', component: CrystalComponent, props: { crystal: crystals.amethyst } }, { path: '/citrine', component: CrystalComponent, props: { crystal: crystals.citrine } }, { path: '/jasper', component: CrystalComponent, props: { crystal: crystals.jasper } }, { path: '/rosequartz', component: CrystalComponent, props: { crystal: crystals.rosequartz } }, { path: '/greenfluorite', component: CrystalComponent, props: { crystal: crystals.greenfluorite } }, { path: '/hematite', component: CrystalComponent, props: { crystal: crystals.hematite } }]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		message: "Hey Y'all!",
		color: "red",
		cart: []
	}
});
//# sourceMappingURL=app.js.map
