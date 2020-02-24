function main() {
let v3 = this;
let v4 = v3;
const v7 = new Proxy(v4,Object);
// v7 = .unknown
const v8 = Object.freeze(v7);
// v8 = .undefined
function v10(v11,v12,v13,v14,v15) {
    'use strict'
}
const v16 = v10.toLocaleString();
// v16 = .unknown
const v18 = [];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = {a:v18};
// v19 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v20 = {__proto__:eval,constructor:v19,length:v18};
// v20 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["__proto__"])
try {
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
    const v30 = v20.__proto__(v16,v25,19873,Symbol,eval);
    // v30 = .unknown
    let v34 = 0;
    function v36(v37,v38) {
        const v40 = {__proto__:536870912};
        // v40 = .object(ofGroup: Object, withProperties: ["__proto__"])
    }
    let v46 = 0;
} catch(v47) {
}
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
}
%NeverOptimizeFunction(main);
main();
