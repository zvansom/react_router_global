# Browser History Mechanics

Browsers have built-in history mechanics.
- Browsers have built in buttons for users.
  - You can go **back** and **forward** between pages you've visited.
- These actions are also available to us in JavaScript.
  - We can write JavaScript programs that invoke `window.history.back()` and `window.history.forward()`.

This seems pretty straightforward, right?

However, the rise of recent approaches to websites - like React - broke old, traditional browser history mechanics and led to the introduction of new ways for websites to control what **back** and **forward** really mean.


## Objectives of this section
* Understand old browser history mechanics
* Introduce URL routing
* Introduce Single Page Applications (SPAs)
* Understand why old browser history mechanics don't work for SPAs
* Introduce modern browser history mechanics
