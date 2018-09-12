var CartComponent = Vue.component("cart", {
	template: `
	<div class="cart-component-container">

		<img v-if="$route.path == '/'" @click="cartToggle" ref="checkoutCRef" class="bag-icon" id="showRightPush" src="dist/img/home/bagPurple.png" alt="shopping bag icon">
		<img v-else @click="cartToggle" ref="checkoutCRef" class="bag-icon" id="showRightPush" src="dist/img/bag.png" alt="shopping bag icon">

		<div :class="'cart-container cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right' + (show ? ' cbp-spmenu-open' : '') ">
			<div class="cart-header">
				<h3>Your Cart</h3>
			</div>
			<div class="cart-main">
				<ul class="cart-items">
					<li v-for="item in cart">

						<img :src="item.selectedCrystal"></img>
						<div class="itemText">
							<p class="name">{{item.selectedCrystalName}}</p>
							<p class="price">{{item.selectedCrystalCount}} x {{item.selectedPrice}}</p>
						</div>
						
					</li>
				</ul>
			</div>
			<div class="cart-footer">
				<div class="button-container">
					<button class="view-cart-btn">view cart</button>
					<button class="checkout-btn">checkout</button>
				</div>
			</div>
		</div>
	</div>
	`,
	props: ["cart"], // the contents of the cart come from above
	data: function() {
		return {
			show: false
		}
	},
	methods: {
		cartToggle(){
			document.body.classList.toggle('cbp-spmenu-push-toleft' );
			this.show = !this.show;
		}
	},
	mounted: function() {

	}
})