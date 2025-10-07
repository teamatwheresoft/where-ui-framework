const WhereEventNames = {
    // Catalogue Events
    TOGGLE_ADD_CATALOGUE: "toggleAddCatalogue",
    TOGGLE_VIEW_CATALOGUE_LIST: "toggleViewCatalogueList",
    CLOSE_CATALOGUE_PAGE: "closeCataloguePage",
    SHOW_CATALOGUE_LIST: "showCatalogueList",
    UPDATE_CATALOGUE_NAMES: "updateCatalogueNames",
    
    // Service Events
    TOGGLE_ADD_SERVICE: "toggleAddService",
    CLOSE_SERVICE_PAGE: "closeServicePage",
    ADD_SERVICE_PAGE: "addServicePage",
    
    // Data Set Events
    DATA_SET_DETAILS: "dataSetDetails",
    DATA_SET_CLOSE_DETAILS: "dataSetCloseDetails",
    
    // General UI Events
    LOAD_CONTENT_PAGE: "loadContentPage",
    SHOW_CONFIRM_DIALOG: "showConfirmDialog",
    TOGGLE_CONFIRM_DIALOG: "toggleConfirmDialog",
    CHANGE_VIEWER: "changeViewer",
    SPLIT_DIRECTION_CHANGED: "splitDirectionChanged",
    PROFILE_SHOW: "showProfile",
    
    // Map Events
    MAP_CLICK: "mapClick",
    MAP_POINTER_MOVE: "mapPointerMove",
    MAP_VIEW_CHANGED: "mapViewChanged",
    MAP_STATE_CHANGED: "mapStateChanged",
    
    // Layer Events
    TOGGLE_LAYER_TREE_VIEW: "toggleLayerTreeView",
    ADDED_NEW_LAYER: "addedNewLayer",
    
    // Info and Results Events
    TOGGLE_INFO_RESULTS: "toggleInfoResults",
    INFO_RESULTS: "infoResults",
    SHOW_RESULTS_GRID: "showResultsGrid",
    HIDE_RESULTS_GRID: "hideResultsGrid",
    
    // Toolbar Events
    TOGGLE_DRAW_TOOLBAR: "toggleDrawToolbar",
    TOGGLE_EXPORT_TOOLBAR: "toggleExportToolbar",
    TOGGLE_IMPORT_TOOLBAR: "toggleImportToolbar",
    TOGGLE_MEASURE_TOOLBAR: "toggleMeasureToolbar",
    TOGGLE_MEASURE_3D_TOOLBAR: "toggleMeasure3dToolbar",
    TOGGLE_CAD_TOOLBAR: "toggleCadToolbar",
    TOGGLE_QUERY_BUILDER: "toggleQueryBuilder",
    TOGGLE_DETECTION_TOOLBAR: "toggleDetectionToolbar",
    
    // Dialog Events
    TOGGLE_SIDEBAR_DIALOG: "toggleSidebarDialog",
    OPEN_BIM_DIALOG: "openBimDialog",
    
    // AI Projects Events
    TOGGLE_CREATE_AI_PROJECTS: "toggleCreateAiProjects",
    TOGGLE_AI_PROJECTS_GALLERY: "toggleAiProjectsGallery",
    TOGGLE_AI_PROJECTS_DETAILS: "toggleAiProjectsDetails",
    CLONE_PROJECT: "cloneProject",
    
    // Model Events
    TOGGLE_ADD_MODEL: "toggleAddModel",
    
    // Transaction Events
    TOGGLE_CREATE_TRANSACTION: "toggleCreateTransaction",
    TOGGLE_EDIT_TRANSACTION: "toggleEditTransaction",
    TOGGLE_TRANSACTION_DETAILS: "toggleTransactionDetails",
    
    // Annotation Events
    TOGGLE_ANNOTATION_PAGE: "toggleAnnotationpage",
    TOGGLE_ANNOTATION_DETAILS: "toggleAnnotationDetails",
    DISABLE_ANNOTATION_DRAWING: "disableAnnotationDrawing",
    FEATURE_CLASSES_SAVED: "featureClassesSaved",
    FEATURE_CLASS_UPDATED: "featureClassUpdated",
    FEATURE_CLASS_DELETED: "featureClassDeleted",
    SET_SELECTED_CLASS: "setSelectedClass",
    
    // Training Events
    TOGGLE_TRAINING: "toggleTraining",
    TOGGLE_PREPARE_TRAINING: "togglePrepareTraining",
    TOGGLE_AI_CLONED_PROJECT: "toggleAIClonedProject",
}
export default WhereEventNames;