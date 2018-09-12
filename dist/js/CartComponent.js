"use strict";

var CartComponent = Vue.component("cart", {
	template: "\n\t<div class=\"cart-component-container\">\n\n\t\t<img v-if=\"$route.path == '/'\" @click=\"cartToggle\" ref=\"checkoutCRef\" class=\"bag-icon\" id=\"showRightPush\" src=\"dist/img/bag-grey.png\" alt=\"shopping bag icon\">\n\t\t<img v-else @click=\"cartToggle\" ref=\"checkoutCRef\" class=\"bag-icon\" id=\"showRightPush\" src=\"dist/img/bag.png\" alt=\"shopping bag icon\">\n\n\t\t<div :class=\"'cart-container cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right' + (show ? ' cbp-spmenu-open' : '') \">\n\t\t\t<div class=\"cart-header\">\n\t\t\t\t<h3>Your Cart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"cart-main\">\n\t\t\t\t<ul class=\"cart-items\">\n\t\t\t\t\t<li v-for=\"item in cart\">\n\n\t\t\t\t\t\t<img :src=\"item.selectedCrystal\"></img>\n\t\t\t\t\t\t<div class=\"itemText\">\n\t\t\t\t\t\t\t<p class=\"name\">{{item.selectedCrystalName}}</p>\n\t\t\t\t\t\t\t<p class=\"price\">{{item.selectedCrystalCount}} x {{item.selectedPrice}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"cart-footer\">\n\t\t\t\t<div class=\"button-container\">\n\t\t\t\t\t<button class=\"view-cart-btn\">view cart</button>\n\t\t\t\t\t<button class=\"checkout-btn\">checkout</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t",
	props: ["cart"], // the contents of the cart come from above
	data: function data() {
		return {
			show: false
		};
	},
	methods: {
		cartToggle: function cartToggle() {
			document.body.classList.toggle('cbp-spmenu-push-toleft');
			this.show = !this.show;
		}
	},
	mounted: function mounted() {}
});
//# sourceMappingURL=CartComponent.js.map
