let boxes=document.querySelectorAll(".btn-box");
let reset=document.querySelector("#reset");
let winnern=document.querySelector(".winner-dis");
let msg=document.querySelector(".cont");
let reset2=document.querySelector("#reset1");
let menu=document.querySelector(".menu-btn");
let turn0= true;

const winpat=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]]
 const disabledbtn=()=>
 { 
    for(box of boxes)
    {
     box.disabled=true;
    
    }
 }


const showwinner=(winner)=>
{
        
                winnern.innerText=`Congratulations...!!${winner} you won the Game`;
                msg.classList.remove("hide");
          
}
const checkWinner=(playerName1)=>
{ 
    for(let pattern of winpat)
    {  let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                disabledbtn();
                showwinner(pos1);
            }
        }
    }   
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        } 
        box.disabled=true;
        checkWinner(); 
    });
})
reset2.addEventListener('click',()=>{
    turn0= true;
    for(box of boxes){
    box.innerText="";
    box.disabled=false;
    }
});

reset.addEventListener('click',()=> {
    msg.classList.add("hide");
    turn0= true;
    for(box of boxes){
    box.innerText="";
    box.disabled=false;
    }
});
menu.addEventListener('click',()=>{
    window.location.href="index.html";
})



       
    