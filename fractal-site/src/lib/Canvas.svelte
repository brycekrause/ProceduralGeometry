<script>
  let canvas;

  export let draw = () => {};

  $: if (canvas) {
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }
</script>

<canvas bind:this={canvas} width="600" height="600"></canvas>

<style>
  canvas {
    border: 1px solid #444;
    background: #111;
  }
</style>