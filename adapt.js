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
  }
}
