// hello-preprocessors/config-overrides.js

const {
    override,
    addLessLoader,
    disableChunk,
    addBabelPlugins,
    removeModuleScopePlugin,
    addBabelPresets
} = require("customize-cra");

module.exports = override(
    ...addBabelPresets("@babel/preset-env", "@babel/preset-react"),
    ...addBabelPlugins(
        [
            "import",
            { libraryName: "antd", libraryDirectory: "lib", style: true },
            "antd"
        ],
        [
            "import",
            { libraryName: "antd-mobile", libraryDirectory: "lib", style: "css" },
            "antd-mobile"
        ]
    ),
    addLessLoader({
        javascriptEnabled: true,
        importLoaders: true,
        modifyVars: {}
    }),
    disableChunk(),
    removeModuleScopePlugin()
);