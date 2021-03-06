"use strict";
/**
 * Created by Eyal on 4/21/2016.
 */
var core_1 = require("@angular/core");
function getComponentMetadata(component) {
    var result;
    Reflect.getMetadata('annotations', component)
        .forEach(function (metadata) {
        if (metadata.constructor.name === 'ComponentMetadata') {
            result = metadata;
        }
    });
    return result;
}
exports.getComponentMetadata = getComponentMetadata;
function ngExComponent(metadata, component) {
    var merageMetadata = component ?
        Object.assign(getComponentMetadata(component), metadata) :
        metadata;
    return core_1.Component(merageMetadata);
}
exports.ngExComponent = ngExComponent;
//# sourceMappingURL=metadataUtils.js.map