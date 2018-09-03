var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<a href="javascript:;"><img src="dist/img/home/bagPurple.png" ref="checkoutRef" class="checkout"></a>
			
			<div class="crystal-titles" >
				<h1 ref="titlesRef" :style=" 'color: '+crystals[chosenCrystal].homeh1Color ">{{ crystals[chosenCrystal].title }}</h1>
			</div>

			<h3 ref="logoRef" class="healing-crystals">Healing Crystals</h3> 
				
			<div class="max-container">

				<div class="kaleidoscope-images">
					<img src="dist/img/home/rose-kaleidoscope.png" ref="kaleidoImgsRef" class="rose kaleidoscope">
					<div v-for="i in 48" v-bind:class="'dot dot'+i">
						
						<div @mouseover="chosenCrystal = 'amethyst'">
							<router-link to="/amethyst" v-if="i == 1">Amethyst</router-link>
						</div>
						<div @mouseover="chosenCrystal = 'citrine'">
							<router-link to="/citrine" v-if="i == 9">citrine</router-link>
						</div>
						<div @mouseover="chosenCrystal = 'jasper'">
							<router-link to="/jasper" v-if="i == 17">jasper</router-link>
						</div>
						<div @mouseover="chosenCrystal = 'rosequartz'">
							<router-link to="/rosequartz" v-if="i == 25">rose</router-link>
						</div>
						<div @mouseover="chosenCrystal = 'greenfluorite'">
							<router-link to="/greenfluorite" v-if="i == 33">crystal 5</router-link>
						</div>
						<div @mouseover="chosenCrystal = 'hematite'">
							<router-link to="/hematite" v-if="i == 41">crystal 6</router-link>
						</div>	
					</div>
				</div>

				<div ref="homeTextRef" class="home-text">
					<p ref="paraOneRef" :style=" 'color: '+crystals[chosenCrystal].homeTextColor "> 
						Crystals are alive. They connect us to the earth, because they are
						tangible, physical forms that have powerful vibrations.
					</p>
					<p ref="paraTwoRef" :style=" 'color: '+crystals[chosenCrystal].homeTextColor ">
						This energy continues to connect with you when you wear them close
						to the skin or place them in your environment. With every thought,
						crystals pick up on your unique vibrational energy and amplify the
						positive vibes that you're cultivating.
					</p>
				</div>
			</div>


		</div>
	`,
	props: ["crystals"],
	data: function() {
		return {
			chosenCrystal: "rosequartz"
		}
	},
	methods: {},
	mounted: function() {
		console.log("right when the component is created");
		console.log( document.querySelector('.home-text') );
		console.log( this.$refs.homeTextRef );
		console.log( this.$refs.kaleidoImgsRef );
		let kaliedo = this.$refs.kaleidoImgsRef;
		let checkout = this.$refs.checkoutRef;
		let titles = this.$refs.titlesRef;
		let logo = this.$refs.logoRef;
		let homeText = this.$refs.homeTextRef;

		

		let tl = new TimelineMax();
		tl
			.from(titles, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			.from(kaliedo, 0.8, {rotation: 720, transformOrigin: '50% 50%', x:-700, autoAlpha:0, ease:Power1.easeOut}, '+=0.15')
			.from(homeText, 0.2, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			.from(logo, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.25')
			.from(checkout, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')

	}
})