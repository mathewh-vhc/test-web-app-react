

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
    console.log('calling');
    const result = await resolveAfter2Seconds();
    RenderObject = window.RenderObject
    UpdateObject = window.UpdateObject;
    console.log(result);
}
  
asyncCall();


Input.addEventListener('change', (eve)=>{
    //Need to add a render check
    if (UpdateObject) {
        UpdateObject(Input.checked)
    }
})

Button.addEventListener('click', (eve)=>{
    //Need to add a render check
    console.log("rendering")
    if (RenderObject) {
        RenderObject()
    }
})