const spy = (label, fn) => {

    const wrap = (...args) => {
        console.log("ENTER " + label)
        console.log(...args)
        const retval = fn(...args)
        console.log("RETURN " + label)
        console.log(retval)
        console.log("EXIT " + label)
        return retval
        }

    return wrap

}

export default spy