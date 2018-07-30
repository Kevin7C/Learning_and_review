/**
 * 递归
 */
(function () {
    var fn=function (n) {
        if(n<=1){
            return 1;
        }
        return n*fn(n-1);
    };
    var num=fn(5);
    console.log(num);
    var div=document.createElement('div');
    div.innerHTML=num;
    var body=document.getElementsByTagName('body')[0];
    body.appendChild(div);
})();
