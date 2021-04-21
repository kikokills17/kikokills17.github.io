window.addEventListener('load', function () {
  const mark1 = document.getElementsByClassName('mark')[0];
  const mark2 = document.getElementsByClassName('mark')[1];
  const navBox = document.getElementsByClassName('nav-box')[0];
  const wrapper = document.getElementsByClassName('wrapper')[0];

  function toggleNav() {
    let classList = Array.from(navBox.classList);
    if (classList.indexOf('active') === -1) {
      navBox.classList.add('active');
      wrapper.style.display = 'none';
      // console.log(1);
    } else {
      navBox.classList.remove('active');
      wrapper.style.display = 'block';
      // console.log(2);
    }
  }

  mark1.addEventListener('click', toggleNav);
  mark2.addEventListener('click', toggleNav);
})
