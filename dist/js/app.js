"use strict";

console.log("Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, \n\tCassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt");

var crystals = {
	amethyst: {
		color: "purple",
		title: "Amethyst"
	},
	citrine: {
		color: "orange",
		title: "citrine"
	}
};

var router = new VueRouter({
	routes: [{ path: '', component: HomeComponent }, { path: '/amethyst', component: CrystalComponent, props: { crystal: crystals.amethyst } }, { path: '/citrine', component: CrystalComponent, props: { crystal: crystals.citrine } }]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		cart: []
	}
});
//# sourceMappingURL=app.js.map
