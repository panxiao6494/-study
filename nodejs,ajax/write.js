const fs = require('fs');
fs.writeFile('./demo.txt', '拉你大大s', err => { //写入的文件名及路径，写入的内容，写入成功之后的回调
    if (err) return console.log(err);
    console.log('文件写入成功！')
})