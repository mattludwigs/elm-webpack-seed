const path = require("path");

module.exports = {
  entry : {
    app : [
      "./src/index.js",
    ]
  },

  output : {
    path : path.resolve(__dirname + "/dist"),
    filename : '[name].js',
  },

  module : {
    loaders : [
      {
        test : /\.scss$/,
        loaders : [ "style", "css", "sass" ],
      },
      {
        test : /\.html$/,
        exclude : /node_modules/,
        loader : "file?name=[name].[ext]"
      },
      {
        test : /\.elm$/,
        exclude : [ /elm-stuff/, /node_modules/ ] ,
        loader : "elm-webpack",
      },
    ],
    noParse : /\.elm$/,
  },

  devServer : {
    inline : true,
    stats : { color : true },
  },
};
