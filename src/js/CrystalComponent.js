console.log()
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `

		<section class="page" v-bind:style="{ backgroundColor: crystal.backgroundColor, backgroundImage: crystal.backgroundTexture }">
			<a href="javascript:;"><img class="bag-icon" src="dist/img/bag.png"></a>

			<nav>
				<router-link to="/"><span class="nav-home circle"></span></router-link>

				<router-link to="/amethyst"><span class="nav-a circle"></span></router-link>
				<router-link to="/citrine"><span class="nav-c circle"></span></router-link>
				<router-link to="/jasper"><span class="nav-j circle"></span></router-link>
				<router-link to="/greenfluorite"><span class="nav-f circle"></span></router-link>
				<router-link to="/rosequartz"><span class="nav-r circle"></span></router-link>
				<router-link to="/hematite"><span class="nav-h circle"></span></router-link>
			</nav>

			<div class="column-1">
				<h1 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.title}}</h1>
				<h2>{{crystal.subtitle}}</h2>
				<div class="hide-on-desktop column-3">
					
					<ul class="facts">
						<li class="fact" v-for="fact in crystal.facts">
						<div class="bullet"></div>
						{{fact}}
						</li>
					
					</ul>
				</div>
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
				<p class="hide-on-mobile">{{crystal.description}}</p>
			</div>
			<p class="vertical-text">{{crystal.verticalText}}</p>
			<div class="column-2">

				<div @click="prev(1)"  class="hide-on-desktop prev" v-bind:style="'border-color:' + crystal.homeh1Color">
				</div>
				<div class="main">
					<div class="numbers">
						<img v-for="(numberImage, index) in crystal.numberImages"  v-if="index == crystalSlideshowActive" v-bind:src="numberImage" alt="number one">
						<div class="crystals">
							<img v-for="(crystalImage, index) in crystal.crystalImages" v-if="index == crystalSlideshowActive" v-bind:src="crystalImage" alt="crystal">
						</div>
					</div>
					
					<ul class="dots">
						<div v-for="(crystalImage, index) in crystal.crystalImages" v-bind:style="(index == crystalSlideshowActive)?'border: 2px solid ' + crystal.homeh1Color : '' " v-on:click="jump(index)" ></div>

					</ul>
					<p class="price" v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.price}}</p>
				</div>
				<div @click="next(1)" class="hide-on-desktop next" v-bind:style="'border-color:' + crystal.homeh1Color">
				</div>
			</div> <!--function module to updates numbers, crystals and dots simultaneously-->	
			<div class="add-button hide-on-desktop" v-bind:style="'background-color: ' + crystal.backgroundColor">add</div> <!--position absolute-->

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

			<div class="add-button hide-on-mobile" v-bind:style="'background-color: ' + crystal.backgroundColor">add</div> <!--position absolute-->
			
		</section>
	`,
	data: () => {
		return {
			crystalSlideshowActive: 0,
			intervalID: null
		}
	},
	created: function() {
		// if (window.innerWidth < 768) return; //this code prevents the function from running on mobile
		this.intervalID = setInterval(() => {
			console.log("slide changed:" )
			this.crystalSlideshowActive ++;
			if (this.crystalSlideshowActive > this.crystal.crystalImages.length - 1){
				this.crystalSlideshowActive = 0;
			}
		}, 8000)

	},
	methods: {
	    jump(index) {
	    	console.log("jump: ", index)
	    	clearInterval(this.intervalID)
	      	this.crystalSlideshowActive = index

	    },
	    next(amount){
	    	console.log("next")
	    	clearInterval(this.intervalID)
	    	this.crystalSlideshowActive ++;
    		if (this.crystalSlideshowActive > this.crystal.crystalImages.length - 1){
    			this.crystalSlideshowActive = 0;
    		}
	    },
	    prev(amount){
	    	console.log("prev")
	    	clearInterval(this.intervalID)
	    	this.crystalSlideshowActive --;
    		if (this.crystalSlideshowActive < 0){
    			this.crystalSlideshowActive = this.crystal.crystalImages.length - 1;
    		}
	    }
	}
})

















