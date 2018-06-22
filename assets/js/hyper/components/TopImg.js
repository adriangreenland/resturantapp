import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>
            welcome
          </h5>

          <h1>
          MOORISH MORROCAN CUISINE
          </h1>
          </div>
        <div class="contact-info">
        <div class="container">
        <div class="booking"> Book a table </div>
        <h2> +44 (0)20 8764 6919 </h2>

        <div class="hours">
        <strong> Opening hours : Mon - Fri:</strong> 9:00 - 21:30 / <strong>Weekend:</strong> 9:00 - 23:00

        </div>
        </div>
        </div>
      </div>
    </section>
  )
}
