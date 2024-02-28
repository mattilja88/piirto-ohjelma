import { Shape } from "./shape.js"

export class Rectangle extends Shape {
    _width
    _height

    constructor(x,y,width, height, vari) {
        super(x,y, vari)
        this._width = width
        this._height = height
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._width, this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._vari
        ctx.stroke()
    }
}