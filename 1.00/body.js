class Body extends Member{
    /**
     * 
     * @param {*} base
     * @param {Length of the body segment} length 
     * @param {Angle of the body segment with te horizontal} angle 
     */
    constructor(base, length, angle) {
        super(base, length, angle);
        this.arms = new Array(2);
        this.legs = new Array(2);
    }

    translate(moveVector) {
        super.translate(moveVector);
        this.arms.forEach(arm => {
            arm != null ? arm.translate(moveVector) : null;
        })
        this.legs.forEach(leg => {
            leg != null ? leg.translate(moveVector) : null;
        })
    }

    rotate(rotAngle) {
        super.rotate(rotAngle);
        this.arms.forEach(arm => {
            arm != null ? arm.rotate(rotAngle) : null;
        })
        this.legs.forEach(leg => {
            leg != null ? leg.rotate(rotAngle) : null;
        })
    }

    getNewLimb(source, length, angle) {
        return(new Limb(source, length, angle));
    }

    growLeftArm(length, angle) {
        if (this.arms[0] != null) {
            this.arms[0].grow(length, angle)
        } else {
            this.arms[0] = this.getNewLimb(
                this.extremity,
                length,
                this.angle + angle + Math.PI/2)
        }
        
    }

    growRightArm(length, angle) {
        if (this.arms[1] != null) {
            this.arms[1].grow(length, angle)
        } else {
            this.arms[1] = this.getNewLimb(
                this.extremity,
                length,
                this.angle - Math.PI/2 + angle)
        }
    }

    growLeftLeg(length, angle) {
        if (this.legs[0] != null) {
            this.legs[0].grow(length, angle)
        } else {
            this.legs[0] = this.getNewLimb(
                this.base,
                length,
                this.angle + angle + Math.PI/2)
        }
    }

    growRightLeg(length, angle) {
        if (this.legs[1] != null) {
            this.legs[1].grow(length, angle)
        } else {
            this.legs[1] = this.getNewLimb(
                this.base,
                length,
                this.angle + angle - Math.PI/2)
        }
    }

    draw() {
        super.draw();
        this.arms.forEach(arm => {
            arm != null ? arm.draw() : null;
        })
        this.legs.forEach(leg => {
            leg != null ? leg.draw() : null;
        })
    }
}