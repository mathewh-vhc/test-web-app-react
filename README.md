# test-web-app-react

To run, simply start a live server.

Check the console - currently, because I could not get imports to work with babel, I'm placing the Render() and Update() functions on the window. However, index.js must wait for these functions, so it's currently wrapped in an async call. Wait for the call to return and console.log "resolved". Then, hit Render button to show the button on the screen. Clicking "like" will output the state of the object's liked value. Currently, it requires both the checkbox to be clicked and the object's state to be liked to hide the button, so that you can undo it. Hiding/showing and passing initial data is likely the only way we'd want to interact between React components and web app scripts, as we would want to handle most data and actions in the component itself so it translates to a React app easier.

Clicking the button simply inverts the state.

Currently, we're using babel with a script tag in the HTML file, however this isn't advisable as a long term or production solution. I could not get the production ready solution working.

See [here for more information](https://reactjs.org/docs/add-react-to-a-website.html)
