const age = 13;

if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}

age >= 18 ? console.log("you can vote") : console.log("you can not vote");

//Assign variable
const conVote = age > 18 ? true : false

let auth = true;
let redirect;

if (auth) {
    alert("Welcome to dashboard");
    redirect = "dashboard";
} else {
    alert("access denied");
    redirect = "login";
}

redirect = auth
    ? (alert("welcome to dashboard "), "dashboard")
    : (alert("access denied"), "login");
//如果不想要else
auth ? console.log("Welcome to dashboard") : null;
//or
auth && console.log("Welcome to dashboard");