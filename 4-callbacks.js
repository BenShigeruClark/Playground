const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
      return console.log(error)
    }

    console.log(result)
})
















// setTimeout(() => {
//   console.log('Two Seconds!')
// }, 2000)

// const names = ['Ben', 'Andrew', 'Jess']
// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }
//     callback(data)
//   }, 2000)
// }

// geocode('California', (data) => {
//     console.log(data)
// })

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum)
// })

