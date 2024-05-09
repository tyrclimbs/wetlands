var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Wetland_1 = new ol.format.GeoJSON();
var features_Wetland_1 = format_Wetland_1.readFeatures(json_Wetland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_1.addFeatures(features_Wetland_1);
var lyr_Wetland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_1, 
                style: style_Wetland_1,
                popuplayertitle: "Wetland",
                interactive: true,
                title: '<img src="styles/legend/Wetland_1.png" /> Wetland'
            });
var format_Estuary_Management_Areas_2 = new ol.format.GeoJSON();
var features_Estuary_Management_Areas_2 = format_Estuary_Management_Areas_2.readFeatures(json_Estuary_Management_Areas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estuary_Management_Areas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estuary_Management_Areas_2.addFeatures(features_Estuary_Management_Areas_2);
var lyr_Estuary_Management_Areas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estuary_Management_Areas_2, 
                style: style_Estuary_Management_Areas_2,
                popuplayertitle: "Estuary_Management_Areas",
                interactive: true,
                title: '<img src="styles/legend/Estuary_Management_Areas_2.png" /> Estuary_Management_Areas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Wetland_1.setVisible(true);lyr_Estuary_Management_Areas_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Wetland_1,lyr_Estuary_Management_Areas_2];
lyr_Wetland_1.set('fieldAliases', {'POLY_NBR': 'POLY_NBR', 'Comments': 'Comments', 'Terr_Pnbr': 'Terr_Pnbr', 'TEIS_ID': 'TEIS_ID', 'PROJPOLYID': 'PROJPOLYID', 'FCODE': 'FCODE', 'PROJ_TYPE': 'PROJ_TYPE', 'PROJ_SCALE': 'PROJ_SCALE', 'PROJ_ID': 'PROJ_ID', 'ECO_SEC': 'ECO_SEC', 'BGC_ZONE': 'BGC_ZONE', 'BGC_SUBZON': 'BGC_SUBZON', 'BGC_VRT': 'BGC_VRT', 'BGC_PHASE': 'BGC_PHASE', 'SDEC_1': 'SDEC_1', 'REALM_1': 'REALM_1', 'GROUP_1': 'GROUP_1', 'CLASS_1': 'CLASS_1', 'SITE_S1': 'SITE_S1', 'SITEAM_S1A': 'SITEAM_S1A', 'SITEAM_S1B': 'SITEAM_S1B', 'SITEAM_S1C': 'SITEAM_S1C', 'SITEAM_S1D': 'SITEAM_S1D', 'SITEMC_S1': 'SITEMC_S1', 'SITE_M1A': 'SITE_M1A', 'SITE_M1B': 'SITE_M1B', 'STRCT_S1': 'STRCT_S1', 'STRCT_M1': 'STRCT_M1', 'STAND_A1': 'STAND_A1', 'SERAL_1': 'SERAL_1', 'TREE_C1': 'TREE_C1', 'SHRUB_C1': 'SHRUB_C1', 'DISTCLS_1': 'DISTCLS_1', 'DISTSCLS_1': 'DISTSCLS_1', 'DISSSCLS_1': 'DISSSCLS_1', 'SECL_1': 'SECL_1', 'SESUBCL_1': 'SESUBCL_1', 'COND_1': 'COND_1', 'VIAB_1': 'VIAB_1', 'SDEC_2': 'SDEC_2', 'REALM_2': 'REALM_2', 'GROUP_2': 'GROUP_2', 'CLASS_2': 'CLASS_2', 'SITE_S2': 'SITE_S2', 'SITEAM_S2A': 'SITEAM_S2A', 'SITEAM_S2B': 'SITEAM_S2B', 'SITEAM_S2C': 'SITEAM_S2C', 'SITEAM_S2D': 'SITEAM_S2D', 'SITEMC_S2': 'SITEMC_S2', 'SITE_M2A': 'SITE_M2A', 'SITE_M2B': 'SITE_M2B', 'STRCT_S2': 'STRCT_S2', 'STRCT_M2': 'STRCT_M2', 'STAND_A2': 'STAND_A2', 'SERAL_2': 'SERAL_2', 'TREE_C2': 'TREE_C2', 'SHRUB_C2': 'SHRUB_C2', 'DISTCLS_2': 'DISTCLS_2', 'DISTSCLS_2': 'DISTSCLS_2', 'DISSSCLS_2': 'DISSSCLS_2', 'SECL_2': 'SECL_2', 'SESUBCL_2': 'SESUBCL_2', 'COND_2': 'COND_2', 'VIAB_2': 'VIAB_2', 'SDEC_3': 'SDEC_3', 'REALM_3': 'REALM_3', 'GROUP_3': 'GROUP_3', 'CLASS_3': 'CLASS_3', 'SITE_S3': 'SITE_S3', 'SITEAM_S3A': 'SITEAM_S3A', 'SITEAM_S3B': 'SITEAM_S3B', 'SITEAM_S3C': 'SITEAM_S3C', 'SITEAM_S3D': 'SITEAM_S3D', 'SITEMC_S3': 'SITEMC_S3', 'SITE_M3A': 'SITE_M3A', 'SITE_M3B': 'SITE_M3B', 'STRCT_S3': 'STRCT_S3', 'STRCT_M3': 'STRCT_M3', 'STAND_A3': 'STAND_A3', 'SERAL_3': 'SERAL_3', 'TREE_C3': 'TREE_C3', 'SHRUB_C3': 'SHRUB_C3', 'DISTCLS_3': 'DISTCLS_3', 'DISTSCLS_3': 'DISTSCLS_3', 'DISSSCLS_3': 'DISSSCLS_3', 'SECL_3': 'SECL_3', 'SESUBCL_3': 'SESUBCL_3', 'COND_3': 'COND_3', 'VIAB_3': 'VIAB_3', 'SMPL_TYPE': 'SMPL_TYPE', 'MICROSITE': 'MICROSITE', 'FRAG': 'FRAG', 'POLY_COM': 'POLY_COM', 'Shape_Leng': 'Shape_Leng', 'Dec1_ha': 'Dec1_ha', 'Dec2_ha': 'Dec2_ha', 'Dec3_ha': 'Dec3_ha', 'Wetland': 'Wetland', 'Wet_2016': 'Wet_2016', 'Area': 'Area', 'F2016updat': 'F2016updat', 'SHAPE_Le_1': 'SHAPE_Le_1', 'Ryan_2017': 'Ryan_2017', });
lyr_Estuary_Management_Areas_2.set('fieldAliases', {'Site': 'Site', 'Total_Area': 'Total_Area', 'Total_Ar_1': 'Total_Ar_1', });
lyr_Wetland_1.set('fieldImages', {'POLY_NBR': '', 'Comments': '', 'Terr_Pnbr': '', 'TEIS_ID': '', 'PROJPOLYID': '', 'FCODE': '', 'PROJ_TYPE': '', 'PROJ_SCALE': '', 'PROJ_ID': '', 'ECO_SEC': '', 'BGC_ZONE': '', 'BGC_SUBZON': '', 'BGC_VRT': '', 'BGC_PHASE': '', 'SDEC_1': '', 'REALM_1': '', 'GROUP_1': '', 'CLASS_1': '', 'SITE_S1': '', 'SITEAM_S1A': '', 'SITEAM_S1B': '', 'SITEAM_S1C': '', 'SITEAM_S1D': '', 'SITEMC_S1': '', 'SITE_M1A': '', 'SITE_M1B': '', 'STRCT_S1': '', 'STRCT_M1': '', 'STAND_A1': '', 'SERAL_1': '', 'TREE_C1': '', 'SHRUB_C1': '', 'DISTCLS_1': '', 'DISTSCLS_1': '', 'DISSSCLS_1': '', 'SECL_1': '', 'SESUBCL_1': '', 'COND_1': '', 'VIAB_1': '', 'SDEC_2': '', 'REALM_2': '', 'GROUP_2': '', 'CLASS_2': '', 'SITE_S2': '', 'SITEAM_S2A': '', 'SITEAM_S2B': '', 'SITEAM_S2C': '', 'SITEAM_S2D': '', 'SITEMC_S2': '', 'SITE_M2A': '', 'SITE_M2B': '', 'STRCT_S2': '', 'STRCT_M2': '', 'STAND_A2': '', 'SERAL_2': '', 'TREE_C2': '', 'SHRUB_C2': '', 'DISTCLS_2': '', 'DISTSCLS_2': '', 'DISSSCLS_2': '', 'SECL_2': '', 'SESUBCL_2': '', 'COND_2': '', 'VIAB_2': '', 'SDEC_3': '', 'REALM_3': '', 'GROUP_3': '', 'CLASS_3': '', 'SITE_S3': '', 'SITEAM_S3A': '', 'SITEAM_S3B': '', 'SITEAM_S3C': '', 'SITEAM_S3D': '', 'SITEMC_S3': '', 'SITE_M3A': '', 'SITE_M3B': '', 'STRCT_S3': '', 'STRCT_M3': '', 'STAND_A3': '', 'SERAL_3': '', 'TREE_C3': '', 'SHRUB_C3': '', 'DISTCLS_3': '', 'DISTSCLS_3': '', 'DISSSCLS_3': '', 'SECL_3': '', 'SESUBCL_3': '', 'COND_3': '', 'VIAB_3': '', 'SMPL_TYPE': '', 'MICROSITE': '', 'FRAG': '', 'POLY_COM': '', 'Shape_Leng': '', 'Dec1_ha': '', 'Dec2_ha': '', 'Dec3_ha': '', 'Wetland': '', 'Wet_2016': '', 'Area': '', 'F2016updat': '', 'SHAPE_Le_1': '', 'Ryan_2017': '', });
lyr_Estuary_Management_Areas_2.set('fieldImages', {'Site': '', 'Total_Area': '', 'Total_Ar_1': '', });
lyr_Wetland_1.set('fieldLabels', {'POLY_NBR': 'no label', 'Comments': 'no label', 'Terr_Pnbr': 'no label', 'TEIS_ID': 'no label', 'PROJPOLYID': 'no label', 'FCODE': 'no label', 'PROJ_TYPE': 'no label', 'PROJ_SCALE': 'no label', 'PROJ_ID': 'no label', 'ECO_SEC': 'no label', 'BGC_ZONE': 'no label', 'BGC_SUBZON': 'no label', 'BGC_VRT': 'no label', 'BGC_PHASE': 'no label', 'SDEC_1': 'no label', 'REALM_1': 'no label', 'GROUP_1': 'no label', 'CLASS_1': 'no label', 'SITE_S1': 'no label', 'SITEAM_S1A': 'no label', 'SITEAM_S1B': 'no label', 'SITEAM_S1C': 'no label', 'SITEAM_S1D': 'no label', 'SITEMC_S1': 'no label', 'SITE_M1A': 'no label', 'SITE_M1B': 'no label', 'STRCT_S1': 'no label', 'STRCT_M1': 'no label', 'STAND_A1': 'no label', 'SERAL_1': 'no label', 'TREE_C1': 'no label', 'SHRUB_C1': 'no label', 'DISTCLS_1': 'no label', 'DISTSCLS_1': 'no label', 'DISSSCLS_1': 'no label', 'SECL_1': 'no label', 'SESUBCL_1': 'no label', 'COND_1': 'no label', 'VIAB_1': 'no label', 'SDEC_2': 'no label', 'REALM_2': 'no label', 'GROUP_2': 'no label', 'CLASS_2': 'no label', 'SITE_S2': 'no label', 'SITEAM_S2A': 'no label', 'SITEAM_S2B': 'no label', 'SITEAM_S2C': 'no label', 'SITEAM_S2D': 'no label', 'SITEMC_S2': 'no label', 'SITE_M2A': 'no label', 'SITE_M2B': 'no label', 'STRCT_S2': 'no label', 'STRCT_M2': 'no label', 'STAND_A2': 'no label', 'SERAL_2': 'no label', 'TREE_C2': 'no label', 'SHRUB_C2': 'no label', 'DISTCLS_2': 'no label', 'DISTSCLS_2': 'no label', 'DISSSCLS_2': 'no label', 'SECL_2': 'no label', 'SESUBCL_2': 'no label', 'COND_2': 'no label', 'VIAB_2': 'no label', 'SDEC_3': 'no label', 'REALM_3': 'no label', 'GROUP_3': 'no label', 'CLASS_3': 'no label', 'SITE_S3': 'no label', 'SITEAM_S3A': 'no label', 'SITEAM_S3B': 'no label', 'SITEAM_S3C': 'no label', 'SITEAM_S3D': 'no label', 'SITEMC_S3': 'no label', 'SITE_M3A': 'no label', 'SITE_M3B': 'no label', 'STRCT_S3': 'no label', 'STRCT_M3': 'no label', 'STAND_A3': 'no label', 'SERAL_3': 'no label', 'TREE_C3': 'no label', 'SHRUB_C3': 'no label', 'DISTCLS_3': 'no label', 'DISTSCLS_3': 'no label', 'DISSSCLS_3': 'no label', 'SECL_3': 'no label', 'SESUBCL_3': 'no label', 'COND_3': 'no label', 'VIAB_3': 'no label', 'SMPL_TYPE': 'no label', 'MICROSITE': 'no label', 'FRAG': 'no label', 'POLY_COM': 'no label', 'Shape_Leng': 'no label', 'Dec1_ha': 'no label', 'Dec2_ha': 'no label', 'Dec3_ha': 'no label', 'Wetland': 'no label', 'Wet_2016': 'no label', 'Area': 'no label', 'F2016updat': 'no label', 'SHAPE_Le_1': 'no label', 'Ryan_2017': 'no label', });
lyr_Estuary_Management_Areas_2.set('fieldLabels', {'Site': 'no label', 'Total_Area': 'no label', 'Total_Ar_1': 'no label', });
lyr_Estuary_Management_Areas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});