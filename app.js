// Creating scroll animations

// Fade in and scale up
const observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show0');
    } else {
      entry.target.classList.remove('show0');
    }
  });
});
const hiddenElements0 = document.querySelectorAll('.hidden0')
hiddenElements0.forEach((el) => observer0.observe(el));

// Fade in from left
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

// Fade in from below
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show2');
    } else {
      entry.target.classList.remove('show2');
    }
  });
});
const hiddenElements2 = document.querySelectorAll('.hidden2')
hiddenElements2.forEach((el) => observer2.observe(el));

// Fade in from above
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show3');
    } else {
      entry.target.classList.remove('show3');
    }
  });
});
const hiddenElements3 = document.querySelectorAll('.hidden3')
hiddenElements3.forEach((el) => observer3.observe(el));

// Fade in from above
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4');
    } else {
      entry.target.classList.remove('show4');
    }
  });
});
const hiddenElements4 = document.querySelectorAll('.hidden4')
hiddenElements4.forEach((el) => observer4.observe(el));

// Fade in from above
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show5');
    } else {
      entry.target.classList.remove('show5');
    }
  });
});
const hiddenElements5 = document.querySelectorAll('.hidden5')
hiddenElements5.forEach((el) => observer5.observe(el));

// Special fade in for inner camera view in WISPR section
const observerInner = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showInner');
    } else {
      entry.target.classList.remove('showInner');
    }
  });
});
const hiddenElementsInner = document.querySelectorAll('.hiddenInner')
hiddenElementsInner.forEach((el) => observerInner.observe(el));

// Special fade in for inner camera view in WISPR section
const observerOuter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showOuter');
    } else {
      entry.target.classList.remove('showOuter');
    }
  });
});
const hiddenElementsOuter = document.querySelectorAll('.hiddenOuter')
hiddenElementsOuter.forEach((el) => observerOuter.observe(el));

// Fade in from left 5%
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showLeft');
    } else {
      entry.target.classList.remove('showLeft');
    }
  });
});
const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft')
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

// Fade in from right 5%
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showRight');
    } else {
      entry.target.classList.remove('showRight');
    }
  });
});
const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
hiddenElementsRight.forEach((el) => observerRight.observe(el));