//Check if the connection is secured
// we could not send https requests, so we test http instead of https.

function filterNonHttps(req, res, next)  {
    if (req.secure ) {
                res.sendStatus(403)
                return;
            }
           console.log("next");
           next();
}

module.exports = filterNonHttps;