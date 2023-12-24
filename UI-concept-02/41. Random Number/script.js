function choose() {
    var result = document.getElementById("result")
    var min = document.getElementById("minValue").value
    var max = document.getElementById("maxValue").value
    if (min && max) {
        if (min > max) {
            let n3 = min
            let n4 = max
            max = n3
            min = n4
        }
        min = Math.ceil(min)
        max = Math.ceil(max) + 1
        resultFinal = Math.floor(Math.random() * (max - min)) + min
        result.innerHTML = resultFinal
    }
}