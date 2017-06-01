var fs = require('fs');
var path = require('path');

var list = function() {
    let filePaths='./static/music'
    let files = fs.readdirSync(filePaths)
    let result = []
    for (let i in files) {
        if (files[i].includes('.mp3')) {
            let src=filePaths+'/'+files[i]
            result.push(src.slice(1))
        }
    }
    result = JSON.stringify(result);
    fs.writeFile(filePaths + '/list.json', result);
}
list()
module.exports = list;