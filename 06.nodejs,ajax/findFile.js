const fs = require('fs');
const path = require('path');
const filePath = path.resolve('./target');
const file = '1.txt';


const findFile = (path1) => {
    fs.readdir(path1, (err, files) => { //读取目录第一层所有文件夹和文件
        if (err) return;
        //console.log(files)
        files.forEach(fileName => {
            let fileDir = path.join(path1, fileName); //拼接文件路径
            //console.log(fileDir)
            fs.stat(fileDir, (err, stats) => {
                //console.log(stats.isFile())
                if (err) return console.log(err);
                if (stats.isFile()) {
                    if (path.basename(fileDir) == file && stats.size > 0) {
                        fs.copyFile(fileDir, __dirname + '/copy/1.txt', err => {
                            if (err) return console.log(err);
                            console.log('复制成功！')
                        })
                    }
                }
                if (stats.isDirectory()) {
                    findFile(fileDir)
                }
            })
        })
    })
}

findFile(filePath);