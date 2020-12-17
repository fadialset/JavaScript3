function randomFriend(){
    const xhr =  new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onload = ()=>{
        const FriendData = xhr.response;
        console.log(FriendData);
    }
    const url = "https://www.randomuser.me/api";
    xhr.open('GET',url);
    xhr.send();
}
randomFriend();


function randomFriend1(){
const url = `https://www.randomuser.me/api`

axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
}
randomFriend1();