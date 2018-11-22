var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 5){
        $(".fixed-navigation").css({"background-color": "#04030A"});
        $('.main-links button').css('display', 'inline-block');
    }
    if(5 > scrolled){
        $(".fixed-navigation").css({"background": "transparent"});     
        $('.main-links button').css({"display": "none"}); 
    }
}
$('.thanks-btn').click(function(){
  $('.phone-modall').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.modal-thanks').css('display', 'inline-block');
});
$('.btn-invite').click(function(){
  $('.modal').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.phone-modall').css('display', 'inline-block');
});
$('.open-modal').click(function(){
    $('.modal').css('display', 'none');
    $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.buy-modal').css('display', 'flex');
});
$('.spec-btn').click(function(){
    $('.modal').css('display', 'none');
        $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.spec-modal').css('display', 'flex');
});
$('.gallery-btn').click(function(){
    $('.modal').css('display', 'none');
        $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.gallery-modal').css('display', 'flex');
});
$('.instuct-btn').click(function(){
    $('.modal').css('display', 'none');
        $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.instuct-modal').css('display', 'flex');
});
$('.content-btn').click(function(){
    $('.modal').css('display', 'none');
        $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.content-modal').css('display', 'flex');
});
$('.places-btn').click(function(){
    $('.modal').css('display', 'none');
        $('.sidebar').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
  $('.places-modal').css('display', 'flex');
});

$('.close-modal').click(function(){
  $('.modal').css('display', 'none');
  $('.phone-modall').css('display', 'none');
  $('.modal-thanks').css('display', 'none');
  $('.main-links span').removeClass('active-punkt');
  $('.fixed-navigation').removeClass('active-nav');
});

// Scroll Menu
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 120;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
  $('.sidebar').css('display', 'none');
  e.preventDefault();
});

$('#open-sidebar').click(function(){
  $('.sidebar').css('display', 'flex');
});
$('#close-sidebar').click(function(){
  $('.sidebar').css('display', 'none');
});

$('.get-btn').click(function(event) {
  $('.get-btn').removeClass('active');
  $(this).addClass('active');
});

$('.deliver-btn').click(function(event) {
  $('.deliver').css('display', 'block');
  $('.going').css('display', 'none');
});

$('.go-btn').click(function(event) {
  $('.going').css('display', 'block');
  $('.deliver').css('display', 'none');
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
$('body').scrollspy({ target: '#right-nav' })

$(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 767) {
    var s = skrollr.init();
  }

  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 767) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    }
  });
});

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

(function($) {
$(function() {
  $('ul.tabs').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.gallery-block').find('div.fotorama').removeClass('active').eq($(this).index()).addClass('active');
  });
});
$('.main-links span').click(function(event) {
  $('.main-links span').removeClass('active-punkt');
  $(this).addClass('active-punkt');
  $('.fixed-navigation').addClass('active-nav');
});
})(jQuery);
$(".person").click(function() {
  var bg = $(this).css('background-image');
  bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
  alert(bg);
});
$('.left-ar').on('click', function(){
  var s = $("html").scrollTop();
  $('html').scrollTop(s + 50);
  // $('html, body').animate({'scrollTop': pos - 100}, 400);
});
$('.right-ar').on('click', function(){
  var s = $("html").scrollTop();
  $('html').scrollTop(s - 50);
  // $('html, body').animate({'scrollTop': pos - 100}, 400);
});
$('.srollable-others iframe').click(function() {
  $(this).addClass('active-iframe');
});
$('.srollable-others img').click(function() {
  $('.srollable-others img').removeClass('active-img');
  $(this).addClass('active-img');
});