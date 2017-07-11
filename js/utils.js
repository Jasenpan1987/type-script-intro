"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    return inputElement.value;
}
exports.getValue = getInputValue;
function addListener(elemId, callback) {
    document.getElementById(elemId).addEventListener("click", callback);
}
exports.addListener = addListener;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utils.js.map