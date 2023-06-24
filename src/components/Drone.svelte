<script>
    import { createEventDispatcher } from "svelte";
    import { DroneStore } from "../stores/DroneStore";
    import Card from "./Card.svelte";

    let dispatch = createEventDispatcher();

    const handleDroneClick = (id, status) => {
        let data = {
            id,
            status
        };
        dispatch("currentDrone", data);
    };
</script>

<div class="drone-list">
    {#each $DroneStore as Drone (Drone.id)}
        <Card on:click={() => handleDroneClick(Drone.id, Drone.status)}>
            <div class="drone">
                <div class="drone-id">
                    <h1>{Drone.id}</h1>
                </div>
                <div class:status={Drone.status === "OFFLINE"} class="drone-img">
                    {#if Drone.status === "OFFLINE"}
                        <img src={Drone.img} alt="Drone" style="opacity: 0.2;">
                        <div class="status-text">OFFLINE</div>
                    {:else}
                        <img src={Drone.img} alt="Drone">
                    {/if}
                </div>
            </div>
        </Card>
    {/each}
</div>

<style>
    .drone {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .drone-id {
        border: 2px solid rgb(35,42,46);
    }

    h1 {
        text-align: center;
        font-size: 40px;
        color: rgb(160,216,220);
        /* text-shadow: 0 0 3px #fff, 0 0 151px #0fa; */
    }

    .drone-list {
        width: 50vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .drone-img {
        border: 2px solid rgb(35,42,46);
        position: relative;
    }

    .status {
        border-color: rgb(178,94,65);
    }

    .status-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(178,94,65,0.7);
        color: white;
        font-size: 20px;
        padding: 10px;
    }
</style>
