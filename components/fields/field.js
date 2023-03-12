class Field {
    cells = [];
    create(){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells.push({x: i, y: j});
            }
        }
    }
}

module.exports = Field;