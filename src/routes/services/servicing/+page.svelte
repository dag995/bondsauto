<script>
  import { CTA, Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>Servicing • Bonds Automotive</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    <div class="w-860">
      
      <h1>Servicing</h1>
      <h2>Car Servicing: Keeping Your Car Running Right</h2>
      <p>Regular servicing is one of the simplest ways to keep your car safe, reliable, and running efficiently and to catch small issues before they turn into expensive repairs. Our servicing is thorough, honest, and tailored to what your car actually needs, not a one-size-fits-all checklist.</p>
      <p>Whether it's due its annual service, an interim check between full services, or it's just been a while since it was last looked at, we'll make sure it's road-ready and give you a clear picture of anything that needs attention.</p>

      <h2>Types of Service</h2>
      <div class="columns">
        <div class="column-50">
          <h3>Interim Service</h3>
          <p>Recommended every 6 months or 6,000 miles for cars doing higher mileage. A quicker check covering the essentials — ideal for staying on top of wear between full services.</p>
          <ul>
            <li>Oil and filter change</li>
            <li>Brake check</li>
            <li>Tyre condition and pressure check</li>
            <li>Fluid levels topped up</li>
            <li>Lights and wipers check</li>
            <li>Battery test</li>
          </ul>
        </div>
        <div class="column-50">
          <h3>Full Service</h3>
          <p>Recommended annually or every 12,000 miles. A comprehensive check of your car from front to back, covering everything in the interim service plus:</p>
          <ul>
            <li>Full brake system inspection
            <li>Suspension and steering check
            <li>Exhaust system inspection
            <li>Air and fuel filter replacement
            <li>Drive belts and hoses check
            <li>Full underbody and visual inspection
            <li>Air conditioning performance check</li>
          </ul>
        </div>
      </div>

    </div>
    
    <CTA />
    
    <Services />

  </div>
</div>

<style>
  h1 {
    margin-bottom:0;
    padding-bottom:10px;
  }
  h2 {
    margin-bottom:0;
    padding-bottom:10px;
    font-size:1.8em;
  }
  h3 {
    margin:30px 0 20px;
    padding:0;
    font-size:1.4em;
  }
  ul {
    margin:0;
    padding:0;
  }
  ul li {
    margin:0 0 0 15px;
  }
</style>