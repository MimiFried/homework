module.exports = (req,res,next) => {
    if (req.session.user){
        req.user = req.session.user;
        return next()
    }
    res.status(401).send('ERROR- not logged in')
}