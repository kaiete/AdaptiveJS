const adapts = new Array()
const adaptDefinitions = new Array()
var adapt = {
  add : function(adapt,def) {
    adapts.push(adapt)
    adaptDefinitions.push(def)
  },
  get : function(adaptToUse) {
    let currentAdapt = adapts.indexOf(adaptToUse)
    return adaptDefinitions[currentAdapt]
  },
  run : function(adaptToRun) {
    let currentAdapt = adapts.indexOf(adaptToRun)
    try {
      setTimeout(adaptDefinitions[currentAdapt],1)
    } catch (adapterror) {
      console.error("AdaptError: adaptivejs ran in to an error in your code (" + adapterror + ") is all we know. If you made this website, check the code, and if you didn't, then tell the developer of this site.")
      return false
    }
  },
  getstart : function(adaptToUse,start) {
    let currentAdapt = adapts.indexOf(adaptToUse,start)
    return adaptDefinitions[currentAdapt]
  },
  clone : function() {
    //yes, I'm obsessed with cloning adaptivejs / other things
    this.didthatreallywork = false
  }
}
