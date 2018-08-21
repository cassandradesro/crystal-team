"use strict";

console.log();
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: "\n\t\t<section class=\"page\">\n\t\t\t<!--display flex on .page, with flex-direction: row-->\n\n\t\t\t<img class=\"bag-icon\" src=\"\" alt=\"shopping bag icon\"> <!--position absolute-->\n\t\t\t<p class=\"vertical-text\">oxide mineral</p> <!--position absolute-->\n\n\t\t\t<div class=\"column-1\">\n\t\t\t\t<h1>{{crystal.title}}</h1>\n\t\t\t\t<h2>the \"lorem ipsum\"</h2>\n\t\t\t\t<div class=\"chakra-area\">\n\t\t\t\t\t<h3>Sahasrara</h3>\n\t\t\t\t\t<img class=\"chakra-shape\" src=\"\" alt=\"chakra shape\">\n\t\t\t\t\t<h4>Crown Chakra</h4>\n\t\t\t\t</div>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officiis similique nihil voluptatum sapiente qui.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"column-2\">\n\t\t\t\t<div class=\"numbers\">\n\t\t\t\t\t<img class=\"number number-one\" src=\"\" alt=\"number one\">\n\t\t\t\t\t<img class=\"number number-two\" src=\"\" alt=\"number two\">\n\t\t\t\t\t<img class=\"number number-three\" src=\"\" alt=\"number three\">\n\t\t\t\t\t<img class=\"number number-four\" src=\"\" alt=\"number four\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"crystals\">\n\t\t\t\t\t<img class=\"crystal crystal-one\" src=\"\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-two\" src=\"\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-three\" src=\"\" alt=\"crystal\">\n\t\t\t\t\t<img class=\"crystal crystal-four\" src=\"\" alt=\"crystal\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dots\">\n\t\t\t\t\t<div class=\"dot dot-one\"></div>\n\t\t\t\t\t<div class=\"dot dot-two\"></div>\n\t\t\t\t\t<div class=\"dot dot-three\"></div>\n\t\t\t\t\t<div class=\"dot dot-four\"></div>\n\t\t\t\t</div>\n\t\t\t</div> <!--function module to updates numbers, crystals and dots simultaneously-->\n\t\t\t\t\t\n\t\t\t<div class=\"column-3\">\n\t\t\t\t<div class=\"bullets\">\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t</div>\n\t\t\t\t<!--put border-left on the .facts div then add margin-left (or padding-left) until it crosses through center of bullets-->\n\t\t\t\t<div class=\"facts\">\n\t\t\t\t\t<p class=\"fact\">Lorem ipsum donum ab t. Sit, voluptate!</p>\n\t\t\t\t\t<p class=\"fact\">Lorem ipsum doloppe offrem?</p>\n\t\t\t\t\t<p class=\"fact\">Loreues comesse facilis aliquam neque!</p>\n\t\t\t\t\t<p class=\"fact\">Lorem ipsum dla fugaptatem repellendus porro.</p>\n\t\t\t\t\t<p class=\"fact\">Lorem ipsum doloaonsectmagni doloribus deserunt.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"add-button\">add</div> <!--position absolute-->\n\t\t\t\n\t\t</section>\n\t"

});
//# sourceMappingURL=CrystalComponent.js.map
