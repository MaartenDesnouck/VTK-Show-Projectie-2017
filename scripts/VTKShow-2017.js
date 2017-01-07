// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

var options = {
  // See: http://sequencejs.com/documentation/#options
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  preloader: true,
  fadeStepWhenSkipped: true,
  reverseWhenNavigatingBackwards: true,
  startingStepAnimatesIn: true,
  reverseTimingFunctionWhenNavigatingBackwards: true,
  //TODO check autoplay options
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
