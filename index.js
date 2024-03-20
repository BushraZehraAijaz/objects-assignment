// creating ARRAY
var studentNames = ["Bushra", "Afshan", "Hina"];
var user = {
    firstname: 'Bushra',
    lastname: 'Zehra',
    age: '30'
};
console.log(user);
var student = {
    name: 'Afshan',
    classid: 'ABC',
    Rollno: 50,
    email: 'example@b.com'
};
var student2 = {
    fullname: 'Hina Alvi',
    rollnum: '55',
    classid: 'XYZ',
    email: 'user@c.com'
};
var item = {
    name: 'furniture',
    qualitygood: 'true',
    price: '25000',
    material: 'wood'
};
console.log(student.Rollno);
console.log(student2.rollnum),
    console.log(item.price);
console.log(studentNames);
var array = [{}, {}, [], true, "abc"];
var object = {
    cat: {
        name: 'lolo',
        color: 'brown',
        tail: 'true',
        catdetails: {
            age: '2years',
            vaccinated: 'true',
        },
    },
    birds: {
        name: 'momo',
        color: ["grey", "brown", "orange"],
        wings: 'true',
        birddetails: {
            age: '1year',
            vaccinated: 'true',
        }
    }
};
console.log(object.birds);
console.log(object.birds.color);
console.log(object.birds.color[1]);
console.log(object.cat.name);
console.log(object.cat.catdetails);
