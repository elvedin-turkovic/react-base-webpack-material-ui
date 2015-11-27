module.exports = {
    entry: "./client/main.jsx",
    output: {
        path: __dirname + "/client",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /client\/.+\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /client\/.+\.jsx$/, loader: "babel", query: {presets: ["react", "es2015"]}}
        ]
    }
};