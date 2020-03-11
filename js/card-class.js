class Card{
    constructor(card, leftArrow, rightArrow){
        this.card = card;
        this.leftArrow = leftArrow;
        this.rightArrow = rightArrow;
        this.startTime = null;
        this.position = new Array;
        this.leftCard = null;
        this.rightCard = null;
        this.ArrayInit();
    }

    ArrayInit() {
        this.position.push(this.card.length - 1);
        for (let i = 0; i < this.card.length - 1; i++) {
            this.position.push(i);
        }
    }
    
    Events(){
        this.leftArrow.addEventListener('click', (e) => {
            if (!this.leftArrow.classList.contains('tools__arrow--disabled') && !this.rightArrow.classList.contains('tools__arrow--disabled')) {
                e.preventDefault();
                this.leftArrow.classList.add('tools__arrow--disabled');
                this.rightArrow.classList.add('tools__arrow--disabled');
                this.Left();
            }
        });

        this.rightArrow.addEventListener('click', (e) => {
            if (!this.rightArrow.classList.contains('tools__arrow--disabled') && !this.leftArrow.classList.contains('tools__arrow--disabled')) {
                e.preventDefault();
                this.leftArrow.classList.add('tools__arrow--disabled');
                this.rightArrow.classList.add('tools__arrow--disabled');
                this.Right();
            }
        });
    }

    Right() {
        this.leftCard = this.card[this.position[1]];
        this.rightCard = this.card[this.position[2]];
        this.position.push(this.position.shift());
        requestAnimationFrame((timestamp) => {
            this.startTime = timestamp;
            this.Update(timestamp, this.leftCard, this.rightCard, 200, 300, "right");
        });
    }
    
    Left() {        
        this.leftCard = this.card[this.position[0]];
        this.rightCard = this.card[this.position[1]];
        this.position.unshift(this.position[this.position.length - 1]);
        this.position.pop();
        requestAnimationFrame((timestamp) => {
            this.startTime = timestamp;
            this.Update(timestamp, this.leftCard, this.rightCard, 200, 300, "left");
        });
    }

    Update(timestamp, leftCard, rightCard, distance, duration, direction) {
        let runtime = timestamp - this.startTime;
        let progress = runtime / duration;
        progress = Math.min(progress, 1).toFixed(2);

        if (direction == "left") {
            leftCard.style.opacity = progress;
            leftCard.style.transform = "translate3d(" + (-200 + this.Ease(runtime, 0, distance, duration)) + "px, 0px, 0px)";
            rightCard.style.opacity = 1 - progress;
            rightCard.style.transform = "translate3d(" + (0 + this.Ease(runtime, 0, distance, duration)) + "px, 0px, 0px)";
        }

        if (direction == "right") {
            rightCard.style.opacity = progress;
            rightCard.style.transform = "translate3d(" + (200 - this.Ease(runtime, 0, distance, duration)) + "px, 0px, 0px)";
            leftCard.style.opacity = 1 - progress;
            leftCard.style.transform = "translate3d(" + (0 - this.Ease(runtime, 0, distance, duration)) + "px, 0px, 0px)";
        }

        if (runtime < duration){
            requestAnimationFrame((timestamp) => {
                this.Update(timestamp, leftCard, rightCard, distance, duration, direction);
            });
        } else {
            this.leftArrow.classList.remove('tools__arrow--disabled');
            this.rightArrow.classList.remove('tools__arrow--disabled');
        }
    }

    /* easeOutCubic */
    Ease(runtime, startingPosition, distance, duration) {
        return distance * ((runtime = runtime / duration - 1) * runtime * runtime + 1) + startingPosition;
    }
}