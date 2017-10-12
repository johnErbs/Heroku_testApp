
import * as Express from 'express';
let app = Express();

app.set('port', (process.env.PORT || 5000));

app.get("/", (req, resp) => {
    resp.send("Hello World!");
});

console.log("Running on port " + app.get("port"));
app.listen(app.get('port'));