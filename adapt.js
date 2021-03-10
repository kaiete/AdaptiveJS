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
    eval(adaptDefinitions[currentAdapt])
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
