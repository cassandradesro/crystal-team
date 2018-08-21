var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<h3 class="healing-crystals">Healing Crystals</h3> 

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

			<div class="dotted-circle-border">
				
			</div>

			<div class="kaleidoscope-images">
				<img src="" class="active rose kaleidoscope">
				<img src="" class="amethyst kaleidoscope">
				<img src="" class="** kaleidoscope">
				<img src="" class="** kaleidoscope">
				<img src="" class="citrine kaleidoscope">
				<img src="" class="red kaleidoscope">
			</div>

			<div class="circles">
				<div class="active rose circle"></div>
				<div class="amethyst circle"></div>
				<div class="** circle"></div>
				<div class="** circle"></div>
				<div class="citrine circle"></div>
				<div class="red circle"></div>
			</div>
			
			<div class="crystal-titles">
				<h1 class="active">Rose Quartz</h1>
				<h1>Red Jasper</h1>
				<h1>Citrine</h1>
				<h1>Amethyst</h1>
				<h1>**</h1>
				<h1>**</h1>
			</div>

			<a href=""><img src="" class="checkout"></a>


			<router-link></router-link>

		</div>
	`,
	props: ["message"]

})