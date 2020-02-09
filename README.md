# Scroll Magic API Study
See it Live: https://john-azzaro.github.io/Study-Scroll-Magic-API/

<br>

## What is Scroll Magic API Study?
The Scroll Magic API Study is an exploration of an extremely useful and realtively easy to use scroll interaction library.  
At its core, the library helps animate web elements based on the user scroll position.  In the study example, when the user scrolls
down from the landing section, the product element on the left will "pin" to a specfic point while on the right content will scroll.

| **ScrollMagic Documentation**            |
| ---------------------------------------- |
|  http://scrollmagic.io/docs/             |   

<br>

## Study Contents:

* [What is Scroll Magic API Study?](#What-is-Scroll-Magic-API-Study)
* [What are the key takeaways from the Scroll magic study?](#What-are-the-key-takeaways-from-the-Scroll-magic-study)
* [What libraries can you use with Scroll Magic?](#What-libraries-can-you-use-with-Scroll-Magic)
* [How do you use Scroll Magic?](#How-do-you-use-Scroll-Magic)
   * [How do you create a Controller?](#How-do-you-create-a-Controller)
   * [How do you define a Scene?](#How-do-you-define-a-Scene)
   * [What other scene options are there?](#What-other-scene-options-are-there)
* [Does the Scroll Magic API Study feature commentary?](#Does-the-Scroll-Magic-API-Study-feature-commentary)
* [What are the key features of the Scroll Magic API Study?](#What-are-the-key-features-of-the-Scroll-Magic-API-Study-)
* [Screenshots](#Screenshots)

<br>

## What are the key takeaways from the Scroll magic study?

<dl> 
<dd>

### Great effects and very easy to implement
----------
Pretty straight forward API, set a controller, create a new scene and add the properties that you want to the scroll effect, then add to the controller. 


### Add indicators to aid in development
----------
The scroll magic api comes with a really neat feature that lets you visualize the breakpoints and triggerpoints for scroll effects. DO NOT keep these in the
final version but keep them around while you configure the effect.


</dd>
</dl>

<br>


## What libraries can you use with Scroll Magic?
There are a number of libraries you can use for Scroll Magic.  For the purpose of this study, we use the most comprehensive Scroll Magic library as well
as an "add indicators" library so that we can have visual cues during development.  For a complete list of scripts you can use, click the Scroll Magic libraries
link below.

| **Libraries:**                           | **Links:**                             |
| ---------------------------------------- | ----------------------------------------------|
|  Scroll Magic Libraries                  |   https://cdnjs.com/libraries/ScrollMagic              |
|  Scroll Magic                            |   https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js               |
|  Add Indicators                          |   https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js               |

<br>

## How do you use Scroll Magic?
To use Scroll Magic, you need to create a **controller** and **scenes** to define the animations.  
* There is one *controller* for each container, which is essentially the browser window. For example, a single page website that the user scrolls down is handled by a single controller.  
* *Scenes* define what happens at certain scroll positions, and can trigger animations, pin elements, change element classes, etc.  See below for a basic workflow.

<br>

### How do you create a Controller?
To create a controller, you simply create a new Scroll Magic controll and assign it a variable with the name "controller".  Remember that in this case we are using the default
settings class in which the scoll container is the browser window.
```JavaScript
    const controller = new ScrollMagic.Controller();  
```

<br>

### How do you define a Scene?
When you "define the scene", you care defining where the controller reacts ans how.  Below, the new scene first has an object of associated properties and values that define the behaior of the scene to be created.  

In the example below (see study files for working example), we first specifiy the **scene parameters**:

* The *trigger element* (i.e. the element in the DOM that will trigger the scene to start) in this case is the products-title section.  This is where the animation will *start*.
* The *trigger hook* is what will essentially trigger the animation start.  Note that a setting of 1 will peg the trigger to the top of the screen, 0 on the bottom, .05 mid, etc.
* The *duration* is the length of the animation effect.  In the example below, duration is set to 200%, which is 200% of the container.  However, if you specify 200, that would be 200px which would be exactly 200 pixels from the start.

Then, you chain any **control methods** you require for the animation.  In this case, we are using ```.setPin('product-title')``` that will pin the element for the duration of the animation.
We can then use the ```.addIndicators()``` method to have visual cues where the triggers are, which should be removed or commented out in production.  Lastly, we want to use the ```.addTo``` method so that we can add it to the controller!.

```JavaScript
    new ScrollMagic.Scene({                   // Create a new Scroll Magic scene, which defines how the controller should react and how.
        triggerElement: '.product-title',     // The element that will trigger the scene.
        triggerHook: 1,                       // 
        duration: '200%'                      // Object of associated properties and values.
        })
        .setPin('.product-title')             // control method that pins the specified element for duration of the animation.
        .addIndicators()                      // FOR DEVELOPMENT (shows triggers if you use associated library)         
        .addTo(controller);                   // Add this scene to the controller!
```
### What other scene options are there?
There are a ton of options for defining a scene which you should check out:

| **ScrollMagic.Scene Options**            |
| ---------------------------------------- |
|  http://scrollmagic.io/docs/ScrollMagic.Scene.html#ScrollScene             |   


<br>


## Does the Scroll Magic API Study feature commentary?
Yes!  I use extensive commentary in the study, specifically in the CSS and JavaScript files, as well as the processNotes file where I attempt to lay out the
step-by-step process in the creation of the study example.

<br>

## What are the key features of the Scroll Magic API Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future. For a complete list of current and future changes, see below:

| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| Scroll animation                         |  animation of elements triggered on user scroll     |
| Indicators                               |  Indicators which show trigger points (currently uncommented)     |

<br>

## Screenshots
![sm1](https://user-images.githubusercontent.com/37447586/64448086-b52d7000-d091-11e9-9603-356d5b2c4ad6.png)
![sm2](https://user-images.githubusercontent.com/37447586/64448087-b52d7000-d091-11e9-8e6a-fdc6fbaa99cf.png)
![sm3](https://user-images.githubusercontent.com/37447586/64448089-b5c60680-d091-11e9-80bc-6767906917d3.png)
![sm6](https://user-images.githubusercontent.com/37447586/64448240-12c1bc80-d092-11e9-91b4-a91d648fb2e7.png)
