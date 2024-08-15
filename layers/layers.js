var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Waypoints_SitiD4_1 = new ol.format.GeoJSON();
var features_Waypoints_SitiD4_1 = format_Waypoints_SitiD4_1.readFeatures(json_Waypoints_SitiD4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_SitiD4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_SitiD4_1.addFeatures(features_Waypoints_SitiD4_1);
var lyr_Waypoints_SitiD4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_SitiD4_1, 
                style: style_Waypoints_SitiD4_1,
                popuplayertitle: "Waypoints_Siti D4",
                interactive: true,
                title: 'Waypoints_Siti D4'
            });
var format_Adm_RT_RW_PasirKaliki_2 = new ol.format.GeoJSON();
var features_Adm_RT_RW_PasirKaliki_2 = format_Adm_RT_RW_PasirKaliki_2.readFeatures(json_Adm_RT_RW_PasirKaliki_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_RT_RW_PasirKaliki_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_RT_RW_PasirKaliki_2.addFeatures(features_Adm_RT_RW_PasirKaliki_2);
var lyr_Adm_RT_RW_PasirKaliki_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adm_RT_RW_PasirKaliki_2, 
                style: style_Adm_RT_RW_PasirKaliki_2,
                popuplayertitle: "Adm_RT_RW_Pasir Kaliki",
                interactive: true,
                title: '<img src="styles/legend/Adm_RT_RW_PasirKaliki_2.png" /> Adm_RT_RW_Pasir Kaliki'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_UTMVektor__4 = new ol.format.GeoJSON();
var features_UTMVektor__4 = format_UTMVektor__4.readFeatures(json_UTMVektor__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVektor__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVektor__4.addFeatures(features_UTMVektor__4);
var lyr_UTMVektor__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVektor__4, 
                style: style_UTMVektor__4,
                popuplayertitle: "UTM Vektor_",
                interactive: true,
                title: '<img src="styles/legend/UTMVektor__4.png" /> UTM Vektor_'
            });
var group_tpn = new ol.layer.Group({
                                layers: [lyr_Waypoints_SitiD4_1,lyr_Adm_RT_RW_PasirKaliki_2,lyr_Buffered_3,lyr_UTMVektor__4,],
                                fold: "open",
                                title: "tpn"});

lyr_ESRIStandard_0.setVisible(true);lyr_Waypoints_SitiD4_1.setVisible(true);lyr_Adm_RT_RW_PasirKaliki_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_UTMVektor__4.setVisible(true);
var layersList = [lyr_ESRIStandard_0,group_tpn];
lyr_Waypoints_SitiD4_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Adm_RT_RW_PasirKaliki_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMVektor__4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_SitiD4_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Adm_RT_RW_PasirKaliki_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_UTMVektor__4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints_SitiD4_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Adm_RT_RW_PasirKaliki_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMVektor__4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMVektor__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});