document.querySelector('button').addEventListener('click', e =>{
  
  var rand = Math.floor(Math.random() * 100);
  console.log(rand);

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.querySelector('button').style.border = `rgb(${r},${g},${b}) 2px solid`;
  document.querySelector('button').style.boxShadow = `rgb(${r},${g},${b}) 0px 0px 10px`;
  document.querySelector('button').onmouseenter = () =>{
    document.querySelector('button').style.boxShadow = `rgb(${r},${g},${b}) 0px 0px 10px`;
  }
  document.querySelector('button').onmouseleave = () =>{
    document.querySelector('button').style.boxShadow = `rgb(${r},${g},${b}) 0px 0px 0px`;
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.imgflip.com/get_memes' ,true);

  xhr.onload = function () {
    if(this.status === 200){

      const result = JSON.parse(this.responseText);
      
      if(result.success === true){
         document.querySelector('p').innerHTML = result.data.memes[rand].name;
         document.querySelector('img').src = result.data.memes[rand].url;
      }

    }
  }
  xhr.send();


})

