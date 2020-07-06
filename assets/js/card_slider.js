const config = {
  type: 'carousel',
  perView: 3,
  breakpoints: {
    800: {
      perView: 1
    }
  }
};
new Glide('.glide', config).mount();

// document.querySelector('.arrow-mobile').addEventListener('click', function () {
//   document.querySelector('.arrow.down').classList.toggle('hide');
//   document.querySelector('.arrow.up').classList.toggle('hide');
//   document.querySelector('.flip-card').classList.toggle('slide');
//   setTimeout(function () {
//     document.querySelector('.flip-card').classList.toggle('slide-height');
//   }, 1000);
// });

on('click', '.arrow-mobile', function () {
  document.querySelector('.arrow.down').classList.toggle('hide');
  document.querySelector('.arrow.up').classList.toggle('hide');
  document.querySelector('.flip-card').classList.toggle('slide');
  setTimeout(function () {
    document.querySelector('.flip-card').classList.toggle('slide-height');
  }, 1000);
});
