!function(o){"use strict";var e={upKeys:[33,38],downKeys:[32,34,40],easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};o.scrollIt=function(t){var n=o.extend(e,t),a=0,l=o("[data-scroll-index]:last").attr("data-scroll-index"),s=function(e){if(!(0>e||e>l)){var t=o("[data-scroll-index="+e+"]").offset().top+n.topOffset+1;o("html,body").animate({scrollTop:t},n.scrollTime,n.easing)}},r=function(e){var t=o(e.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||o(e.target).closest("[data-scroll-goto]").attr("data-scroll-goto");s(parseInt(t))},i=function(e,t){return o.inArray(e,t)>-1},c=function(e){var t=e.which;return o("html,body").is(":animated")&&(i(t,n.upKeys)||i(t,n.downKeys))?!1:i(t,n.upKeys)&&a>0?(s(parseInt(a)-1),!1):i(t,n.downKeys)&&l>a?(s(parseInt(a)+1),!1):!0},d=function(e){n.onPageChange&&e&&a!=e&&n.onPageChange(e),a=e,o("[data-scroll-nav]").removeClass(n.activeClass),o("[data-scroll-nav="+e+"]").addClass(n.activeClass)},f=function(){var e=o(window).scrollTop(),t=o("[data-scroll-index]").filter(function(t,a){return e>=o(a).offset().top+n.topOffset&&e<o(a).offset().top+n.topOffset+o(a).outerHeight()}),a=t.first().attr("data-scroll-index");d(a)};o(window).on("scroll",f).scroll(),o(window).on("keydown",c),o("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(o){o.preventDefault(),r(o)})}}(jQuery),function(){$(function(){var o;$(".scrollto, .gototop").bind("click",function(o){var e;return e=$(this),$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},800,"easeInOutQuart"),o.preventDefault()}),new WOW({offset:100}).init(),$("#explore").waypoint(function(o){return"down"===o&&$(".small-logo").addClass("show"),"up"===o?$(".small-logo").removeClass("show"):void 0},{offset:"50%"}),o=function(){var o,e,t,n,a,l,s,r;return $("#gmap").length?(l={lat:3.0924034,lng:101.543492,zoom:17,infoText:"<p>430, Level 4, Block 4								<br/>Laman Seri Business Park								<br/>40100 Shah Alam Selangor</p>",linkText:"View on Google Maps",mapAddress:"Laman Seri Business Park Shah Alam Selangor",icon:""+imgurl+"/pin-dark.png"},e=new google.maps.InfoWindow,r=new google.maps.LatLng(l.lat,l.lng),a={zoom:l.zoom,center:r,zoomControl:!0,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,scrollwheel:!1,styles:mapstyles},t=new google.maps.Map($("#gmap")[0],a),s=new google.maps.Marker({position:r,map:t,title:l.linkText,icon:l.icon}),n="https://www.google.com/maps/preview?ll="+l.lat+","+l.lng+"&z=14&q="+l.mapAddress,o='<div class="infowin">'+l.infoText+'<a href="'+n+'" target="_blank">'+l.linkText+"</a></div>",google.maps.event.addListener(s,"mouseover",function(){return e.setContent(o),e.open(t,s)}),google.maps.event.addListener(s,"click",function(){return window.open(n,"_blank")}),$(window).bind("resize",function(){return t.setCenter(r)})):void 0},o(),"undefined"!=typeof Pace&&null!==Pace&&Pace.on("done",function(){return setTimeout(function(){return $("html").addClass("loaded")},300)})})}.call(this);