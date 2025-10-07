const post = {
    title: 'post one',
    body: 'This is a body'
};

// convert to json string
const str = JSON.stringify(post);
console.log(str);

//parse json

const obj = JSON.parse(str);
console.log(obj);


const posts = [
    {
        id: 1,
        title: 'post one',
        body: 'this is a body'
    },
    {
        id: 2,
        title: 'post two',
        body: 'this is a body'
    }
]
const str1 = JSON.stringify(posts);
console.log(str1);