
document.getElementById('contat-form').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sorry! This feature is yet to implement. Please send me an email at yes143.shankar@gmail.com');
});

let typingP = document.getElementById('typing');

typeWord(typingP, "{Software_Developer}");

setInterval(() => {
    typeWord(typingP, "{Software_Developer}");
}, 5000);

function typeWord(elem, word){
    elem.innerText = word.charAt(0);

    for (let index = 1; index < word.length; index++) {
        
        setTimeout(() => {
            elem.innerText += word.charAt(index);
        }, (index +1) * 100);
    }
}