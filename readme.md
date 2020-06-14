![](https://javascript30.com/images/JS3-social-share.png)

# Key Concepts Per Exercise

### 01 - JavaScript Drum Kit

- querySelector and querySelectorAll provide the ability to reference DOM elements directly via CSS selector syntax
- Keydown events contain a keyCode value which points to the ASCII character typed
- the HTML5 Audio object can be used to play audio in browser
- Using setTimeout allows for allotting a duration to a toggle animation

### 02 - JS and CSS Clock

- setInterval() provides an ability to execute code on a timed basis
- the Date() object provides the ability to both retrieve and manipulate the current time
- Direct manipulation of CSS via the 'style' member of DOM elements allows for more dynamic animations

### 03 - CSS Variables

- CSS variables provide an easier way to manipulate CSS dynamically
- Within CSS code, variables are prefixed with '--'
- Setting variables directly in CSS uses the setProperty method on the root document's style

### 04 - Array Cardio Day 1

- The Array prototype has multiple inbuilt methods for manipulating data
- Sorting and filtering provides the ability to arrange data before acting upon it
- Map and reduce functionality allows for acting upon the data contained in the Array individually, or as a single value

### 05 - Flex Panel Gallery

- Enumerables can be looped over with a for/of loop
- There are two ways to reference event targets
  - 'this' represents the element with the listener
  - event.target represents the specific element that fired the event, including the listening element's children

### 06 - Type Ahead

- Promises are objects that represent asynchronous code
  - Reading of JSON data and interactions with APIs are handled by the 'fetch' method
  - Fetch returns a Promise, which can have follow on actions using the 'then' method of a Promise
  - If data is needed outside of a Promise's return value, it can then be assigned to a global variable
- Filtering of arrays can be provided a function that can perform more complex conditional logic

### 07 - Array Cardio Day 2

- The Array prototype has multiple inbuilt methods for manipulating data
- Conditional matching can be partial or total using the some\(\) and every\(\) methods respectively
- Searching for either a single element's value or index can be accomplished by the find\(\) and findIndex\(\) methods respectively

### 08 - Fun with HTML5 Canvas

- HTML5 canvas elements allow direct drawing on a 2d plane
  - A canvas context ojbect needs to be used and is obtained via the getContext\(\) method on the canvas element
  - Various primitives can be drawn, and Mozilla documentation can be referenced for the proper methods to accomplish the desired outcome

### 09 - Dev Tools Domination

- There is more than just console.log\(\) to choose from
  - Output methods follow a similar methodology to syslog: warn, error, and info are available as methods
  - groupCollapsed\(\) and groupEnd\(\) allow for collapsing large log\(\) output
  - Tabular output is available through the table\(\) method
- Test driven methodologies are supported through the assert\(\) method
- An accumulator is availble through the use of the count\(\) method
- Timing of code is possible using the time\(\) and timeEnd\(\) methods

### 10 - Hold Shift and Check Checkboxes

- Events contain a 'shiftKey' member that signfifies a shift key hold
- Checkbox elements have a 'checked' boolean member that can be toggled
- Conversion of a NodeList to an Array allows for using the 'indexOf' member to track which DOM node fired an event

### 11 - Custom Video Player

- The HTML5 video element provides multiple methods to affect video content
  - Playback - The play\(\) and pause\(\) methods provide the ability to start/stop video playback. The 'playBackRate' member provides the ability to set play speed.
  - Scrub/Skip - Manipulation of the 'currentTime' member of the video element allows for moving the playback to the specified time
  - Volume - A value between 0 and 1 can be assigned to the 'volume' member
  - Fullscreen - requestFullScreen\(\) method allows for expanding the view size
- It should be noted that some methods of multimedia related playback are not automatable, and require user action via eventing

### 12 - Key Sequence Detection

- Arrays can be used as stacks and queues using push\(\) and pop\(\) methods
- Using pop\(\) after a push\(\) represent a LIFO queue or a stack, as the last element is removed from the array
- Using shift\(\) instead of pop\(\) gives us a FIFO queue, as shift\(\) removes the first element from the array
- TODO: event.keyCode is deprecated on newer browsers due to cross browser compatability issues. Research event.key values and other alternatives

### 13 - Slide in on Scroll

- Checking bounds of an element and verifying it's in the viewport
- Debouncing functions triggered by high volume events (scrolling)
- CSS 'peeking': Toggling visibility and transitions based on element being in view

### 14 - References vs Copying

- Shallow copy mechanism vary, but most performant wins out
- Deep copy needs third party libraries and custom code
- Object.assign and Array.from are two easiet ways to perform shallow copy

### 15 - LocalStorage

- Event delegation is the way to go with mutiple elements
  - Apply event listener at parent and use event target index to take action
- Local Storage allows for persistence between page loads, but only takes string data
  - Work around string-only by jusing JSON.stringify/JSON.parse to save/load data
- PreventDefault() on submit events suppresses page reloads on form submissions

### 16 - Mouse Move Shadow

- Dynamically changing CSS styling values allows for more dynamic effects

### 17 - Sort Without Articles

- Combining mutations of array values with the sort function allows for more control without the need for intermediary data structures

### 18 - Adding Up Times with Reduce

- Converting of text values to numerics allows for the usage of the reduce function to perform a summary calculation on an array.

### 19 - Webcam Fun

- Modern browsers allow using peipherals through the getUerMedia\(\) method
  - Devices are first enumerated by the enumerateDevices\(\) method
  - Audio and Video devices are available
  - Desired resolution and other parameters can be requested via a JSON object detailing the constraint

### 20 - Speech Detection

- Chrome exposes speech recognition functionality via the window.SpeechRecognition object
- Speech recognition is started and 'result' events fire based on recognized words
- Firefox does not provide this functionality, potentially due to privacy concerns

### 21 - Geolocation

- Modern browsers expose GPS functionality via the geolocation object
- The host operating system must have some form of geolocation
- The watchPosition\(\) method allows for determining realtime location information

### 22 - Follow Along Link Highlighter

- The getBoundingClientRect\(\) method of DOM elements provides pixel position data
- Pixel position data can be used with eventing to determine when the mouse cursor is within an element
- A span element can be used as a higlight, moving the element around the page
- When using the highlight technique, scroll needs to be taken into consideration or the highlight will be off

### 23 - Speech Synthesis

- Modern browsers offer the SpeechSynthesis object allowing for text to speech
- A message object must be created by the constructor for SpeechSynthesisUtterance, providing the text and voice information
- the speak\(\) method takes the utterance object and executes

### 24 - Sticky Nav

- The 'scroll' event can be used to determine when a user moves the page view
- The 'pageYOffset' member of the window object provides the pixel length of the scroll, and can be compared to the position of elements to determine if they are in view

### 25 - Event Capture, Propagation, Bubbling and Once

- By default, all events bubble up through parent elements, ultimately hitting the window object
- Alternatively, event handlers can be take a secondary parameter of 'capture'. When set to 'true', events propagate downward instead.

### 26 - Follow Along Navigaton

- Event target is not the same as current target \(this\), bubbling of events will cause target to change, while current target is only the element with a bound listener
- Using setTimeout allows for delaying some CSS element switching for smoother operation
- querySelectorAll combined with CSS selectors allows for more control over targeting elements

### 27 - Click and Drag

- Scrollable elements have a scrollLeft property that can be used to manipulate the current view
- Events have properties for the absolute posititioning of the mouse cursor
- pageX and pageY represent the horizontal and vertical position respectively

### 28 - Video Speed Controller

- getBoundingClientRect\(\) combined with pageX and pageY properties of events allows to determine absolute positioning of the mouse cursor within an element

### 29 - Countdown Timer

- When using mutiple intervals or timeouts, it's important to track or clear previous runs to ensure no adverse affects
- setInterval\(\) returns an identifier that can be fed to the clearInterval() method to remove specified interval

### 30 - Whack A Mole

- Click events can be simulated, but Javascript provides a boolean to verify the event is human sourced (isTrusted)
- Javascript does not provide a sleep function that is often vital to efficient loops
- Promises can be used to simulate a sleep command along with a setTimeout

# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

## Community #JavaScript30 Content

Feel free to submit a PR adding a link to your own recaps, guides or reviews!

- [Arjun Khode’s blog](http://thesagittariusme.blogspot.com/search/label/JS30) about summaries for each day, including fixed glitches, bugs and extra features
- [Nitish Dayal's Text Guides](https://github.com/nitishdayal/JavaScript30) are great for those who like reading over watching
- [Meredith Underell's](http://meredithunderell.com/tag/javascript30/) Quick Lessons Learned
- [Rowan Weismiller's](http://rowanweismiller.com/blog/javascript-30/) Recaps + Lessons Learned
- [Thorsten Frommen](https://tfrommen.de/tag/javascript-30/) shares how he solved the exercises before viewing the answers
- [Soyaine 写的中文指南](https://github.com/soyaine/JavaScript30)包含了过程记录和难点解释
- [Ayo Isaiah's](https://freshman.tech/archive/#javascript30) Recaps and Lessons Learned
- [Adriana Rios](https://stpcollabr8nlstn.github.io/JavaScript30/) shares her alternative solutions
- [Michael Einsohn](http://30daysofjs.michaeleinsohn.com) publishes each challenge after watching the video once
- [Mike Ekkel](https://medium.com/@mike_ekkel/javascript-30-a-30-day-vanilla-js-challenge-6a733fc9f62c#.9frjtaje9)
- [Yusef Habib](https://github.com/yhabib/JavaScript30) lessons and tricks learned, and a [gh-page](https://yhabib.github.io/JavaScript30/) to see working all the mini-projects.
- [Amelie Yeh](https://github.com/amelieyeh/JS30) 30 lessons notes with things I've learned, and those important recaps. and directly view my demos [here](https://amelieyeh.github.io/JS30/) 🇹🇼😄
- [Winar](https://github.com/winar-jin/JavaScript30-Challenge)的 JavaScript30 天挑战，记录练习过程，重难点和其他的解决方案。🎨
- [Rayhatron](https://rayhatron.github.io/blog/) - walkthroughs, recaps and lessons learned.
- [Andrei Dobra](https://github.com/andreidbr/JS30) Full repo with lessons learned and a [gh-page](https://andreidbr.github.io/JS30/) with all the exercises.
- [从零到壹全栈部落](https://github.com/liyuechun/JavaScript30-liyuechun),春哥发起的从零到壹全栈部落，旨在带领大家一起学习，一起输出，文档化，代码化，中文视频化，全栈部落口号：输出是最好的学习方式。
- [Usmaan Ali's](https://github.com/usyyy/javascript/blob/master/JavaScript30/analysis.md) summary of the technical skills learned from each project. He's also posting them as separate blog posts [here](https://medium.com/@usyyy)
- [Axel](https://github.com/afuh/js30)'s lessons learned and a [showcase](https://afuh.github.io/js30/) with the projects.
- [Chris](https://github.com/dwatow/JavaScript30) 中文實戰，目標描述、過程紀錄。
- [Muhammad D. Ramadhan's](https://miayam.github.io) blog. He shamlesly mixed his personal life with 30 day JavaScript challenge so as to increase his learning retention. He also summarised the challenge on [one single page](https://miayam.github.io/js30). Do not read his blog!
- [Lee Keitel's Blog](https://blog.keitel.xyz/categories/javascript30/) includes summaries of each lesson, what I learned from each one, and my thoughts about the topic taught and using them in the future.
- [Dustin Hsiao](https://github.com/dustinhsiao21/Javascript30-dustin) 包含了各篇介紹、 效果 Demo、各篇詳解及記錄過程，附上部分延伸閱讀及[gh-page](https://dustinhsiao21.github.io/Javascript30-dustin/)。
- [GuaHsu](https://github.com/guahsu/JavaScript30) - 紀錄各篇練習過程與心得，並嘗試擴充部分練習，也做了一個包含全部練習的[介紹站](http://guahsu.io/JavaScript30/)🇹🇼
- [Daniela](https://github.com/misslild)'s completed challenges on [GitHub Pages](https://misslild.github.io/WesBos-30day-Coding-challenge/) and [Codepen](https://codepen.io/collection/DapZeP/) :raised_hands: :muscle: :+1:
- [Dmitrii Pashutskii's](https://github.com/guar47) code of all challenges on [GitHub with Pages](https://github.com/guar47/javascript30Summary) and review [blog posts](https://blog.dpashutskii.com/tag/javascript30/)
- [Abid Hasan's](https://github.com/sabidhasan/javascript-30) completion of all challenges. This was awesome!! Learned so much! :+1:
- [Yusong Notes](https://sky172839465.github.io/course/js30) Records Yusong JS 30 days note and demo :star2:
- [Ding's Implementation](https://github.com/Ding-Fan/javascript30) code and online demo
- [Herminio Torres](https://github.com/herminiotorres/JavaScript30) lessons and tricks learned, and a [gh-page](https://herminiotorres.github.io/JavaScript30/) to see working all the mini-projects.
- [Dmytro Borysovskyi](https://github.com/dimabory) says many thanks to for the course to Wes 🤝 It was incredible challenge 👌 The full repository with code available [here](https://github.com/dimabory/dimabory.github.io/tree/gh-pages/src/components/JavaScript30Days) and demos can be reached by the link to [gh-pages](https://dimabory.github.io/#/js30days) 👍👍👍
- [Kizito](https://github.com/akhilome/)'s follow along [repo](https://github.com/akhilome/js30) with [completed challenges](https://akhilome.github.io/js30) and [notes](https://akhilome.github.io/js30/notes).
- [VannTile](https://github.com/vanntile)'s [repository](https://github.com/vanntile/JavaScript30) and [GitHub Pages showcase](https://vanntile.github.io/JavaScript30/). Thank you for a great ⌨️ experience.
- [Alex Kim](https://github.com/Alex-K1m/js30-challenge) completed all the challenges. You can check them out at [github pages](https://alex-k1m.github.io/js30-challenge/).
- [Mikhail Thomas](https://github.com/seckela) created [JS30++](https://github.com/seckela/js30plusplus) to add another level of challenge ontop of this already great course.
- [Ramon Morcillo](https://github.com/reymon359/JavaScript30) finished this awesome challenge!. You can see the showcase of his implementations on [this link](https://reymon359.github.io/JavaScript30/).
- [Santiago Escobar](https://github.com/sescobar99)'s [repository](https://github.com/sescobar99/javascript30-challenge) and [GitHub Pages showcase](https://sescobar99.github.io/javascript30-challenge/).
- [Harry Xie](https://github.com/a90100/JavaScript30) 紀錄 30 天的練習筆記在 [此連結](https://github.com/a90100/JavaScript30).
- [ Van Ribeiro's ](https://vanribeiro-30daysofjavascript.netlify.app/) about demos and recaps. On [GitHub Repo](https://github.com/vanribeiro/30days-Of-JavaScript) there's a summary about what was learned and researched.
- [Mugilan](https://github.com/Mugilan-Codes) is currently doing this challenge. Check out his [Repo](https://github.com/Mugilan-Codes/javascript-30) and the [Live Demo](https://mugilan-codes.github.io/javascript-30/).
- [Eshan Vohra](https://github.com/eshanvohra) is currently doing this challenge. Check out my repo at(https://github.com/eshanvohra/JavaScript30)

## Alternative Implementations

Here are some links of people who have done the tutorials, but in a different language or framework:

- [Thomas Mattacchione](https://github.com/tkjone/clojurescript-30) JavaScript 30 written in ClojureScript
- [Dave Follett's](https://github.com/davefollett) blog series, [A New Vue on #JavaScript30](https://davefollett.io/categories/a-new-vue-on-javascript30/), where he explores re-implementing #JavaScript30 projects using [Vue](https://vuejs.org).
- [Akinjide Bankole](https://github.com/akinjide/JS30days) used Node.js with [Jade](http://jadelang.net) to solve the exercises
- [Adrien Poly](https://github.com/adrienpoly/javascript30-stimulus) a modest attempt to convert Drum Kit, Video Player, Local Tapas, TypeHead to [Stimulus JS](https://stimulusjs.org/) framework in a Rails App.
- [Bogdan Lazar](https://github.com/tricinel/TypeScript30) all the JavaScript 30 written in [TypeScript](https://www.typescriptlang.org/)
- [Will Wager](https://github.com/wwags33/JavaScript30) another [TypeScript](https://www.typescriptlang.org/) implementation!
- [marcoSven](https://github.com/marcoSven) solution suggestion for [10 - Hold Shift and Check Checkboxes](https://github.com/marcoSven/JavaScript30/blob/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index-FINISHED.html)
- [ALMaclaine](https://github.com/almaclaine) Javascript 30 written in [Dart 2.0](https://github.com/ALMaclaine/Dart30).

## A note on Pull Requests

These are meant to be 1:1 copies of what is done in the video. If you found a better / different way to do things, great, but I will be keeping them the same as the videos.

The starter files + solutions will be updated if/when the videos are updated.

Thanks!
