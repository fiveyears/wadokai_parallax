/* --------------------------------------------- 
* Filename:     custom.js
* Version:      1.0.0 (2016-03-05)
* Website:      http://www.zymphonies.com
* Description:  Global Script
* Author:       Zymphonies Team
                info@zymphonies.com
-----------------------------------------------*/

var gmark = new Array();

function clients_owl(){
    jQuery('.field--name-field-clients-logo').addClass('owl-carousel owl-theme');
    jQuery('.field--name-field-clients-logo').owlCarousel({
        items: 2,
        margin:10,
        dots: true,
        autoPlay: 3000,
        navigation : true,
        responsive : {
            500:{ items: 2, dots: true, navigation : true },
            700:{ items: 3, dots: true, navigation : true },
            900:{ items: 4, dots: true, navigation : true }
        }
    });
}

function service_owl(){
    jQuery('.field--name-field-service').addClass('owl-carousel owl-theme');
    jQuery('.field--name-field-trainer').owlCarousel({ // changed .field--name-field-service
        items: 1,
        margin:10,
        dots: true,
        autoPlay: 3000,
        navigation : true,
        responsive : {
            500:{ items: 1, dots: true, navigation : true },
            700:{ items: 2, dots: true, navigation : true },
            900:{ items: 3, dots: true, navigation : true }
        }
    });
}

wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});


function theme_menu(){

    //Main menu
    jQuery('#main-menu').smartmenus();
    
    //Mobile menu toggle
    jQuery('.navbar-toggle').click(function(){
        jQuery('.region-primary-menu').slideToggle();
    });

    //Mobile dropdown menu
    if ( jQuery(window).width() < 767) {
        jQuery(".region-primary-menu li a:not(.has-submenu)").click(function () {
            jQuery('.region-primary-menu').hide();
        });
    }

}

function theme_home(){
    
    //flexslider
    jQuery('.flexslider').flexslider({
        animation: "slide"  
    });

    // primary-menu 
    jQuery('.region-primary-menu a').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              jQuery('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
        }
    });

}

var change = [
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#F2F1F1'}] // #a5b076
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#F2F1F1'}] //'#F7112C'}] //
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#F7112C'}] //'#b9d3c2'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#F7112C'}] //'#447530'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
    stylers: [
      { "visibility": "off" }]
 //         stylers: [{color: '#93817c'}]
        },
                  {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
];
function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        styles: change
   };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
                       
    // Multiple Markers
    var markers = [
        ['63. Grundschule', 51.0489641,13.801869,'themes/drupal10_parallax_theme/images/marker63.png'],
        ['32. Grundschule', 51.0424947,13.8102336,'themes/drupal10_parallax_theme/images/marker32.png']
    ];
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>63. Grundschule</h3>' +
        '<p>63. Grundschule "Johann Gottlieb Naumann", Wägnerstraße 24-26, 01309 Dresden</p>' + 
        '<p>Kindertraining jeden Dienstag 16.30 - 18.00 Uhr</p>' + 
        '<p>Training für alle jeden Samstag 10.00 - 12.00 Uhr</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>32. Grundschule</h3>' +
        '<p>32. Grundschule "Sieben Schwaben", Hofmannstraße 34, 01277 Dresden.</p>' +
        '<p>Erwachsenentraining jeden Montag und Mittwoch 20.30 - 22.00 Uhr</p>' +        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: markers[i][3],
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
        gmark[i] = marker;
        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}
function school(i) {
    google.maps.event.trigger(gmark[i], 'click');
}


var longpress = false;
var startTime, endTime;

