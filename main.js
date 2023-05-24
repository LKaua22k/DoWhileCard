const gitHubLink = {
    github: "LKaua22k"
}

function githubProfleInfos(){
    const url = `https://api.github.com/users/${gitHubLink.github}`

    fetch(url).then(response => response.json())
    .then(data => {
        // UserAvatar.src = data.avatar_url
        UserName.textContent = data.name
        UserLogin.textContent = data.login
        UserBio.textContent = data.bio
    })

}

githubProfleInfos()