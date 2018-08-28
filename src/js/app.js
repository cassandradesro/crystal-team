console.log(`Hello World from app.js! Crystal Teams Project co-developed by Erin Kahn, 
	Cassandra Desrosiers, and Kat Sudakova. Designed by Gwynn Prewitt`)


let crystals = {
	rosequartz: {
		title: "Rose Quartz",
		homeh1Color: '#d74b62',
		homeTextColor: '#d74b62',
		homeKaleidoscope: ''
	},
	amethyst: {
		title: "Amethyst",
		subtitle: 'the "intuitive eye"',
		chakraName: "Sahasrara",
		chakraNickname: "Crown Chakra", 
		description: "Lorem ipsum dolor sit amet, con enim, exercitationem quibusdam similique porro est voluptatem impedit deserunt natus numquam, asperiores voluptates consequuntur!",
		verticalText: "oxide mineral",
		homeh1Color: '#4b365a',
		homeTextColor: '#4b365a',
		homeKaleidoscope: ''
	},
	citrine: {
		subtitle: 'the "intuitive eye"',
		chakraName: "Sahasrara",
		chakraNickname: "Crown Chakra", 
		description: "Lorem ipsum dolor sit amet, con enim, exercitationem quibusdam similique porro est voluptatem impedit deserunt natus numquam, asperiores voluptates consequuntur!",
		verticalText: "oxide mineral",
		title: "Citrine",
		homeh1Color: '#fbc75c',
		homeTextColor: '#fbc75c',
		homeKaleidoscope: ''
	},
	jasper: {
		title: "Red Jasper",
		homeh1Color: '#901b00',
		homeTextColor: '#901b00',
		homeKaleidoscope: '',
		
	},
	greenfluorite: {
		title: "Green Fluorite",
		homeh1Color: 'green',
		homeTextColor: 'green',
		homeKaleidoscope: ''
	},
	hematite: {
		title: "Hematite",
		homeh1Color: 'rgb(68, 68, 68)',
		homeTextColor: 'rgb(68, 68, 68)',
		homeKaleidoscope: ''
	}
}

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent, props: { crystals: crystals } },
		{ path: '/amethyst', component: CrystalComponent, props: { crystal: crystals.amethyst } },
		{ path: '/citrine', component: CrystalComponent, props: { crystal: crystals.citrine } },
		{ path: '/jasper', component: CrystalComponent, props: { crystal: crystals.jasper } },
		{ path: '/rosequartz', component: CrystalComponent, props: { crystal: crystals.rosequartz } },
		{ path: '/greenfluorite', component: CrystalComponent, props: { crystal: crystals.greenfluorite } },
		{ path: '/hematite', component: CrystalComponent, props: { crystal: crystals.hematite } },
	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		message: "Hey Y'all!",
		color: "red",
		cart: []
	}
})
