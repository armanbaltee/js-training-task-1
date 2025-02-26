import _ from 'lodash';

const studentData = {
        name: "Arman Ali",
        age: 24,
        address: {
            country: "Pakistan",
            city: "Skardu",
        },
        role: "Frontend Developer"
}

const shallowCopy = Object.assign({}, studentData)
shallowCopy.name = "Hey";

// const deepCopy = JSON.parse(JSON.stringify(studentData));
// deepCopy.address.city = "Lahore";
// deepCopy.role = "Full Stack Developer";
// deepCopy.name = "Ali"

console.log(studentData);
console.log(shallowCopy);
// console.log(deepCopy);


const deepCopyLodash = _.cloneDeep(studentData);
deepCopyLodash.name = "Hello Lahore";
deepCopyLodash.address.country = "XYZ";

console.log(deepCopyLodash);

