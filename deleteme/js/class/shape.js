export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor(x,y, vari){
        this._x = x
        this._y = y
        this._vari = vari
    }

    set setLineWIdth(lineWidth) {
        this._lineWidth = lineWidth
    }

}

