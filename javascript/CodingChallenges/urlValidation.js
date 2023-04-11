// Write a program using a regex that matches valid URLs. Valid URLs should start with either
//http:// or https://,followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
//Print a message indicating if the input matches the conditions or not.

function urlValidation(inputUrl){
    return /(http)s?:\/\/[\w\d\@\#]+\.[a-zA-Z]+/.test(inputUrl) ? "valid url" : "invalid url"
}

// valid url
console.log(urlValidation("https://pwskills132121@#.com"))
console.log(urlValidation("http://pwskills@##@@124.com"))

console.log("") // HACK: to give a line break.

// invalid urls
console.log(urlValidation("pwskills.com"))
console.log(urlValidation("12433.com"))
console.log(urlValidation("http//pwskills.com"))
console.log(urlValidation("https://pwskills."))