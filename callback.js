//JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invokeCallbackWithDelay(callback) {
    setTimeout(callback, 2000);
  }
  
  function myCallback() {
    console.log("Callback invoked after 2 seconds!");
  }
  
  invokeCallbackWithDelay(myCallback);
  
  
  
