<script>
  import { page } from '$app/stores'
</script>

<footer class="main-footer">

  <div class="wrap">

    <div class="col">
      <a href="/" class="logo" aria-label="home">
        <img src="/bondsauto_logo_white.svg" alt="Bonds Automotive Ltd" title="Bonds Automotive Ltd" />
      </a>
    </div>

    <div class="col right">
      <h5>Get in touch</h5>
      <p>
        <a href="mailto:contact@bondsauto.co.uk" title="contact@bondsauto.co.uk">contact@bondsauto.co.uk</a>
        <br />
        Monday to Friday: 8:00 to 18:00
      </p>
    </div>

    <div class="col">
      <h5>Location</h5>
      <p>
        18 Ruddymead, 
        <br />Clevedon, BS21 5EN
      </p>
    </div>


  </div>

  <div class="legal">
    <p>
      &copy; Copyright Bonds Automotive Ltd {new Date().getFullYear()}, all rights reserved. Registered in the UK, 16566253
      <br />
      Registered trading address: 18 Ruddymead, Clevedon, England, BS21 5EN
    </p>
  </div>

</footer>

<style type="text/css">
  footer {
    overflow: hidden;
    margin-top:0;
    display:block;
    font-size:0.9em;
    background:var(--theme-color);
  }
  footer .wrap {
    max-width:1240px;
    margin:0 auto;
    padding:30px 20px;
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap:1%;
  }
  footer .wrap .col {
    width:31.5%;
    flex-basis:31.5%;
    flex-grow:0;
    margin:20px 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    color:#FFF;
  }
  footer img {
    width:300px;
    height:107px;
  }
  footer a {
    text-decoration: none;
    color:#FFF;
  }
  footer h5 {
    font-size:1.1em;
    color:#FFF;
    font-weight:500;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    margin:0 0 10px;
  }
  footer p {
    line-height:1.6em;
    margin-bottom:0;
  }
  footer .legal {
    color:#FFF;
    box-sizing:border-box;
    display:block;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin:0;
    padding:20px 15px;
    line-height:1.4em;
  }
  footer .legal p {
    font-size:0.85em;
    margin:0;
  }
  @media (max-width: 781px) {
    footer .wrap .col {
      flex-basis: 50%;
    }
    footer .wrap .col:first-child,
    footer .wrap .col:last-child {
      flex-basis: 100%;
    }
  }
</style>