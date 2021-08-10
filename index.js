var background = ['#F5B041', '#3498DB', '#CE52CA', '#58D68D'], i = 0;
var backgrounds = ['#78281F', '#4A235A', '#154360', '#0B5345', '#7D6608', '#6E2C00', '#626567','#17202A'];
document.querySelector('body').addEventListener('click', () => {
  document.body.style.backgroundColor = background[i%background.length];
  i++;
  if(i>100){
      i=0;
  }
});

var j=0;
document.querySelector('body').addEventListener('click', () => {
    elements = document.getElementsByClassName('cardcolor');
    j++;
    if(j>100){
        j=0;
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.backgroundColor = backgrounds[(j+k)%backgrounds.length];
    }
  });

document.getElementById('colored').addEventListener('mouseover', () => {
    elements = document.getElementsByClassName('cardcolor');
    j++;
    if(j>100){
        j=0;
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.backgroundColor = backgrounds[(j+k)%backgrounds.length];
    }
});