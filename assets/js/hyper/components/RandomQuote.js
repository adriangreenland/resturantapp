import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote">
      <div class="container">
      <h1>"I'm just someone who likes cooking and for whom sharing food is a form of expression..."</h1>
      <span class="author"> - Karim (Head Chef) -</span>
      </div>
    </section>
  )
}
