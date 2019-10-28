let arrayOfUsers = [];

window.onload = function() {
  getUsers();

  // consolePosts();
  // displayPhotoAndName();
};

const getUsers = () => {
  let user;
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(function(jsonpayload) {
      console.log(jsonpayload.results);
      jsonpayload.results.forEach(function(user, index) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let ul = document.getElementById("ListOfUsers");
        let button = document.createElement("button");
        button.innerText = "Show my email";
        button.setAttribute("data-email", user.email);
        img.setAttribute("src", user.picture.large);
        span.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);
        button.addEventListener("click", clickedButtonFunction);
        ul.appendChild(li);
      });
    });

  let clickedButtonFunction = function(event) {
    var clickedButton = event.target;
    console.log("the user was clicked ", clickedButton);
    var email = clickedButton.getAttribute("data-email");
    console.log("the email is", email);
    var clickedLi = clickedButton.parentElement;
    let emailSpan = document.createElement("li");
    emailSpan.innerText = email;
    clickedLi.appendChild(emailSpan);
    clickedLi.removeChild(clickedButton);
  };

  const consolePosts = () => {
    console.log("This is coming too early " + arrayOfUsers);
  };

  const displayPhotoAndName = () => {
    //how do I reference an object, within a object, within a array and then store it into a html element?

    const listElement = document.getElementById("users");
    arrayOfUsers.map(user => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "More Info";
      button.addEventListener("click", function() {
        moreInfo(user.id);
      });
      li.appendChild(
        document.createTextNode(arrayOfUsers[0].user.name + " - ")
      );
      li.appendChild(button);
      listElement.append(li);
    });

    // document.getElementById("photo").innerHTML = arrayOfUsers[0];
  };

  // var wrapper = $("#wrapper"),
  //   container;
  // for (var key in arrayOfUsers) {
  //   container = $('<div id="users" class="container"></div>');
  //   wrapper.append(container);
  //   container.append('<div class="photo">' + arrayOfUsers[0].picture + "</div>");
  //   container.append('<div class="name">' + key + "</div>");
};
