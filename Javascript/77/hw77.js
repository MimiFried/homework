(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const SNAKE_SIZE = 64;
    const chomp = document.getElementById('chomp');
    let apple;
    let gameOver = false;
    let score = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Snake {
        constructor() {
            this.direction = 'ArrowRight';
            this.x = 0;
            this.y = 0;

            document.addEventListener('keydown', e => {
                switch (e.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = e.key;
                }
            });
            this.draw();
        }
        draw() {
            context.drawImage(snakeImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
        }
        move() {
            let x = this.x;
            let y = this.y;
            switch (this.direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }
            if (x < 0 || x > canvas.width - SNAKE_SIZE || y < 0 || y > canvas.height - SNAKE_SIZE) {
                gameOver = true;
            } else {
                this.x = x;
                this.y = y;
            }

            if (apple) {
                if (this.x === apple.x && this.y === apple.y) {
                    chomp.play();
                    score++;
                    apple.move();
                }
            }
            if(gameOver){
                alert("Game Over, Your Score " + score);
                gameOver = false;
                this.x = 0;
                this.y = 0;
            }
            this.draw();
        }
    }
    const snakeImg = new Image();
    snakeImg.src = 'images/snakehead.png';
    snakeImg.addEventListener('load', () => {
        let snake = new Snake();
        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snake.move();
            apple.draw();

            context.font = 'bold 48px serif';
            context.fillText(score, canvas.width - 120, 50);
        }, 500);

    });
    class Apple {
        constructor() {
            this.move();
            this.draw();
        }

        draw() {
            context.drawImage(appleImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
        }
        move() {
            this.x = Apple.getLoc(canvas.width);
            this.y = Apple.getLoc(canvas.height);
        }
        static getLoc(num){
            let randomNum = Math.floor(Math.random() * ((num - SNAKE_SIZE) + 1));
            if (randomNum % SNAKE_SIZE){
                this.getLoc(num);
            }
                return randomNum - (randomNum % SNAKE_SIZE);
        }

    }
    const appleImg = new Image();
    appleImg.src = 'images/apple.png';
    appleImg.addEventListener('load', () => {
    apple = new Apple();
    });

}());
