document.addEventListener('DOMContentLoaded', (event) => {
    const gameContainer = document.getElementById('game-container');

    // Initialize game variables
    let player = { x: 0, y: 0 };
    let obstacles = [];
    let gameRunning = true;

    // Game loop
    function gameLoop() {
        if (gameRunning) {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }
    }

    // Update game state
    function update() {
        // Update player position, check collisions, etc.
        // Example: Move player to the right
        player.x += 1;
        if (player.x > window.innerWidth) {
            player.x = 0; // Reset position
        }
    }

    // Draw game state
    function draw() {
        gameContainer.innerHTML = ''; // Clear previous frame
        const playerElement = document.createElement('div');
        playerElement.style.position = 'absolute';
        playerElement.style.left = player.x + 'px';
        playerElement.style.top = player.y + 'px';
        playerElement.style.width = '50px';
        playerElement.style.height = '50px';
        playerElement.style.backgroundColor = 'red';
        gameContainer.appendChild(playerElement);
    }

    // Start the game loop
    gameLoop();
});
