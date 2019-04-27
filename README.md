# Welcome to Better Sports

Created by: Timothy Quirk

In this repository you will find the front end built with React.js. The front end is meant to be connected to a Ruby on Rails back-end, which can be found in this repository: https://github.com/tfquirk/better-sports-back-end.

## Instructions for use

1. After forking and cloning this repository from github, switch into your newly cloned folder.

2. Install the necessary dependencies with `npm install`.

3. If you have not already installed the back-end for Better Sports, please clone that repository to your local, and follow the instructions located there to get the API up and running.

4. Once you have your back-end up and running, you may run the `npm start` command from your terminal in this repo, and you will be able to test the site.

## Demo

[![alt text][image]][reference link]

[image]: https://github.com/tfquirk/better-sports-front-end/blob/master/public/readmeImages/BetterSportsDemoPreview.png "Better Sports Demo Video"
[reference link]: https://youtu.be/bAUPrccsoaE

Please click on the image above if you would like to see a video demo of the Better Sports.

## Overview

As a bit of background, this project was built as a final project for my course at the Flatiron School. The project requirements were that I create a full stack application using a Rails back-end and a React.js front-end.

Better Sports allows a user to log in, and make bets on a Champions League Soccer games.

## My assumptions

- For this site, bets, and getting users to place bets is paramount.
  - Upon sign in, users are directed to their dashboard, which show them their available balance, and the first 3 upcoming games they can place bets on.
- Bets must be placed before the start of the game to be valid.
- When viewing past bets, a user will want a clear way to see which bets they won and lost.
- Bets should be displayed from last to first. The most recent bets are the most relevant.
- A functional, clean UI is preferred. Users have several ways to achieve the same objectives.
- Forms have structured fields for input, and data is verified on the front-end to before passing information to our back-end.
- All money is fake, money for the purposes of this application.

## Additional features that could be added

- Admin Portal:
  - Create an admin portal to allow employees/certified users to certify game outcomes, which will then adjudicate all bets placed on that game.
- Allow users to filter and sort bets by teams
- Allow users to update their accounts (names, emails, password, etc.)
- Create an account history page that displays all transaction taken with the signed in account
  - Any time money is added to the account
  - Any time a bet is made, so the funds debited
  - Any time a bet is won/lost show the funds credited or the bet settled
- Create a 404 page in the event a user tries to navigate to a route that does not exist
- Allow users to search for specific teams/players

## Technical Specs

This project uses the following technologies:

1. React
2. JavaScript ES6 and JSX
3. Redux
4. NPM
5. Custom CSS
6. React-Router
7. Team and player data was gathered from the - https://www.thesportsdb.com/api.php
8. Odds data for game was an average of 11 different bookmakers prior to the games being played
