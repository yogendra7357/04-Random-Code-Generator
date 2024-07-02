const yogColor = () => {

    
    const randomNamber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNamber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('Colour-code').innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);

    
}
document.getElementById('btn').addEventListener('click', yogColor);


yogColor();







