var _jsxFileName = "src\\LikeButton.js";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

console.log("jsx!");
function LikeButton(props) {
  console.log("Liked from object props:", props.liked);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1];

  if (props.liked && liked) {
    return 'You liked this!';
  }

  return React.createElement(
    "button",
    { onClick: function onClick() {
        setLiked(true);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    },
    "Like"
  );
}
var root = null;
var rootNode = null;
function RenderObject() {
  rootNode = document.getElementById('like_button_root');
  root = ReactDOM.createRoot(rootNode);
  UpdateObject();
}

function UpdateObject() {
  var liked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  console.log("Rendering", liked);
  root.render(React.createElement(LikeButton, { liked: liked, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
}

window.RenderObject = RenderObject;
window.UpdateObject = UpdateObject;