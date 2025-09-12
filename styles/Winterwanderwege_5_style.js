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
    let originalStyles = style_Winterwanderwege_5(feature, resolution);

    let colorOuter = document.getElementById('colorWinter')?.value || "#ce059c";
    let colorInner = document.getElementById('colorWinterInner')?.value || "#ff84ff";
    let opacity = parseFloat(document.getElementById('opacityWinter')?.value || 0.8);

    // Read width values
    let innerCHM1 = parseFloat(document.getElementById('innerCHM1')?.value);
    let outerCHM1 = parseFloat(document.getElementById('outerCHM1')?.value);
    let innerCHM0 = parseFloat(document.getElementById('innerCHM0')?.value);
    let outerCHM0 = parseFloat(document.getElementById('outerCHM0')?.value);

    let adjustedStyles = originalStyles.map((s, index) => {
        // Determine width based on IsCHM and inner/outer
        let width;
        if (feature.get("IsCHM") === 1) {
            width = index === 0 ? outerCHM1 : innerCHM1;
        } else {
            width = index === 0 ? outerCHM0 : innerCHM0;
        }

        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: index === 0 ? `rgba(${hexToRgb(colorOuter)}, ${opacity})`
                                   : `rgba(${hexToRgb(colorInner)}, ${opacity})`,
                width: width,
                lineCap: s.getStroke().getLineCap(),
                lineJoin: s.getStroke().getLineJoin(),
                lineDash: s.getStroke().getLineDash()
            }),
            text: s.getText()
        });
    });

    return adjustedStyles;
}




