class Navigation{
    constructor(navigation, navigationIcons){
        this.defaultState = false;
        this.navigation = navigation;
        this.navigationIcons = navigationIcons;
    }
    
    Events(){
        for(let i = 0; i < this.navigationIcons.length; i++) {
            this.navigationIcons[i].addEventListener('click', () => {
                this.NavigationAction();
            });
        }
    }
    
    NavigationAction() {
        if (!this.defaultState) {
            this.NavigationOpen();
            this.defaultState = true;
        } else {
            this.NavigationClose();
            this.defaultState = false;
        }
    }
    
    NavigationOpen() {
        this.navigation.classList.add('nav--active');
        this.navigationIcons[0].classList.remove('navbar__icon--active');
        this.navigationIcons[1].classList.add('navbar__icon--active');
    }
    
    NavigationClose() {
        this.navigation.classList.remove('nav--active');
        this.navigationIcons[1].classList.remove('navbar__icon--active');
        this.navigationIcons[0].classList.add('navbar__icon--active');
    }
}