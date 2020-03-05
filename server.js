var connect = require('connect');
    serveStatic = require('serve-static');
    network = require('network');
	port = process.env.PORT || 8080;
    project = require('./package.json');
    fs = require('fs-extra');
    chokidar = require('chokidar');
    winston = require('winston');
    ncp = require('ncp').ncp;
    recursive = require("recursive-readdir");
    recursiveSync = require('recursive-readdir-synchronous');
    BibTex = require('./src/js/BibTex-0.1.2.js').BibTex;
    PublicationListGenerator = require('./src/js/generators/publication-list-generator.js');
    path = require("path");
    liveReload = require('livereload');
    output = "dist"+path.sep+"tnferreira";
    foldersToCopy = ["css", "img", "js", "supporting-pages"]
    template = fs.readFileSync("template.html", 'utf8').toString();

connect().use(serveStatic(__dirname + path.sep + "dist")).listen(port);

winston.info("Running " + project.name);

String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
    return this.split(needle).join(replacement);
};

function templateIt(target){

    var ignore = [".DS_Store", "*.css", "*.png", "*.jpg", "*.txt", "*.svg", "*.js","*.pdf", "*.map", "*/supporting-pages/*"]

    var files = recursiveSync(target, ignore);

    for(var i = 0; i < files.length; i++){
        winston.info("Processing " + files[i]);

        var size = files[i].split(path.sep).length-3;
        var str = "";

        for(var j=0;j<size;j++){
            str += ".."+path.sep;
        }

        var page = fs.readFileSync(files[i], 'utf8').toString();

        var result = template.replace("@@CONTENT@@", page);
        result = result.replaceAll("@@LEVEL@@", str);

        fs.writeFileSync(files[i], result, 'utf8', function (error) {
            if ( error ) {
                return winston.error(error);
            }
        });
    }
}

function copy(source, target){
    winston.info("Copying "+source+" to " + target);
    fs.copySync(source, target);
}

function compile(){

    winston.info("Compiling the files");

    fs.removeSync("dist");
    fs.mkdirSync("dist");
    fs.mkdirSync(output);

    winston.info("=================");
    winston.info("Copying the files");
    winston.info("=================");

    ["css", "img", "js", "supporting-pages", "papers"].forEach(function(item, index){
        copy("src" + path.sep + item, output + path.sep + item);
    });

    ["pages"].forEach(function(item, index){
        copy("src" + path.sep + item, output);
    });

    generatePublicationList();

    fs.renameSync(output + path.sep + "home.html", output + path.sep + "index.html", function(error) {
        if ( error ) {
            return winston.error(error);
        }
    });

    winston.info("====================");
    winston.info("Templating the files");
    winston.info("====================");

    ["/"].forEach(function(item, index){
        templateIt(output + path.sep + item);
    });

    winston.info("Done");

    return;
}

compile();

var liveReloadServer = liveReload.createServer();
liveReloadServer.watch(output);

var watcher = chokidar.watch('src', {
    ignored: /[\/\\]\./, persistent: true
});

watcher.on('change', function(path, stats) {

    winston.info("Changed!");

    compile();
});

network.get_active_interface(function(err, obj) {
	winston.info('The magic happens at: http://localhost:' + port);
    winston.info('The magic happens at: ' + obj.ip_address+":" + port);
});

function generatePublicationList(){

    winston.info("===============================");
    winston.info("Generating the publication list");
    winston.info("===============================");

    var content = fs.readFileSync("src/references.bib", 'utf8').toString();

    var htmlSortByYear = PublicationListGenerator.generate(content, "year");
    var htmlSortByType = PublicationListGenerator.generate(content, "type");

    var page = fs.readFileSync(output+path.sep+"publications.html", 'utf8').toString();

    var result = page.replace("@@PUBLICATIONLISTYEAR@@", htmlSortByYear);
    result = result.replace("@@PUBLICATIONLISTTYPE@@", htmlSortByType);

    fs.writeFileSync(output+path.sep+"publications.html", result, 'utf8', function (err) {
        if ( err ) winston.error('ERROR: ' + err);
    });
}
