class Calc {

    //add
    add(x, y) {
        return x + y;
    }
    // mul
    mul(x, y) {
        return x * y;
    }
    // div
    div(x, y) {
        return x / y;
    }

    // find sum sq
    sumSq(x, y) {
        let result = this.add(x, y);
        return result * result;
    }
}

export default new Calc();