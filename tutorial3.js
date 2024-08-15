"Use strict"

//Converting HTML Form fields  Values to JSON object//** */

function convertToJson() {
    let form = document.getElementById("dataForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
}


//Difference between JSON.parse() and JSON.stringify() Methods in JavaScript //** */


//JSON.parse(string, function);

// const myInfo = `{
//     "Name": "GFG", 
//     "Age":22,
//     "Department" : "Computer Science and Engineering",
//     "Year": "3rd"
//  }`

//  const Obj = JSON.parse(myInfo);
//  console.log(Obj.Name)  
//  console.log(Obj.Age)


//JSON.stringify() Method//** */

// let myInfo = {
//     Name : "GFG",
//     Age :22,
//     Department : "Computer Science and Engineering",
//     Year: "3rd"
// }
// let Obj = JSON.stringify(myInfo);
// console.log(Obj);


//How to JSON Stringify an Array of Objects in JavaScript//** */

// let data = [
//     {
//         language: 'JavaScript',
//         category: 'Web Development'
//     },
//     {
//         language: 'Python',
//         category: 'Data Science'
//     },
//     {
//         language: 'Java',
//         category: 'Software Development'
//     }
// ];
// const res = JSON.stringify(data, (key, value) => {
//     if (typeof value === 'string') {
//         return value.toUpperCase();
//     }
//     return value;
// });
// console.log(res);


//Using a Custom Function for JSON Stringify//** */

// const data = [
//     {
//         language: 'JavaScript',
//         category: 'Web Development'
//     },
//     {
//         language: 'Python',
//         category: 'Data Science'
//     },
//     {
//         language: 'Java',
//         category: 'Software Development'
//     }
// ];
// const res = approach2Fn(data);
// console.log(res);

// function approach2Fn(data) {
//     if (Array.isArray(data)) {
//         const sArr = data.map
//             (item => approach2Fn(item));
//         return `[${sArr.join(',')}]`;
//     } else if (typeof data === 'object' 
//         && data !== null) {
//         const sObj = Object.entries(data)
//             .map(([key, value]) => 
//                 `"${key}":${approach2Fn(value)}`)
//             .join(',');
//         return `{${sObj}}`;
//     } else {
//         return JSON.stringify(data);
//     }
// }



//JavaScript JSON stringify() Method//** */

// const value = {
//     Company: "GeeksforGeeks",
//     Estd: 2009,
//     location: "Noida"
// };
// const result = JSON.stringify(value);
// console.log("value of result = " + result);












