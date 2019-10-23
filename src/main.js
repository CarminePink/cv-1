let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
 *首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成一个八卦图
 * 看好了
 * 首先我们把div变成一个圆
 * */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
 * 八卦是一阴一阳
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(254,254,254,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 接下来加灵珠和魔丸
 */
#div1::before{
    width:100px;
    height:100px;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(254,254,254,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,253,253,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
console.log(string.length);
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车就不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格就转义为Html的空格
      string2 += "&nbsp";
    } else {
      //如果不是回车就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999); //设置滚动条，每次滚到页面最下方
    html.scrollTo(0, 9999);
    // 假设length: 55
    if (n < string.length - 1) {
      //如果n不是最后一个字符
      n = n + 1;
      step();
    } else {
      //n是最后一个字符
    }
  }, 50);
};
step();
