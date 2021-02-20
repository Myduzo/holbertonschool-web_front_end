const roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return ((this.width * this.length) * 2)
    }
};
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
