document.querySelector('.input1').addEventListener('input', aga)
document.querySelector('.input1').addEventListener('input', function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
  })

document.querySelector('.input2').addEventListener('input', function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
  })

let elem = document.getElementById('one')
let elem2 = document.getElementById('two')

let s = document.querySelector('.p');


function aga (event){
    let length = event.target.value.length;

    if(length > 1){
        elem.style.cssText = `width: 20px`;
        s.style.cssText = `margin-left: 110px`;
    }
    if(length > 2){
        elem.style.cssText = `width: 30px`;
        s.style.cssText = `margin-left: 100px`;

    }
    if(length > 3){
        elem.style.cssText = `width: 40px`;
        s.style.cssText = `margin-left: 90px`;

    }
    if(length > 4){
        elem.style.cssText = `width: 50px`;
        s.style.cssText = `margin-left: 80px`;

    }
    if(length > 5){
        elem.style.cssText = `width: 60px`;
        s.style.cssText = `margin-left: 70px`;
    }
}

