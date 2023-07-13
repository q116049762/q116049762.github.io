var cmd = `/*Microsoft Windows [版本 10.0.17134.706]
 (c) 2023 Microsoft Corporation。保留所有权利。
 
 C:\\Users\\777>Make my RScard

 固定终端高度：
*/
#sourceCode {
  height: 180px;
}
 `
var move = `
/*给桌面添加一个背景颜色*/
  body{
    background-color: #EAEAEA;
  }
/*添加一个侧边栏*/
  .aside aside{
    height: inherit;
  }
/*添加一个画布*/
.shortcut .header a{
  display: inline-block;
  background-color: #88acdb;  
}
/*加上我的头像*/
#myportrait{
  height: 114px;
}
/*变成圆形吧！*/
.shortcut .header a{
  border-radius: 50%;
  border-width: 5px;
}
/*添加一个蒙版*/
.existBlock{
  background-color: #4D4D4D;
}
/*上移我的头像*/
.shortcut{
  margin-top: -68px;
}
/*写下我的名字*/
.shortcut h1.myname{
  color: #696969;
  font-size: 30px;
}
/*写下我最喜欢的一句话*/
.shortcut .mybelief{
  color: #999;
}
.shortcut .myhome{
  padding: 65px;
}
.shortcut .social a{
  margin: 0 6px;
}
/*终端好碍事，把它挪走*/
#sourceCode {
  top: 0;
  left: 0;
  opacity: 0.6;
}
/*在右边创建一张白纸*/
.main .myrscard{
  display: block;
  margin: 30px;
  height: 92%;
}
/*这样我就可以在白纸上写字了，
请看右边即将呈现的简历*/
`
var mdCode = `
  ## 1. 自我介绍
  姓名：777是菜狗
  本科在读 
  人工智能专业

 

  ## 2. 技能介绍
   会一些简单的工具操作，例如nmap，brupsuit等，基本知识了解一点，对常见编程语言有一定了解。0.0

  ## 3.目标:红队渗透人员
 我对于红队的认识概括：红队是一群道德黑客组成的团体，主要目的是为了仿真网络空间中的攻击者所使用的技术来发现组织的安全问题。
 我对红队的兴趣源于对网络安全的热爱和对技术挑战的追求。
 在红队学习过程中兴趣始终是一个自我驱动力的一个重要来源，从好奇某个技术到了解认识再到掌握，
 整个过程需要源源不断的坚持和自我激励。
 希望有机会与其他热爱网络安全的红队人员一起合作，相互学习和成长。

`
var toHTML = `
/*简历的 md 文件写好了，但是并不好看
那就给它加一些 css 样式吧！
3   
2   
1   
变！*/
`
var end = `
/*现在终于完成了动态简历，
感谢您耐心看完整个过程，
我也该消失了，
拜拜！*/
#sourceCode {
  display: none;
}
`
// 模仿 windows cmd 80 100 500 100
writeCode(cmd, 70, () => {
  writeCode(move, 70, () => {
    writeMarkDown(mdCode, 50, () => {
      writeCode(toHTML, 100, () => {
        mdToHtml(mdCode, () => {
          writeCode(end, 100,()=>{
            targetBlank()
          })
        })
      })
    })
  })
})

function writeCode(add_code, speed, callBack) {
  let n = 0
  let sourceStyle = document.querySelector('#sourceStyle')
  let sourceCode = document.querySelector('#sourceCode')
  let write_timer = setInterval(function () {
    n++
    sourceStyle.innerHTML += add_code.slice(n - 1, n)
    sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css)
    sourceCode.scrollTop = sourceCode.scrollHeight
    if (n >= add_code.length) {
      window.clearInterval(write_timer)
      callBack && callBack.call()
    }
  }, speed)
}

function writeMarkDown(md_code, speed, callBack) {
  let n = 0
  let markdownRs = document.querySelector('#markdownRs')
  let md_timer = setInterval(function () {
    n++
    markdownRs.innerHTML += md_code.slice(n - 1, n)
    markdownRs.scrollTop = markdownRs.scrollHeight
    if (n >= md_code.length) {
      window.clearInterval(md_timer)
      callBack && callBack.call()
    }
  }, speed)
}

function mdToHtml(md_text, callBack) {
  let md = window.markdownit()
  let markdownRs = document.querySelector('#markdownRs')
  markdownRs.innerHTML = md.render(md_text)
  markdownRs.scrollTop = 0
  callBack && callBack.call()
}

function targetBlank(callBack){
  let allA = document.querySelectorAll('#markdownRs a')
  allA.forEach((item)=>{
    item.target = '_blank'
  })
  callBack && callBack.call()
}