class Timeline{
    constructor(timelineDots, timelineArticles){
        this.clickDot = 0;
        this.playDot = 0;
        this.timer = 0;
        this.timelineDots = timelineDots;
        this.timelineArticles = timelineArticles;
    }
    
    Events(){
        for(let i = 0; i < this.timelineDots.length; i++) {
            this.timelineDots[i].addEventListener('click', () => {
                this.TimelineAction(i);
                this.playDot = i;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.playDot++;
                    if (this.playDot > this.timelineDots.length - 1) {
                        this.playDot = 0;
                    }
                    this.TimelineAction(this.playDot);
                }, 5000);
            });
        }
    }
    
    Play(){
        this.timer = setInterval(() => {
            this.playDot++;
            if (this.playDot > this.timelineDots.length - 1) {
                this.playDot = 0;
            }
            this.TimelineAction(this.playDot);
        }, 5000);
    }
    
    TimelineAction(index) {
        if (!this.timelineDots[index].classList.contains('story__circle--active')) {
            this.DeactivateDot(this.clickDot);
            this.clickDot = index;
            this.ActivateDot(index);
        }
    }
    
    ActivateDot(index) {
        this.timelineDots[index].classList.add('story__circle--active');
        this.timelineArticles[index].classList.add('story__article--active');
    }
    
    DeactivateDot(index) {
        this.timelineDots[index].classList.remove('story__circle--active');
        this.timelineArticles[index].classList.remove('story__article--active');
    }
}