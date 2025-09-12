var wms_layers = [];


    var projection_NationalMapscolor_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_NationalMapscolor_0 = projection_NationalMapscolor_0.getExtent();
    var size_NationalMapscolor_0 = ol.extent.getWidth(projectionExtent_NationalMapscolor_0) / 256;
    var resolutions_NationalMapscolor_0 = new Array(14);
    var matrixIds_NationalMapscolor_0 = new Array(14);
    for (var z = 0; z < 25; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_NationalMapscolor_0[z] = size_NationalMapscolor_0 / Math.pow(2, z);
        matrixIds_NationalMapscolor_0[z] = z;
    }
    var lyr_NationalMapscolor_0 = new ol.layer.Tile({
                            source: new ol.source.XYZ(({
                                url: "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                                attributions: '© <a href="https://www.swisstopo.admin.ch/">Swisstopo</a>',

              projection: projection_NationalMapscolor_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_NationalMapscolor_0),
                resolutions: resolutions_NationalMapscolor_0,
                matrixIds: matrixIds_NationalMapscolor_0
              }),
              style: 'ch.swisstopo.pixelkarte-farbe',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Landeskarte',
                            opacity: 1.0,
                            
                            
                          });
var lyr_winternationalmap_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.geo.admin.ch/?VERSION%3D2.0.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-farbe-winter",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landeskarte Winter',
                            popuplayertitle: 'winter national map',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_winternationalmap_1, 0]);
var format_Datenstand_Kantone_2 = new ol.format.GeoJSON();
var features_Datenstand_Kantone_2 = format_Datenstand_Kantone_2.readFeatures(json_Datenstand_Kantone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datenstand_Kantone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datenstand_Kantone_2.addFeatures(features_Datenstand_Kantone_2);
var lyr_Datenstand_Kantone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datenstand_Kantone_2,
maxResolution:2000,
 minResolution:100,

                style: style_Datenstand_Kantone_2,
                popuplayertitle: 'Datenstand_Kantone',
                interactive: false,
    title: 'Datenstand_Kantone<br />\
    <img src="styles/legend/Datenstand_Kantone_2_0.png" /> ChmOnly = 0<br />\
    <img src="styles/legend/Datenstand_Kantone_2_1.png" /> ChmOnly = 1<br />' });
var format_Schneeschuhwanderwege_3 = new ol.format.GeoJSON();
var features_Schneeschuhwanderwege_3 = format_Schneeschuhwanderwege_3.readFeatures(json_Schneeschuhwanderwege_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schneeschuhwanderwege_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schneeschuhwanderwege_3.addFeatures(features_Schneeschuhwanderwege_3);
var lyr_Schneeschuhwanderwege_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schneeschuhwanderwege_3, 
                style: style_Schneeschuhwanderwege_3,
                popuplayertitle: 'Schneeschuhwanderwege',
                interactive: true,
    title: 'Schneeschuhwanderwege<br />\
    <img src="styles/legend/Schneeschuhwanderwege_3_0.png" /> IsCHM = 0<br />\
    <img src="styles/legend/Schneeschuhwanderwege_3_1.png" /> IsCHM = 1<br />' });
var format_Datenstand_Kantone_4 = new ol.format.GeoJSON();
var features_Datenstand_Kantone_4 = format_Datenstand_Kantone_4.readFeatures(json_Datenstand_Kantone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datenstand_Kantone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datenstand_Kantone_4.addFeatures(features_Datenstand_Kantone_4);
var lyr_Datenstand_Kantone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datenstand_Kantone_4,
maxResolution:2000,
 minResolution:100,

                style: style_Datenstand_Kantone_4,
                popuplayertitle: 'Datenstand_Kantone',
                interactive: false,
    title: 'Datenstand_Kantone<br />\
    <img src="styles/legend/Datenstand_Kantone_4_0.png" /> ChmOnly = 0<br />\
    <img src="styles/legend/Datenstand_Kantone_4_1.png" /> ChmOnly = 1<br />' });
var format_Winterwanderwege_5 = new ol.format.GeoJSON();
var features_Winterwanderwege_5 = format_Winterwanderwege_5.readFeatures(json_Winterwanderwege_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Winterwanderwege_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Winterwanderwege_5.addFeatures(features_Winterwanderwege_5);
var lyr_Winterwanderwege_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Winterwanderwege_5, 
                style: style_Winterwanderwege_5,
                popuplayertitle: 'Winterwanderwege',
                interactive: true,
    title: 'Winterwanderwege<br />\
    <img src="styles/legend/Winterwanderwege_5_0.png" /> IsCHM = 0<br />\
    <img src="styles/legend/Winterwanderwege_5_1.png" /> IsCHM = 1<br />' });
