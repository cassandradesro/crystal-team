var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<a href="javascript:;"><img src="dist/img/bag.png" class="checkout"></a>
			
			<h1 class="crystal-titles">Rose Quartz</h1>

			<h3 class="healing-crystals">Healing Crystals</h3> 
				
			<div class="max-container">

				<div class="kaleidoscope-images">
					<img src="dist/img/home/rose-kaleidoscope.png" class="rose kaleidoscope">
					<div v-for="i in 48" v-bind:class="'dot dot'+i">
						<router-link to="/amethyst" v-if="i == 1">Amethyst</router-link>
						<router-link to="/citrine" v-if="i == 9">citrine</router-link>
						<router-link to="/jasper" v-if="i == 17">jasper</router-link>
						<router-link to="/rosequartz" v-if="i == 25">rose</router-link>
						<router-link to="/amethyst" v-if="i == 33">crystal 5</router-link>
						<router-link to="/amethyst" v-if="i == 41">crystal 6</router-link>
					</div>
				</div>

				<div class="home-text">
					<p>
						Crystals are alive. They connect us to the earth, because they are
						tangible, physical forms that have powerful vibrations.
					</p>
					<p>
						This energy continues to connect with you when you wear them close
						to the skin or place them in your environment. With every thought,
						crystals pick up on your unique vibrational energy and amplify the
						positive vibes that you're cultivating.
					</p>
				</div>
			</div>

			<router-link></router-link>

		</div>
	`,
	props: ["message"],


})