<script>
  const services = [
    { title: 'MOT Preperation', header: 'MOT<br />Preperation', color: '#5f4b4c', url: '/services/mot' },
    { title: 'Servicing', header: 'Servicing', color: '#59856e', url: '/services/servicing/' },
    { title: 'Diagnosis & Fault Finding', header: 'Diagnosis & <br />Fault Finding', color: '#d6b777', url: '/services/diagnosis/' },
    { title: 'Repairs', header: 'Repairs', color: '#416691', url: '/services/repairs' }
  ]
</script>

<div class="cta-box">
  <h3 style="margin-bottom:10px;margin-top:0;">Services</h3>
  <ul>
    {#each services as s}
      <li>
        <a 
          href={s.url} 
          title={s.title} 
          style="width:100%;display:flex;justify-content:space-between;"
        >
          {s.title}<span>&rarr;</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  h3 {
    font-size:1.4em;
    color:#222;
    padding-left:10px;
    padding-right:10px;
  }
</style>