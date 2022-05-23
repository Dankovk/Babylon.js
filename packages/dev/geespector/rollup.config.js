import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import alias from '@rollup/plugin-alias';

export default (cliArgs) => {
    // serve instead of build. watch is turned on using CLI args
    if (cliArgs.configServe === true) {
        return {
            input: "./src/index.ts",
            output: {
                file: "./dist/index.js",
                // format: "esm",
                sourcemap: true,
            },
            external: [
                // all of those will need to be present or peer dependencies in the built package
                /^core\//,
                /^serializers\//,
                /^materials\//,
                /^loaders\//,
                /^gui\//,
                /^geenee-ui-components\//,
                /^shared-ui-components\//,
                /^react\//,
                "gif.js.optimized",
                "react",
                "react-dom",
                "re-resizable",
                "react-contextmenu",
                "@fortawesome/react-fontawesome",
                "@fortawesome/free-solid-svg-icons",
                "@fortawesome/free-regular-svg-icons",
            ],
            plugins: [
                // missing commonjs?
                image(),
                typescript({ tsconfig: "./tsconfig.build.json", outputToFilesystem: true, declarationDir: "." }),
                scss(), // will output compiled styles to output.css
                alias({
                    entries: [
                        { find: '@geenee/ui', replacement: '../../../../one/geenee-ui' },
                    ]
                })
            ],
        };
    }
    const bundle = {
        input: "./src/index.ts",
        output: {
            file: "./dist/index.js",
            // format: "esm",
            sourcemap: true,
        },
        external: [
            // all of those will need to be present or peer dependencies in the built package
            /^core\//,
            /^serializers\//,
            /^materials\//,
            /^loaders\//,
            /^gui\//,
            /^shared-ui-components\//,
            /^geenee-ui-components\//,
            /^react\//,
            "react",
            "react-dom",
            "re-resizable",
            "react-contextmenu",
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-regular-svg-icons",
        ],
        plugins: [
            // missing commonjs?
            image(),
            typescript({ tsconfig: "./tsconfig.build.json", outputToFilesystem: true, declarationDir: "." }),
            scss(), // will output compiled styles to output.css
            alias({
                entries: [
                    { find: '@geenee/ui', replacement: '../../../../one/geenee-ui' },
                ]
            })
        ],
    };
    return bundle;
};
