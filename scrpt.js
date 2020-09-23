const container = document.querySelector('.menu-container');
const menu = document.querySelector('.menu-icon');
menu.addEventListener('click', () => {
  console.log(container.classList)
  container.classList.forEach(e => {

    if (e === 'hidden') {
      container.classList.remove('hidden')
      container.classList.add('show-menu')
    }
    else if (e === 'show-menu') {
      container.classList.remove('show-menu')
      container.classList.add('not-show-menu')
    }
    else if (e === 'not-show-menu') {
      container.classList.add('show-menu')
      container.classList.remove('not-show-menu')
    }
  })
});

$(document).on('ready', function () {
  var winHeight = $(window).height(),
    docHeight = $(document).height(),
    progressBar = $('progress'),
    max, value;
  max = docHeight - winHeight;
  progressBar.attr('max', max);


  $(document).on('scroll', function () {
    value = $(window).scrollTop();
    progressBar.attr('value', value);
  });
});
