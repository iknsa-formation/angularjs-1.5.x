app.filter('truncate', function() {
    return function(input, length) {
        length = length || input.length;

        return input.substr(0, length) + '...';
    }
});