//Check for the XHR 
function filterNonXHR(req, res, next) {
    if (!req.xhr) {
        console.log("XHR =", req.xhr)
        console.log("XHR test FAILED");
        res.sendStatus(400)
        return;
    }
    console.log("XHR =", req.xhr)
    console.log("XHR test PASSED");
    next();
}

module.exports = filterNonXHR;

    // Version avec REQ.GET
    // const xhrHeader = req.get("X-Requested-With"),
    // if ( xhrHeader !== " XMLHttpRequest") {
    //     res.status(400).end();
    // } 
    // next ()