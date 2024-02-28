import { Rectangle } from "./rectangle.js"

export class Square extends Rectangle {

    constructor (x,y,height,vari){
        super(x,y,height, height, vari)
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._height, this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._vari
        ctx.stroke()
    }
}