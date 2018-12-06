var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `

	<section class="page" v-bind:style="{ backgroundColor: crystal.backgroundColor, backgroundImage: crystal.backgroundTexture }">
	<nav ref="navRef">
			<router-link to="/">
				<span class="circle"></span>
				<p>home</p>
			</router-link>
		
			<router-link to="/amethyst">
				<span class="circle"></span>
				<p>amethyst</p>

			</router-link>
		
			<router-link to="/citrine">
				<span class="circle"></span>
				<p>citrine</p>	
			</router-link>
		
		
			<router-link to="/jasper">
				<span class="circle"></span>
				<p>jasper</p>
			</router-link>
		
		
			<router-link to="/greenfluorite">
				<span class="circle"></span>
				<p>green fluorite</p>

			</router-link>
		
		
			<router-link to="/rosequartz">
				<span class="circle"></span>
				<p>rose quartz</p>

			</router-link>
		
		
			<router-link to="/hematite">
				<span class="circle"></span>
				<p>hematite</p>
			</router-link>
		
	</nav>
	<div ref="C1Ref" class="column-1">
		<h1 v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.title}}</h1>
		<h2>{{crystal.subtitle}}</h2>
		<div class="hide-on-desktop column-3">
			
			<ul class="facts">
				<h6 v-bind:style="'color: ' + crystal.homeh1Color">Benefits</h6>
				<li class="fact" v-for="fact in crystal.facts">
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
	<p ref="vTextRef" class="vertical-text">{{crystal.verticalText}}</p>
	<div ref="C2Ref" class="column-2">
		<div @click="prev(1)"  class="hide-on-desktop prev" v-bind:style="'border-color:' + crystal.homeh1Color">
		</div>
		<div class="main">
			<div class="numbers">
				<img class="fade-in" v-for="(numberImage, index) in crystal.numberImages"  v-if="index == crystalSlideshowActive" v-bind:src="numberImage" alt="number">
				<div class="crystals">
					<img class="cryImg fade-in" v-for="(crystalImage, index) in crystal.crystalImages" v-if="index == crystalSlideshowActive" v-bind:src="crystalImage" alt="crystal">
				</div>
			</div>
			
			<ul class="dots">
				<div @click="jump(index)" v-for="(crystalImage, index) in crystal.crystalImages" v-bind:style="(index == crystalSlideshowActive)?'border: 3px solid ' + crystal.homeh1Color : '' " ></div>
			</ul>
			<p class="price" v-bind:style="'color: ' + crystal.homeh1Color">{{crystal.price}}</p>
		</div>
		<div @click="next(1)" class="hide-on-desktop next" v-bind:style="'border-color:' + crystal.homeh1Color">
		</div>
	</div> <!--function module to updates numbers, crystals and dots simultaneously-->	
	<div @click="addItem" class="add-button hide-on-desktop" v-bind:style="'background-color: ' + crystal.backgroundColor">add</div> <!--position absolute-->
	<div ref="C3Ref" class="column-3">
		<p class="hide-on-desktop">{{crystal.description}}</p>
		<ul class="hide-on-mobile facts">
			<h6 v-bind:style="'color: ' + crystal.homeh1Color">Benefits</h6>
			<li class="fact" v-for="fact in crystal.facts">
				{{fact}}
			</li>	
		</ul>
	</div>
	<div @click="addItem" class="add-button hide-on-mobile" v-bind:style="'background-color: ' + crystal.backgroundColor">add</div> <!--position absolute-->
	
</section>
	`,
	mounted: function() {
		console.log("right when the component is created");
		console.log( this.$refs.numberCrystRef );
		console.log( this.$refs.kaleidoImgsRef );

		let C1 = this.$refs.C1Ref;
		let C2 = this.$refs.C2Ref;
		let C3 = this.$refs.C3Ref;
		let nav = this.$refs.navRef;

		// let titleC1 = this.$refs.titleC1Ref;
		// let title2C1 = this.$refs.titleTwoC1Ref;
		// let chakraC1 = this.$refs.chakraC1Ref;
		// let paraC1 = this.$refs.paraC1Ref;

		// let d1C3 = this.$refs.d1C3Ref;
		// let d2C3 = this.$refs.d2C3Ref;
		// let d3C3 = this.$refs.d3C3Ref;
		// let d4C3 = this.$refs.d4C3Ref;
		// let d5C3 = this.$refs.d5C3Ref;

		// let factsC3 = this.$refs.factsC3Ref;

		// let f1C3 = this.$refs.f1C3Ref;
		// let f2C3 = this.$refs.f2C3Ref;
		// let f3C3 = this.$refs.f3C3Ref;
		// let f4C3 = this.$refs.f4C3Ref;
		// let f5C3 = this.$refs.f5C3Ref;

		// let C1 = this.$refs.C1Ref;
		// let C3 = this.$refs.C3Ref;

		// let logoC = this.$refs.logoCRef;
		// let checkoutC = this.$refs.checkoutCRef;
		// let addC = this.$refs.addCRef;
	
		
	
		let tl = new TimelineMax();

		tl
			.from(C1, 0.3, {y:15, autoAlpha:0, ease:Power1.easeOut}, '+=0.25')
			.from(C2, 0.3, {y:15, autoAlpha:0, ease:Power1.easeOut}, '+=0.25')
			.from(C3, 0.3, {y:15, autoAlpha:0, ease:Power1.easeOut}, '+=0.25')
			.from(nav, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, '+=0.25')
	
	},
	data: () => {
		return {
			crystalSlideshowActive: 0,
			intervalID: null,
			hoverState: false,
		}
	},
	created: function() {
		// if (window.innerWidth < 768) return; //this code prevents the function from running on mobile
		this.intervalID = setInterval(() => {
			console.log("slide changed:" )
			let tl = new TimelineMax()
				tl.to(".fade-in", .5, {opacity: 0})
				tl.call(() => {
					this.crystalSlideshowActive ++;
					if (this.crystalSlideshowActive > this.crystal.crystalImages.length - 1){
						this.crystalSlideshowActive = 0;
					}
				})
				tl.to(".fade-in", .5, {opacity: 1}) 
		}, 5500)

	},
	
	methods: {

	    jump(index) {
			console.log("jump: ", index)
				clearInterval(this.intervalID)
				let tl = new TimelineMax()
				tl.to(".fade-in", 0.5, {opacity: 0})
				tl.call(() => {
					this.crystalSlideshowActive = index;
				})
				tl.to(".fade-in", 0.5, {opacity: 1}) 
				
	    	

	    },
	    next(amount){
	    	console.log("next")
			clearInterval(this.intervalID)
			let tl = new TimelineMax()
			tl.to(".fade-in", .5, {opacity: 0})
			tl.call(() => {
				this.crystalSlideshowActive ++;
    			if (this.crystalSlideshowActive > this.crystal.crystalImages.length - 1){
    				this.crystalSlideshowActive = 0;
    			}
			})
			tl.to(".fade-in", .5, {opacity: 1})
	    },
	    prev(amount){
	    	console.log("prev")
			clearInterval(this.intervalID)
			let tl = new TimelineMax()
			tl.to(".fade-in", .5, {opacity: 0})
			tl.call(() => {
				this.crystalSlideshowActive --;
				if (this.crystalSlideshowActive < 0){
					this.crystalSlideshowActive = this.crystal.crystalImages.length - 1;
				}
			})
			tl.to(".fade-in", .5, {opacity: 1})
		},
		addItem(){
			let selectedItem = {
				selectedCrystalName: this.crystal.title + " #" + ((this.crystalSlideshowActive)+(1)), 
				selectedCrystal: this.crystal.crystalImages[ this.crystalSlideshowActive ],
				selectedPrice: this.crystal.price,
				selectedCrystalCount: 1
			}
			// console.log('selectedItem', selectedItem)
			
			console.log('selected crystal & price: ', selectedItem)
			this.$emit('additemtocart', selectedItem)
		}
	}
})

















