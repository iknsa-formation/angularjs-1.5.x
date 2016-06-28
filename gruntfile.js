module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src : ['styles/**/*', 'scripts/**/*']
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
};
