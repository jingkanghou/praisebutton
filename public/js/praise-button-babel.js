'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton(parent) {
    _classCallCheck(this, PraiseButton);

    this._button = document.createElement('div');
    this._praiseCount = 0;
    this._incEventHandle = null;
    this._button.innerHTML = '';
    this._incPraiseThrottle = this._throttle(this.incPraise, 1000, this);

    this._setWidth(100);

    parent.appendChild(this._button);
  }

  _createClass(PraiseButton, [{
    key: 'init',
    value: function init(initCount) {
      this._praiseCount = initCount;
      this._button.innerHTML = this._praiseCount;

      this._button.addEventListener('click', this._incPraiseThrottle);
    }

    //节流，函数式

  }, {
    key: '_throttle',
    value: function _throttle(fn, delay, context) {
      var timer = void 0;
      var lastCall = 0;
      return function () {
        var now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        fn.call.apply(fn, [context].concat(args));
      };
    }
  }, {
    key: 'incPraise',
    value: function incPraise() {
      this._praiseCount++;
      this._button.innerHTML = this._praiseCount;

      if (this._incEventHandle != null) {
        this._incEventHandle();
      }
    }
  }, {
    key: '_setWidth',
    value: function _setWidth(width) {
      this._buttonWidth = width;
      this._button.style.width = width + 'px';
      this._button.style.height = width + 'px';
      this._button.style.lineHeight = width * 1.3 + 'px';
      this._button.style.textAlign = 'center';
    }
  }, {
    key: 'praiseCount',
    get: function get() {
      return this._praiseCount;
    }
  }, {
    key: 'buttonWidth',
    get: function get() {
      return this._buttonWidth;
    },
    set: function set(value) {
      this._setWidth(value);
    }
  }, {
    key: 'incEventHandle',
    get: function get() {
      return this._incEventHandle;
    },
    set: function set(fn) {
      this._incEventHandle = fn;
    }
  }]);

  return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(parent) {
    _classCallCheck(this, Thumb);

    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, parent));

    _this._button.style.background = '50% 50%/100% 100% url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QAAKqNIzIAAAAHdElNRQfeBBgWCDqSs4I3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTExLTEyVDEwOjMzOjU3KzA4OjAwCgoQwAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNC0yNFQyMjowODo1OCswODowMJK+/C8AAABNdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDcuMC4xLTYgUTE2IHg4Nl82NCAyMDE2LTA5LTE3IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3dmlTgAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC40LCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgDkmD4wAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMjQ5YGdoyQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyNjZRH0eHAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzOTgzNDg1MzjxpYr7AAAAEnRFWHRUaHVtYjo6U2l6ZQA1LjA4S0JKukhJAAAAX3RFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS93d3dyb290L3NpdGUvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTUwMC8xMTUwMDQzLnBuZ2/J8CMAAA/PSURBVHhe7Z15bFXFF8eHB0qRUiiIgAJuKIIgiLjFgguuAdMAGv8w4IIokGg1uBvllxCjKAi4gQnRRI1/CBIQ9wWjVkGMooCC1gUpWtkRUECQ+c33MPPS9k3fm3OXR/vufJJv3nsDvX29587MmZkzZ5pJhfAEZvPmzfS6ceNGsWHDBvHTTz+RwK5du0SzZs1Ey5YtRbt27aisX79+4tRTTxWdOnUSxcXFVBYn3sAB+Oeff8SaNWvEu+++K958800qW7t2rfj333/JqLt376ay2qRSKXotKSkhY5922mmirKxMXHHFFVTes2dPcdhhh9H7KPEGdmT79u1iwYIF9P71118Xn3/+OdXYsHTt2pVeL730UnHttdeKQYMGRWtoGNiTnWXLlsny8nKpbjwJty0OlZaWyoqKCqmaeFIUeANnYdu2bXLatGny2GOPtRokLvXt25ekugD9TYLjDWzh119/JY0YMUK2aNHCaoR86KSTTpKVlZX6WwXD98H1+PPPP8X48ePpvelzDyWnn366eOWVV8Qpp5yiS5iQmT3Eli1b5HXXXSfV0IaE29MYhP5fPXgkLt7AmqeeeipWByqsmjdvTrrnnnvknj179LfOTeINvGrVKhL6O9uNDSI15q2jKFuDoqIi+cwzz8j//vtP/wXZSXQfjImJ2267jd4/99xz9BoUjF0xWYFx7ODBg6nswIEDQtU20sqVK6ns7bffFr/99hu9D8oJJ5wgFi5cKPr06aNLskBmTiiLFi2Sbdu2JeFWcAUPe+TIkaS5c+fKdevWSWVUffW6oMZBaC0eeugh2atXL+s1XYRWYfbs2frK2UmsgTds2CBVbbPeQBehv0Z/uH37dhKXqqoqeckll1iv7aI77riDHqaGHihDYg08ZcoUclpsNy+XWrduLSdPnix3796trxYMGFk15yTb78mm8847T27dupWUjUQaePny5YFmp9AkQw8//LDcv3+/vlo45s+fT+JOqHTp0kWuXr2alI2DSxwJAw5KEEfnwgsvJI0bN06o2q9Lw4GlQ0g9cLrEjW3btomvv/6alI1EGXjLli2kt956S5e406FDB3H33XeT2rdvr0vD061bt7Q4wDNfsWIFKRuJMvAXX3xBUs2aLnFn1KhR4oILLiBFCYZXRlzwd0BYg26IxBhYDVHEO++8Q9q5c6cudQNRGLfeeqtQ/SQpSvC9jLjs3buXhPF2QyTGwH/88Yd47733SBwQcjN27FiaXIgD5aylxeXoo48mFRUV6ZJMEmPgxYsXi19++YXE4fjjjxdqvKo/RQ9m04y4wBeADj/8cF2SSSIMjNrx2WefiX379pE4qPFmbLUXoP+E/v77b13izhFHHEHKRiIMvGPHjpzDCRvob4cN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)';
    return _this;
  }

  return Thumb;
}(PraiseButton);

