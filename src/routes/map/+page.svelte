<script>
	import { onMount } from "svelte";
	import { Map }  from "@onsvisual/svelte-maps";
	import maplibre from "maplibre-gl";

	let map;
	// State
	let zoom;
	let center = {};

	onMount(() => {
		map.addControl(new maplibre.NavigationControl(), 'top-left');
	})
</script>

<main>
	<Map id="map" 
		style="https://api.maptiler.com/maps/84c10d9b-994e-4d87-9f6e-c3caac31d82d/style.json?key=nAxFE2DP4FE2B9Tycohq" 
		location={{lng: -123.14446, lat: 49.24448, zoom: 11.9}} 
		bind:map={map} bind:zoom={zoom} bind:center={center} />
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		position: relative;
	}
</style>