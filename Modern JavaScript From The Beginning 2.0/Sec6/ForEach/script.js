const social = ['Twitter', 'Linkin', 'Instagram'];

console.log(social.__proto__);
social.forEach(function (item) {
    console.log(item);
});


social.forEach((item, index, arr) => {
    console.log(item, index, arr.length);
});

const socialObjs = [
    {name: "Twitter", url: "https://twitter.com"},
    {name: "Facebook", url: "https://facebook.com"}
];

socialObjs.forEach((item) => {
    console.log(item);
}
)

