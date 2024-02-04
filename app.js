let q =[

    {
        e: "Q1 CPU stands for ?",
        a1: "central proccessing unit",
        o1: [
            "central proccessing unit",
            "centproccessing unit",
            "central occessing unit",
            "central pressing unit",
        ]

    },
    {
        e: "Q1 The Computer is drived from ?",
        a1: "Latin",
        o1: [
            "Germany",
            "Latin",
            "English",
            "French",
        ]

    },
    {
        e: "WWW stands for ?",
        a1: "World Wide Web",
        o1: [
            "World Whole Web",
            "World Web Wide",
            "World Wide Web",
            "Wide World Web",
        ]

    }
]



let qq=1;
let c=0;
var s=0;

// p3=document.querySelector(".p4");
// p1=document.querySelector(".p1");
// p1.textContent=`Question ${qq} of 3`
 

// h1=document.getElementById("h1");
// h1.innerHTML=q[0].e;

// b1=document.querySelector("#button2");
// b1.textContent=`Next`

// a=document.getElementsByClassName("p2");
// for (let w = 0; w < 4; w++) {
//    a[w].innerHTML=q[c].o1[w];   
// }



function Q(){
    c++;
    
    if(c==3){
        button2=document.getElementById("button2");
        button2.removeAttribute('onclick');
        button2.setAttribute("onclick","result()");
        result();
        store1();
    }
    p1.textContent=`Question ${c+1} of 3`
    h1=document.getElementById("h1");
    h1.innerHTML=q[c].e;
    label=document.getElementsByClassName("p2");
    for (let w = 0; w < 4; w++) {
       label[w].innerHTML=q[c].o1[w];   
    }   
     
}

 


// var  name;
function store(){
    var name=document.getElementById("i").value;
    localStorage.setItem("Name",name);
    body=document.getElementsByTagName("body");
    body[0].innerHTML='<div class="d2"><div class="d3"><div class="d4"><h3 id="h2">Quiz Application</h3></div><div class="d5"><p class="p4"></p></div></div><div class="d6"><p class="p1"></p><h1 id="h1"></h1><div class="d7"><input class="p3" name="o1" type="radio"><label class="p2"></label></div><br><div class="d7"><input class="p3" name="o1" type="radio"><label class="p2"></label></div><br><div class="d7"><input class="p3" name="o1" type="radio"><label class="p2"></label></div><br><div class="d7"><input class="p3" name="o1" type="radio"><label class="p2"></label></div><br></div><br><button id="button2"  onclick="foo()"></button></div>';
    p3=document.querySelector(".p4");
    p1=document.querySelector(".p1");
    p1.textContent=`Question ${qq} of 3`
    h1=document.getElementById("h1");
    h1.innerHTML=q[0].e;
    b1=document.querySelector("#button2");
    b1.textContent=`Next`
    a=document.getElementsByClassName("p2");
    for (let w = 0; w < 4; w++) {
        a[w].innerHTML=q[c].o1[w];   
    }
    p3.textContent=`${min}:${sec}`
    setInterval(timer,1000);

}

function store1(){
    localStorage.setItem("Score",s);
}

var sec=20;
var min=0;
// p3.textContent=`${min}:${sec}`
function timer(){
    sec--;
    if(sec>=10){
        p3.textContent=`${min}:${sec}`
    }
    else{
        p3.textContent=`${min}:0${sec}`
    }
    if(sec==0){
        sec=10;
        min--;
    }
    if(min==-1){
        body=document.getElementsByTagName("body");
        body[0].innerHTML='<div id="pc"><div class="d8"><h3 id="sl"></h3></div><div class="d9"><h3 id="l"></h3></div></div>';
        
        sname=localStorage.getItem('Name');
        console.log(sname);
        sl=document.getElementById("sl");
        sl.innerHTML=sname;
        var ss=localStorage.getItem('Score');
        l=document.getElementById("l");
        l.innerHTML=`Score = ${ss}`;
    }
}

// setInterval(timer,1000);

function foo(){
    label1=document.getElementsByClassName("p3");
    label=document.getElementsByClassName("p2");
    for (let w = 0; w < 4; w++) {
       if(label1[w].checked == true)
       {
           if(label[w].innerHTML==q[c].a1){
               s++
               localStorage.setItem("Score",s);
               console.log(s);
               
           }
       }
       label1[w].checked = false;
    }
    
   
    Q();
   }
function result(){
    body=document.getElementsByTagName("body");
    body[0].innerHTML='<div id="pc"><div class="d8"><h3 id="sl"></h3></div><div class="d9"><h3 id="l"></h3></div></div>';
    
    sname=localStorage.getItem('Name');
    console.log(sname);
    sl=document.getElementById("sl");
    sl.innerHTML=sname;
    var ss=localStorage.getItem('Score');
    l=document.getElementById("l");
    l.innerHTML=`Score = ${ss}`;
}