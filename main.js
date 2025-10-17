document.querySelector('button').addEventListener('click', getPowerPuffGirl)

function getPowerPuffGirl(){
    const ppGirl = document.querySelector('input').value
    const url = `/api/${ppGirl}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#characterName').innerText = data.fullName
        document.querySelector('#voiceAnimator').innerText = data.voiceAnimator
        document.querySelector('#personality').innerText = data.personality
        document.querySelector('#color').innerText = data.color 
        document.querySelector('#ingredient').innerText = data.ingredient
        document.querySelector('#characterImage').src = data.image
    })
}