///export default PraiseButton;
// export class Thumb extends PraiseButton{
//   constructor(parent) {
//     super(parent);
//     this._button.style.background = '50% 50%/100% 100% url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QAAKqNIzIAAAAHdElNRQfeBBgWCDqSs4I3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTExLTEyVDEwOjMzOjU3KzA4OjAwCgoQwAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNC0yNFQyMjowODo1OCswODowMJK+/C8AAABNdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDcuMC4xLTYgUTE2IHg4Nl82NCAyMDE2LTA5LTE3IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3dmlTgAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC40LCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgDkmD4wAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMjQ5YGdoyQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyNjZRH0eHAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzOTgzNDg1MzjxpYr7AAAAEnRFWHRUaHVtYjo6U2l6ZQA1LjA4S0JKukhJAAAAX3RFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS93d3dyb290L3NpdGUvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTUwMC8xMTUwMDQzLnBuZ2/J8CMAAA/PSURBVHhe7Z15bFXFF8eHB0qRUiiIgAJuKIIgiLjFgguuAdMAGv8w4IIokGg1uBvllxCjKAi4gQnRRI1/CBIQ9wWjVkGMooCC1gUpWtkRUECQ+c33MPPS9k3fm3OXR/vufJJv3nsDvX29587MmZkzZ5pJhfAEZvPmzfS6ceNGsWHDBvHTTz+RwK5du0SzZs1Ey5YtRbt27aisX79+4tRTTxWdOnUSxcXFVBYn3sAB+Oeff8SaNWvEu+++K958800qW7t2rfj333/JqLt376ay2qRSKXotKSkhY5922mmirKxMXHHFFVTes2dPcdhhh9H7KPEGdmT79u1iwYIF9P71118Xn3/+OdXYsHTt2pVeL730UnHttdeKQYMGRWtoGNiTnWXLlsny8nKpbjwJty0OlZaWyoqKCqmaeFIUeANnYdu2bXLatGny2GOPtRokLvXt25ekugD9TYLjDWzh119/JY0YMUK2aNHCaoR86KSTTpKVlZX6WwXD98H1+PPPP8X48ePpvelzDyWnn366eOWVV8Qpp5yiS5iQmT3Eli1b5HXXXSfV0IaE29MYhP5fPXgkLt7AmqeeeipWByqsmjdvTrrnnnvknj179LfOTeINvGrVKhL6O9uNDSI15q2jKFuDoqIi+cwzz8j//vtP/wXZSXQfjImJ2267jd4/99xz9BoUjF0xWYFx7ODBg6nswIEDQtU20sqVK6ns7bffFr/99hu9D8oJJ5wgFi5cKPr06aNLskBmTiiLFi2Sbdu2JeFWcAUPe+TIkaS5c+fKdevWSWVUffW6oMZBaC0eeugh2atXL+s1XYRWYfbs2frK2UmsgTds2CBVbbPeQBehv0Z/uH37dhKXqqoqeckll1iv7aI77riDHqaGHihDYg08ZcoUclpsNy+XWrduLSdPnix3796trxYMGFk15yTb78mm8847T27dupWUjUQaePny5YFmp9AkQw8//LDcv3+/vlo45s+fT+JOqHTp0kWuXr2alI2DSxwJAw5KEEfnwgsvJI0bN06o2q9Lw4GlQ0g9cLrEjW3btomvv/6alI1EGXjLli2kt956S5e406FDB3H33XeT2rdvr0vD061bt7Q4wDNfsWIFKRuJMvAXX3xBUs2aLnFn1KhR4oILLiBFCYZXRlzwd0BYg26IxBhYDVHEO++8Q9q5c6cudQNRGLfeeqtQ/SQpSvC9jLjs3buXhPF2QyTGwH/88Yd47733SBwQcjN27FiaXIgD5aylxeXoo48mFRUV6ZJMEmPgxYsXi19++YXE4fjjjxdqvKo/RQ9m04y4wBeADj/8cF2SSSIMjNrx2WefiX379pE4qPFmbLUXoP+E/v77b13izhFHHEHKRiIMvGPHjpzDCRvob4cN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)';
//   }
// }
