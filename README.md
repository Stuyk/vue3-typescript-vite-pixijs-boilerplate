# Catch the Food

Catch the Food is a simple game built using TypeScript and the PIXI.js library. The goal of the game is to catch falling food items using the catcher at the bottom of the screen. The game gets progressively harder as you advance through levels.

## Technical Description

The game is built using TypeScript and utilizes the PIXI.js library for rendering graphics. The game logic is separated into several classes, including `FallingObject`, `Level`, `Catcher`, `DisplayManager`, and `Game`. These classes handle different aspects of the game such as spawning and updating falling objects, managing levels and difficulty, controlling the catcher, managing the display and user interface, and running the main game loop.

## Level Progression

As you catch more food items and increase your score, you will advance through levels. Each level increases in difficulty by increasing the maximum number of objects that can be on screen at once and decreasing the spawn interval between objects. This makes it harder to catch all of the falling food items as you progress through levels.

## Installation and Running

To install and run this game locally, you will need to have Node.js installed on your computer. Clone this repository and navigate to its root directory in your terminal. Then run `npm install` to install all dependencies. Once all dependencies are installed, run `npm start` to start the game.

## Building and Deploying

To build this game for deployment, navigate to the root directory of this repository in your terminal and run `npm run build`. This will create a `dist` directory containing all of the files necessary to deploy the game. You can then deploy these files to a web server or hosting service of your choice.

## Roadmap

In future updates, we plan to add more features to the game such as power-ups, different types of food with different effects, and more levels with increasing difficulty. We also plan to improve the user interface and add more options for customizing gameplay.

## Contributing

We welcome contributions to this project! If you have an idea for a new feature or improvement, feel free to open an issue or submit a pull request.