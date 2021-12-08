window.onload=function(){
    var primaryNavigi = document.querySelector(".primary-navigation");
    var navToggle = document.querySelector(".mobile-nav-toggle");

    navToggle.addEventListener("click", (event) => {
        var visibility = primaryNavigi.getAttribute("data-visible");

        if(visibility==="false") {
            primaryNavigi.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
        }
        else if(visibility==="true") {
            primaryNavigi.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
  }


/* ARTS CRAFTS AND PHOTOGRAPHY CAROUSEL */
var mycarouselslide = document.querySelector(".mycarousel-slide");
var mycarouselimages = document.querySelectorAll(".mycarousel-slide img");
var myprevbtnn = document.querySelector("#myprevbtn");
var mynextbtnn = document.querySelector("#mynextbtn");
let mycounter = 1;
var size1 = mycarouselimages[0].clientWidth;
mycarouselslide.style.transform = "translateX("+(-size1*mycounter)+"px)";
mynextbtnn.addEventListener('click', ()=> {
    if(mycounter >= mycarouselimages.length - 1) return;
    mycarouselslide.style.transition = "transform 0.4s ease-in-out";
    mycounter++;
    mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
});
myprevbtnn.addEventListener('click', ()=> {
    if(mycounter <= 0) return;
    mycarouselslide.style.transition = "transform 0.4s ease-in-out";
    mycounter--;
    mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
});
mycarouselslide.addEventListener('transitionend', ()=>{
/*     if(mycarouselimages[mycounter].id === 'mylast-clone') {
        mycarouselslide.style.transition = "none";
        mycounter = mycarouselimages.length - 2;
        mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
    }
    if(mycarouselimages[mycounter].id === 'myfirst-clone') {
        mycarouselslide.style.transition = "none";
        mycounter = mycarouselimages.length - mycounter;
        mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
    }
 */
    switch(mycarouselimages[mycounter].id){
      case 'mylast-clone':
        mycarouselslide.style.transition = "none";
        mycounter = mycarouselimages.length - 2;
        mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
        break;
      case 'myfirst-clone':
        mycarouselslide.style.transition = "none";
        mycounter = mycarouselimages.length - mycounter;
        mycarouselslide.style.transform = 'translateX('+(-size1*mycounter)+'px)';
        break;
    }
});



/* EEE AND CSE CAROUSEL */
var mycarouselslide2 = document.querySelector(".mycarousel-slide2");
var mycarouselimages2 = document.querySelectorAll(".mycarousel-slide2 img");
var myprevbtnn2 = document.querySelector("#myprevbtn2");
var mynextbtnn2 = document.querySelector("#mynextbtn2");
let mycounter2 = 1;
var size2 = mycarouselimages2[0].clientWidth;
mycarouselslide2.style.transform = "translateX("+(-size2*mycounter2)+"px)";
mynextbtnn2.addEventListener('click', ()=> {
    if(mycounter2 >= mycarouselimages2.length - 1) return;
    mycarouselslide2.style.transition = "transform 0.4s ease-in-out";
    mycounter2++;
    mycarouselslide2.style.transform = 'translateX('+(-size2*mycounter2)+'px)';});
myprevbtnn2.addEventListener('click', ()=> {
    if(mycounter2 <= 0) return;
    mycarouselslide2.style.transition = "transform 0.4s ease-in-out";
    mycounter2--;
    mycarouselslide2.style.transform = 'translateX('+(-size2*mycounter2)+'px)';});
mycarouselslide2.addEventListener('transitionend', ()=>{
    switch(mycarouselimages2[mycounter2].id){
      case 'mylast-clone2':
        mycarouselslide2.style.transition = "none";
        mycounter2 = mycarouselimages2.length - 2;
        mycarouselslide2.style.transform = 'translateX('+(-size2*mycounter2)+'px)';
        break;
      case 'myfirst-clone2':
        mycarouselslide2.style.transition = "none";
        mycounter2 = mycarouselimages2.length - mycounter2;
        mycarouselslide2.style.transform = 'translateX('+(-size2*mycounter2)+'px)';
        break;}});


/* var $paperplane = $('.paperplane');
var $win = $(window);

$win.on('scroll', function(){
  var top = $win.scrollTop()/1.5;
  $paperplane.css('transform', 'rotate(' + top + 'deg)');
}); */


/* CUP OF PURPLE COFFEEEE */
$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
  dh = $(document).height(),
  wh= $(window).height();
  scrollPercentage = (scroll/(dh-wh))*100;
  $(".liquid-wave").css('top', scrollPercentage + '%');
});


$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
  dh = $(document).height(),
  wh= $(window).height();
  scrollPercentage = (scroll/(dh-wh))*100;
  $("#progressbar-page").css('height', scrollPercentage + '%');
});


/* Skills section */
$('.skill-per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});
