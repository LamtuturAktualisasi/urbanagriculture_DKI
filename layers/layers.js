var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KesesuaianUrbanAgriculture20_1 = new ol.format.GeoJSON();
var features_KesesuaianUrbanAgriculture20_1 = format_KesesuaianUrbanAgriculture20_1.readFeatures(json_KesesuaianUrbanAgriculture20_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianUrbanAgriculture20_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianUrbanAgriculture20_1.addFeatures(features_KesesuaianUrbanAgriculture20_1);
var lyr_KesesuaianUrbanAgriculture20_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianUrbanAgriculture20_1, 
                style: style_KesesuaianUrbanAgriculture20_1,
                popuplayertitle: 'Kesesuaian Urban Agriculture 2.0',
                interactive: true,
    title: 'Kesesuaian Urban Agriculture 2.0<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture20_1_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture20_1_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture20_1_2.png" /> Agak Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture20_1_3.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture20_1_4.png" /> Sangat Sesuai<br />' });
var format_KesesuaianUrbanAgriculture10_2 = new ol.format.GeoJSON();
var features_KesesuaianUrbanAgriculture10_2 = format_KesesuaianUrbanAgriculture10_2.readFeatures(json_KesesuaianUrbanAgriculture10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianUrbanAgriculture10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianUrbanAgriculture10_2.addFeatures(features_KesesuaianUrbanAgriculture10_2);
var lyr_KesesuaianUrbanAgriculture10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianUrbanAgriculture10_2, 
                style: style_KesesuaianUrbanAgriculture10_2,
                popuplayertitle: 'Kesesuaian Urban Agriculture 1.0',
                interactive: true,
    title: 'Kesesuaian Urban Agriculture 1.0<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture10_2_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture10_2_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture10_2_2.png" /> Agak Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture10_2_3.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianUrbanAgriculture10_2_4.png" /> Sangat Sesuai<br />' });
var format_BatasKabupaten_3 = new ol.format.GeoJSON();
var features_BatasKabupaten_3 = format_BatasKabupaten_3.readFeatures(json_BatasKabupaten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_3.addFeatures(features_BatasKabupaten_3);
var lyr_BatasKabupaten_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_3, 
                style: style_BatasKabupaten_3,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_3.png" /> Batas Kabupaten'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KesesuaianUrbanAgriculture20_1.setVisible(true);lyr_KesesuaianUrbanAgriculture10_2.setVisible(true);lyr_BatasKabupaten_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KesesuaianUrbanAgriculture20_1,lyr_KesesuaianUrbanAgriculture10_2,lyr_BatasKabupaten_3];
lyr_KesesuaianUrbanAgriculture20_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kesesuaian': 'Kesesuaian', 'Keterangan': 'Keterangan', 'Ecological': 'Ecological', 'Sosial Dem': 'Sosial Dem', 'Investment': 'Investment', });
lyr_KesesuaianUrbanAgriculture10_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kesesuaian': 'Kesesuaian', 'Keterangan': 'Keterangan', 'Ecological': 'Ecological', 'Sosial Dem': 'Sosial Dem', 'Investment': 'Investment', });
lyr_BatasKabupaten_3.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'periode': 'periode', 'idkab': 'idkab', 'sumber': 'sumber', });
lyr_KesesuaianUrbanAgriculture20_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kesesuaian': 'TextEdit', 'Keterangan': 'TextEdit', 'Ecological': 'TextEdit', 'Sosial Dem': 'TextEdit', 'Investment': 'TextEdit', });
lyr_KesesuaianUrbanAgriculture10_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kesesuaian': 'TextEdit', 'Keterangan': 'TextEdit', 'Ecological': 'TextEdit', 'Sosial Dem': 'TextEdit', 'Investment': 'TextEdit', });
lyr_BatasKabupaten_3.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'periode': 'TextEdit', 'idkab': 'TextEdit', 'sumber': 'TextEdit', });
lyr_KesesuaianUrbanAgriculture20_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Kesesuaian': 'no label', 'Keterangan': 'no label', 'Ecological': 'no label', 'Sosial Dem': 'no label', 'Investment': 'no label', });
lyr_KesesuaianUrbanAgriculture10_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Kesesuaian': 'no label', 'Keterangan': 'no label', 'Ecological': 'no label', 'Sosial Dem': 'no label', 'Investment': 'no label', });
lyr_BatasKabupaten_3.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'periode': 'no label', 'idkab': 'no label', 'sumber': 'no label', });
lyr_BatasKabupaten_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});