hack = function () {
    if (longpress) {
         jQuery("a[href='javascript:hack();']").parent().after('<li><a href="javascript:void(0);"  class="hack" onclick="dubio(this);" title="teste javascript" ">FIX NAVBAR</a></li>');
         jQuery("a[href='javascript:hack();']").attr("href", "javascript:hack1();", "title", "Über uns");
         jQuery(".hack").parent().css("border-bottom", "1px solid rgb(200, 200, 200)");

    } else {
        window.open("/impressum","_self");
    }
}
function dubio (a) {
        // var aStr = "topnav position: " + jQuery(".topnav").css("position") + "\n";
        // aStr = aStr + "topnav z-index: " + jQuery(".topnav").css("z-index") + "\n";
        // aStr = aStr + "topnav background-color: " + jQuery(".topnav").css("background-color") + "\n";
        // aStr = aStr + "body padding-top: " + jQuery("body").css("padding-top") + "\n";
        // aStr = aStr + "\n";
        if ( jQuery(a).text() != "FIX NAVBAR" ) {
            jQuery(a).text("FIX NAVBAR"); 
            jQuery( '.topnav' ).each(function () {
                this.style.setProperty( 'position', 'relative', 'important' );
                this.style.setProperty( 'z-index', 'auto', 'important' );
                this.style.removeProperty( 'top');
                this.style.removeProperty( 'width');
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
            });
            jQuery( 'body' ).each(function () {
                this.style.setProperty( 'padding-top', '0px', 'important' );
            });
        } else {
            jQuery(a).text("DON'T FIX NAVBAR");
            jQuery( '.topnav' ).each(function () {
                this.style.setProperty( 'position', 'fixed', 'important' );
                this.style.setProperty( 'z-index', '1000', 'important' );
                this.style.setProperty( 'background-color', 'rgb(255,255,255)', 'important' );
                this.style.setProperty( 'top', '0px', 'important' );
                this.style.setProperty( 'width', '100%', 'important' );
            });
            jQuery( 'body' ).each(function () {
                this.style.setProperty( 'padding-top', '50px', 'important' );
            });

        }
        // aStr = aStr + "topnav position: " + jQuery(".topnav").css("position") + "\n";
        // aStr = aStr + "topnav z-index: " + jQuery(".topnav").css("z-index") + "\n";
        // aStr = aStr + "topnav background-color: " + jQuery(".topnav").css("background-color") + "\n";
        // aStr = aStr + "body padding-top: " + jQuery("body").css("padding-top") + "\n";
        // aStr = aStr + "\n";
        // alert(jQuery(a).text() + "\n" + aStr);
}

hack1 = function() {
    window.open("/impressum","_self");
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// // Wanka begin
//     var span = document.getElementsByClassName("wanka_close")[0];
//     var wanka = document.getElementById("myWanka");

//     // When the user clicks on <span> (x), wanka_close the wanka
//     span.onclick = function() { 
//       wanka.style.display = "none";
//     }
//     window.onclick = function(event) {
//       if (event.target == wanka) {
//         wanka.style.display = "none";
//       }
//     }
// // Wanka end

jQuery(document).ready(function($){
    wow.init();
    clients_owl();
    service_owl();
    theme_menu();
    theme_home();   



    $("a[href='/impressum']").on('mousedown', function () {
        startTime = new Date().getTime();
    });
    $("a[href='/impressum']").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress = (endTime - startTime < 1000) ? false : true;
    });

    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyBm1orSE-lRAnDWOcm2R63tOPD1FkiLI_w&callback=initialize";
    document.body.appendChild(script);
    $('.collapser').click(function() {
        $('.gallerylinks').collapse('toggle');
        $('.gallerylinkstopical').collapse('toggle');
        if ($('.collapser').html() == 'Neu hinzugefügt') {
            $('.collapsertext').text("zeigt eine kompaktere Liste aller Galereieinträge");
            $('.collapser').html("Alle Links");
        } else {
            $('.collapser').html("Neu hinzugefügt");
            $('.collapsertext').text("zeigt eine Liste neuerer Galereieinträge");
        }
    });
    // $("a[href='/#maps']").parent().css("border-bottom", "1px solid rgb(200, 200, 200)");
    // $("a[href='/user']").parent().css("border-bottom", "1px solid rgb(200, 200, 200)");
    // $("a[href='/impressum']").parent().css("border-bottom", "1px solid rgb(200, 200, 200)");
    // $("a[href='/impressum']").parent().css("border-top", "1px solid rgb(200, 200, 200)");


    // changes href to hack $("a[href='/impressum']").attr("href", "javascript:hack();");
    // // wanka begin
    // // Get the wanka

    // // Get the image and insert it inside the wanka - use its "alt" text as a caption
    // var modal_wankaImg = document.getElementById("wanka_img01");

    // // Get the <span> element that wanka_closes the wanka
    // function showWanka() {
    //   wanka.style.display = "block";
    //   modal_wankaImg.src = "themes/drupal10_parallax_theme/images/WankaText.jpg";
    // }
    // if (getCookie("wanka") == "") {
    //     showWanka();
    // }
    // setCookie("wanka","read",7);
    // // wanka end
});