import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
      <div class="container">
        <nav class="menu">
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>

        </nav>
        <ul class="social-media">
            <li>
            <a href="https://facebook.com/" target="new"><i class="fa fa-facebook-official"></i>
            </a></li>
            <li>
            <a href="https://twitter.com/" target="new"><i class="fa fa-twitter-square"></i>
            </a></li>
            <li>
            <a href="https://google.com/" target="new"><i class="fa fa-google-plus-square"></i>
            </a></li>
            <li>
            <a href="https://youtube.com/" target="new"><i class="fa fa-youtube-square"></i>
            </a></li>
        </ul>

        <div class="copyright">
        © Copyright
        </div>
      </div>
    </footer>
  )
}
