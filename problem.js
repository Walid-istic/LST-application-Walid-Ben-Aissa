var x

function problem() {
    t = []
    longest = ""
    longesti = 0
    len = 0
    len = Math.floor(Math.random() * 10) + 4
    for (let i = 0; i < len; i++)
        t.push(Math.floor(Math.random() * 2))
    for (let i = 0; i < len; i++) {
        if (t[i] == 0) {
            t[i] = 1
            replaceZero(t, i)
            t[i] = 0
        }
    }
    console.log("the longest: " + longest + " the longest's '0' index: " + longesti)
    return t
}

function replaceZero(t, i) {
    w = ""
    y = []
    for (let j = 0; j <= len; j++) {
        if (t[j] == 1)
            w += t[j]
        if ((t[j] == 0) || (j == len - 1)) {
            if (w == '') {} else {
                y.push(w)
                w = ""
            }
        }
    }
    longestOnes(y, i)

    return y

}

function longestOnes(y, i) {
    for (let j = 0; j < y.length; j++) {
        if (y[j].length >= longest.length) {
            longest = y[j]
            longesti = i
        }
    }
}
console.log(problem())