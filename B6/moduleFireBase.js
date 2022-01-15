// Import the functions you need from the SDKs you need


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, doc, setDoc,addDoc, getDoc, getDocs, getFirestore,updateDoc,deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxeoQruZrQttkY-Pb_gC2zIvVxJ5ZG1bE",
    authDomain: "jsi04-1c26e.firebaseapp.com",
    projectId: "jsi04-1c26e",
    storageBucket: "jsi04-1c26e.appspot.com",
    messagingSenderId: "511532795848",
    appId: "1:511532795848:web:a7fb2c6f54b559b3d0a2fd",
    measurementId: "G-Y8SR0ZJFRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//connect to collection
//database
const db = getFirestore();


//get  data by ID
let getDatabyID = async () => {
    let ref = await doc(db, "information", "infomation");
    let data = await getDoc(ref);
    console.log(data.data());
}
// getDatabyID();

//get all data 

let arrayDataTemp = new Array();

let getAllData = async () => {
    const arrayData = await getDocs(collection(db, "information"));
    arrayData.forEach(item => {

        const inf = {
            id: item.id,
            data: item.data()
        }

        arrayDataTemp.push(inf);

        console.log(item.id ," -> data: " ,item.data());
    });
}
// getAllData();

//add document

let addDocAutoID = async () => {
    let ref = await collection(db,"information");
    await addDoc(ref,{
        Name:"Cường học giỏi",
        Age:"Năm nay bé 8 tuổi",
        Crush:"Ng yêu mang tên Ngọc Trinh"
    }).then((result) => {
        console.log(`Thêm thành công ahihihihi!`);
    }).catch((err) => {
        console.log(err);
    });
}
// addDocAutoID()
//add Documnet custome id

let addDocCustomeID = async () => {
    let ref = await doc(db,"information","2020");
    await setDoc(ref,{
        Name:"Nắm mới 2020",
        Age:"Năm nay bé 10 tuổi",
        Crush:"Không yêu ai ngoài em",
        Year:2020
    }).then((result) => {
        console.log(`Thêm thành công ahihihihi!`);
    }).catch((err) => {
        console.log(err);
    });
}
//addDocCustomeID()

//update Information
let updateInf = async () => {
    let ref = await doc(db,"information","2020");
    await updateDoc(ref,{
        Name:"Nắm mới 2022",
        Age:10,
        Crush:"Cuong dep trai",
        Year:2022
    }).then((result) => {
        console.log(`Thêm thành công ahihihihi!`);
    }).catch((err) => {
        console.log(err);
    });
}
// updateInf();

// delete data
let deleteData = async (id) => {
    let ref = await doc(db,"information",id);
    await deleteDoc(ref);
}

// deleteData();

//CRUD

export {
    addDocAutoID,addDocCustomeID,getAllData,getDatabyID,updateInf,deleteData
}