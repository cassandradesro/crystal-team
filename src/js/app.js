console.log(`Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, 
	Cassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt`)


let crystals = {
	amethyst: {
		title: "Amethyst",
		subtitle: 'the "intuitive eye"',
		chakraName: "Sahasrara",
		chakraNickname: "Crown Chakra", 
		description: "Lorem ipsum dolor sit amet, con enim, exercitationem quibusdam similique porro est voluptatem impedit deserunt natus numquam, asperiores voluptates consequuntur!"
		verticalText: "oxide mineral"
	},
	citrine: {
		title: "citrine",
		subtitle: 'the "intuitive eye"',
		chakraName: "Sahasrara",
		chakraNickname: "Crown Chakra", 
		description: "Lorem ipsum dolor sit amet, con enim, exercitationem quibusdam similique porro est voluptatem impedit deserunt natus numquam, asperiores voluptates consequuntur!"
		verticalText: "oxide mineral"
	},
	jasper: {
		title: "Red Jasper"
	},
	rosequartz: {
		title: "Rose Quartz"
	},
}

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
		{ path: '/amethyst', component: CrystalComponent, props: { crystal: crystals.amethyst } },
		{ path: '/citrine', component: CrystalComponent, props: { crystal: crystals.citrine } },
		{ path: '/jasper', component: CrystalComponent, props: { crystal: crystals.jasper } },
		{ path: '/rosequartz', component: CrystalComponent, props: { crystal: crystals.rosequartz } },

	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		cart: []
	},
})
