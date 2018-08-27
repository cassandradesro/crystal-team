var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<a href="javascript:;"><img src="dist/img/bag.png" class="checkout"></a>
			
			<h1 class="crystal-titles">Rose Quartz</h1>

			<h3 class="healing-crystals">Healing Crystals</h3> 
				
			<div class="max-container">

				<div class="kaleidoscope-images">
					<img src="dist/img/home/rose-kaleidoscope.png" class="rose kaleidoscope">
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