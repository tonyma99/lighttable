<script>
    import Drone from "../../components/drone.svelte";
</script>
  
  
<body>
    <div class="main">
      canvas here
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