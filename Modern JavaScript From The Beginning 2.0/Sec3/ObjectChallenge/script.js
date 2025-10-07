const library = [
    {
        title: "title1",
        author: "author1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
        {
        title: "title2",
        author: "author2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
        {
        title: "title2",
        author: "author2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title } = library[0];
console.log(title);

const {title: firstBook} = library[0];


JSON.stringify(library);