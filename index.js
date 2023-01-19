

let Input = document.createElement('input')
Input.type = "checkbox"
Input.id = "TestInput"
document.getElementById('body').appendChild(Input)

let Button = document.createElement('button')
Button.innerText = "Click to render!"
Button.id = "TestButton"
document.getElementById('body').appendChild(Button)

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
}
var UpdateObject = undefined;
var RenderObject = undefined;
async function asyncCall() {
    const result = await resolveAfter2Seconds();
    RenderObject = window.RenderObject
    UpdateObject = window.UpdateObject;
    console.log(result);
}
  
asyncCall();


Input.addEventListener('change', (eve)=>{
    //Need to add a render check - check if the element exists in the dom, or add a flag
    if (UpdateObject) {
        UpdateObject(Input.checked)
    }
})

Button.addEventListener('click', (eve)=>{
    if (RenderObject) {
        RenderObject()
    }
    Button.style.display = "none"
})