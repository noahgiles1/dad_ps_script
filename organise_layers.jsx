#target photoshop

var doc = app.activeDocument;
var layer = doc.activeLayer;
var group = layer.parent.layers;
var newLayerSet = doc.layerSets.add();


function duplicateGroup() {

}

function switchLayer(i) {
  doc.activeLayer = group[i];
  layer = doc.activeLayer;
}

function moveLayer() {
  layer.move(newLayerSet, ElementPlacement.INSIDE);
}


for(var i = 0; i < group.length; i++) {
  moveLayer();
  if(i + 1 >= group.length){
    break;
  }
  switchLayer(1);
}
