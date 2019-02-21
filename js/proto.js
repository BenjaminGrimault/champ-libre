function showQuote(){
    document.getElementsByClassName('pl-profile-content-quote-form')[0].style.display="block";
    document.getElementsByClassName('pl-profile-content-modify-form')[0].style.display="none";
}
function showModify(){
    document.getElementsByClassName('pl-profile-content-quote-form')[0].style.display="none";
    document.getElementsByClassName('pl-profile-content-modify-form')[0].style.display="block";
}
function hideAll(){
    document.getElementsByClassName('pl-profile-content-quote-form')[0].style.display="none";
    document.getElementsByClassName('pl-profile-content-modify-form')[0].style.display="none";
}