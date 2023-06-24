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
                    <div>
                        <span>◆ &nbsp;DRN</span>
                        <span>449 2048&nbsp; ◆</span>
                    </div>
                    <div>
                        <h1>{Drone.id}</h1>
                    </div>
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
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .drone-id div:nth-child(1) {
        padding: 0 8px;
        display: flex;
        justify-content: space-between;
    }

    .drone-id span {
        color: rgb(160,216,220);
    }

    .drone-id div {
        text-align: center;
        border: 2px solid rgb(35,42,46);
    }

    .drone-id div * {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
        color: rgb(160,216,220);
        margin: 0;
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
