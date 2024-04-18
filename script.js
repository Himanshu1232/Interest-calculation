function tamount(){
    const principle=parseFloat(document.getElementById('principle').value);
    const interestrate=parseFloat(document.getElementById('interestrate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    const mamount=principle+(principle*interestrate*tenure)/100;

    document.getElementById('result').innerText= `Total Amount : ${mamount.toFixed(2)}`;

}

document.getElementById('calaulatorbtn').addEventListener('click', tamount);
