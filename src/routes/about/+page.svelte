<script>
  import { base } from '$app/paths'
</script>

<svelte:head>
	<title>About • Bonds Automotive</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    <div class="w-860">
      
      <div class="img_wrap">
        <p class="img">
          <img 
            src="/images/about_01.jpg"
            alt="McLaren" 
            title="McLaren" 
            width="1200" 
            height="800" 
          />
        </p>
        <!-- <div class="caption">
          Kricket Restaurant, White City, London by Run for the Hills.
        </div> -->
      </div>
                
      <div class="columns">
        <div class="column column-50">
          <div style="height:100px"></div>
          <h1>About Bonds Automotive</h1>
          <p>Family ran local garage in the heart of the Victorian seaside town of Clevedon.</p>
          <p>Our team have decades of experience helping locals with car problems alongside passionatly working on personal projects and fully restoring classic cars.</p>
          <p>Bonds automotives have been known to go above and beyond for customers with a refreshing, geniuine and honest approach to car repairs.</p>
        </div>
        <div class="column column-50">
          <div class="img_wrap img_white">
            <p class="img">
              <img 
                src="/images/home_03.jpg"
                alt="BMW" 
                title="BMW" 
                width="800" 
                height="1000" 
              />
            </p>
          </div>
        </div>
      </div>

    </div>


  </div>
</div>

<style>
  .columns {
    display: flex;
    flex-wrap: wrap;
    gap:0;
    width:100%;
    box-sizing: border-box;
  }
  .column-25,
  .column-33 {
    flex-grow:0!important;
  }
  .column-25 div,
  .column-33 div {
    background: #FFF;
    padding: 20px;
    margin:0 5px;
    border: solid 1px #e6e7e8;
  }
  .column-25 h3,
  .column-33 h3 {
    font-size:1.4em;
    margin:0;
    padding:20px 0 0;
  }
  .column-25 h4,
  .column-33 h4 {
    font-size:1.2em;
    line-height:normal;
    margin:0;
    padding:10px 0 0;
    color:#333;
  }
</style>