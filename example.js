
function sendRequest(word){
    const request = new XMLHttpRequest();
    const url = 'http://localhost:8081';
    request.open("GET", url);
    request.setRequestHeader("word", word);
    request.send();
    
    request.onload = (e) => {
        let correct = request.responseText;
        
        if(correct === "true"){
            console.log("Returned true");
            window.alert('Spelled correctly');
        }
        else{
            console.log("Returned false");
            window.alert('This is spelled incorrectly');
        }
    }
}

const spellCheck = (ev)=>{
    ev.preventDefault();
    let word = document.getElementById('spell').value;
    console.log(word);
    spelling = sendRequest(word);
    document.querySelector('form').reset();
    console.log(spelling);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', spellCheck);
});