
const adminValidation = (req, res, next) => {
    //Con TRUE da acceso a la ruta con FALSE no da el acceso
    const isAdmin = true;
    if (!isAdmin) {
        res.send('**** SIN ACCESO a esta ruta ****')
    } else {
        next()
    }
}

module.exports = adminValidation
