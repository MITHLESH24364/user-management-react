const promise1 = () => {
    console.log('promise1'); 
}
const promise2 = () => {
    console.log('promise2');
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
           console.log('promise3');
              resolve('promise3');
            }, 1000);

        } catch (error) {
            reject(error);
        }
    });
}


// const main = async () => {
//    await promise3()
//     promise1()
//     promise2()
// }

const main = async () => {
    promise3().then(() => {
     promise1()
     promise2()
    });
}


main(); // Output: promise1 promise2
