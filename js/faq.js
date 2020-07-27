const searchInput = document.querySelector('#search-bar')
const searchIcon = document.querySelector('#search-icon')
const eachQuestion = document.getElementsByClassName('question1')

//removes the search icon when a user types in something
searchInput.addEventListener('input', () => {
    if(searchInput.value !== ''){ 
        searchIcon.style.display = 'none'
    }
    else{
        searchIcon.style.display = 'block'
    }
})

//Loop all the questions and add a click event to all of them
let qtn=0;
let questions = eachQuestion.length;
for(qtn; qtn < questions; qtn++){
    eachQuestion[qtn].addEventListener('click', openIcon)
}

//add the open class to the specific question that was clicked
function openIcon(e) {
    const clickedQuestions = e.currentTarget
    clickedQuestions.classList.toggle('open')
}