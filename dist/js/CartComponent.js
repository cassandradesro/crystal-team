"use strict";

var CartComponent = Vue.component("cart", {
	template: "\n\t<div class=\"cart-component-container\">\n\t\n\t\t<img ref=\"checkoutCRef\" class=\"bag-icon\" id=\"showRightPush\" src=\"dist/img/bag.png\" alt=\"shopping bag icon\">\n\n\t\t<div v-if=\"show\" class=\"cart-container cbp-spmenu cbp-spmenu-right cbp-spmenu-open\">\n\t\t\t<div class=\"cart-header\">\n\t\t\t\t<h3>Your Cart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"cart-main\">\n\t\t\t\t<ul class=\"cart-items\">\n\t\t\t\t\t<li>cart item</li>\n\t\t\t\t\t<li>cart item</li>\n\t\t\t\t\t<li>cart item</li>\n\t\t\t\t\t<li>cart item</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"cart-footer\">\n\t\t\t\t<button class=\"view-cart-btn\">view cart</button>\n\t\t\t\t<button class=\"checkout-btn\">checkout</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t",
	props: ["show"],
	data: function data() {
		return {};
	},
	methods: {
		cartToggle: function cartToggle() {
			var showRightPush = document.getElementById('showRightPush'),
			    body = document.body;

			showRightPush.onclick = function () {
				classie.toggle(this, 'active');
				classie.toggle(body, 'cbp-spmenu-push-toleft');
				classie.toggle(menuRight, 'cbp-spmenu-open');
				disableOther('showRightPush');
			};
		}
	},
	mounted: function mounted() {}
});
//# sourceMappingURL=CartComponent.js.map
