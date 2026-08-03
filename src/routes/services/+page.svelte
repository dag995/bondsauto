<script>
  import { Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>Services • Bonds Automotive</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    <div class="intro">
      <h1 >Services Offered</h1>
      <p>We offer services ranging from diagnosing unknown issues to preparping your car to pass an MOT. Having fixed hundreds of cars we have the experience across all makes and models.</p>
      <p>Our experienced mechnics and technicials have worked on all ages of cars from classics to current day.</p>
    </div>

    <Services />

  </div>
</div>

<style>
  .intro {
    padding:80px 20px 20px;
    max-width:560px;
    margin:0 auto;
  }
  .intro h1 {
    margin-bottom:0;
    padding-bottom:10px;
    text-align: center;
  }
  .intro h2 {
    color:#575757;
    font-size:1.8em;
    margin:0;
    text-align: center;
  }
</style>