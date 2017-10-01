class GameObject implements IGameObject {

    id: number = 0;

    constructor() {

        this.id++;
    }

    getID() {
        return this.id;
    }

    setID(newID: number) {
        this.id = newID;
    }
}