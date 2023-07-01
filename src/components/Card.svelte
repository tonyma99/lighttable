<script>
    export let active = false;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" class:active={active} on:click>
    <slot></slot>
</div>

<style>
    .card{
        border: 2px solid;
        border-color: rgb(63,99,107);
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-style: none;
    }
    .active{
        border: 8px solid;
        border-color: rgb(63,99,107);
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-style: none;
    }
</style>
