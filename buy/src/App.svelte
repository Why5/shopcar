<script>
	import {Router,Link,Route} from "svelte-routing";
	import Buy from "./view/Buy.svelte";
	import Home from "./view/Home.svelte";
	import My from "./view/My.svelte";
	import Sever from "./view/Sever.svelte";

	export let url="";
</script>

<div class="wrap">
	<Router url="{url}">
		<div class="main">
			<Route path="my" component="{My}"/>
			<Route path="buy" component="{Buy}"/>
			<Route path="sever" component="{Sever}"/>
			<Route path="/" component="{Home}"/>	
		</div>
		<nav>
			<Link to="/">首页</Link>
			<Link to="sever">列表</Link>
			<Link to="buy">购物车</Link>
			<Link to="my">我的</Link>	
		</nav>
	</Router>
</div>

<style>
	.wrap {
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
		overflow: hidden;
	}
	.main {
		display:flex;
		flex-direction: column;
		flex:1;
		width:100%;
	}
	nav {
		height:44px;
		display:flex;
		align-items: center;
    	justify-content: space-around;
	}
</style>