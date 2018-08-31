console.log()
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `

		<section class="page" v-bind:style="{ backgroundColor: crystal.backgroundColor, backgroundImage: crystal.backgroundTexture }">

			<!--display flex on .page, with flex-direction: row-->
			<a href="javascript:;"><img class="bag-icon" src="dist/img/bag.png"></a>
 			<!--position absolute-->

			<p class="vertical-text">{{crystal.verticalText}}</p> <!--position absolute-->

			<div class="column-1">
				<h1 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.title}}</h1>
				<h2>{{crystal.subtitle}}</h2>
				<div class="hide-on-desktop column-3">
					<div class="bullets">
						<div class="bullet"></div>
						<div class="bullet"></div>
						<div class="bullet"></div>
						<div class="bullet"></div>
						<div class="bullet"></div>
					</div>
					<ul class="facts">
						<li class="fact" v-for="fact in crystal.facts">
							{{fact}}
						</li>
					
					</ul>
				</div>
				<div class="chakras">
					<div class="chakra-area">
						<h3>{{crystal.chakraName}}</h3>
						<img class="chakra-shape" v-bind:src="crystal.chakraImage[counter]" alt="chakra shape">
						<h4 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.chakraNickname}}</h4>
					</div>
					<div class="chakra-area" v-if="crystal.chakra2Name">
						<h3>{{crystal.chakra2Name}}</h3>
						<img class="chakra-shape" v-bind:src="crystal.chakra2Image[counter]" alt="chakra shape">
						<h4 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.chakra2Nickname}}</h4>
					</div>
				</div>
				<p class="hide-on-mobile">{{crystal.description}}</p>
			</div>
			<div   @click="move(-1)" id="prev" class="hide-on-desktop">
				<span v-bind:style="'color: ' + crystal.homeh1Color"></span>
			</div>
			<div class="column-2">

				<div class="numbers">
					<img class="active number slide" v-if="index == active" v-bind:src="crystal.numberImages[index]" alt="number one">

				</div>
				<div class="crystals">
					<img class="active crystal" v-if="index == active" v-bind:src="crystal.crystalImages[index]" alt="crystal">

				</div>
				<ul class="dots">
					<div v-on:click="jump(index)" v-bind:style="'border-color: ' + crystal.homeh1Color" class="active dot"></div>
					<div v-on:click="jump(index)" v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot "></div>
					<div v-on:click="jump(index)" v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot "></div>
					<div v-on:click="jump(index)" v-bind:style="'border-color: ' + crystal.homeh1Color" class="dot "></div>
				</ul>

			</div> <!--function module to updates numbers, crystals and dots simultaneously-->
			<div  @click="move(1)" id="next" class="hide-on-desktop">
				<span v-bind:style="'color: ' + crystal.homeh1Color"></span>
			</div>		
			<div class="column-3">
				<p class="hide-on-desktop">{{crystal.description}}</p>
				<div class="hide-on-mobile  bullets">
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
					<div class="bullet"></div>
				</div>
				<ul class="hide-on-mobile facts">
					<li class="fact" v-for="fact in crystal.facts">
						{{fact}}
					</li>
					
				</ul>
			</div>

			<div class="add-button" v-bind:style="'background-color: ' + crystal.backgroundColor">add</div> <!--position absolute-->
			
		</section>
	`
	data:{
		slides: 5,
		active: 1,
	},
	methods: {
	    move(amount) {
	      let newActive
	      const newIndex = this.active + amount
	      if (newIndex > this.slides) newActive = 1
	      if (newIndex === 0) newActive = this.slides
	      this.active = newActive || newIndex
	    },
	    jump(index) {
	      this.active = index
	    },
	}
})

















