console.log()
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: `
		<section class="page">
			<!--display flex on .page, with flex-direction: row-->

			<!--position absolute-->
			<p ref="logoCRef" class="vertical-text">oxide mineral</p> <!--position absolute-->

			<div ref="C1Ref" class="column-1">
				<h1 ref="titleC1Ref">{{crystal.title}}</h1>
				<h2 ref="titleTwoC1Ref">the "lorem ipsum"</h2>
				<div ref="chakraC1Ref" class="chakra-area">
					<h3>Sahasrara</h3>
					<img class="chakra-shape" src="dist/img/chakras/crown-chakra.png" alt="chakra shape">
					<h4>Crown Chakra</h4>
				</div>
				<p ref="paraC1Ref">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officiis similique nihil voluptatum sapiente qui.</p>
			</div>

			<div class="column-2">
				<div ref="numberC2Ref" class="numbers">
					<img class="active number number-one" src="dist/img/numbers/number-1.png" alt="number one">
					<img class="number number-two" src="" alt="number two">
					<img class="number number-three" src="" alt="number three">
					<img class="number number-four" src="" alt="number four">
				</div>
				<div ref="imgC2Ref" class="crystals">
					<img class="active crystal crystal-one" src="dist/img/amethyst/amethyst-rock-1.png" alt="crystal">
					<img class="crystal crystal-two" src="" alt="crystal">
					<img class="crystal crystal-three" src="" alt="crystal">
					<img class="crystal crystal-four" src="" alt="crystal">
				</div>
				<div ref="dotsC2Ref" class="dots">
					<div class="active dot dot-one"></div>
					<div class="dot dot-two"></div>
					<div class="dot dot-three"></div>
					<div class="dot dot-four"></div>
				</div>
			</div> <!--function module to updates numbers, crystals and dots simultaneously-->
					
			<div ref="C3Ref" class="column-3">
				<div class="bullets">
					<div ref="d1C3Ref" class="bullet"></div>
					<div ref="d2C3Ref" class="bullet"></div>
					<div ref="d3C3Ref" class="bullet"></div>
					<div ref="d4C3Ref" class="bullet"></div>
					<div ref="d5C3Ref" class="bullet"></div>
				</div>
				<!--put border-left on the .facts div then add margin-left (or padding-left) until it crosses through center of bullets-->
				<div ref="factsC3Ref" class="facts">
					<p ref="f1C3Ref" class="fact">Lorem ipsum donum ab t. Sit, voluptate!</p>
					<p ref="f2C3Ref" class="fact">Lorem ipsum doloppe offrem?</p>
					<p ref="f3C3Ref" class="fact">Loreues comesse facilis aliquam neque!</p>
					<p ref="f4C3Ref" class="fact">Lorem ipsum dla fugaptatem repellendus porro.</p>
					<p ref="f5C3Ref" class="fact">Lorem ipsum doloaonsectmagni doloribus deserunt.</p>
				</div>
			</div>

			<div ref="addCRef" class="add-button" onclick='addItem()'>add</div> <!--position absolute-->
			
		</section>
	`,
	mounted: function() {
		console.log("right when the component is created");
		console.log( this.$refs.numberCrystRef );
		console.log( this.$refs.kaleidoImgsRef );
		let numberC2 = this.$refs.numberC2Ref;
		let imgC2 = this.$refs.imgC2Ref;
		let dotsC2 = this.$refs.dotsC2Ref;

		let titleC1 = this.$refs.titleC1Ref;
		let title2C1 = this.$refs.titleTwoC1Ref;
		let chakraC1 = this.$refs.chakraC1Ref;
		let paraC1 = this.$refs.paraC1Ref;

		let d1C3 = this.$refs.d1C3Ref;
		let d2C3 = this.$refs.d2C3Ref;
		let d3C3 = this.$refs.d3C3Ref;
		let d4C3 = this.$refs.d4C3Ref;
		let d5C3 = this.$refs.d5C3Ref;

		let factsC3 = this.$refs.factsC3Ref;

		let f1C3 = this.$refs.f1C3Ref;
		let f2C3 = this.$refs.f2C3Ref;
		let f3C3 = this.$refs.f3C3Ref;
		let f4C3 = this.$refs.f4C3Ref;
		let f5C3 = this.$refs.f5C3Ref;

		let C1 = this.$refs.C1Ref;
		let C3 = this.$refs.C3Ref;

		let logoC = this.$refs.logoCRef;
		let checkoutC = this.$refs.checkoutCRef;
		let addC = this.$refs.addCRef;
	
		
	
		let tl = new TimelineMax();

		tl
			.from(numberC2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut}, '+=0.25')
			.from(imgC2, 0.8, {rotation: 220, transformOrigin: '50% 50%', y:-700, autoAlpha:0, ease:Power1.easeOut}, '+=0.15')
			.add('imgs-in')

			.from(titleC1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'imgs-in')
			// .from(title2C1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .from(chakraC1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .from(paraC1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			
			.from(C1, 0.2, {x:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.2')
			.from(C3, 0.2, {x:15, autoAlpha:0, ease:Power1.easeOut},'-=0.1')

			// .from(factsC3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.35')

			// .from(d1C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .add('d1')
			// .from(d2C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .add('d2')
			// .from(d3C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .add('d3')
			// .from(d4C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .add('d4')
			// .from(d5C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
			// .add('d5')

			// .from(f1C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'d1-=0.15')
			// .from(f2C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'d2-=0.15')
			// .from(f3C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'d3-=0.15')
			// .from(f4C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'d4-=0.15')
			// .from(f5C3, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'d5-=0.15')

			
			
			.from(logoC, 0.2, {x:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.50')
			.add('sides1')
			// .from(checkoutC, 0.2, {y:-15, autoAlpha:0, ease:Power1.easeOut},'-=0.2')
			.add('sides2')
			.from(dotsC2, 0.2, {y:15, autoAlpha:0, ease:Power1.easeOut},'sides2')
			.from(addC, 0.2, {y:15, autoAlpha:0, ease:Power1.easeOut},'sides2')
	
	},
	methods: {
		addItem(){
			
		}
	}
})