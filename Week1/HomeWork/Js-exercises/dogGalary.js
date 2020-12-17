function creatDogImg(){
    const xhr =  new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onload = ()=>{
        console.log(xhr.response);
        const imgUrl = xhr.response.message;
        const listItem =document.createElement('li');
        document.getElementById('list').appendChild(listItem);
        const image = document.createElement('img');
        image.src = imgUrl;
        listItem.appendChild(image);
        image.style.width = '300px';
        image.style.height = '300px';

    }
    const url = "https://dog.ceo/api/breeds/image/random";
    xhr.open('GET',url);
    xhr.send();
}
document.getElementById('btn1').addEventListener('click',creatDogImg);

function creatDogImg1(){
    const url = `https://dog.ceo/api/breeds/image/random`

axios.get(url)
  .then(function (response) {
    console.log(response);
        const imgUrl1 = response.data.message;
        const listItem1 =document.createElement('li');
        document.getElementById('list').appendChild(listItem1);
        const image1 = document.createElement('img');
        image1.src = imgUrl1;
        listItem1.appendChild(image1);
        image1.style.width = '300px';
        image1.style.height = '300px';
  })
  .catch(function (error) {
    console.log(error);
  })
  
}
document.getElementById('btn2').addEventListener('click', creatDogImg1);