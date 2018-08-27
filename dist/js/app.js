'use strict';

console.log('Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, \n\tCassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt');

var router = new VueRouter({
	routes: [{ path: '', component: HomeComponent }, { path: '/crystal1', component: Crystal1Component }]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		message: "Hey Y'all!",
		color: "red"
		// home page loops: 
		// loop through nav items
		// loop through kaleidoskope imgs
		//loop through crystal titles
		// loop through text color
	}
});
//# sourceMappingURL=app.js.map
