var size = 0;
var placement = 'point';

var style_Schneeschuhwanderwege_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_Schneeschuhwanderwege_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Schneeschuhwanderwege_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,3,127,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,51,204,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Schneeschuhwanderwege_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,3,127,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,51,204,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4.18}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Schneeschuhwanderwege_3(feature, value);
        ;

    return style;
};
function interactiveSchneeStyle(feature, resolution) {
    // Pick resolution class
    let clazz;
    if (resolution < 5) {
        clazz = "class1";
    } else if (resolution < 20) {
        clazz = "class2";
    } else {
        clazz = "class3";
    }

    let isCHM = feature.get("IsCHM");

    // Get widths from the corresponding inputs
    let outerWidth = parseFloat(document.getElementById(`schnee_outerCHM${isCHM}_${clazz}`).value);
    let innerWidth = parseFloat(document.getElementById(`schnee_innerCHM${isCHM}_${clazz}`).value);

    let colorOuter = document.getElementById('colorSchnee').value;
    let colorInner = document.getElementById('colorSchneeInner').value;
    let opacity = parseFloat(document.getElementById('opacitySchnee').value);

    return [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: hexToRgba(colorOuter, opacity),
                width: outerWidth
            })
        }),
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: hexToRgba(colorInner, opacity),
                width: innerWidth
            })
        })
    ];
}

