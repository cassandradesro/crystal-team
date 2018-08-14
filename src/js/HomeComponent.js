var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">
			<h1>Welcome</h1>
			<p>{{message}}</p>
			<router-link></router-link>
		</div>
	`,
	props: ["message"]

})