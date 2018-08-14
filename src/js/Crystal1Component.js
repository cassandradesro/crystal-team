var Crystal1Component = Vue.component("crystal-one", {
	template: `
		<div class="crystal1">
			<h1>Crystal 1</h1>
			<p>{{message}}</p>
			<p>Color: {{color}}</p>

		</div>
	`,
	props: ["message", "color"]

})