console.log(`Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, 
	Cassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt`)

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
		{ path: '/crystal1', component: Crystal1Component },
		// { path: '/crystal2', component: Crystal2Component },
		// { path: '/crystal3', component: Crystal3Component },
		// { path: '/crystal4', component: Crystal4Component },
		// { path: '/crystal5', component: Crystal5Component },
		// { path: '/crystal6', component: Crystal6Component },
	]
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
	},
})