# Scroll Magic API Study
See it Live: https://john-azzaro.github.io/Study-Scroll-Magic-API/

<br>

## Study Contents:

* [What is Scroll Magic API Study?](#What-is-Scroll-Magic-API-Study)
* [What libraries can you use with Scroll Magic?](#What-libraries-can-you-use-with-Scroll-Magic)
* [How do you use Scroll Magic?](#How-do-you-use-Scroll-Magic)
* [Does the Scroll Magic API Study feature commentary?](#Does-the-Scroll-Magic-API-Study-feature-commentary)
* [What are the key features of the Scroll Magic API Study?](#What-are-the-key-features-of-the-Scroll-Magic-API-Study-)
* [Screenshots](#Screenshots)

<br>

## What is Scroll Magic API Study?
The Scroll Magic API Study is an exploration of an extremely useful and realtively easy to use scroll interaction library.  
At its core, the library helps animate web elements based on the user scroll position.  In the study example, when the user scrolls
down from the landing section, the product element on the left will "pin" to a specfic point while on the right content will scroll.

| **ScrollMagic Documentation**            |
| ---------------------------------------- |
|  http://scrollmagic.io/docs/             |   

<br>

## What libraries can you use with Scroll Magic?
There are a number of libraries you can use for Scroll Magic.  For the purpose of this study, we use the most comprehensive Scroll Magic library as well
as an "add indicators" library so that we can have visual cues during development.  For a complete list of scripts you can use, click the Scroll Magic libraries
link below.

| **Libraries:**                           | **Links:**                             |
| ---------------------------------------- | ----------------------------------------------|
|  Scroll Magic Libraries                  |   https://cdnjs.com/libraries/ScrollMagic              |
|  Scroll Magic                            |   https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js               |
|  Add Indicators (for development)        |   https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js               |

<br>

## How do you use Scroll Magic?
To use Scroll Magic, you need to create a **controller** for the **scenes**.  
* There is one *controller* for each container, which is essentially the browser window. For example, a single page website that the user scrolls down is handled by a single controller.  
* *Scenes* define what happens at certain scroll positions, and can trigger animations, pin elements, change element classes, etc.  See below for a basic workflow.

#### STEP 1: Create a Scroll Magic controller:
```JavaScript
    const controller = new ScrollMagic.Controller();  
```
#### STEP 2: Define a Scene:
For a complete list of scene control methods, parameters, event handling, events, etc., see http://scrollmagic.io/docs/ScrollMagic.Scene.html#ScrollScene.
```JavaScript
    new ScrollMagic.Scene({                   // Create a new Scroll Magic scene, which defines how the controller should react and how.
        duration: '200%',                     // Object of associated properties and values.
        triggerElement: '.product-title',
        triggerHook: 0
        })
        .addIndicators()
        .setPin('.product-title')
        .addTo(controller);
```



<br>

## Does the Scroll Magic API Study feature commentary?
Yes!  I use extensive commentary in the study, specifically in the CSS and JavaScript files, as well as the processNotes file where I attempt to lay out the
step-by-step process I take creating the study example.

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
