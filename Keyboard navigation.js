//初始化基础数据
var keys = {
    '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l', length:9},
    '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
'length':3
}
var hash= {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    't':'tianya.com',
    'y':'yy.com',
    'u':'uc.com',
    'i':'iqiyi.com',
    'z':'zhihu.com'
}
//取出localstorage中的zzz对应的hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz')||'null')

if(hashInLocalStorage){
    hash = hashInLocalStorage
}
function xxxxx(name) {
    JSON.parse(localStorage.getItem('name')||'null')

}
//2 生产键盘
var index = 0
while(index < keys['length']){
    var divXXXXX = document.createElement('div')
    divXXXXX.className = 'row'
    maninxxxx.appendChild(divXXXXX)
    var row = keys[index]
    console.log(row)
    var index2 = 0
    while(index2 < row['length']) {
        var kbdxxxxx = document.createElement('kbd')
        var span=document.createElement('span')
        span.textContent = row[index2]
        span.className = "text"
        kbdxxxxx.appendChild(span)
        // kbdxxxxx.textContent = row[index2]
        kbdxxxxx.className = 'key'
        var buttonx = document.createElement('button')
        buttonx.textContent = 'exit'
        buttonx.id = row[index2]

        var imgxxxxx= document.createElement('img')
        if(hash[row[index2]]){
            imgxxxxx.src = 'http://'+hash[row[index2]]+'/favicon.ico'

        }else {
            imgxxxxx.src = 'https://i.loli.net/2018/10/03/5bb4606129100.png'
        }
        imgxxxxx.onerror = function(fff){
            fff.target.src = 'https://i.loli.net/2018/10/03/5bb4606129100.png'
        }


        buttonx.onclick = function(e){
            var button2 = e['target']
            var img2 = button2.previousElementSibling
            var key = button2['id']
            var t = prompt('给我一个网址')
            hash[key] = t
            localStorage.setItem('zzz', JSON.stringify(hash))
            img2.src = 'http://'+t+'/favicon.ico'
            img2.onerror = function(fff){
                fff.target.src = 'https://i.loli.net/2018/10/03/5bb4606129100.png'
            }
            localStorage.setItem('zzz', JSON.stringify(hash))
            console.log(hash)

        }
        kbdxxxxx.appendChild(imgxxxxx)
        kbdxxxxx.appendChild(buttonx)
        divXXXXX.appendChild(kbdxxxxx)
        index2=index2+1
    }

    index = index + 1
}
// 3 监听键盘
document.onkeypress = function (e) {
    console.log('我发现你输入了一个键')
    console.log('你按键信息是')
    console.log(e['key'])
    var key = e['key']
    var website=hash[key]
    console.log(website)
    window.open('http://'+website, '_blank')
    // location.href = 'http://'+website
}