var size = 0;
var placement = 'point';

var style_Winterwanderwege_5 = function(feature, resolution){
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
    
        function rules_Winterwanderwege_5(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Winterwanderwege_5rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,5,156,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,132,255,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Winterwanderwege_5rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,5,156,0.8)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,132,255,0.8)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4.18}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Winterwanderwege_5(feature, value);
        ;

    return style;
};

function interactiveWinterStyle(feature, resolution) {
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
    let outerWidth = parseFloat(document.getElementById(`ww_outerCHM${isCHM}_${clazz}`).value);
    let innerWidth = parseFloat(document.getElementById(`ww_innerCHM${isCHM}_${clazz}`).value);

    let colorOuter = document.getElementById('colorWinter').value;
    let colorInner = document.getElementById('colorWinterInner').value;
    let opacity = parseFloat(document.getElementById('opacityWinter').value);

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





