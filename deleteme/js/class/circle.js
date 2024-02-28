import { Shape } from "./shape.js"

export class Circle extends Shape {
    #radius

    constructor(x,y,radius,vari){
        super(x,y,vari)
        this.#radius = radius
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this._x, this._y, this.#radius, 0, 2*Math.PI)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._vari
        ctx.stroke()
    }
}