// The KingAnimationController class is responsible for running the animations of the king
export default class KingAnimationController {

    _ANIMATION_QUEUES_SIZE = 3;
    _FPS = 24;
    _SHOOT_ANIMATION_DURATION = 120/this._FPS * 1000;
    _WORSHIP_ANIMATION_DURATION = 288/this._FPS * 1000;
    _LEFT90_ANIMATION_DURATION = 24/this._FPS * 1000;
    _WALK_ANIMATION_DURATION = 2000;

    _animations  = {
        worship: "Worship",
        shoot: "ShootArrow",
        idle: "Breath", //typo in the model
        walk: "Walk",
        turn: "Left90"
    }

    constructor(king) {
        this._king = king;
    }

    async runAnimation() {
        // run animations in the order idle, walk, turn, walk, idle, shoot, idle, worship and repeat
        while(true){
            await this.idle(5000);
            await this.walk();
            // 180 turn
            await this.turn(2);
            await this.walk();
            // 180 turn
            await this.turn(2);
            await this.idle(2000);
            await this.shoot();
            await this.turn();
            await this.worship();
        }
    }

    _animationName(animation) {
        return "clip: " + animation + ";";
    }

    setAnimation(animation, ms){
        this._king.setAttribute('animation-mixer',
            this._animationName(animation));
        // if ms is not null, wait for the animation to finish
        if(ms)
            return new Promise(resolve => setTimeout(resolve, ms));
    }

    async shoot() {
        await this.setAnimation(this._animations.shoot, this._SHOOT_ANIMATION_DURATION);
    }

    async worship() {
        await this.setAnimation(this._animations.worship, this._WORSHIP_ANIMATION_DURATION);
    }

    async idle(ms=2000){
        await this.setAnimation(this._animations.idle, ms);
    }

    _WALK_DISTANCE = 0.1;
    _WALK_SPEED = this._WALK_DISTANCE / (this._WALK_ANIMATION_DURATION * this._FPS);

    async walk(){
        this.setAnimation(this._animations.walk).then(r => {
            // update position
            let walkCount = 0;
            const walkInterval = setInterval(() => {
                this._king.object3D.position.x += this._WALK_SPEED;
            }, 1000/this._FPS);
            walkCount++;
            if(walkCount > this._WALK_ANIMATION_DURATION * this._FPS){
                clearInterval(walkInterval);
            }
        });
    }

    async turn(turns=1){
        await this.setAnimation(this._animations.turn, this._LEFT90_ANIMATION_DURATION * turns);
    }
}
