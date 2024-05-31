const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]);
  } else if (e.key === 'ArrowLeft') {
    const items = document.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
  }
});