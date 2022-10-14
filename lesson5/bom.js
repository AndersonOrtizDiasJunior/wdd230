const list = document.querySelector(".list")
const button = document.querySelector("button")
input = document.querySelector("#favchap")
button.addEventListener("click", addChapter)

function addChapter() {
    let value = input.value
    if (value != "") {
        let li = document.createElement("li")
        li.textContent = value
        cancelButton =document.createElement('button')
        cancelButton.textContent = "❌" 
        li.appendChild(cancelButton)
        list.appendChild(li)
        cancelButton.addEventListener("click", func => {
            removeChapter(li)
        })
        input.value = ""
        input.focus()
    }
}

function removeChapter(chapter) {
    chapter.parentNode.removeChild(chapter)
}

