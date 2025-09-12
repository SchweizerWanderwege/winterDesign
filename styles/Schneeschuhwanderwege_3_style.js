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
    let originalStyles = style_Schneeschuhwanderwege_3(feature, resolution);

    let colorOuter = document.getElementById('colorSchnee')?.value || "#7f037f";
    let colorInner = document.getElementById('colorSchneeInner')?.value || "#cc33cc";
    let opacity = parseFloat(document.getElementById('opacitySchnee')?.value || 0.8);

    // Read width values
    let innerCHM1 = parseFloat(document.getElementById('innerCHM1Schnee')?.value);
    let outerCHM1 = parseFloat(document.getElementById('outerCHM1Schnee')?.value);
    let innerCHM0 = parseFloat(document.getElementById('innerCHM0Schnee')?.value);
    let outerCHM0 = parseFloat(document.getElementById('outerCHM0Schnee')?.value);

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
