let wellDone=document.getElementById("well-done");
let success=document.getElementById("success");
let fail=document.getElementById("fail");
let gameOverAudio=document.getElementById("game-over");
////////////////////////////////////////////////////////
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray=Array.from(letters);
lettersArray.forEach(letter=>{
let letters=document.querySelector(".letters");    
let newDiv=document.createElement("div")
newDiv.innerHTML=letter;
newDiv.classList.add("box");
letters.appendChild(newDiv);
})

///////////////////////////////////////
const words = {
    footballPlayer: [
    {"name":"Coutinho",
    "note":"The most expensive deal in Barcelona's history",
    },
    {"name":"Neymar",
    "note":"The most expensive player in football history",
    },
    {"name":"Dani Alves",
    "note":"The player with the most titles in football history",
    },
    {"name":"Messi",
    "note":"The owner of the largest number of assists in the history of football",
    },
    {"name":"Ronaldo",
    "note":"He has the most assists in the history of the Champions League",
    },
    {"name":"Pedri",
    "note":"Winner of the Golden Boy Award in 2021",
    },
    {"name":"ronaldo nazario",
    "note":"He played in Barcelona,  real, Inter, Milan",
    },
    {"name":"Robert Lewandowski",
    "note":"The third top scorer in the Champions League in history",
    }],
    movies: [
    {"name":"squid game",
    "note":`A series that consists of challenges between a group of contestants to win a large amount of money, but all losers die`,
    },
    {"name":"Harry potter",
    "note":`About magic`,
    },
    {"name":"Spider Man",
    "note":`A man gets bitten by a spider, and his life changes`,
    },
    {"name":"The world war",
    "note":`The world's largest struggle for control`,
    },
    {"name":"Jackie Chan",
    "note":`About martial arts`,
    },
    {"name":"Home alone",
    "note":`A Chinese and a little boy on Christmas`,
    },
    {"name":"La Casa de Papel",
    "note":`Thieves in red suits robbed a central bank in Spain`,
    }],
    countries: [
    {"name":"Qatar",
    "note":`Organizing the 2022 World Cup `,
    },
    {"name":"Egypt",
    "note":`The country of the pharaonic civilization`,
    },
    {"name":"Brazil",
    "note":`She has five World Cups`,
    },
    {"name":"Palestine",
    "note":`Connecting Africa and Asia`,
    },
    {"name":"Syria",
    "note":`It is located in the north of Palestine`,
    },
    {"name":"Germany",
    "note":`She has four World Cups`,
    },
    ],
    programming: [
    {"name":"python",
    "note":`It is used in many fields of programming`,
    },
    {"name":"Java Script",
    "note":`Especially used for web pages`,
    },
    {"name":"HTML",
    "note":`Web page structure`,
    },
    {"name":"Css",
    "note":`Cascading Style Sheets`,
    },
    {"name":"Assembly",
    "note":`low-level programming`,
    },
    {"name":"Java",
    "note":`a programming language and computing platform first released by Sun Microsystems in 1995.`,
    },
    {"name":"React",
    "note":`JavaScript library`,
    },],                                             
    }
///////////////////////////////////////
let keys=Object.keys(words);
let value=Object.values(words);
let randomKey=Math.floor(Math.random()*keys.length); 
let choosKey=keys[randomKey];
let randomWord=Math.floor(Math.random()*choosKey.length); 
let chosWord=value[randomKey][randomWord];
document.querySelector(".word .titel span").innerHTML=choosKey;
document.querySelector(".note div").innerHTML=chosWord.note;
let chosWordArray=Array.from(chosWord.name);
let chosWordlength=0;
chosWordArray.forEach(letter=>{
let xWord=document.querySelector(".x-word");    
let newSpan=document.createElement("span")
if (letter==" "){
newSpan.classList.add("space");
--chosWordlength;
}
xWord.appendChild(newSpan);
++chosWordlength;
})
let errorNum=0;
let correctLetter=0;
document.addEventListener("click",e=>{
let theStatus=false; 
    if(e.target.className=="box"){
        let clickL=e.target.innerHTML;
        e.target.classList.add("clicked")
        chosWordArray.forEach((lw,iw)=>{
            if(clickL.toLowerCase()==lw.toLowerCase()){
                let guess =Array.from(document.querySelectorAll(".x-word span"));
                guess.forEach((l,i)=>{
                    if(iw==i){
                        l.innerHTML=lw;
                        theStatus=true;
                        correctLetter++;
                        if(correctLetter==chosWordlength){
                            willDone();
                        } 
                    }
                })
            }
            
        }
        )
                ///out side loop
                
                if(theStatus==false){
                    document.querySelector(".hangMan-drow").classList.add(`error-${errorNum +1}`)
                    ++errorNum;
                    fail.play();
                    if(errorNum==7){
                        document.querySelector(".letters").classList.add(`finish`)
                        gameOver()
                    }
                }else{
                    success.play();
                }
    }
})
function gameOver(){
    gameOverAudio.play();
    let newDiv=document.createElement("div")
    newDiv.innerHTML=`game over <span> correct word is '${chosWord}'</span>`;
    newDiv.classList.add("gameOver");

    document.querySelector(".fineth").appendChild(newDiv);
    playagain()
}
function willDone(){
    wellDone.play();
    let newDiv=document.createElement("div")
    newDiv.innerHTML=`will Done <span>The number of times the error is '${errorNum}' </span>`;
    newDiv.classList.add("willDone");
    document.querySelector(".fineth").appendChild(newDiv);
    playagain()
}

//play again
function playagain(){
let newDiv=document.createElement("div")
newDiv.innerHTML=`play again `;
newDiv.classList.add("playagain");
document.querySelector(".fineth").appendChild(newDiv);
document.querySelector(".playagain").addEventListener("click",()=>window.location.reload())

}

// console.log(x.splice(1,1),x)

// console.log(notes.programming[0].FRONT)
/*
// const words = {
//     programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//     people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
// }
// const notes = {
//     programming: ["for backEnd", "for frontEnd", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//     people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
// }
*/ 