let adviceID = document.getElementById('adviceno');
let adviceMAIN = document.querySelector('.advice');



async function main(){
    const data = await fetch('https://api.adviceslip.com/advice').then();
    
    const main = await data.json();
    console.log(main);
    document.getElementsByClassName('one')[0].disabled = true;
    return main;
}   

function popo(){
    main().then(datas=>{
        adviceID.innerHTML = `Advice # ${datas.slip.id}`;
        adviceMAIN.innerHTML = `"${datas.slip.advice}"`;
        setTimeout(() =>{document.getElementsByClassName('one')[0].disabled = false;}, 1500);
        }
        
    )

}

const btn = document.getElementsByClassName('one')[0];
btn.addEventListener("click", popo);
console.log()

