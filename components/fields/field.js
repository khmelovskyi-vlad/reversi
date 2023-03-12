class Field {
    cells = [];
    create(){
        this.cells = Array.from(Array(64).keys());
    }
}

module.exports = Field;