"use strict";
const gulp = require('gulp')
const path = require("path")
const spawn = require('child_process').spawn
const fs = require("fs")
const esprima = require('esprima')
const espree = require("espree")
const beautify = require('js-beautify').js
const Linter = require("eslint").Linter
const SourceCode = require("eslint").SourceCode
const linter = new Linter()
const exec = require('child_process').exec
const browserSync = require('browser-sync').create();
const input = path.join(__dirname, `web_build`, `files`, `nv-components.js`)
const sass = require('node-sass');

function fonts() {
    return new Promise(resolve => {
        let child = spawn(`cp`, [`-r`, `./src/assets`, `dist/nv-styles`]);

        child.stdout.on('data', (data) => {
            console.log(`${data}`);
        });

        child.stderr.on('data', (data) => {
            console.error(`${data}`);
        });

        child.on('exit', function (code, signal) {
            let child = spawn(`cp`, [`-r`, `./src/assets`, `demo`]);

            child.stdout.on('data', (data) => {
                console.log(`${data}`);
            });

            child.stderr.on('data', (data) => {
                console.error(`${data}`);
            });

            child.on('exit', function (code, signal) {
                resolve()
            });
        });
    })
}

function sassRender() {
    return new Promise(resolve => {
        sass.render({
            file: "./src/global/nv-styles.scss"
        }, function (error, result) {
            if (!error) {
                fs.writeFileSync("./dist/nv-styles.css", result.css)
                fs.writeFileSync("./demo/nv-styles.css", result.css)
            }

            resolve()
        })
    })
}


function lint() {
    return new Promise(resolve => {
        fs.readdirSync(path.join(__dirname, `web_build`, `files`)).forEach(file => {
            const content = fs.readFileSync(path.join(__dirname, `web_build`, `files`, file), 'utf-8')
            const output = linter.verifyAndFix(content, {
                rules: {
                    "quotes": [2, "single", "avoid-escape"],
                    "no-unused-vars": 0,
                    "indent": ["error", 2],
                    "brace-style": [2, "1tbs", {
                        "allowSingleLine": false
                    }],
                    curly: "all",
                    "space-before-function-paren": [2, {
                        "anonymous": "always",
                        "named": "never"
                    }],
                    "key-spacing": [2, {
                        "beforeColon": false
                    }],
                    "no-trailing-spaces": [2, {
                        "skipBlankLines": true
                    }],
                    "max-len": ["error", {
                        "code": 80
                    }],
                    "no-underscore-dangle": 0
                }
            })
            fs.writeFileSync(path.join(__dirname, `web_build`, `files`, file), output.output)
        })
    })
}

function pack() {
    return new Promise(resolve => {
        const p = spawn(`npm`, [`run`, `pack`])
        p.stdout.on('data', (data) => {
            console.log(`${data}`);
        })
        p.stderr.on('data', (data) => {
            console.error(`${data}`);
        })

        p.on('exit', function (code, signal) {
            const c = spawn(`cp`, [`dist/bundled/nv-components.js`, `demo`])
            c.stdout.on('data', (data) => {
                console.log(`${data}`);
            })
            c.stderr.on('data', (data) => {
                console.error(`${data}`);
            })
            c.on('exit', function (code, signal) {
                resolve()
            });
        });
    })
}

function docs() {
    return new Promise(resolve => {
        const child = spawn(`typedoc`, [`--json`, `./demo/docs.json`])
        child.stdout.on('data', (data) => {
            console.log(`${data}`);
        })
        child.stderr.on('data', (data) => {
            console.error(`${data}`);
        })

        child.on('exit', function (code, signal) {
            resolve()
        });
    })
}

function demo() {
    return new Promise(resolve => {
        const child = spawn(`cp`, [`-r`, `src/assets`, `demo`]);

        child.stdout.on('data', (data) => {
            console.log(`${data}`);
        });

        child.stderr.on('data', (data) => {
            console.error(`${data}`);
        });

        child.on('exit', function (code, signal) {
            resolve()
        });
    })
}

function dev() {
    return new Promise(resolve => {
        return pack()
            .then(() => {
                return sassRender()
            })
            .then(() => {
                return fonts()
            })
            .then(() => {
                return docs()
            })
            .then(() => {
                return resolve()
            })
    })
}

gulp.task('server', function () {
    browserSync.init({
        serveStatic: ['./demo'],
        port: 5656,
        https: true,
        single: true
    })

    gulp.watch("./src/**/**/*.*", ['dev'])
})

gulp.task('watch', function () {
    gulp.watch("./src/**/**/*.*", ['dev']);
})

gulp.task('dev', dev)

gulp.task("default", [
    "watch",
    "server",
    "dev",
], function () {});
