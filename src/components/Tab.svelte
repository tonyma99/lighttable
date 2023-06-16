<script>
    import { DroneStore } from "../stores/DroneStore";

    export let currentDrone;
    export let statuses;
    export let currentStatus;

    const handleStatusClick = (currentDrone, status) => {
        currentStatus = status;
        DroneStore.update(currentData => {
            let copiedData = [...currentData];
            let selectedDrone = copiedData.find((drone) => drone.id == currentDrone)
            
            selectedDrone.status = status;
            return copiedData;
        });
        console.log(currentDrone, status);
    }
</script>

<div class="tabs">
    <ul>
        {#each statuses as status}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li class:active={status === currentStatus} on:click={() => {handleStatusClick(currentDrone, status)}}>
                <div class:active={status === currentStatus}> {status}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px;;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 10px;
        border: 1px solid;
        padding: 10px 50px;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
    }
    .active{
        color: white;
        padding-bottom: 8px;
        background: #3A86B7;
    }
</style>