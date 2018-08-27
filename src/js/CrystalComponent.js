console.log()
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `
		<section class="page">
			<!--display flex on .page, with flex-direction: row-->

			<img class="bag-icon" src="" alt="shopping bag icon"> <!--position absolute-->
			<p class="vertical-text">oxide mineral</p> <!--position absolute-->

			<div class="column-1">
				<h1>{{crystal.title}}</h1>
				<h2>the "lorem ipsum"</h2>
				<div class="chakra-area">
					<h3>Sahasrara</h3>
					<img class="chakra-shape" src="dist/img/chakras/crown-chakra.png" alt="chakra shape">
					<h4>Crown Chakra</h4>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officiis similique nihil voluptatum sapiente qui.</p>
			</div>

			<div class="column-2">
				<div class="numbers">
					<img class="active number number-one" src="dist/img/numbers/number-1.png" alt="number one">
					<img class="number number-two" src="" alt="number two">
					<img class="number number-three" src="" alt="number three">
					<img class="number number-four" src="" alt="number four">
				</div>
				<div class="crystals">
					<img class="active crystal crystal-one" src="dist/img/amethyst/amethyst-rock-1.png" alt="crystal">
					<img class="crystal crystal-two" src="" alt="crystal">
					<img class="crystal crystal-three" src="" alt="crystal">
					<img class="crystal crystal-four" src="" alt="crystal">
				</div>
				<div class="dots">
					<div class="active dot dot-one"></div>
					<div class="dot dot-two"></div>
					<div class="dot dot-three"></div>
					<div class="dot dot-four"></div>
				</div>
			</div> <!--function module to updates numbers, crystals and dots simultaneously-->
					
			<div class="column-3">
				<div class="bullets">
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
				</div>
				<!--put border-left on the .facts div then add margin-left (or padding-left) until it crosses through center of bullets-->
				<div class="facts">
					<p class="fact">Lorem ipsum donum ab t. Sit, voluptate!</p>
					<p class="fact">Lorem ipsum doloppe offrem?</p>
					<p class="fact">Loreues comesse facilis aliquam neque!</p>
					<p class="fact">Lorem ipsum dla fugaptatem repellendus porro.</p>
					<p class="fact">Lorem ipsum doloaonsectmagni doloribus deserunt.</p>
				</div>
			</div>

			<div class="add-button">add</div> <!--position absolute-->
			
		</section>
	`

})