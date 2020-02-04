var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BAS_LIM_DEPARTAMENTO_1 = new ol.format.GeoJSON();
var features_BAS_LIM_DEPARTAMENTO_1 = format_BAS_LIM_DEPARTAMENTO_1.readFeatures(json_BAS_LIM_DEPARTAMENTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAS_LIM_DEPARTAMENTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAS_LIM_DEPARTAMENTO_1.addFeatures(features_BAS_LIM_DEPARTAMENTO_1);
var lyr_BAS_LIM_DEPARTAMENTO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAS_LIM_DEPARTAMENTO_1, 
                style: style_BAS_LIM_DEPARTAMENTO_1,
                interactive: true,
                title: '<img src="styles/legend/BAS_LIM_DEPARTAMENTO_1.png" /> BAS_LIM_DEPARTAMENTO'
            });
var lyr_Lagothrix_flavicauda_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Lagothrix_flavicauda",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Lagothrix_flavicauda_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10018754.171395, -3503549.843504, -6679169.447596, 0.000000]
                            })
                        });
var format_Lagothrixflavicauda_3 = new ol.format.GeoJSON();
var features_Lagothrixflavicauda_3 = format_Lagothrixflavicauda_3.readFeatures(json_Lagothrixflavicauda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagothrixflavicauda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagothrixflavicauda_3.addFeatures(features_Lagothrixflavicauda_3);
var lyr_Lagothrixflavicauda_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagothrixflavicauda_3, 
                style: style_Lagothrixflavicauda_3,
                interactive: true,
                title: '<img src="styles/legend/Lagothrixflavicauda_3.png" /> Lagothrix flavicauda'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BAS_LIM_DEPARTAMENTO_1.setVisible(true);lyr_Lagothrix_flavicauda_2.setVisible(true);lyr_Lagothrixflavicauda_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BAS_LIM_DEPARTAMENTO_1,lyr_Lagothrix_flavicauda_2,lyr_Lagothrixflavicauda_3];
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_Lagothrixflavicauda_3.set('fieldAliases', {'gbifID': 'gbifID', 'datasetKey': 'datasetKey', 'occurrence': 'occurrence', 'kingdom': 'kingdom', 'phylum': 'phylum', 'class': 'class', 'order': 'order', 'family': 'family', 'genus': 'genus', 'species': 'species', 'infraspeci': 'infraspeci', 'taxonRank': 'taxonRank', 'scientific': 'scientific', 'verbatimSc': 'verbatimSc', 'verbatim_1': 'verbatim_1', 'countryCod': 'countryCod', 'locality': 'locality', 'stateProvi': 'stateProvi', 'occurren_1': 'occurren_1', 'individual': 'individual', 'publishing': 'publishing', 'decimalLat': 'decimalLat', 'decimalLon': 'decimalLon', 'coordinate': 'coordinate', 'coordina_1': 'coordina_1', 'elevation': 'elevation', 'elevationA': 'elevationA', 'depth': 'depth', 'depthAccur': 'depthAccur', 'eventDate': 'eventDate', 'day': 'day', 'month': 'month', 'year': 'year', 'taxonKey': 'taxonKey', 'speciesKey': 'speciesKey', 'basisOfRec': 'basisOfRec', 'institutio': 'institutio', 'collection': 'collection', 'catalogNum': 'catalogNum', 'recordNumb': 'recordNumb', 'identified': 'identified', 'dateIdenti': 'dateIdenti', 'license': 'license', 'rightsHold': 'rightsHold', 'recordedBy': 'recordedBy', 'typeStatus': 'typeStatus', 'establishm': 'establishm', 'lastInterp': 'lastInterp', 'mediaType': 'mediaType', 'issue': 'issue', 'field_51': 'field_51', });
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Lagothrixflavicauda_3.set('fieldImages', {'gbifID': 'TextEdit', 'datasetKey': 'TextEdit', 'occurrence': 'TextEdit', 'kingdom': 'TextEdit', 'phylum': 'TextEdit', 'class': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'genus': 'TextEdit', 'species': 'TextEdit', 'infraspeci': 'TextEdit', 'taxonRank': 'TextEdit', 'scientific': 'TextEdit', 'verbatimSc': 'TextEdit', 'verbatim_1': 'TextEdit', 'countryCod': 'TextEdit', 'locality': 'TextEdit', 'stateProvi': 'TextEdit', 'occurren_1': 'TextEdit', 'individual': 'TextEdit', 'publishing': 'TextEdit', 'decimalLat': 'TextEdit', 'decimalLon': 'TextEdit', 'coordinate': 'TextEdit', 'coordina_1': 'TextEdit', 'elevation': 'TextEdit', 'elevationA': 'TextEdit', 'depth': 'TextEdit', 'depthAccur': 'TextEdit', 'eventDate': 'TextEdit', 'day': 'TextEdit', 'month': 'TextEdit', 'year': 'TextEdit', 'taxonKey': 'TextEdit', 'speciesKey': 'TextEdit', 'basisOfRec': 'TextEdit', 'institutio': 'TextEdit', 'collection': 'TextEdit', 'catalogNum': 'TextEdit', 'recordNumb': 'TextEdit', 'identified': 'TextEdit', 'dateIdenti': 'TextEdit', 'license': 'TextEdit', 'rightsHold': 'TextEdit', 'recordedBy': 'TextEdit', 'typeStatus': 'TextEdit', 'establishm': 'TextEdit', 'lastInterp': 'TextEdit', 'mediaType': 'TextEdit', 'issue': 'TextEdit', 'field_51': 'TextEdit', });
lyr_BAS_LIM_DEPARTAMENTO_1.set('fieldLabels', {'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_Lagothrixflavicauda_3.set('fieldLabels', {'gbifID': 'no label', 'datasetKey': 'no label', 'occurrence': 'no label', 'kingdom': 'no label', 'phylum': 'no label', 'class': 'no label', 'order': 'no label', 'family': 'no label', 'genus': 'no label', 'species': 'no label', 'infraspeci': 'no label', 'taxonRank': 'no label', 'scientific': 'no label', 'verbatimSc': 'no label', 'verbatim_1': 'no label', 'countryCod': 'no label', 'locality': 'no label', 'stateProvi': 'no label', 'occurren_1': 'no label', 'individual': 'no label', 'publishing': 'no label', 'decimalLat': 'no label', 'decimalLon': 'no label', 'coordinate': 'no label', 'coordina_1': 'no label', 'elevation': 'no label', 'elevationA': 'no label', 'depth': 'no label', 'depthAccur': 'no label', 'eventDate': 'no label', 'day': 'no label', 'month': 'no label', 'year': 'no label', 'taxonKey': 'no label', 'speciesKey': 'no label', 'basisOfRec': 'no label', 'institutio': 'no label', 'collection': 'no label', 'catalogNum': 'no label', 'recordNumb': 'no label', 'identified': 'no label', 'dateIdenti': 'no label', 'license': 'no label', 'rightsHold': 'no label', 'recordedBy': 'no label', 'typeStatus': 'no label', 'establishm': 'no label', 'lastInterp': 'no label', 'mediaType': 'no label', 'issue': 'no label', 'field_51': 'no label', });
lyr_Lagothrixflavicauda_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});