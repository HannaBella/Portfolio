//$("navbar a").on("click", function(e) {
// if (this.hash !== "") {
// e.preventDefault();
//var hash = this.hash;
// $("html, body").animate({
//    scrollTop: $(hash).offset().top
// },
// 800);
//}
//});


const scroll = new SmoothScroll('.navbar a[href*="#"]', { speed: 800 });