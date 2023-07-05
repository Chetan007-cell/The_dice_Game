var randnum1=Math.floor(Math.random()*6+1);

var randimg1="dice"+randnum1+".jpg";

var randimgscr1="content/"+randimg1;

var img1=document.querySelectorAll("img")[0]

img1.setAttribute("src",randimgscr1)

var randnum2=Math.floor(Math.random()*6+1);

var randimg2="dice"+randnum2+".jpg";

var randimgscr2="content/"+randimg2;

var img2=document.querySelectorAll("img")[1]

img2.setAttribute("src",randimgscr2)

if (randnum1>randnum2){
    document.querySelector("h1").innerHTML="Player 1 Wins.";
}

else if(randnum1<randnum2){
    document.querySelector("h1").innerHTML="Player 2 Wins.";
}

else{
    document.querySelector("h1").innerHTML="It's a Tie.";
}
