var outerDiv = document.getElementById('outer') ;

outerDiv.addEventListener('mouseover', function() {
    console.log('Mourse Over') ;
}) ;


outerDiv.addEventListener('mouseout', function() {
    console.log('Mourse Out') ;
}) ;


document.addEventListener('keydown', function(event) {
    console.log('Key Down', event.keyCode)  ;
})