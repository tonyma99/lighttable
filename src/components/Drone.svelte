<script>
    import { DroneStore } from "../stores/DroneStore";
    import Card from "./card.svelte";

</script>

<div class="drone-list">
    {#each $DroneStore as Drone (Drone.id)}
        <Card>
            <div class="drone">
                <div class="drone-id">
                    <h1>
                        {Drone.id}
                    </h1>
                </div>
                <div class="drone-img">
                    <img src={Drone.img} alt="Drone">
                </div>
            </div>
        </Card> 
    {/each}
</div>

<style>
    .drone{
        /* padding-top: 10px; */
        padding: 20px;
        display:grid; 
        grid-template-columns: 1fr 1fr;
        gap: 20px
    }
    .drone-id{
        margin-top: 30%;
        margin-left: 10%;
        border: 1px solid white;
        /* width: fit-content; */
        padding-left: 10px;
        padding-right: 10px;
    }
    h1{
        text-align: center;
        font-size: 40px;
        color: #00FFFF;
        /* margin: 50% 0 0 40%; */
        font-family: sans-serif;
        text-shadow:
        0 0 3px #fff,
        /* 0 0 10px #fff, */
        /* 0 0 21px #fff, */
        /* 0 0 42px #0fa, */
        /* 0 0 82px #0fa, */
        /* 0 0 92px #0fa, */
        /* 0 0 102px #0fa, */
        0 0 151px #0fa;
    }
    .drone-list{
        width: 50vw;
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    img{
        margin-top: 20px;
        max-width: 100%;
        height: auto;
    }
    .drone-img{
        border: 1px solid white;
    }
</style>