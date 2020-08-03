// comsole.log("Heloo World")
var x=10;
console.log(x);
console.log(x+10);
x= "xin chao";
console.log(x);
console.log(x+10);
console.log("xin chao"+" t2005e");
console.log(x.length);
var y= "a10";
// console.log(y+10);
y= parseInt(y);
console.log(y+10);
if(isNaN(y)){
    console.log("khong co gia tri");
}else{
    console.log(y+10);
}
for(var i=10;i<10;i++){
    console.log("i="+i);
}

var ary= [];
ary[0] =1999;
ary[1]= "hello";
ary[2]= [2,3,4,"xin chao",[1,1,1]];
ary[2][4][3] = 55;
console.log(ary[2][3][1]);
ary[2][4][4] = ["a","b",5];

var s =[1,2,3,5,8,13,21];
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}

var f=ham_gi_do();
console.log(f());
function ham_gi_do(a,b) {
    console.log("day la ben trong ham gi do"+(a+b));
    return"xin chao"
}

s.map(function (e) {
    console.log("s: "+e);
})

var arr =[];
for(var i=0;i<10;i++);{
    arr.push(i*2+1);
}
arr.push(99);
arr.splice(1,2) ;
arr.map(function (e) {
    console.log("arr:"+e);

})