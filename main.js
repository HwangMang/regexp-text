const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
` 

// const regxp = new RegExp('the','')
// const regxp = /fox/gi
// console.log(regxp.test(str))
// console.log(str.replace(regxp,'AAA'))

console.log(
  str.match(/d$/g)
)