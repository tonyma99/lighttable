<script>
  import Drone from "../../components/drone.svelte";
  import DroneModel from "../../components/DroneModel.svelte";
</script>


<body>
<div class="main">
    <DroneModel/>
    <Drone/>
  </div>
</body>

<style>
  body{
    background: black;
    background-image: radial-gradient(white 1px, transparent 0);
    background-size: 40px 40px;
    background-position: -20px -20px;
  }
  .main{
    color: white;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }  

</style>