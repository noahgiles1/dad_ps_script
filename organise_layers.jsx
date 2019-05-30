#target photoshop

var doc = app.activeDocument;
var layer = doc.activeLayer;
var group = layer.parent.layers;


function duplicateGroup() {

}

function switchLayer(i) {
  doc.activeLayer = group[i];
  layer = doc.activeLayer;
}

function moveLayer() {

}

for(var i = 0; i < group.length) {
  if(i + 1 >= group.length){
    break;
  }
  switchLayer(i+1);
}
