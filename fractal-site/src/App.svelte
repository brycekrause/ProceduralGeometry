<script>
  import Canvas from './lib/Canvas.svelte';

  function draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(100, 100, 50, 50);
  }
</script>

<h1>Fractal Playground</h1>
<Canvas {draw} />