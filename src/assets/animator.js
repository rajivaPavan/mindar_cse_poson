// The KingAnimationController class is responsible for running the animations of the king
export default class KingAnimationController {

    _ANIMATION_QUEUES_SIZE = 3;
    _FPS = 24;
    _SHOOT_ANIMATION_DURATION = 120/this._FPS * 1000;
    _WORSHIP_ANIMATION_DURATION = 288/this._FPS * 1000;
    _LEFT90_ANIMATION_DURATION = 23/this._FPS * 1000;
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
            await this.walk(-1);
            // 180 turn
            await this.turn(2);
            await this.idle(2000);
            await this.shoot();
            await this.worship();
        }
    }

    _animationName(animation) {
        return "clip: " + animation + ";";
    }

    async setAnimation(animation, ms){
        const animationName = this._animationName(animation);
        console.log("setting animation: " + animation);
        this._king.setAttribute('animation-mixer', animationName);
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
    ///  ---- TODO: Testing
    _WALK_DISTANCE = 0.5;
    _WALK_SPEED = this._WALK_DISTANCE * 1000 / (this._WALK_ANIMATION_DURATION * this._FPS);

    async walk(direction=1){
        this.setAnimation(this._animations.walk).then(r => {
            // update position
            let walkCount = 0;
            const walkInterval = setInterval(() => {
                console.log("walking");
                this._king.object3D.position.x += this._WALK_SPEED * direction;
                console.log(walkCount, this._king.object3D.position.x)
                walkCount++;
                if(walkCount > this._WALK_ANIMATION_DURATION * this._FPS / 1000){
                    // stop walking
                    console.log("stop walking");
                    clearInterval(walkInterval);
                }
            }, 1000/this._FPS);

        });
        return new Promise(resolve => setTimeout(resolve, this._WALK_ANIMATION_DURATION));
    }

    async turn(turns=1){
        for(let i = 0; i < turns; i++){
            await this.setAnimation(this._animations.turn, this._LEFT90_ANIMATION_DURATION);
            this._king.object3D.rotation.y += 90;
        }
    }
}
