'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var makeKaleidoscope = function (element) {
  // Kaleidoscope
  var DragDrop, Kaleidoscope, c, dragger, gui, i, image, kaleidoscope, len, onChange, onMouseMoved, options, ref, tr, tx, ty, _update;

  Kaleidoscope = function () {
    var Kaleidoscope = function () {
      function Kaleidoscope() {
        var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Kaleidoscope);

        var key, ref, ref1, val;
        this.options = options1;
        this.defaults = {
          offsetRotation: 0.0,
          offsetScale: 1.0,
          offsetX: 0.0,
          offsetY: 0.0,
          radius: element.clientWidth / 2,
          slices: 12,
          zoom: 1.0
        };
        ref = this.defaults;
        for (key in ref) {
          val = ref[key];
          this[key] = val;
        }
        ref1 = this.options;
        for (key in ref1) {
          val = ref1[key];
          this[key] = val;
        }
        if (this.domElement == null) {
          this.domElement = document.createElement('canvas');
        }
        if (this.context == null) {
          this.context = this.domElement.getContext('2d');
        }
        if (this.image == null) {
          this.image = document.createElement('img');
        }
      }

      _createClass(Kaleidoscope, [{
        key: 'draw',
        value: function draw() {
          var cx, i, index, ref, results, scale, step;
          this.domElement.width = this.domElement.height = this.radius * 2;
          this.context.fillStyle = this.context.createPattern(this.image, 'repeat');
          scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
          step = this.TWO_PI / this.slices;
          cx = this.image.width / 2;
          results = [];
          for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
            this.context.save();
            this.context.translate(this.radius, this.radius);
            this.context.rotate(index * step);
            this.context.beginPath();
            this.context.moveTo(-0.5, -0.5);
            this.context.arc(0, 0, this.radius, step * -0.51, step * 0.51);
            this.context.lineTo(0.5, 0.5);
            this.context.closePath();
            this.context.rotate(this.HALF_PI);
            this.context.scale(scale, scale);
            this.context.scale([-1, 1][index % 2], 1);
            this.context.translate(this.offsetX - cx, this.offsetY);
            this.context.rotate(this.offsetRotation);
            this.context.scale(this.offsetScale, this.offsetScale);
            this.context.fill();
            results.push(this.context.restore());
          }
          return results;
        }
      }]);

      return Kaleidoscope;
    }();

    ;

    Kaleidoscope.prototype.HALF_PI = Math.PI / 2;

    Kaleidoscope.prototype.TWO_PI = Math.PI * 2;

    return Kaleidoscope;
  }.call(this);

  // Drag & Drop
  DragDrop = function () {
    function DragDrop(callback) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /^image/i;

      _classCallCheck(this, DragDrop);

      var disable;
      this.onDrop = this.onDrop.bind(this);
      this.callback = callback;
      this.context = context;
      this.filter = filter;
      disable = function disable(event) {
        event.stopPropagation();
        return event.preventDefault();
      };
      this.context.addEventListener('dragleave', disable);
      this.context.addEventListener('dragenter', disable);
      this.context.addEventListener('dragover', disable);
      this.context.addEventListener('drop', this.onDrop, false);
    }

    _createClass(DragDrop, [{
      key: 'onDrop',
      value: function onDrop(event) {
        var _this = this;

        var file, reader;
        event.stopPropagation();
        event.preventDefault();
        file = event.dataTransfer.files[0];
        if (this.filter.test(file.type)) {
          reader = new FileReader();
          reader.onload = function (event) {
            return typeof _this.callback === "function" ? _this.callback(event.target.result) : void 0;
          };
          return reader.readAsDataURL(file);
        }
      }
    }]);

    return DragDrop;
  }();

  // Init kaleidoscope
  image = new Image();

  image.onload = function () {
    return kaleidoscope.draw();
  };

  image.src = 'dist/img/home/rose-kaleidoscope.png';

  kaleidoscope = new Kaleidoscope({
    image: image,
    slices: 20
  });

  kaleidoscope.domElement.style.display = 'flex';

  element.appendChild(kaleidoscope.domElement);

  // Init drag & drop
  dragger = new DragDrop(function (data) {
    return kaleidoscope.image.src = data;
  });

  // Mouse events
  tx = kaleidoscope.offsetX;

  ty = kaleidoscope.offsetY;

  tr = kaleidoscope.offsetRotation;

  onMouseMoved = function onMouseMoved(event) {
    var cx, cy, dx, dy, hx, hy;
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
    dx = event.pageX / window.innerWidth;
    dy = event.pageY / window.innerHeight;
    hx = dx - 0.5;
    hy = dy - 0.5;
    tx = hx * kaleidoscope.radius * -2;
    ty = hy * kaleidoscope.radius * 2;
    return tr = Math.atan2(hy, hx);
  };

  window.addEventListener('mousemove', onMouseMoved, false);

  // Init
  options = {
    interactive: true,
    ease: 0.1
  };

  (_update = function update() {
    var delta, theta;
    if (options.interactive) {
      delta = tr - kaleidoscope.offsetRotation;
      theta = Math.atan2(Math.sin(delta), Math.cos(delta));
      kaleidoscope.offsetX += (tx - kaleidoscope.offsetX) * options.ease;
      kaleidoscope.offsetY += (ty - kaleidoscope.offsetY) * options.ease;
      kaleidoscope.offsetRotation += (theta - kaleidoscope.offsetRotation) * options.ease;
      kaleidoscope.draw();
    }
    return setTimeout(_update, 1000 / 60);
  })();

  onChange = function onChange() {
    kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
    kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
    options.interactive = false;
    return kaleidoscope.draw();
  };

  return kaleidoscope;
}.bind(undefined);

// made the kaleidoscope IFFY into a callable fn
// called it from vue mounted lifecycle hook, feeding in the element to put it in, from a vue ref
// modified the kaleidoscope code to make it's image property available, so we can change the image src from the outside
// in homeCOmponent, watched the chosenCrystal data (which changes when you mouse over a crystal big dot)
// when chosenCrystal changes, tell the kaleidoscope's image's src to change to the homeKaleidoscope prop of the chosenCrystal object in the crystal data (from app.js)
//# sourceMappingURL=kaleidoscope.js.map
