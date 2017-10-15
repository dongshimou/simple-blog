var fs = require('fs');
var path = require('path');
var m2j = require('markdown-to-json');
// var markdown = require('markdown').markdown;
var showdown = require('showdown')
showdown.setOption('parseImgDimensions', true)
showdown.setOption('strikethrough', true)
showdown.setOption('ghCodeBlocks', true)
showdown.setOption('tasklists', true)
// showdown.setOption('openLinksInNewWindow', true)
var converter = new showdown.Converter()

var post = function(filenames) {
    let results = [];
    for (let i = 0; i < filenames.length; i++) {
        let filename = filenames[i];
        let result = m2j.parse([`posts/${filename}`], {
            minify: false,
            width: 0,
            outfile: null,
            content: true,
        });
        result = JSON.parse(result);
        result = result[filename.replace('.md', '')];
        results.push(result);
    }
    results.sort((a, b) => {
        if(a.date>b.date)return 1;
        else if(a.date<b.date)return -1;
        else return 0;
    })
    for (let i in results) {
        i = parseInt(i)
        if (i == 0) {
            results[i].prev = results[results.length - 1].basename
        } else {
            results[i].prev = results[i - 1].basename
        }
        if (i == results.length - 1) {
            results[i].next = results[0].basename
        } else {
            results[i].next = results[i + 1].basename
        }
        let one = Object.assign({}, results[i])
        one.content = converter.makeHtml(one.content);
        fs.writeFile(`static/posts/${one.basename+'.json'}`,
            JSON.stringify(one));
    }
    // 限定list预览的正文的长度为100字
    // const textLen = 100
    // for (let i in results) {
    //     console.log(results[i])
    //     results[i].content = results[i].content.slice(0, textLen)
    //     results[i].content += '...'
    // }
    //
    fs.writeFile(`static/posts/list.json`, JSON.stringify(results));
};
var create = function() {
    let filenames = fs.readdirSync('./posts');
    if (!fs.existsSync('static/posts')) {
        fs.mkdirSync('static/posts');
    }
    post(filenames);
};
create();

module.exports = create;