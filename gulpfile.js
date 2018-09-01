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

const input = path.join(__dirname, `web_build`, `files`, `nv-components.js`)

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









        // const ast = esprima.parse(content, {
        //     tokens: true,
        //     comments:false
        // })
        // var ast = espree.parse(content, {

        //     // attach range information to each node
        //     range: true,

        //     // attach line/column location information to each node
        //     loc: true,

        //     // create a top-level comments array containing all comments
        //     comment: true,

        //     // attach comments to the closest relevant node as leadingComments and trailingComments
        //     attachComment: true,

        //     // create a top-level tokens array containing all tokens
        //     tokens: true,

        //     // Set to 3, 5 (default), 6, 7, 8, 9, or 10 to specify the version of ECMAScript syntax you want to use.
        //     // You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), or 2019 (same as 10) to use the year-based naming.
        //     ecmaVersion: 6,

        //     // specify which type of script you're parsing ("script" or "module")
        //     sourceType: "module",

        //     // specify additional language features
        //     ecmaFeatures: {

        //         // enable JSX parsing
        //         jsx: true,

        //         // enable return in global scope
        //         globalReturn: true,

        //         // enable implied strict mode (if ecmaVersion >= 5)
        //         impliedStrict: true
        //     }
        // })



        // console.log(output.output)
        // fs.writeFileSync(input, `/* beautify preserve:start */\r\n/* beautify ignore:start */\r\n/*jshint ignore:start*/\r\n/*eslint-disable */\r\n${content}\r\n/*eslint-enable */\r\n/*jshint ignore:end*/\r\n/* beautify ignore:end */\r\n/* beautify preserve:end */`)

        // let offset = 0
        // let tokens = esprima.parse(content, {
        //     tokens: true,
        //     range: true
        // }).tokens

        // const convert = (literal) => {
        //     var result = literal.substring(1, literal.length - 1);
        //     result = result.replace(/'/g, '"');
        //     result = result.replace(/\\"/g, '"');
        //     return '\'' + result + '\'';
        // }

        // tokens.forEach((token) => {
        //     let str
        //     if (token.type === 'String' && token.value[0] !== '\'') {
        //         str = convert(token.value);
        //         content = `${content.substring(0, offset + token.range[0])}${str}${content.substring(offset + token.range[1], content.length)}`
        //         offset += (str.length - token.value.length)
        //     }
        // })

        // fs.writeFileSync(input, `/* beautify preserve:start */\r\n/* beautify ignore:start */\r\n/*jshint ignore:start*/\r\n/*eslint-disable */\r\n${beautify(content, {
        // fs.writeFileSync(input, output.output)
        // })}\r\n/*eslint-enable */\r\n/*jshint ignore:end*/\r\n/* beautify ignore:end */\r\n/* beautify preserve:end */`)

        // fs.writeFileSync(input, beautify(output.output, {
        //     editorconfig: true,
        //     indent_size: 2,
        //     wrap_line_length: 100,
        //     indent_char: [" "],
        //     indent_with_tabs: false,
        //     space_in_empty_paren: true,
        //     jslint_happy: true,
        //     preserve_newlines: true,
        //     keep_array_indentation: false,
        //     space_before_conditional: true,
        //     max_preserve_newlines: 10,
        //     brace_style: "collapse",
        //     keep_function_indentation: false,
        //     break_chained_methods: true,
        //     eval_code: false,
        //     unescape_strings: false,
        //     wrap_line_length: 0,
        //     git_happy: true,
        //     end_with_newline: true,
        //     space_around_selector_separator: true
        // }))
        // resolve()
    })
}

function pack() {


    return new Promise(resolve => {
        const child = spawn(`npm`, [`run`, `pack`]);

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

gulp.task("build", function (cb) {
    pack().then(cb)
})

gulp.task("lint", function (cb) {
    lint().then(cb)
})
