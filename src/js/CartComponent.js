var CartComponent = Vue.component("cart", {
	template: `
	<div class="cart-component-container">
	
		<img ref="checkoutCRef" class="bag-icon" id="showRightPush" src="dist/img/bag.png" alt="shopping bag icon">

		<div v-if="show" class="cart-container cbp-spmenu cbp-spmenu-right cbp-spmenu-open">
			<div class="cart-header">
				<h3>Your Cart</h3>
			</div>
			<div class="cart-main">
				<ul class="cart-items">
					<li>cart item</li>
					<li>cart item</li>
					<li>cart item</li>
					<li>cart item</li>
				</ul>
			</div>
			<div class="cart-footer">
				<button class="view-cart-btn">view cart</button>
				<button class="checkout-btn">checkout</button>
			</div>
		</div>
	</div>
	`,
	props: ["show"],
	data: function() {
		return {
			
		}
	},
	methods: {
		cartToggle(){
			let showRightPush = document.getElementById('showRightPush'),
				body = document.body;
				
				showRightPush.onclick = function() {
					classie.toggle( this, 'active' );
					classie.toggle( body, 'cbp-spmenu-push-toleft' );
					classie.toggle( menuRight, 'cbp-spmenu-open' );
					disableOther( 'showRightPush' );
				};
		}
	},
	mounted: function() {

	}
})