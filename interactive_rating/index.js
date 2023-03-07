
document.getElementById('submit').onclick = function () {
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');


    if(one.checked){
        document.getElementById('label').innerHTML = 1;
    }
    else if (two.checked){
        document.getElementById('label').innerHTML = 2;
    }
    else if (three.checked){
        document.getElementById('label').innerHTML = 3;
    }
    else if (four.checked){
        document.getElementById('label').innerHTML = 4;
    }
    else if (five.checked){
        document.getElementById('label').innerHTML = 5;
    }
}




 
