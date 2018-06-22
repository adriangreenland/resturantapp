import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" class="texturebg">
      <div class="container">
        <h5 class="comp-title">Contact Us</h5>
        <h2> hdhdhdhdhdhhd </h2>

        <div class="box">
        <div class="row">
        <div class="col-md-6">

          <div class="titlec">
          London, United Kingdom
          </div>

          <h6 class="address">
          447 Streatham High Rd, <br/>
          Streatham, London SW16 3H6
          </h6>

          <p>
          <strong>email:</strong> <a href="mailto:info@moorishcusine.com"> info@moorishcusine.com </a>
          </p>

        </div>


        <div class="col-md-6">

              <h6> Call us directly:</h6>

              <div class="titlec">
              +44(0)20 8764 6919
              </div>


              <h6> Lunch service:</h6>
              <p class="pcontact"> Friday, Saturday and Sunday <br/>
              Bookings from 12pm - 1:30pm
              </p>

              <h6> Dinner service:</h6>
              <p class="pcontact">Daily bookings from 6pm-9pm
              </p>


        </div>

        </div>
        </div>
	</div>
    </section>
  )
}
