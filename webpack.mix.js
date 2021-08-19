let mix = require('laravel-mix');
mix.setPublicPath('./')
    .sass('assets/scss/popup.scss', 'dist/css')
    .js('assets/js/index.js', 'dist/js').vue()
    .options({
        processCssUrls: false
    });