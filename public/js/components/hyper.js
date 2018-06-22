webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var reviewRightClicked = function reviewRightClicked(state, actions) {
  return { reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }

  };
};

var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return { reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }

  };
};

var actions = exports.actions = {
  reviewRightClicked: reviewRightClicked,
  reviewLeftClicked: reviewLeftClicked

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var reviewsData = [{

  company: 'ggghghgg',
  author: 'Adam Sterling',
  highlight: 'Best Morrocan resturant in London',
  authorInfo: 'Globally Regonised Michelin Star Chef',
  review: 'Direct trade unicorn health goth tofu whatever vaporware banh mi beard. Truffaut blue bottle deep v prism. Shoreditch coloring book irony waistcoat sriracha small batch. Green juice ramps cloud bread vinyl raclette mlkshk echo park pop-up lumbersexual celiac crucifix bitters bespoke.'

}, {

  company: 'hhhgghgghgg',
  author: 'Adam Sterling2',
  highlight: 'Best Morrocan resturant in London2',
  authorInfo: 'Globally Regonised Michelin Star Chef2',
  review: 'Direct trade unicorn health goth tofu whatever vaporware banh mi beard. Truffaut blue bottle deep v prism. Shoreditch coloring book irony waistcoat sriracha small batch. Green juice ramps cloud bread vinyl raclette mlkshk echo park pop-up lumbersexual celiac crucifix bitters bespoke.'

}, {

  company: 'hhhgghgghgg3',
  author: 'Adam Sterling3',
  highlight: 'Best Morrocan resturant in London2',
  authorInfo: 'Globally Regonised Michelin Star Chef2',
  review: 'Direct trade unicorn health goth tofu whatever vaporware banh mi beard. Truffaut blue bottle deep v prism. Shoreditch coloring book irony waistcoat sriracha small batch. Green juice ramps cloud bread vinyl raclette mlkshk echo park pop-up lumbersexual celiac crucifix bitters bespoke.'

}, {

  company: 'hhhgghgghgg4',
  author: 'Adam Sterling4',
  highlight: 'Best Morrocan resturant in London2',
  authorInfo: 'Globally Regonised Michelin Star Chef2',
  review: 'Direct trade unicorn health goth tofu whatever vaporware banh mi beard. Truffaut blue bottle deep v prism. Shoreditch coloring book irony waistcoat sriracha small batch. Green juice ramps cloud bread vinyl raclette mlkshk echo park pop-up lumbersexual celiac crucifix bitters bespoke.'

}];

var globalState = exports.globalState = {

  reviewsData: reviewsData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        " hdhdhdhdhdhhd "
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "titlec" },
              "London, United Kingdom"
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "447 Streatham High Rd, ",
              (0, _hyperapp.h)("br", null),
              "Streatham, London SW16 3H6"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@moorishcusine.com" },
                " info@moorishcusine.com "
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              " Call us directly:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "titlec" },
              "+44(0)20 8764 6919"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              " Lunch service:"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "pcontact" },
              " Friday, Saturday and Sunday ",
              (0, _hyperapp.h)("br", null),
              "Bookings from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              " Dinner service:"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "pcontact" },
              "Daily bookings from 6pm-9pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://facebook.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-official" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://twitter.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://google.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://youtube.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-youtube-square" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 Copyright"
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logos"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet street art truffaut health goth cred kinfolk , pork belly letterpress photo booth farm-to-table poke ennui wayfarers. Retro forage brooklyn truffaut pickled tilde cred shoreditch, edison bulb chambray umami vaporware vexillologist etsy."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"A hidden gem. The food is nothing short of outstanding; some of the best I've had in the last few years.\"",
            (0, _hyperapp.h)(
              "strong",
              null,
              "- Matthew Parker"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Reserve"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"I'm just someone who likes cooking and for whom sharing food is a form of expression...\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        " - Karim (Head Chef) -"
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        " REVIEWS "
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        " ",
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        " "
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        " ",
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          " ",
          state.reviewsData[state.reviewStatus.currentReview].author,
          " "
        ),
        " - ",
        state.reviewsData[state.reviewStatus.currentReview].authorInfo,
        "- "
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://www.dennys.co.uk//media/images/de20_80-00A7079D-1600-1600.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN,
              "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : '') }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN,
              "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready') })
          )
        )
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious flavours of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-1" },
              " ",
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                " \xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Special Mixed Grill "
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Kofta skewers, lamb chops, tender chicken cubes and chicken wings service with rice"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-2" },
              " ",
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                " \xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Meatball tagine with lemon & olives"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "A wonderfully aromatic North African lamb casserole with a citrus tang"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-3" },
              " ",
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                " \xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Spiced fish with ginger mash"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "White fish fillets with a flavoured butter and serve with fluffy sweet potato mash"
            )
          )
        )
      )
    ),
    (0, _hyperapp.h)(
      "a",
      { href: "#", "class": "link" },
      (0, _hyperapp.h)(
        "strong",
        null,
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "MOORISH MORROCAN CUISINE"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            " Book a table "
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " +44 (0)20 8764 6919 "
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            (0, _hyperapp.h)(
              "strong",
              null,
              " Opening hours : Mon - Fri:"
            ),
            " 9:00 - 21:30 / ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Weekend:"
            ),
            " 9:00 - 23:00"
          )
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);