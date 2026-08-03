<script>
  import { CTA } from '$lib/components/templates'

  const faqs = [
    { 
      title: 'How often should I get my car serviced', 
      description: `<p>Most manufacturers recommend a service every 12,000 miles or once a year, whichever comes first. Check your handbook for the exact interval, as it varies between makes and models. Regular servicing catches small issues before they become expensive repairs.</p>`
    }, { 
      title: 'What\'s the difference between a service and an MOT', 
      description: `<p>An MOT is a legal check to confirm your car meets minimum safety and environmental standards — it's pass or fail. A service is a scheduled maintenance check (oil changes, filter replacements, general wear inspection) aimed at keeping the car running well and preventing future problems. They're not the same, and passing an MOT doesn't mean your car doesn't need a service.</p>`
    }, { 
      title: 'Can I do basic maintenance myself, or should I always use a garage', 
      description: `<p>Simple checks like tyre pressure, topping up washer fluid, and checking oil levels are fine to do yourself. Anything involving brakes, suspension, electrics, or the engine's internal components is safer left to a qualified technician — mistakes here can be costly or dangerous.</p>`
    }, 
    { 
      title: 'My engine warning light came on, can I keep driving', 
      description: `<p>It depends on the light. A steady amber engine light usually means get it checked soon but you can generally continue driving carefully. A flashing red or red engine light means stop as soon as it's safe and don't continue driving, as this can indicate serious damage risk. If you're ever unsure, it's safest to get it looked at straight away.</p>`
    }, 
    { 
      title: 'What does it mean if my brake warning light comes on', 
      description: `<p>This could mean low brake fluid, worn brake pads, or a fault in the braking system itself. Braking issues are safety-critical, so this isn't one to leave — get it checked by a garage promptly.</p>`
    }, 
    { 
      title: 'Is it normal for warning lights to come on intermittently', 
      description: `<p>Occasional flickers can sometimes be sensor glitches, but a light that stays on or returns repeatedly is telling you something real is happening. It's always worth a diagnostic check rather than assuming it's nothing.</p>`
    }, 
    { 
      title: 'My car makes a grinding noise when I brake', 
      description: `<p>This is a common sign of worn brake pads, and in some cases worn discs. It's best not to ignore this, as continuing to drive can cause further damage and affect your stopping distance.</p>`
    }, 
    { 
      title: 'Why does my car smell of petrol or burning', 
      description: `<p>A fuel smell can indicate a leak in the fuel system, while a burning smell could point to an electrical fault, an overheating component, or an oil leak dripping onto a hot surface.</p>`
    }, 
    { 
      title: 'There\'s a knocking noise from my engine', 
      description: `<p>Knocking noises can range from minor to serious, including low oil pressure, worn engine components, or fuel quality issues. It's not something to guess about — a proper diagnostic check will identify the cause before it leads to bigger engine damage.</p>`
    }, 
    { 
      title: 'Why is my car struggling to start in the morning', 
      description: `<p>This is often down to a weak or failing battery, especially in colder weather, but can also relate to the starter motor, fuel system, or spark plugs. A garage can test the battery and starting system quickly to pinpoint the cause.</p>`
    }, 
    { 
      title: 'How do I know if my tyres need replacing', 
      description: `<p>The legal minimum tread depth in the UK is 1.6mm, but for safety it's worth replacing before you get that low, especially in wet conditions. Uneven wear, cracking, or bulges are also signs to get tyres checked regardless of tread depth.</p>`
    }, 
    { 
      title: 'My steering feels different, it\'s pulling to one side or vibrating', 
      description: `<p>This often points to wheel alignment issues, tyre problems, or suspension wear. Left unchecked, it can accelerate tyre wear and affect handling, so it's worth a garage visit rather than adjusting your driving to compensate.</p>`
    }, 
    { 
      title: 'How often should brake pads be replaced', 
      description: `<p>This varies by driving style and conditions, but typically every 20,000 - 40,000 miles. Squealing, grinding, or a spongy brake pedal are signs it's time for a check regardless of mileage.</p>`
    }, 
    { 
      title: 'What issues should never wait', 
      description: `<ul>
        <li>Brake problems (noise, spongy pedal, warning light)</li>
        <li>Steering that feels loose, heavy, or unresponsive</li>
        <li>Overheating engine or coolant warning light</li>
        <li>Any flashing warning light</li>
        <li>Loss of power while driving</li>
        <li>Smoke, burning smells, or visible fluid leaks</li>
      </ul>`
    }, 
    { 
      title: 'What issues are okay to book in for rather than treat as an emergency', 
      description: `<ul>
        <li>Minor dashboard lights that are steady, not flashing</li>
        <li>Small cosmetic issues (interior trim, minor scratches)</li>
        <li>General wear and tear noticed early</li>
        <li>Scheduled servicing and MOT preparation</li>
      </ul>`
    }, 
    { 
      title: 'I\'m not sure what\'s wrong', 
      description: `<p>Book a diagnostic check with us. If something feels off but you can't identify the cause, a diagnostic check is the quickest way to get a clear answer rather than guessing or waiting until it worsens.</p>`
    } 
  ]
  let open = $state([])
</script>

<svelte:head>
	<title>FAQ • Bonds Automotive</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    <div class="w-860" style="padding-top:80px;padding-right:20px;padding-left:20px;padding-bottom:0;">
      <h1>Frequently Asked Questions?</h1>
      <p>Common Questions About Car Issues and When to Seek Professional Help.</p>
    </div>

    <div class="w-860" style="padding-right:20px;padding-left:20px;">
      <div class="faq">
        {#each faqs as faq, fk}
          <details class={open.includes(fk) ? 'open' : ''} open={open.includes(fk)}>
            <summary
              onclick={e => {
                e.preventDefault()
                open = open.includes(fk) ? open.filter(o => o !== fk) : [...open, fk]
              }}
            >{faq.title}</summary>
            {@html faq.description}
          </details>
        {/each}
      </div>
    </div>

    <CTA />

  </div>
</div>

<style>
  details {
    background-color: #FFF;
    padding:20px;
  }
  details + details {
    margin-top:20px;
  }
  summary {
    position: relative;
    padding-right: 22px;
    font-size:1em;
  }
  summary::marker {
    content: ' ';
  }
  summary::after {
    content: ' ';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSI+PHBhdGggZD0iTTEuNTAwMDIgNEw2LjAwMDAyIDhMMTAuNSA0IiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+);
    width: 12px;
    height: 12px;
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  details.open summary {
    border-bottom:solid 1px #CCC;
    padding-bottom:20px;
  }
  details.open :last-child {
    margin-bottom:0;
  }
</style>