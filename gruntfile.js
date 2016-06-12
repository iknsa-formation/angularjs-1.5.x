module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src : 'assets/css/*.css'
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
