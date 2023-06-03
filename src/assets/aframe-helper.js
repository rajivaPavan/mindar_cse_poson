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
                {position = {x: 0, y: 0, z: 0},
                rotation = {x: 0, y: 0, z: 0},
                scale = {x: 1, y: 1, z: 1},
                animationClip = '*'}) {
        super(id, src);
        this._position = position;
        this._rotation = rotation;
        this._scale = scale;
        this._animationClip = animationClip;
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
        return `${this._scale.x} ${this._scale.y} ${this._scale.z}`;
    }

    /// return the animation clip of the model as a string
    get animationClip() {
        return `clip: ${this._animationClip}`;
    }
}

export {AAssetItem, AGltfModelData};
