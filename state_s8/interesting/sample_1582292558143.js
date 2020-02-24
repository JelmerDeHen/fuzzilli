function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
try {
    function v7(v8,v9,v10,v11,v12) {
        'use strict'
    }
    const v14 = v7.toLocaleString();
    // v14 = .unknown
    const v15 = eval(v14);
    // v15 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    let v16 = 0;
    function v18(v19,v20) {
        const v22 = {__proto__:536870912};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"])
    }
    let v25 = 0;
} catch(v26) {
}
}
%NeverOptimizeFunction(main);
main();
