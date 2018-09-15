"use strict";
const gulp = require('gulp')
const spawn = require('child_process').spawn
const fs = require("fs")
const exec = require('child_process').exec
const browserSync = require('browser-sync').create();
const sass = require('node-sass')
const docParser = require('./doc-parser')
const concat = require('concat')

function fonts() {
    return new Promise(resolve => {
        let child = spawn(`cp`, [`-r`, `./src/assets`, `./dist/nv-styles`]);

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

function nvStyles() {
    return new Promise(resolve => {
        sass.render({
            file: "./src/global/nv-styles.scss"
        }, function (error, result) {
            if (!fs.existsSync(`./dist/nv-styles`)) {
                fs.mkdirSync(`./dist/nv-styles`)
            }

            if (!error) {
                fs.writeFileSync("./dist/nv-styles/nv-styles.css", result.css)
            }

            fonts().then(resolve)
        })
    })
}

function pack() {
    return new Promise(resolve => {
        const s = spawn(`npm`, [`run`, `build`])
        s.stdout.on('data', (data) => {
            console.log(`${data}`);
        })
        s.stderr.on('data', (data) => {
            console.error(`${data}`);
        })

        s.on('exit', function (code, signal) {
            fs.writeFileSync(`./pack.js`, `import { defineCustomElements } from './dist/esm/index'; defineCustomElements(window);`)

            setTimeout(() => {
                const w = spawn(`webpack`, [`--config`, `./webpack.config.js`, `--progress`])
                w.stdout.on('data', (data) => {
                    console.log(`${data}`)
                })
                w.stderr.on('data', (data) => {
                    console.error(`${data}`)
                })

                w.on('exit', function (code, signal) {
                    fs.unlinkSync('./pack.js')

                    setTimeout(() => {
                        resolve()

                        const files = fs.readdirSync('./web_build/files/')

                        fs.mkdirSync(`./dist/bundled`)

                        concat(files.map(f => `./web_build/files/${f}`)).then(result => {
                            fs.writeFileSync(`./dist/bundled/nv-components.js`, result)
                            resolve()
                        })
                    }, 500)
                })
            }, 1500)
        })
    })
}

function docs() {
    return new Promise(resolve => {
        const child = spawn(`typedoc`, [`--json`, `./docs/docs.json`])
        child.stdout.on('data', (data) => {
            console.log(`${data}`);
        })
        child.stderr.on('data', (data) => {
            console.error(`${data}`);
        })

        child.on('exit', function (code, signal) {
            fs.writeFileSync('./docs/docs.json', JSON.stringify(docParser(require('./docs/docs.json'))))
            resolve()
        });
    })
}

function demo() {
    return new Promise(resolve => {
        const w = spawn(`webpack`, [`--config`, `./demo/webpack.config.js`, `--progress`])
        w.stdout.on('data', (data) => {
            console.log(`${data}`)
        })
        w.stderr.on('data', (data) => {
            console.error(`${data}`)
        })

        w.on('exit', function (code, signal) {
            exec(`cp ./demo/src/index.html ./index.html`)
            resolve()
        })
    })
}

function dev() {
    return new Promise(resolve => {
        return clean()
            .then(() => {
                return pack()
            })
            .then(() => {
                return nvStyles()
            })
            .then(() => {
                return docs()
            })
            .then(() => {
                return demo()
            })
            .then(() => {
                exec(`osascript -e 'display notification "Complete" with title "WEBPACK"'`)
                return resolve()
            })
    })
}

function clean() {
    return new Promise(resolve => {
        exec(`rm -r ./dist`, () => {
            exec(`rm -r ./web_build`, () => {
                exec(`rm -r ./www`, () => {
                    exec(`rm ./demo/demo.js`, () => {
                        exec(`rm -r ./docs`, () => {
                            resolve()
                        })
                    })
                })
            })
        })
    })
}

gulp.task('clean', function (cb) {
    clean().then(cb)
})

gulp.task('docs', function (cb) {
    docs().then(cb)
})

gulp.task('server', function () {
    browserSync.init({
        serveStatic: ['./'],
        port: 5555,
        https: true,
        single: true
    })
})

gulp.task('watch', function () {
    gulp.watch(["./src/**/**/*.*", "./demo/src/*.*"], ['dev']);
})

gulp.task('dev', dev)

gulp.task('build', dev)

gulp.task("default", [
    "watch",
    "server",
    "dev",
], function () {});
