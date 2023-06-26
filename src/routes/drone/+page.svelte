<script>
  import Drone from "../../components/drone.svelte";
  import DroneModel from "../../components/DroneModel.svelte";
  import Tab from "../../components/Tab.svelte";

  let statuses = ["ONLINE", "OFFLINE", "REPAIR", "MIA"];
  let currentStatus = "ONLINE";
  let currentDrone = 150;
  let damaged = false;

  const updateCurrentDrone = (e) => {
    let data = e.detail;
    console.log(data);
    currentDrone = data.id;
    currentStatus = data.status;
    
    if(currentStatus == "REPAIR") {
      damaged = true;
    }
    else {
      damaged = false;
    }
  }

  const updateDroneCanvas = (e) => {
    let status = e.detail;
    console.log(status);
    currentStatus = status;
    if(status == "REPAIR") {
      damaged = true;
    }
    else {
      damaged = false;
    }
  }
  
</script>


<body>
<div class="main">
  <div class="model">
    <h1>Drone {currentDrone}</h1>
      <DroneModel {damaged}/>
    <Tab {currentDrone} {statuses} {currentStatus} on:currentStatus={updateDroneCanvas}/>
  </div>
    <Drone {currentDrone} on:currentDrone={updateCurrentDrone}/>
  </div>
</body>

<style>
  body{
    background: black;
    margin: 0;
  }
  .main{
    background-image: radial-gradient(rgba(255,255,255,0.3) 1.25px, transparent 0);
    background-size: 40px 40px;
    background-position: 0px 0px;
    color: white;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 16px;
  }  

  .model{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>