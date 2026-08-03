<script>
  import { CTA, Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>Repairs • Bonds Automotive</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    <div class="w-860">
      
      <div class="img_wrap">
        <p class="img">
          <img 
            src="/images/bonds_auto_02.jpg"
            alt="mot prep" 
            title="mot prep" 
            width="1200" 
            height="800" 
          />
        </p>
      </div>

      <h1>Car Repairs: Small Fixes to Major Work</h1>
      <h2>Your Local Garage for Every Kind of Repair</h2>
      <p>Not every car problem is the same, and it shouldn't be treated that way. Whether it's a quick fix you want sorted before it turns into something bigger, or a major repair after a fault or breakdown, our team handles it all — with the same honest advice and quality workmanship every time.</p>
      <p>No job is too small to take seriously, and no job is too big for us to handle properly.</p>

      <div class="columns">
        <div class="column-33">
          <h3>Small & Routine Repairs</h3>
          <p>Little issues are easy to put off, but they're usually quick and affordable to sort and ignoring them often leads to bigger problems down the line. We regularly handle:</p>
          <ul>
            <li>Bulb and light replacements</li>
            <li>Wiper blades and washer system fixes</li>
            <li>Battery testing and replacement</li>
            <li>Minor electrical faults</li>
            <li>Fluid top-ups and leak checks</li>
            <li>Small trim, interior and exterior fixes</li>
            <li>Air conditioning re-gas and faults</li>
          </ul>
        </div>

        <div class="column-33">
          <h3>Medium Sized Repairs</h3>
          <p>These are the jobs that keep your car running safely and smoothly, often flagged during a service, MOT, or diagnostic check:</p>
          <ul>
            <li>Brake pads, discs and calipers</li>
            <li>Suspension components (shocks, springs, bushes)</li>
            <li>Exhaust and emissions repairs</li>
            <li>Clutch adjustments and replacement</li>
            <li>Cooling system repairs</li>
            <li>Timing belt and cambelt replacement</li>
            <li>Alternator and starter motor repairs</li>
          </ul>
        </div>

        <div class="column-33">
          <h3>Major & Complex Repairs</h3>
          <p>For bigger jobs, you need a garage with the experience and equipment to do it right the first time. We take on:</p>
          <ul>
            <li>Engine repairs and rebuilds</li>
            <li>Gearbox and transmission repairs</li>
            <li>Head gasket replacement</li>
            <li>Major electrical and wiring faults</li>
            <li>Accident damage assessment and repair</li>
            <li>Full suspension and steering overhauls</li>
            <li>Turbocharger repairs and replacement</li>
          </ul>
        </div>

      </div>

      <h2>Our Approach to Every Repair</h2>
      <ul>
        <li>Proper diagnosis first: we identify the actual cause, not just the symptom</li>
        <li>Clear, honest explanation: plain English, no confusing jargon, no pressure</li>
        <li>Upfront pricing: you'll get a quote before any work begins</li>
        <li>Quality parts and workmanship: repairs done to last, not just to pass</li>
        <li>Straight-talking advice: if something doesn't need doing yet, we'll tell you</li>
      </ul>

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
    font-size:1.4em;
  }
  h3 {
    margin:30px 0 20px;
    padding:0;
    font-size:1.6em;
  }
  ul {
    margin:0;
    padding:0;
  }
  ul li {
    margin:0 0 0 15px;
  }
</style>