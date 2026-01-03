const container1 = document.createElement("div");
container1.style.display = "flex";
container1.style.alignItems = "center";             
container1.style.gap = "40px";

const div1=document.createElement("div");
div1.style.backgroundColor="rgba(86, 244, 123, 0.65) ";
div1.style.boxShadow="0px 0px 10px 5px green";
div1.style.height="350px";
div1.style.width="350px";
div1.style.justifyItems="center";
div1.style.borderRadius="40px";
div1.style.marginTop="100px";
div1.style.marginLeft="300px";

const h1=document.createElement("h1");
h1.textContent="Player 1";
h1.style.fontSize="50px";
h1.style.paddingTop="50px";
h1.style.color="rgba(237, 123, 0, 0.89)";
let count1=0;
const p1=document.createElement("p");
p1.textContent=count1;
p1.style.fontSize="60px";

div1.append(h1,p1);

const div2=document.createElement("div");

const value=document.createElement("p");
value.textContent="Dice";
value.style.marginTop="100px";
value.style.textAlign="center";
value.style.fontSize="40px";

const btn=document.createElement("button");
btn.textContent="Roll";
btn.style.height="50px";
btn.style.width="100px";


btn.style.border="none";
btn.style.borderRadius="20px";
btn.style.backgroundColor="rgba(7, 165, 165, 1)";
btn.style.fontSize="20px"
btn.style.marginTop="20px";

div2.append(value,btn);

const div3=document.createElement("div");
div3.style.backgroundColor="rgba(86, 244, 123, 0.65) ";
div3.style.height="350px";
div3.style.width="350px";
div3.style.justifyItems="center";
div3.style.borderRadius="40px";
div3.style.marginTop="100px";
div3.style.boxShadow="0px 0px 10px 5px green";
const h2=document.createElement("h1");
h2.textContent="Player 2";
h2.style.fontSize="50px";
h2.style.color="rgba(237, 123, 0, 0.89)";
h2.style.paddingTop="50px";
let count2=0;
const p2=document.createElement("p");
p2.textContent=count2;
p2.style.fontSize="60px";
div3.append(h2,p2);


const p3=document.createElement("p");
p3.style.color="rgba(227, 43, 43, 1)";
p3.style.padding="10px";
p3.style.alignItems="center";
p3.style.fontSize="40px";
p3.style.marginLeft="600px";


let turn=1;

btn.disabled=false;

btn.addEventListener("mouseenter",function(){
  btn.style.color="black";
  btn.style.backgroundColor="rgba(202, 254, 254, 1)";
})
btn.addEventListener("mouseleave",function(){
  btn.style.color="white";
  btn.style.backgroundColor="rgb(0, 128, 128)";
})

btn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  value.textContent = randomNum;
  
  if (turn==1){
    count1+=randomNum;
    p1.textContent=count1;
    
    turn=2;
  }
  else{
    count2+=randomNum;
    p2.textContent=count2;
    
    turn=1;
  }

  if(count1>=50 || count2>=50){
    btn.disabled=true;
    if(count1>=50){
      p3.textContent="Player 1 wins!";
    }
    else{
      p3.textContent="Player 2 wins!";
    }
  }
});
document.body.style.backgroundImage="linear-gradient(to right, rgba(13, 227, 63, 0.65) , rgba(6, 130, 130, 1))";
container1.append(div1, div2, div3);
document.body.append(container1,p3);

