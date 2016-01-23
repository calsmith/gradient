var NUM_GRADIENTS = 100;
generateGradients(NUM_GRADIENTS);
startAnimating();

function onClick() {
  var el = document.body;
  var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
  || el.mozRequestFullScreen || el.msRequestFullScreen;
  if (requestMethod) requestMethod.call(el);
}

document.onkeydown = function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
	 	transitionTime = (transitionTime < 30 ? transitionTime + 0.5 : transitionTime);
    } else if (e.keyCode == '40') {
	 	transitionTime = (transitionTime > 0.5 ? transitionTime - 0.5 : transitionTime);
    }
        
    console.log(transitionTime);
    stepsTotal = Math.round(transitionTime * fps);
}