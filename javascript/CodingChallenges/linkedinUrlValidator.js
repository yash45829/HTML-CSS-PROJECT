// linked profile url validation using regex 
//format => https://www.linkedin.com/in/(letters,digits,hyphens or underscores) endswith (letter or digit)

function urlValidator(url){
    return /https:\/\/www.linkedin.com\/in\/[\w\d\-]{5,29}[a-zA-Z0-9]$/.test(url)? console.log("valid id") : console.log("invalid id")
}
// valid IDs
urlValidator("https://www.linkedin.com/in/pwskills-y")
urlValidator("https://www.linkedin.com/in/pwskills-2324")

// invalid IDs
urlValidator("https://www.linkedin.com/in/pwskills-2324-")
urlValidator("https://www.linkedin.com/in/pwskills-2324_")
urlValidator("https://www.linkedin.com/in/pwskillshellohellohellohellohellohellohellohellohellohello-2324_")