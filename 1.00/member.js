class Member {
    constructor(base, length, angle) {
        this.base = base
        this.length = length
        this.angle = angle
        this.extremity = new Point(
            base.x + length*Math.cos(angle),
            base.y + length*Math.sin(angle)
            )
    }

    getBase() {
        return this.base
    }

    getExtremity() {
        return this.extremity
    }

    translate(moveVector) {
        this.base.x = this.base.x + moveVector.x
        this.base.y = this.base.y + moveVector.y
        this.updateExtremity()
    }

    rotate(rotAngle) {
        this.angle = this.angle + rotAngle
        this.updateExtremity()
    }

    clock() {
        this.rotate(Math.PI/100)
    }

    updateExtremity() {
        this.extremity.x = this.base.x + this.length*Math.cos(this.angle)
        this.extremity.y = this.base.y + this.length*Math.sin(this.angle)
    }



    draw() {
        line(this.base.x,
            400 - this.base.y,
            this.extremity.x,
            400 - this.extremity.y)
    }
}