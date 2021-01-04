const url = "https://www.randomuser.me/api";
function randomFriend() {
    const xhr =  new XMLHttpRequest();
    xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status != 200) {
        console.log(`Error : ${xhr.status}`)
      }else{
        const friendData = xhr.response;
      console.log(friendData.info);
      }
    }
    xhr.open('GET',url);
    xhr.send();
}
randomFriend();


function randomFriendAxios(){

axios.get(url)
  .then(function (response) {
    console.log(response.data.info);
  })
  .catch(function (error) {
    console.log(error);
  })
  
}
randomFriendAxios();