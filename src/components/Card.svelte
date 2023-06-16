<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click>
    <slot></slot>
</div>

<style>
    .card{
        border: 2px solid;
        border-color: blue;
        border-radius: 5px;
        border-bottom-style: none;
    }
</style>
