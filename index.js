function splitScroll() {                                               // When Splitscroll runs...
    const controller = new ScrollMagic.Controller();                   // Controller that handles all the scrolls on the page.

    new ScrollMagic.Scene({                                            // create a new Scrollmagic scene with an object with the following properties:
        triggerElement: '.product-title',                              // Trigger element that defines what will trigger the scroll (in this case, it is "product-title") so when it reaches this element, scroll effect will execute        
        triggerHook: 0,                                                // then to modify the trigger position (i.e. adjust the trigger point) (1 is bottom, 0 is top.)
        duration: '200%'                                               // scroll duration.
    })
    // .addIndicators()                                                // method to see the triggers during development
    .setPin('.product-title')                                          // setpin adds position:fixed to the title when the tigger passes the point. (note: add margin:0!important to product-title to avoid bug)
    .addTo(controller);                                                // then hook up to the controller to initiate.
}

function initialize() {                                                // Run initilization functions...
    splitScroll();                                                     // Run splitscroll..
}

initialize();                                                           // Initialize app.