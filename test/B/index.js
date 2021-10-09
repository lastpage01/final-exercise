let randomColor = document.getElementById('color');
let chooseColor = document.getElementById('choose_color');
let copyColor = document.getElementById("copy");
let backgroundColor = document.getElementById('backgroundColor');
let submit = document.getElementById('submit');
let color,cp_color;

randomColor.addEventListener('click',getRandomColor);
copyColor.addEventListener('click',getcopyColor);
submit.addEventListener('click',addColor);


function getRandomColor(){
    let x,y,z;
    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z = Math.floor(Math.random()*255);

    color = `rgb(${x}, ${y}, ${z})`;
    document.getElementById("demo").innerText = color;
}

function getcopyColor(){
    cp_color = color;
    if(cp_color != undefined)
    {
        alert(`Đã copy mã màu : ${cp_color}`);
        document.getElementById('demo_copy').innerText = cp_color;
    }
        
    else alert(`Ban chua Pick ma mau ngau nhien`)
}

backgroundColor.style.backgroundColor = chooseColor.value;

function addColor(){
    backgroundColor.style.backgroundColor = chooseColor.value;
    console.log(chooseColor.value);
}