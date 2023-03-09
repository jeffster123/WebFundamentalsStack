var likesArray = [9, 12, 9];

function like(index) {

    var numLikes = document.querySelector("#post" + index + "likes");

    
    //var numLikes = document.querySelector(".numberoflikes");
    var newLikes = Number(numLikes.innerHTML) + 1;
    numLikes.innerHTML = newLikes;
    likesArray[index] = newLikes;
    alert(likesArray);
}