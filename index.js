function splitScroll() {
    const controller = new ScrollMagic.Controller();                 // Controller that handles all the scrolls on the page.

    new ScrollMagic.Scene({                                          // create a new Scrollmagic scene with an object with the following properties:
        duration: 500,                                               // scroll duration that lasts 500 pixels.
        triggerElement: '.about-title',                              // Trigger element that defines what will trigger the scroll (in this case, it is "about-title") so when it reaches this element, scroll effect will execute
    })
    .addIndicators()                                                  // method to see the triggers during development
    .addTo(controller);                                                // then hook up to the controller.
}


splitScroll();