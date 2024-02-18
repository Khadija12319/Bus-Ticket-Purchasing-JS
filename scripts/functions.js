//hide element function 
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
//show element function
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//background add
function addHighlighter(){
    document.getElementById(elementId).classList.add('bg-[#1DD100]');
    document.getElementById(elementId).classList.add('text-[#FFF]');

}
//background remove
function removeHighlighter(elementId){
    document.getElementById(elementId).classList.remove('bg-[#1DD100]');
    document.getElementById(elementId).classList.remove('text-[#FFF]');
}