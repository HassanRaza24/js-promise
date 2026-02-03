// let cond = true;

// let prom = new Promise(function (resolve, reject) {
//     if (cond) {
//         resolve("work is done")
//     } else {
//         reject("work is fail")
//     }
// });

// console.log(prom)


// function prom(cond) {
//     return new Promise(function (resolve, reject) {
//         if (cond) {
//             resolve("work is done")
//         } else {
//             reject("work is fail")
//         }
//     });
// }

// console.log(prom(false))
// console.log(prom(true))



// function prom(cond) {
//     return new Promise(function (resolve, reject) {
//         console.log("fetching data, plz wait......!")       // pending stage
//         setTimeout(() => {
//             if (cond) {
//                 resolve("work is done")                     // fulfill stage   
//             } else {
//                 reject("work is fail")                      // rejection stage
//             }
//         }, 3000);
//     })
// }

// let onfull = (done) => {
//     console.log(done)
// }

// let onreject = (err) => {
//     console.log(err)
// }

// prom(false).then(onfull).catch(onreject)














function prom(cond) {
    return new Promise(function (resolve, reject) {
        console.log("fetching data, plz wait......!")       // pending stage
        setTimeout(() => {
            if (cond) {
                resolve("work is done")                     // fulfill stage   
            } else {
                reject("work is fail")                      // rejection stage
            }
        }, 3000);
    })
}

prom(false).then((done) => {
    console.log(done)
}).catch((err) => {
    console.log(err)
})