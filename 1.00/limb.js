class Limb extends Member{
    constructor(base, length, angle) {
        super(base, length, angle)
        this.nextLimb = null
    }

    setNextLimb(length, angle) {
        this.nextLimb = new Limb(this.extremity, length, this.angle+angle)
    }

    grow(length, angle) {
        if (this.nextLimb != null) {
            this.nextLimb.grow(length, angle)
        } else {
            this.setNextLimb(length, angle)
        }
    }

    draw() {
        super.draw()
        if (this.nextLimb != null) {
            this.nextLimb.draw()
        }
    }
}