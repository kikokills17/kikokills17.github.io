
let mark1 = document.getElementsByClassName('mark')[0];
let mark2 = document.getElementsByClassName('mark')[1];
let navBox = document.getElementsByClassName('nav-box')[0];
let wrapper = document.getElementsByClassName('wrapper')[0];
// let navItems = document.getElementsByClassName('nav')[0];
// let aList = Array.from(navItems.getElementsByTagName('a'));

function toggleNav() {
  let classList = Array.from(navBox.classList);
  if (classList.indexOf('active') === -1) {
    navBox.classList.add('active');
    wrapper.style.display = 'none';
    console.log(1);
  } else {
    navBox.classList.remove('active');
    wrapper.style.display = 'block';
    console.log(2);
  }
}

mark1.addEventListener('click', toggleNav);
mark2.addEventListener('click', toggleNav);
