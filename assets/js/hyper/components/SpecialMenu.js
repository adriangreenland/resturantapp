import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" class="texturebg">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious flavours of Autumn</h2>
        <div class="row boxes">
        <div class="col-md-4">
        <div class="box">
        <div class="box-img-1"> <div class="price-circle"> £25</div></div>

        <span class="title"> Special Mixed Grill </span>
        <p class="details">Kofta skewers, lamb chops, tender chicken cubes and chicken wings service with rice</p>
          </div>
        </div>

        <div class="col-md-4">
        <div class="box">
        <div class="box-img-2"> <div class="price-circle"> £25</div></div>

        <span class="title"> Meatball tagine with lemon & olives</span>
        <p class="details">A wonderfully aromatic North African lamb casserole with a citrus tang</p>
          </div>
        </div>

        <div class="col-md-4">
        <div class="box">
        <div class="box-img-3"> <div class="price-circle"> £25</div></div>

        <span class="title"> Spiced fish with ginger mash</span>
        <p class="details">White fish fillets with a flavoured butter and serve with fluffy sweet potato mash</p>
          </div>

        </div>



        </div>


      </div>
        <a href="#" class="link"><strong>View Full Menu</strong></a>
    </section>
  )
}
