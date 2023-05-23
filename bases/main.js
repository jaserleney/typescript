"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => (text.length > 3 ? true : false);
    Validations.validateDate = (date) => (isNaN(date.valueOf()) ? false : true);
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map