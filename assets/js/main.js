(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //------------------ Offcanvas Menu -------------------------

        $('.menu-open , .offcanvas-overlay').click(function () {
            $('.offcanvas-area , .offcanvas-overlay').addClass('active');
        });
        $('.menu-close , .offcanvas-overlay').click(function () {
            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');
        });



        //---------------------- Back to top js ---------------------

        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '150', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });




    }); //---document-ready-----

}(jQuery));