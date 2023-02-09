 var url="https://637c2c686f4024eac21f56a7.mockapi.io/user" 

// async function createData(){
//     let data ={
//         "Name":"tamilarasan",
//         phone:123456,
//         "email":"tamil@gmail"
//     }

//     let res=await fetch(url, {
//         method:"POST",
//         body: JSON.stringify(data),
//         headers:{
//             "Content-type":"application/json;charset=UTF-8"
//         }
//     })
//     var result =await res.json()
//     console.log(result);
// }
// createData();


async function updata(){
    let data1 ={
        Name:"arasan",
        phone:123456,
        email:"tamil@gmail"
    }

    let res1= await fetch( url + "/10",{
        method:"POT",
        body: JSON.stringify(data1),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    var result1 =await res1.json()
    console.log(result1);
}
updata();