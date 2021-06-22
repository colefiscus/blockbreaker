# Blockbreaker

## Overview

Blockbreaker is a solo project built by [Cole Fiscus](https://github.com/colefiscus). It was based off of a [Turing School of Software and Design](turing.edu) project that takes inspiration from the Rotten Tomatoes website. The goal was to create a React app while using the fetch API, CSS, and JavaScript to retrieve data about different movie titles and display that data in an interesting way.

Visit the deployed site - [Blockbreaker](https://block--breaker.herokuapp.com/).

For more detailed additional features, see below.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

1. Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]` inside of your terminal.  
2. `cd` into that directory.  
3. Install any necessary dependencies using `npm install`.
4. Enter `npm start` to run the app on a local server or open the code in your text editor.  
5. The app should open automatically, but you can also navigate to `http://localhost:3000/` to view the app as well.

## Additional Features

- The app incorporates React Router to navigate between pages of which there are 2 main pages + dynamic routing for the various movie detail pages.
- The movie trivia section that appears upon loading the main page is a separate API call and will display a new question on page reload.
- A loading screen for UX when waiting for API call responses.
- Playful CSS animations attempting to recreate the feel of the movie shelfs seen at the now defunct movie rental chain BlockBuster.

## App in Action

![BlockBreaker](https://media-exp1.licdn.com/dms/image/C5622AQGCfNjPtJeirg/feedshare-shrink_2048_1536/0/1620693096190?e=1626912000&v=beta&t=MwHr7cLyjGTGl89W37RX9idD8T1ooidqVP2lkTGKnzg)

## Current Issues

- The app needs to be fully responsive, it is currently only suitable for desktop use.
- Some movie poster images on the detail pages are warped - image could do with some styling for consistency.
- Rarely a trivia question/answer will be displayed with odd characters - must translate before display.
- The movie trivia also needs to be refactored to reload on the clicking of the home icon in the header.
   
## Future Iterations

- The developer hopes to make a back-end server along with user authentication to allow users to sign in and save ratings on their watched movies.
- The inclusion of movie trailers would also be a good addition for the site.

## Project Wins / Challenges

#### Wins

- Effective display of data in my opinion, I enjoy the 'movie shelf' on the home page with the animations.
- Multiple fetch calls to multiple endpoints utilized effectively.
- Effective UX, in my opinion.

#### Challenges

- Figuring out spacing of all elements.

### Links
The link to the spec sheet that guided this project: [Spec](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
