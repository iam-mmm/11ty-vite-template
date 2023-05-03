module.exports =  function (eleventyConfig) {
    return {
        templateFormats: ['ejs', 'html'],
        htmlTemplateEngine: 'ejs',
        dir: {
            input: "src/temp/contents",
            output: "dist",
            data: "../_data"
        }
    }
};