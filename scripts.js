window.onload = ()=>{
   main()
};

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener("click",()=>{
       root.style.background = generateRGBcolor()
    })
}

function generateRGBcolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}
