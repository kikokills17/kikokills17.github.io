window.addEventListener('load', function () {
  const studio = document.getElementsByClassName('work-item')[0];
  const lab = document.getElementsByClassName('work-item')[1];
  const studioLis = studio.querySelectorAll('ul.outer>li');
  const labLis = lab.querySelectorAll('ul.outer>li');

  function handleDropMenu(e) {
    const desc = this.querySelector('ul.desc');
    if (e.target.classList.contains('plus')) {
      let mark = e.target.innerHTML;
      if (mark === '+') {
        e.target.innerHTML = '-';
        desc.classList.add('open');
      } else {
        e.target.innerHTML = '+';
        desc.classList.remove('open');
      }
    }
  }

  studioLis.forEach(li => {
    li.addEventListener('click', handleDropMenu);
  });
  labLis.forEach(li => {
    li.addEventListener('click', handleDropMenu);
  });
})