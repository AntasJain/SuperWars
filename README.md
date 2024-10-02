# SuperWars

Visit : https://playsuperwars.netlify.app
Welcome to SuperWars! This is an interactive card game where players can pit their favorite superheroes against computer based on their power stats. Built using React and Redux, SuperWars allows player to enter their names, shuffle superhero cards, and engage in a fun, competitive game.

Warning: The Site is not currently responsive to different screen size, so please make sure to use it on a full screen pc, preferably on chrome.

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage
- Game Logic
- Components
- Contributing
- License
- Acknowledgments

## Features

- Enter your player name and start the game.
- View superhero cards with their images and power stats.
- Play against a computer opponent.
- Score tracking for wins, losses, and draws.
- Responsive design with Bootstrap for a smooth user experience.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A state management tool for React applications.
- React Bootstrap: Bootstrap components built with React.
- CSS: For styling and layout.
- JavaScript ES6+: For modern JavaScript functionality.

## Installation

To get started with the SuperWars project, follow these steps:

1. Clone the repository:
   git clone https://github.com/AntasJain/superwars.git
   cd superwars

2. Install the dependencies:
   npm install

3. Start the application:
   npm start

4. Open your web browser and navigate to http://localhost:3000 to see the app in action!

## Usage

1. Enter your desired player name on the home screen and click "Play Game".
2. Choose a stat from your superhero card to battle against the computer's card.
3. The higher stat wins the round!
4. Track your score as you progress through the game.
5. You can choose to play again or reset the game at any time.

## Game Logic

- Each player has a deck of superhero cards.
- Players selects a stat from their superhero card to battle against the computer's card.
- The player with the higher stat wins the round, earning points. In case of a tie, the round is considered a draw.
- The game continues until all cards are played, at which point the scores are compared.

## Components

- Navigation: Handles routing between different pages (Home, Collection).
- GetStarted: A form for entering the player's name.
- PlayGame: The main game logic and display of player and computer cards.
- GameOver: Displays the final scores and options to play again or reset.
- CharacterCard: Displays individual superhero cards with stats.
- StatsTable: Shows a table of power stats for the selected character.
- BottomAlert: Displays alerts for loading states and errors.

## Contributing

We welcome contributions to SuperWars! If you have suggestions for improvements or features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Special thanks to the creators of React, Redux, and Bootstrap for their amazing libraries.
- Background image by vector_corp on Freepik.
