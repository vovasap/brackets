module.exports = function check(str, bracketsConfig) {
    let checks = (new Array(bracketsConfig.length)).fill(false)
    while(checks.includes(false)) {
        bracketsConfig.forEach((conf, i) => {
            const brackets = conf.join('')
            if (str.includes(brackets)){
                str = str.replace(brackets, '')
                checks[i] = false
            } else {
                checks[i] = true
            }
        })
        if(str.length === 0) return true
    }
    return false
}