var group_Winterwanderwege = new ol.layer.Group({
                                layers: [lyr_Datenstand_Kantone_4,lyr_Winterwanderwege_5,],
                                fold: 'close',
                                title: 'Winterwanderwege'});
var group_Schneeschuhwanderwege = new ol.layer.Group({
                                layers: [lyr_Datenstand_Kantone_2,lyr_Schneeschuhwanderwege_3,],
                                fold: 'close',
                                title: 'Schneeschuhwanderwege'});

lyr_NationalMapscolor_0.setVisible(true);lyr_winternationalmap_1.setVisible(true);lyr_Datenstand_Kantone_2.setVisible(true);lyr_Schneeschuhwanderwege_3.setVisible(true);lyr_Datenstand_Kantone_4.setVisible(true);lyr_Winterwanderwege_5.setVisible(true);
var layersList = [lyr_NationalMapscolor_0,lyr_winternationalmap_1,group_Schneeschuhwanderwege,group_Winterwanderwege];
lyr_Datenstand_Kantone_2.set('fieldAliases', {'fid': 'fid', 'uuid': 'uuid', 'herkunft': 'herkunft', 'objektart': 'objektart', 'kantonsnummer': 'kantonsnummer', 'kantonsflaeche': 'kantonsflaeche', 'name': 'name', 'icc': 'icc', 'ChmOnly': 'ChmOnly', });
lyr_Schneeschuhwanderwege_3.set('fieldAliases', {'fid': 'fid', 'NameR': 'Route', 'NrR': 'Nr.', 'BeschreibR': 'Von - Bis', 'LaengeR': 'Distanz', 'HoeheAufR': 'Aufstieg', 'HoeheAbR': 'Abstieg', 'ZeitStZiR': 'geschätzte Wanderzeit', 'TechnikR': 'Schwierigkeit', 'ChmURL_de': 'Link', 'ChmURL_fr': 'ChmURL_fr', 'ChmURL_en': 'ChmURL_en', 'ChmURL_it': 'ChmURL_it', 'ChmURL_rm': 'ChmURL_rm', 'LVRoute_ID': 'LVRoute_ID', 'NrR_ID': 'NrR_ID', 'KonditionR': 'KonditionR', 'Richtung': 'Richtung', 'Routenart': 'Routenart', 'ZeitZiStR': 'ZeitZiStR', 'Traeger': 'Traeger', 'IsCHM': 'IsCHM', });
lyr_Datenstand_Kantone_4.set('fieldAliases', {'fid': 'fid', 'uuid': 'uuid', 'herkunft': 'herkunft', 'objektart': 'objektart', 'kantonsnummer': 'kantonsnummer', 'kantonsflaeche': 'kantonsflaeche', 'name': 'name', 'icc': 'icc', 'ChmOnly': 'ChmOnly', });
lyr_Winterwanderwege_5.set('fieldAliases', {'fid': 'fid', 'NameR': 'Route', 'NrR': 'Nr.', 'BeschreibR': 'Von - Bis', 'LaengeR': 'Distanz', 'HoeheAufR': 'Aufstieg', 'HoeheAbR': 'Abstieg', 'ZeitStZiR': 'Geschätzte Wanderzeit', 'ChmURL_de': 'Link', 'ChmURL_fr': 'ChmURL_fr', 'ChmURL_en': 'ChmURL_en', 'ChmURL_it': 'ChmURL_it', 'ChmURL_rm': 'ChmURL_rm', 'LVRoute_ID': 'LVRoute_ID', 'NrR_ID': 'NrR_ID', 'KonditionR': 'KonditionR', 'Richtung': 'Richtung', 'Routenart': 'Routenart', 'ZeitZiStR': 'ZeitZiStR', 'Traeger': 'Traeger', 'IsCHM': 'IsCHM', });
lyr_Datenstand_Kantone_2.set('fieldImages', {'fid': 'TextEdit', 'uuid': 'TextEdit', 'herkunft': 'TextEdit', 'objektart': 'TextEdit', 'kantonsnummer': 'Range', 'kantonsflaeche': 'TextEdit', 'name': 'TextEdit', 'icc': 'TextEdit', 'ChmOnly': 'Range', });
lyr_Schneeschuhwanderwege_3.set('fieldImages', {'fid': 'TextEdit', 'NameR': 'TextEdit', 'NrR': 'TextEdit', 'BeschreibR': 'TextEdit', 'LaengeR': 'TextEdit', 'HoeheAufR': 'Range', 'HoeheAbR': 'Range', 'ZeitStZiR': 'Range', 'TechnikR': 'TextEdit', 'ChmURL_de': 'TextEdit', 'ChmURL_fr': 'TextEdit', 'ChmURL_en': 'TextEdit', 'ChmURL_it': 'TextEdit', 'ChmURL_rm': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'NrR_ID': 'TextEdit', 'KonditionR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'ZeitZiStR': 'Range', 'Traeger': 'TextEdit', 'IsCHM': 'Range', });
lyr_Datenstand_Kantone_4.set('fieldImages', {'fid': 'TextEdit', 'uuid': 'TextEdit', 'herkunft': 'TextEdit', 'objektart': 'TextEdit', 'kantonsnummer': 'Range', 'kantonsflaeche': 'TextEdit', 'name': 'TextEdit', 'icc': 'TextEdit', 'ChmOnly': 'Range', });
lyr_Winterwanderwege_5.set('fieldImages', {'fid': 'TextEdit', 'NameR': 'TextEdit', 'NrR': 'TextEdit', 'BeschreibR': 'TextEdit', 'LaengeR': 'TextEdit', 'HoeheAufR': 'Range', 'HoeheAbR': 'Range', 'ZeitStZiR': 'Range', 'ChmURL_de': 'TextEdit', 'ChmURL_fr': 'TextEdit', 'ChmURL_en': 'TextEdit', 'ChmURL_it': 'TextEdit', 'ChmURL_rm': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'NrR_ID': 'TextEdit', 'KonditionR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'ZeitZiStR': 'Range', 'Traeger': 'TextEdit', 'IsCHM': 'Range', });
lyr_Datenstand_Kantone_2.set('fieldLabels', {'fid': 'no label', 'uuid': 'no label', 'herkunft': 'no label', 'objektart': 'no label', 'kantonsnummer': 'no label', 'kantonsflaeche': 'no label', 'name': 'no label', 'icc': 'no label', 'ChmOnly': 'no label', });
lyr_Schneeschuhwanderwege_3.set('fieldLabels', {'fid': 'hidden field', 'NameR': 'header label - always visible', 'NrR': 'inline label - visible with data', 'BeschreibR': 'inline label - always visible', 'LaengeR': 'inline label - always visible', 'HoeheAufR': 'inline label - always visible', 'HoeheAbR': 'inline label - always visible', 'ZeitStZiR': 'inline label - always visible', 'TechnikR': 'inline label - always visible', 'ChmURL_de': 'inline label - visible with data', 'ChmURL_fr': 'hidden field', 'ChmURL_en': 'hidden field', 'ChmURL_it': 'hidden field', 'ChmURL_rm': 'hidden field', 'LVRoute_ID': 'hidden field', 'NrR_ID': 'hidden field', 'KonditionR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'ZeitZiStR': 'hidden field', 'Traeger': 'hidden field', 'IsCHM': 'hidden field', });
lyr_Datenstand_Kantone_4.set('fieldLabels', {'fid': 'no label', 'uuid': 'no label', 'herkunft': 'no label', 'objektart': 'no label', 'kantonsnummer': 'no label', 'kantonsflaeche': 'no label', 'name': 'no label', 'icc': 'no label', 'ChmOnly': 'no label', });
lyr_Winterwanderwege_5.set('fieldLabels', {'fid': 'hidden field', 'NameR': 'header label - always visible', 'NrR': 'inline label - visible with data', 'BeschreibR': 'inline label - always visible', 'LaengeR': 'inline label - always visible', 'HoeheAufR': 'inline label - always visible', 'HoeheAbR': 'inline label - always visible', 'ZeitStZiR': 'inline label - always visible', 'ChmURL_de': 'inline label - visible with data', 'ChmURL_fr': 'hidden field', 'ChmURL_en': 'hidden field', 'ChmURL_it': 'hidden field', 'ChmURL_rm': 'hidden field', 'LVRoute_ID': 'hidden field', 'NrR_ID': 'hidden field', 'KonditionR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'ZeitZiStR': 'hidden field', 'Traeger': 'hidden field', 'IsCHM': 'hidden field', });
lyr_Winterwanderwege_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});