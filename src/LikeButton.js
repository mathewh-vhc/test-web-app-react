
console.log("jsx!")
function LikeButton(props) {
  const [liked, setLiked] = React.useState(false);

  /**
   * In a full react application, we may do this part slightly differently as we'd only have state in
   * the uppermost parent object and modify state by passing it around as props.
   */
  if (props.liked && liked) {
    return 'You liked this!';
  }

  return (
    <button onClick={() => {
        setLiked(!liked)
        console.log("State after click:",liked)
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
  root.render(<LikeButton liked={liked}/>);
}


window.RenderObject = RenderObject
window.UpdateObject = UpdateObject