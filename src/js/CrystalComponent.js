console.log()
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `
		<section class="page" v-bind:style="'backgroundColor: ' + crystal.backgroundColor">
			<!--display flex on .page, with flex-direction: row-->

			<a href="javascript:;"><img class="bag-icon" src="dist/img/bag.png"></a>
 			<!--position absolute-->

			<p class="vertical-text">{{crystal.verticalText}}</p> <!--position absolute-->

			<div class="column-1">
				<h1 class="hide-on-mobile" v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.title}}</h1>
				<h2>{{crystal.subtitle}}</h2>
				<div class="chakras">
					<div class="chakra-area">
						<h3>{{crystal.chakraName}}</h3>
						<img class="chakra-shape" v-bind:src="crystal.chakraImage" alt="chakra shape">
						<h4 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.chakraNickname}}</h4>
					</div>
					<div class="chakra-area" v-if="crystal.chakra2Name">
						<h3>{{crystal.chakra2Name}}</h3>
						<img class="chakra-shape" v-bind:src="crystal.chakra2Image" alt="chakra shape">
						<h4 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.chakra2Nickname}}</h4>
					</div>
				</div>
				<p>{{crystal.description}}</p>
			</div>

			<div class="column-2">
				<div class="numbers">
					<img class="active number number-one" v-bind:src="crystal.number1Image" alt="number one">
					<img class="number number-two" v-bind:src="crystal.number2Image" alt="number two">
					<img class="number number-three" v-bind:src=" crystal.number3Image" alt="number three">
					<img class="number number-four" v-bind:src="crystal.number4Image" alt="number four">
				</div>
				<div class="crystals">
					<img class="active crystal crystal-one" v-bind:src="crystal.crystal1Image" alt="crystal">
					<img class="crystal crystal-two" v-bind:src="crystal.crystal2Image" alt="crystal">
					<img class="crystal crystal-three" v-bind:src="crystal.crystal3Image" alt="crystal">
					<img class="crystal crystal-four" v-bind:src="crystal.crystal4Image" alt="crystal">
				</div>
				<div class="dots">
					<div v-bind:style="'border-color: ' + crystal.homeh1Color" class="active dot dot-one"></div>
					<div v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot dot-two"></div>
					<div v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot dot-three"></div>
					<div v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot dot-four"></div>
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
					<p class="fact">{{crystal.fact1}}</p>
					<p class="fact">{{crystal.fact2}}</p>
					<p class="fact">{{crystal.fact3}}</p>
					<p class="fact">{{crystal.fact4}}</p>
					<p class="fact">{{crystal.fact5}}</p>
				</div>
			</div>

			<div class="add-button" v-bind:style="'backgroundColor: ' + crystal.backgroundColor">add</div> <!--position absolute-->
			
		</section>
	`

})