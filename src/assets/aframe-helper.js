/*A class for a-asset-item*/
class AObject {
    constructor(id, src) {
        this._id = id;
        this._src = src;
    }

    get src() {
        return this._src;
    }

    get id() {
        return this._id;
    }
}

class AAssetItem extends AObject {
    constructor(id, src) {
        super(id, src);
    }
}

/*A class for a-gltf-model*/
class AGltfModelData extends AObject {
    constructor(id, src,
                {
                    position = {x: 0, y: 0, z: 0},
                    positionX = 0,
                    positionY = 0,
                    positionZ = 0,
                    rotation = {x: 0, y: 0, z: 0},
                    rotationX = 0,
                    rotationY = 0,
                    rotationZ = 0,
                    scale = 1,
                    animationClip = '*',
                    animationController = null
                }) {
        super(id, src);
        this._position = this._calculatePosition(position, positionX, positionY, positionZ);
        this._rotation = this._calculateRotation(rotation, rotationX, rotationY, rotationZ);
        this._scale = scale;
        this._animationClip = animationClip;
        this.animationController = animationController;
    }

    /// return the position of the model as a string
    get position() {
        return `${this._position.x} ${this._position.y} ${this._position.z}`;
    }

    /// return the rotation of the model as a string
    get rotation() {
        return `${this._rotation.x} ${this._rotation.y} ${this._rotation.z}`;
    }

    /// return the scale of the model as a string
    get scale() {
        return `${(this._scale)} ${(this._scale)} ${this._scale}`;
    }

    /// return the animation clip of the model as a string
    get animationClip() {
        return `clip: ${this._animationClip}`;
    }

    // calculate the position of the model based on the given parameters
    _calculatePosition(position, positionX, positionY, positionZ) {
        if (positionX !== 0) {
            position.x = positionX;
        }
        if (positionY !== 0) {
            position.y = positionY;
        }
        if (positionZ !== 0) {
            position.z = positionZ;
        }

        return position;
    }

    // calculate the rotation of the model based on the given parameters
    _calculateRotation(rotation, rotationX, rotationY, rotationZ) {
        if (rotationX !== 0) {
            rotation.x = rotationX;
        }
        if (rotationY !== 0) {
            rotation.y = rotationY;
        }
        if (rotationZ !== 0) {
            rotation.z = rotationZ;
        }

        return rotation;
    }

}

export {AAssetItem, AGltfModelData};
