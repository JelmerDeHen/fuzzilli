function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v12(v13,v14) {
    let v16 = this;
    let v17 = v16;
    const v20 = new Proxy(v17,Object);
    // v20 = .unknown
    const v21 = Object.seal(v20);
    // v21 = .object()
    function v23(v24,v25,v26,v27,v28) {
        'use strict'
    }
    const v29 = v23.toLocaleString();
    // v29 = .unknown
    const v31 = [];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v32 = {a:v31};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    const v33 = {__proto__:eval,constructor:v32,length:v31};
    // v33 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["__proto__"])
    let v36 = 0;
    const v37 = v33.__proto__(v29,v36,19873,Symbol,eval);
    // v37 = .unknown
}
const v38 = v10.some(v12,v11);
// v38 = .boolean
const v39 = v12();
// v39 = .unknown
const v40 = v8 + 1;
// v40 = .primitive
v8 = v40;
}
%NeverOptimizeFunction(main);
main();
