<script>
	import { onMount } from "svelte";
	import { Map } from "@onsvisual/svelte-maps";
	import maplibre, { Popup } from "maplibre-gl";
	import { Marker } from "maplibre-gl";
	import { DroneStore } from "../stores/DroneStore";

	let map;
	let zoom;
	let center = {};

	const onDragEnd = (lngLat, droneID) => {
		DroneStore.update(currentData => {
			let copiedData = [...currentData];
			let selectedDrone = copiedData.find((drone) => drone.id == droneID);

			selectedDrone.location = [lngLat.lng, lngLat.lat];
			return copiedData;
		});
	}

	onMount(() => {
		map.addControl(new maplibre.NavigationControl(), 'top-left');

		for (let i = 0; i < $DroneStore.length; i++) {
			if ($DroneStore[i].status === "ONLINE") {
				let el = document.createElement('div');
				el.style.backgroundSize = 'contain';
				el.style.backgroundImage = 'url(/drone.png)';
				el.style.width = '150px';
				el.style.height = '80px';
				const drone = $DroneStore[i];
				const droneID = drone.id;

				const popup = new Popup({ offset: 30, closeButton: false }).setHTML(`
					<div style="color: rgb(160,216,220); padding: 8px;">
						<h1>Drone ${droneID}</h1>
						<h3>Some additional information about the drone.</h3>
					</div>
					`);



				new Marker(el, { draggable: true })
					.setLngLat(drone.location)
					.setPopup(popup)
					.addTo(map)
					.on('dragend', function(e) {
						let lngLat = e.target.getLngLat();
						onDragEnd(lngLat, droneID);
					});
			}
		}
	});
</script>

<main>
	<Map
		id="map"
		style="https://api.maptiler.com/maps/84c10d9b-994e-4d87-9f6e-c3caac31d82d/style.json?key=nAxFE2DP4FE2B9Tycohq"
		location={{ lng: -123.14446, lat: 49.24448, zoom: 11.9 }}
		bind:map={map}
		bind:zoom={zoom}
		bind:center={center}
	/>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
	}

</style>
