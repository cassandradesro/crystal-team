var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<a href="javascript:;"><img src="dist/img/home/bagPurple.png" class="checkout"></a>
			
			<div class="crystal-titles" >
				<h1 :style=" 'color: '+crystals[chosenCrystal].homeh1Color ">{{ crystals[chosenCrystal].title }}</h1>
			</div>

			<h3 class="healing-crystals">Healing Crystals</h3> 
				
			<div class="max-container">

				<div ref="kaleidoscopeholder" class="kaleidoscope-images">
					<!--<img src="dist/img/home/rose-kaleidoscope.png">-->
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

				<div class="home-text">
					<p :style=" 'color: '+crystals[chosenCrystal].homeTextColor "> 
						Crystals are alive. They connect us to the earth, because they are
						tangible, physical forms that have powerful vibrations.
					</p>
					<p :style=" 'color: '+crystals[chosenCrystal].homeTextColor ">
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
			chosenCrystal: "rosequartz",
			kaleidoscope: null
		}
	},
	watch: {
		chosenCrystal: function() {
			this.kaleidoscope.image.src = this.crystals[this.chosenCrystal].homeKaleidoscope;
		}
	},
	mounted: function() {
		this.kaleidoscope = makeKaleidoscope( this.$refs.kaleidoscopeholder );
	}
})