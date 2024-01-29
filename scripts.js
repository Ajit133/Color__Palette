window.onload = ()=>{
   main()
};

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const inputBtn = document.getElementById("input_btn");
   
    btn.addEventListener("click",()=>{
       root.style.background = generateHEXcolor();
       inputBtn.value = generateHEXcolor();
    })
}

// function generateRGBcolor(){
//     const red = Math.floor(Math.random()*255);
//     const green = Math.floor(Math.random()*255);
//     const blue = Math.floor(Math.random()*255);

//     return `rgb(${red},${green},${blue})`;
// }
function generateHEXcolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
