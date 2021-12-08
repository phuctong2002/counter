const decreade = document.getElementsByClassName("decreade")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("increase")[0];
const span = document.getElementsByTagName("span")[0];
decreade.addEventListener( "click", function(){
    span.textContent = parseInt(span.textContent) - 1;
})
reset.addEventListener("click", function(){
    span.textContent = 0;
});
increase.addEventListener( "click", function(){
    span.textContent = parseInt(span.textContent) + 1;
});