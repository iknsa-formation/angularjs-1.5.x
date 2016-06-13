app.directive('realEmail', function() {
    var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return {
     require: '?ngModel',
     // https://docs.angularjs.org/api/ng/service/$compile#-link-
     link: function(scope, iElement, iAttrs, controller) {
        if (controller && controller.$validators.email) {
                controller.$validators.email = function(modelValue) {
                return regex.test(modelValue);
                };
            }
        }
    };
});
