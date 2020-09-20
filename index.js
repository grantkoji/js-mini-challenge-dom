

//Deliverable 1
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)
    //Deliverable 2
    header.style.color = 'red';
    //Deliverable 3

    const playerList = document.querySelector('div.player-container');
    console.log(playerList)
    for (let i = 0; i < PLAYERS.length; i++) {
      const div1 = document.createElement('div')
      div1.className = 'player'
      div1.setAttribute('data-number', `${PLAYERS[i].number}`)
      const head3 = document.createElement('h3')
      head3.innerHTML = `${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)`
      const img1 = document.createElement('img')
      img1.src = `${PLAYERS[i].photo}`
      img1.alt = `${PLAYERS[i].name}`
      div1.appendChild(head3)
      head3.appendChild(img1)
      playerList.appendChild(div1)
  }


  const sterling = document.querySelector('div[data-number="7"]')
  sterling.remove()
})


const header = document.querySelector('#header')
header.style.color = 'red';

const playerList = document.querySelector('div.player-container')
for (let i=0; i < PLAYERS.length; i++) {
  const div1 = document.createElement('div')
  div1.className = 'player'
  div1.setAttribute('data-number', `${PLAYERS[i].number}`)
  const head3 = document.createElement('h3')
  head3.innerHTML = `${PLAYERS[i].name} (<em>)`
 
  
}



// <div class="player-container">
// <div class="player" data-number="(Player Number)">
//     <h3>
//       {player name} (<em>{player nickname}</em>)
//     </h3>
//     <img src="{player image}" alt="{player name}">
//   </div> 
/***** Deliverable 1 *****/
// Open the `index.html` file in your browser and check the console in Chrome Dev Tools. 
// You'll notice the console.log from line 2 of the `index.js` file is returning `null` 
// instead of showing the `h1#header` element.
// Figure out what you need to change to give Javascript access to the `h1#header` element.

/***** Deliverable 2 *****/
// Now that you have access to the `h1#header` element, 
// use Javascript to change the element's font color to red (of course).

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)

// The player data is stored in a variable called `PLAYERS` in the `data.js` file - 
// you can still access that variable in your `index.js` file (see if you can figure out why!).
// First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data 
// in the console. *For each* player in our application, we want to render their information on 
// the DOM inside the `div#player-container` element. 
// Create a DOM element that looks like this for each player and append it to the `div.player-container`:

// ```html
// <div class="player" data-number="(Player Number)">
//   <h3>
//     {player name} (<em>{player nickname}</em>)
//   </h3>
//   <img src="{player image}" alt="{player name}">
// </div>
// ```
/***** Deliverable 4 *****/


// A Manchester City player, Raheem Sterling, snuck into our list. 
// Use Javascript to find the element with the `[data-number='7']` attribute, 
// and remove that element from the page.

// Hint: You can use `querySelector` with [CSS Attribute Selectors]
// (https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) to find an element with a specific data-number. 


/* //<h1 id="header">Welcome to Ian's Liverpool FC Fan Club</h1>
/* <div class="player-container">
<!--  -->
</div> */ 