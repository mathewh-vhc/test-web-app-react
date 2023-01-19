
console.log("jsx!")
function LikeButton(props) {
  console.log("Liked from object props:",props.liked)
  const [liked, setLiked] = React.useState(false);

  if (props.liked && liked) {
    return 'You liked this!';
  }

  return (
    <button onClick={() => {
        setLiked(true)
      }}>
      Like
    </button>
  );
}
var root = null
var rootNode = null;
function RenderObject() {
  rootNode = document.getElementById('like_button_root');
  root = ReactDOM.createRoot(rootNode);
  UpdateObject()
}



function UpdateObject(liked = false) {
  console.log("Rendering", liked)
  root.render(<LikeButton liked={liked}/>);
}


window.RenderObject = RenderObject
window.UpdateObject = UpdateObject