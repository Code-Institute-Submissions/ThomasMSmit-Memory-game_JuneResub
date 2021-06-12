# Find The Assassins #

*Can you see where the assassins are?*

![The Assassins Brotherhood](assets/images/The-Brotherhood.jpg)

## Table of Content ## 
---
- [UX (User Experience)](#ux--user-experience-)
  * [Project Goals](#project-goals)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
  * [Site Owner Goals](#site-owner-goals)
  * [User Requirements and Expectations](#user-requirements-and-expectations)
  * [Design Choices](#design-choices)
- [Wireframing](#wireframing)
- [Features](#features)
- [Technologies used](#technologies-used)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)


---
## UX (User Experience) ##


---
### Project Goals ###
A game to train your memory and have **fun** while doing it.

The goal for this project is to train the users memory, using images from the well known game franchise [Assassins Creed](https://www.ubisoft.com/en-us/game/assassins-creed) to create a more fun experience for the user. But also to make it a little harder, because multiple detailed pictures are a lot harder to remember than standard icons.


### User Goals ###
* Find out how good your memory is.
* Have fun with nostalgia. if you played the games that is. 
* Improving your memory by trying to beat your own score.

### User Stories ###
* As a **user**, i want a well organised site that looks attractive.
* As a **user**, i want a site that doesn't freeze and loads **fast**.

### Site Owner Goals ###
* As a **site owner** I want to help my users improve themselfs.

### User Requirements and Expectations ###

**Requirements**

* Have a **intuitive** layout that is easy to use.
* **Recognizable** images from the main characters of the Assassins Creed games.
* Having a clear target to improve on. (replay value)

**Expectations**
* Game is **easy** to use and gives **no errors**.
* Content is **appealing** 
* Game is a **challenge**, but not extremely **difficult**.

### Design Choices ###


When thinking about how to design the game, i didn't want to make something to difficult that doesn't have to be difficult.
Eventually i found [this tutorial](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) and used it as the base for my game.


**Fonts**

* The main font used across the game is [**Oswald**](https://fonts.google.com/specimen/Oswald?query=oswald) this is subject to change if i find a better fond to use.
* The fond used for the play again button on the congratulations modal is [**Gloria Hallelujah**](https://fonts.google.com/specimen/Gloria+Hallelujah?query=glo).
* for the title of the game i used a custom font called [assassin](https://www.dafont.com/assassin.font). This font is used for the title of the Assassins creed games. So it fits very well.

**Icons**

**Icons** used where provided by [Font Awesome](https://fontawesome.com/), used in **moderation** and are self explanatory.

**Colors**

Color choices are based on colors that are used a lot in the Assassins Creed games.
* Black #000000
* Gold  #D4AF37	
* Red   #880808	
* White #FFFFFF
* Blue  #023ee4

[Color Scheme](assets/images/color-scheme.png)



## Wireframing ##


To make my **wireframes** i used [balsamiq](https://balsamiq.com/).

You can find my wireframes [here](https://github.com/ThomasMSmit/Memory-game/tree/master/wireframes).

Direct link to wireframes:

* [Desktop Wireframe](https://github.com/ThomasMSmit/Memory-game/blob/master/wireframes/Desktop%20Wireframes%20.pdf)
* [Tablet Wireframe](https://github.com/ThomasMSmit/Memory-game/blob/master/wireframes/Tablet%20Wireframes.pdf)
* [Mobile Wireframe](https://github.com/ThomasMSmit/Memory-game/blob/master/wireframes/Phone%20Wireframes.pdf)

## Features ##
---
**Features that have been implemented:**


* A challenging **memory game**.
* Ranking system that you can improve on.
* Images that fit the subject of the game to make it more **appealing**.


**Features** that will be **implemented** in the **future:**

* Better score system, possibly online against other people. 
* More picture cominations then just the main assassins from the game.
* Social media pages to interact with the community.


## Technologies used ##
---
**Languages**

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://nl.wikipedia.org/wiki/JavaScript)


**Tools & Libraries**

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Google fonts](https://fonts.google.com/)
* [Gimp](https://www.gimp.org/)
* [JQuery](https://jquery.com/)
* [Popper](https://popper.js.org/)
* [TinyPng](https://tinypng.com/)
* [HTML/CSS validator](https://validator.w3.org/)
* [JS validator](https://jshint.com/)


## Testing ##
---


**Responsiveness**
 

**Design**






## Bugs ##
---

**During development**

[HTML validator](https://validator.w3.org/nu/)

 :Error   (The element **a** must not appear as a descendant of the **button** element.) **Fixed:** by deleting all **a** elements out of the **button** elements.

 



[CSS validator](https://jigsaw.w3.org/css-validator/)

 :Error:  (.start-overlay	Value Error: visibility **show** is not a visibility value.) 
 **Fixed:** by changing **show** to **visible**.

 :Error:  ( html, body	    Parse Error ??) 
 **Fixed:** by deleting **html, body** and adding the values in it to **body**.


**Devtools**

:Error: ('backface-visibility' is not supported by Safari, iOS Safari. Add '-webkit-backface-visibility' to support Safari 5.1+, iOS Safari 5+.)
**Fixed** by adding **'-webkit-backface-visibility'** to backface styling in CSS file.

:Tip:   ( The "X-UA-Compatible meta element should not be specified as it is not needed.)
**Fixed** by removing http-equiv="X-UA-Compatible from the head.

:Warning: ('content-type' header charset value should be 'utf-8'.)
**Not** able to fix warning due to it being a network issue which i can't fix.

:Warning: ('content-type' header media type value should be 'image/x-icon', not 'image/vnd.microsoft.icon'.)
**Not** able to fix warning due to it being a network issue which i can't fix.

:Error: (A 'cache-control' header is missing or empty.
**Not** not able to fix error due to being a network issue also.



## Deployment ##
---
This project is **developed** on **GitPod**, using **git** and **GitHub** to host the repository. 



To deploy this repository using **GitHub Pages** the following steps were made:

* Opened up **GitHub** in the **browser**.
* Signed in using **username** and **password**.
* Selected my **repositories**.
* Navigated to **ThomasMSmit/Memory-game**.
* In the top navigation clicked **settings**.
* Clicked on the **Pages** tab on the left side of the screen.
* Selected **Master Branch** from the **Source** dropdown menu.
* Clicked to **confirm** my **selection**.
* Memory-game **live** on **GitHub Pages**.


**Running Memory-game Locally**

**Cloning** Memory-game from **GitHub**:

* Navigate to **ThomasMSmit/Memory-game**.
* Go to the **code dropdown box**.
* **Copy** the url in the **dropdown box**.
* Using your **favorite IDE** open up your **preferred** terminal.
* **Navigate** to your **desired** file **location**.

**Copy** the following code and **input** it into your **terminal** to **clone Memory-game**.

```git clone https://github.com/ThomasMSmit/Memory-game```




## Credits ##
---

**Code credit**

* Thank you to [Sandra Israel-Ovirih](https://github.com/sandraisrael). Her project [Memory-Game-fend](https://github.com/sandraisrael/Memory-Game-fend) helped me to start my own project. 

* Thank you to [Marina Ferreira](https://medium.com/@marina.ferreira.developer). Her [javascript tutorial](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae) for building a memory game really gave me a good base to start my project from.



**Credit for text used on this website**

????


**Images used**

[Images used for cards](http://wallpaperswide.com/assassins_creed-desktop-wallpapers.html)

[Assassins creed logo](https://logos-world.net/assassins-creed-logo/)

[The-Brotherhood](https://www.reddit.com/r/assassinscreed/comments/k1qwbs/assassins_creed_wallpaper_works_with_dual_monitors/)




For generating a table of content: <small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



**Special thanks**

* Big thanks to Student care. Specificly Alexander, for giving me enough time to finish my project.

* A **BIG** thank you to Aukje van der Wal for helping me get back on track and showing me how you should tackle a project.

* A Thank you to Tutor support for helping me fix issues i wasn't able to figure out by myself.



**personal note**


????











