function clients_owl(){jQuery(".field--name-field-clients-logo").addClass("owl-carousel owl-theme"),jQuery(".field--name-field-clients-logo").owlCarousel({items:2,margin:10,dots:!0,autoPlay:3e3,navigation:!0,responsive:{500:{items:2,dots:!0,navigation:!0},700:{items:3,dots:!0,navigation:!0},900:{items:4,dots:!0,navigation:!0}}})}function service_owl(){jQuery(".field--name-field-service").addClass("owl-carousel owl-theme"),jQuery(".field--name-field-trainer").owlCarousel({items:1,margin:10,dots:!0,autoPlay:3e3,navigation:!0,responsive:{500:{items:1,dots:!0,navigation:!0},700:{items:2,dots:!0,navigation:!0},900:{items:3,dots:!0,navigation:!0}}})}function theme_menu(){jQuery("#main-menu").smartmenus(),jQuery(".navbar-toggle").click((function(){jQuery(".region-primary-menu").slideToggle()})),jQuery(window).width()<767&&jQuery(".region-primary-menu li a:not(.has-submenu)").click((function(){jQuery(".region-primary-menu").hide()}))}function theme_home(){jQuery(".flexslider").flexslider({animation:"slide"}),jQuery(".region-primary-menu a").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=jQuery(this.hash);if((e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:e.offset().top},1e3),!1}}))}function initialize(){var e,t=new google.maps.LatLngBounds,n={mapTypeId:"roadmap",scrollwheel:!1,panControl:!1,zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,styles:change};(e=new google.maps.Map(document.getElementById("map_canvas"),n)).setTilt(45);var o=[["63. Grundschule",51.0489641,13.801869,"../marker63.png"],["32. Grundschule",51.0424947,13.8102336,"../marker32.png"]],i=[['<div class="info_content"><h3>63. Grundschule</h3><p>63. Grundschule "Johann Gottlieb Naumann", Wägnerstraße 24-26, 01309 Dresden</p><p>Kindertraining jeden Dienstag 16.30 - 18.00 Uhr</p><p>Training für alle jeden Samstag 10.00 - 12.00 Uhr</p></div>'],['<div class="info_content"><h3>32. Grundschule</h3><p>32. Grundschule "Sieben Schwaben", Hofmannstraße 34, 01277 Dresden.</p><p>Erwachsenentraining jeden Montag und Mittwoch 20.30 - 22.00 Uhr</p></div>']],r=new google.maps.InfoWindow,a,s;for(s=0;s<o.length;s++){var l=new google.maps.LatLng(o[s][1],o[s][2]);t.extend(l),a=new google.maps.Marker({position:l,map:e,icon:o[s][3],title:o[s][0]}),google.maps.event.addListener(a,"click",function(t,n){return function(){r.setContent(i[n][0]),r.open(e,t)}}(a,s)),gmark[s]=a,e.fitBounds(t)}var p=google.maps.event.addListener(e,"bounds_changed",(function(e){this.setZoom(14),google.maps.event.removeListener(p)}))}function school(e){google.maps.event.trigger(gmark[e],"click")}function dubio(e){"FIX NAVBAR"!=jQuery(e).text()?(jQuery(e).text("FIX NAVBAR"),jQuery(".topnav").each((function(){this.style.setProperty("position","relative","important"),this.style.setProperty("z-index","auto","important"),this.style.removeProperty("top"),this.style.removeProperty("width"),this.style.setProperty("background-color","rgba(0,0,0,0)","important")})),jQuery("body").each((function(){this.style.setProperty("padding-top","0px","important")}))):(jQuery(e).text("DON'T FIX NAVBAR"),jQuery(".topnav").each((function(){this.style.setProperty("position","fixed","important"),this.style.setProperty("z-index","1000","important"),this.style.setProperty("background-color","rgb(255,255,255)","important"),this.style.setProperty("top","0px","important"),this.style.setProperty("width","100%","important")})),jQuery("body").each((function(){this.style.setProperty("padding-top","50px","important")})))}function setCookie(e,t,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);let i="expires="+o.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}function getCookie(e){let t=e+"=",n,o=decodeURIComponent(document.cookie).split(";");for(let e=0;e<o.length;e++){let n=o[e];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}var gmark=new Array;wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0});var change=[{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#F2F1F1"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#F2F1F1"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#F7112C"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#F7112C"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}],longpress=!1,startTime,endTime;hack=function(){longpress?(jQuery("a[href='javascript:hack();']").parent().after('<li><a href="javascript:void(0);"  class="hack" onclick="dubio(this);" title="teste javascript" ">FIX NAVBAR</a></li>'),jQuery("a[href='javascript:hack();']").attr("href","javascript:hack1();","title","Über uns"),jQuery(".hack").parent().css("border-bottom","1px solid rgb(200, 200, 200)")):window.open("/impressum","_self")},hack1=function(){window.open("/impressum","_self")},jQuery(document).ready((function($){wow.init(),clients_owl(),service_owl(),theme_menu(),theme_home(),$("a[href='/impressum']").on("mousedown",(function(){startTime=(new Date).getTime()})),$("a[href='/impressum']").on("mouseup",(function(){endTime=(new Date).getTime(),longpress=!(endTime-startTime<1e3)}));var e=document.createElement("script");e.src="//maps.googleapis.com/maps/api/js?key=AIzaSyBm1orSE-lRAnDWOcm2R63tOPD1FkiLI_w&callback=initialize",document.body.appendChild(e),$(".collapser").click((function(){$(".gallerylinks").collapse("toggle"),$(".gallerylinkstopical").collapse("toggle"),"Neu hinzugefügt"==$(".collapser").html()?($(".collapsertext").text("zeigt eine kompaktere Liste aller Galereieinträge"),$(".collapser").html("Alle Links")):($(".collapser").html("Neu hinzugefügt"),$(".collapsertext").text("zeigt eine Liste neuerer Galereieinträge"))}))}));