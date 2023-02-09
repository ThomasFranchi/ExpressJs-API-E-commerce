//Check for all method except GET if the body have a key: teapot and the correct value
function filterNonTeapot(req, res, next) {
    if (req.method !== "GET" && req.body.teapot !== "happy unbirthday to you") {
        console.log(req.body.teapot);
        res.sendStatus(418);
        return;
    }
    console.log(`Singing : ${req.body.teapot}`);
    console.log("TEAPOT TEST passed ");
    next();
}

module.exports = filterNonTeapot;
