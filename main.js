const str = `
010-1234-5678
rjswmr@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The saldnhasdik dog asikldisakldasdd fox the ksadlnasd.
abbcFOXccdddd
Dww
http://naver.com
`



console.log(str.match(/\bf\w{1,}\b/g))