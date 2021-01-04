function funFacts(){
    const xhr =  new XMLHttpRequest();
    xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.response}`)
    }
    else{
        console.log(xhr.response);
        const img = document.createElement('img');
        img.src = xhr.response.img;
      document.body.appendChild(img);
      }
    }
    const url = "https://xkcd.now.sh/?comic=latest";
    xhr.open('GET',url);
    xhr.send();
}
funFacts();

function funFacts1(){
    const url = `https://xkcd.now.sh/?comic=latest`

axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
}
funFacts1()