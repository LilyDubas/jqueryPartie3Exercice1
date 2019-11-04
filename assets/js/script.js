$(document).ready(function(){
var compteurClic = 0;
$('#button').click(function(){
compteurClic++;
console.log(compteurClic);
$('#clicks').attr('value', compteurClic);
})
});
