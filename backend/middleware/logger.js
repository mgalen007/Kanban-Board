
const log = (req, res, next) => {
    const { url, method, ip } = req
    const date = new Date().toLocaleDateString()
    const timestamp = new Date().toLocaleTimeString()
    console.log(`${method} ${url} from ${ip} [${date} at ${timestamp}]`)

    next()
}

export default log
