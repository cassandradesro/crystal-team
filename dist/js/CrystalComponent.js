"use strict";

console.log();
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: "\n\t\t<section class=\"page\">\n\t\t\t<!--display flex on .page, with flex-direction: row-->\n\n\t\t\t<img ref=\"checkoutCRef\" class=\"bag-icon\" src=\"dist/img/bag.png\" alt=\"shopping bag icon\"> <!--position absolute-->\n\t\t\t<p ref=\"logoCRef\" class=\"vertical-text\">oxide mineral</p> <!--position absolute-->\n\n\t\t\t<div ref=\"C1Ref\" class=\"column-1\">\n\t\t\t\t<h1 ref=\"titleC1Ref\">{{crystal.title}}</h1>\n\t\t\t\t<h2 ref=\"titleTwoC1Ref\">the \"lorem ipsum\"</h2>\n\t\t\t\t<div ref=\"chakraC1Ref\" class=\"chakra-area\">\n\t\t\t\t\t<h3>Sahasrara</h3>\n\t\t\t\t\t<img class=\"chakra-shape\" src=\"dist/img/chakras/crown-chakra.png\" alt=\"chakra shape\">\n\t\t\t\t\t<h4>Crown Chakra</h4>\n\t\t\t\t</div>\n\t\t\t\t<p ref=\"paraC1Ref\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officiis similique nihil voluptatum sapiente qui.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"column-2\">\n\t\t\t\t<div ref=\"numberC2Ref\" class=\"numbers\">\n\t\t\t\t\t<img class=\"active number number-one\" src=\"dist/img/numbers/number-1.png\" alt=\"number one\">\n\t\t\t\t\t<img class=\"number number-two\" src=\"\" alt=\"number two\">\n\t\t\t\t\t<img class=\"number number-three\" src=\"\" alt=\"number three\">\n\t\t\t\t\t<img class=\"number number-four\" src=\"\" alt=\"number four\">\n\t\t\t\t</div>\n\t\t\t\t<div ref=\"imgC2Ref\" class=\"crystals\">\n\t\t\t\t\t<img class=\"active crystal crystal-one\" src=\"dist/img/amethyst/amethyst-rock-1.png\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-two\" src=\"\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-three\" src=\"\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-four\" src=\"\" alt=\"crystal\">\n\t\t\t\t</div>\n\t\t\t\t<div ref=\"dotsC2Ref\" class=\"dots\">\n\t\t\t\t\t<div class=\"active dot dot-one\"></div>\n\t\t\t\t\t<div class=\"dot dot-two\"></div>\n\t\t\t\t\t<div class=\"dot dot-three\"></div>\n\t\t\t\t\t<div class=\"dot dot-four\"></div>\n\t\t\t\t</div>\n\t\t\t</div> <!--function module to updates numbers, crystals and dots simultaneously-->\n\t\t\t\t\t\n\t\t\t<div ref=\"C3Ref\" class=\"column-3\">\n\t\t\t\t<div class=\"bullets\">\n\t\t\t\t\t<div ref=\"d1C3Ref\" class=\"bullet\"></div>\n\t\t\t\t\t<div ref=\"d2C3Ref\" class=\"bullet\"></div>\n\t\t\t\t\t<div ref=\"d3C3Ref\" class=\"bullet\"></div>\n\t\t\t\t\t<div ref=\"d4C3Ref\" class=\"bullet\"></div>\n\t\t\t\t\t<div ref=\"d5C3Ref\" class=\"bullet\"></div>\n\t\t\t\t</div>\n\t\t\t\t<!--put border-left on the .facts div then add margin-left (or padding-left) until it crosses through center of bullets-->\n\t\t\t\t<div ref=\"factsC3Ref\" class=\"facts\">\n\t\t\t\t\t<p ref=\"f1C3Ref\" class=\"fact\">Lorem ipsum donum ab t. Sit, voluptate!</p>\n\t\t\t\t\t<p ref=\"f2C3Ref\" class=\"fact\">Lorem ipsum doloppe offrem?</p>\n\t\t\t\t\t<p ref=\"f3C3Ref\" class=\"fact\">Loreues comesse facilis aliquam neque!</p>\n\t\t\t\t\t<p ref=\"f4C3Ref\" class=\"fact\">Lorem ipsum dla fugaptatem repellendus porro.</p>\n\t\t\t\t\t<p ref=\"f5C3Ref\" class=\"fact\">Lorem ipsum doloaonsectmagni doloribus deserunt.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div ref=\"addCRef\" class=\"add-button\" onclick='addItem()'>add</div> <!--position absolute-->\n\t\t\t\n\t\t</section>\n\t",
	mounted: function mounted() {
		console.log("right when the component is created");
		console.log(this.$refs.numberCrystRef);
		console.log(this.$refs.kaleidoImgsRef);
		var numberC2 = this.$refs.numberC2Ref;
		var imgC2 = this.$refs.imgC2Ref;
		var dotsC2 = this.$refs.dotsC2Ref;

		var titleC1 = this.$refs.titleC1Ref;
		var title2C1 = this.$refs.titleTwoC1Ref;
		var chakraC1 = this.$refs.chakraC1Ref;
		var paraC1 = this.$refs.paraC1Ref;

		var d1C3 = this.$refs.d1C3Ref;
		var d2C3 = this.$refs.d2C3Ref;
		var d3C3 = this.$refs.d3C3Ref;
		var d4C3 = this.$refs.d4C3Ref;
		var d5C3 = this.$refs.d5C3Ref;

		var factsC3 = this.$refs.factsC3Ref;

		var f1C3 = this.$refs.f1C3Ref;
		var f2C3 = this.$refs.f2C3Ref;
		var f3C3 = this.$refs.f3C3Ref;
		var f4C3 = this.$refs.f4C3Ref;
		var f5C3 = this.$refs.f5C3Ref;

		var C1 = this.$refs.C1Ref;
		var C3 = this.$refs.C3Ref;

		var logoC = this.$refs.logoCRef;
		var checkoutC = this.$refs.checkoutCRef;
		var addC = this.$refs.addCRef;

		var tl = new TimelineMax();

		tl.from(numberC2, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '+=0.25').from(imgC2, 0.8, { rotation: 220, transformOrigin: '50% 50%', y: -700, autoAlpha: 0, ease: Power1.easeOut }, '+=0.15').add('imgs-in').from(titleC1, 0.1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'imgs-in')
		// .from(title2C1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
		// .from(chakraC1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')
		// .from(paraC1, 0.1, {y:-15, autoAlpha:0, ease:Power1.easeOut},'+=0.15')

		.from(C1, 0.2, { x: -15, autoAlpha: 0, ease: Power1.easeOut }, '+=0.2').from(C3, 0.2, { x: 15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.1')

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


		.from(logoC, 0.2, { x: -15, autoAlpha: 0, ease: Power1.easeOut }, '+=0.50').add('sides1').from(checkoutC, 0.2, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.2').add('sides2').from(dotsC2, 0.2, { y: 15, autoAlpha: 0, ease: Power1.easeOut }, 'sides2').from(addC, 0.2, { y: 15, autoAlpha: 0, ease: Power1.easeOut }, 'sides2');
	},
	methods: {
		addItem: function addItem() {}
	}
});
//# sourceMappingURL=CrystalComponent.js.map
