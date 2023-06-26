<script lang="ts">
	import * as Threlte from '@threlte/core'
	import * as Three from 'three'
	import * as Extra from '@threlte/extras';
	import { onMount } from 'svelte';
	
	export let damaged;
	const gridHelper = new Three.GridHelper(20, 10);
	const axesHelper = new Three.AxesHelper(10);

	let camera = {
		position: { x: 10, y: 10, z: 10 },
		zoom: 40
	}
	let pointLight = {
		position: { x: 0, y: 5, z: -15},
		color: 'blue'
	}
	let drone = {
		position: {x: 0, y: 0, z: 0},
		scale: 250
	}

	let showCanvas = false;
	onMount(() => showCanvas = true)
</script>
  
	
  <div class="scene">
	{#if showCanvas}
	<Threlte.Canvas rendererParameters={{ antialias: true }} >
		<!-- <Threlte.Object3DInstance object={gridHelper} /> -->
		<!-- <Threlte.Object3DInstance object={axesHelper} /> -->
		<Threlte.OrthographicCamera {...camera}>
			<Threlte.OrbitControls/>
		</Threlte.OrthographicCamera>
		
		<Threlte.AmbientLight color="white" intensity={0.2}/>
		<Threlte.PointLight intensity={1.5} {...pointLight}/>
		
		{#if damaged == true}
			<Extra.GLTF url="/damaged_drone.glb" {...drone}/>
		{:else}
			<Extra.GLTF url="/drone.glb" {...drone}/>
		{/if}
		
	</Threlte.Canvas>
	{/if}
  </div>
  
  <style>
	.scene {
	  max-width: 98%;
	  height: 75%;
	  
	  /* border: 1px solid white;  */
	}
  </style>
  