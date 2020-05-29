#!/usr/bin/env node

const fs = require('fs');
const mustache = require('mustache');
const chokidar = require('chokidar');
const ncp = require('ncp').ncp;

const OUTPUT_FOLDER = 'docs';

function getTime() {
    var d = new Date();
    var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}

function writeFile(pageName, template, metadata) {

    const renderedContent = mustache.render(template, metadata, {
        header: fs.readFileSync('header.mustache', 'utf8'),
        navbar: fs.readFileSync('navbar.mustache', 'utf8'),        
        footer: fs.readFileSync('footer.mustache', 'utf8')
    });
    const loc = OUTPUT_FOLDER + '/' + pageName;
    fs.writeFileSync(loc, renderedContent);
    console.log(`Wrote file ${loc}`);
}

function copyResources() {
    ncp('css', OUTPUT_FOLDER + '/css');
    ncp('js', OUTPUT_FOLDER + '/js');
    ncp('images', OUTPUT_FOLDER + '/images');
    ncp('images/favicon.ico', OUTPUT_FOLDER + '/favicon.ico');
    console.log('Copied resources');
}

const watcher = chokidar.watch('.', {
    persistent: true,
    ignored: 'docs',
});

watcher.on('change', () => {
    console.log('Building site [' + getTime() + ']');
    var template = fs.readFileSync('index.mustache', 'utf8');
    var metadata = JSON.parse(fs.readFileSync('sitemetadata.json', 'utf8'));
    writeFile('index.html', template, metadata)

    fs.readdir('.', function (err, files) {        
        if (err) { return console.log('Unable to scan directory: ' + err); }         
        files.forEach(function (templateName) {            
            if (templateName.includes('page-') || templateName.includes('project-')) {
                var templatePrefix = templateName.substring(
                    templateName.lastIndexOf("-") + 1, 
                    templateName.lastIndexOf(".")
                );
                var template = fs.readFileSync(templateName, 'utf8');                
                writeFile(templatePrefix + '.html', template, metadata)
            }
        });
    });

    copyResources();
});
    