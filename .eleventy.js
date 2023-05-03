const yaml = require("js-yaml");

module.exports =  function (eleventyConfig) {
    eleventyConfig.addDataExtension(
        "yaml", contents => yaml.load(
            fs.readFileSync(path + 'src/_data/messages_en.yml', 'utf-8')
        )
    );

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