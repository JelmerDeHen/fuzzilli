function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:v7,c:13.37,__proto__:v6,e:v4,a:isNaN,d:v4,toString:"buffer"};
// v8 = .object(ofGroup: Object, withProperties: ["e", "constructor", "toString", "c", "__proto__", "d"], withMethods: ["a"])
const v9 = v6.__proto__;
// v9 = .object()
const v10 = -65536 & -65536;
// v10 = .integer
with ("buffer") {
    toString = v10;
    delete "buffer".length;
}
const v11 = {length:v9,e:v8};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e"])
let v12 = v4;
const v15 = new Float64Array(Float64Array);
// v15 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v16 = v15;
function v18(v19,v20,v21,v22,v23) {
    'use strict'
}
const v25 = v18.toLocaleString();
// v25 = .unknown
const v26 = eval(v25);
// v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v28 = {};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v29(v30,v31) {
    for (const v33 in "SH.5whpOuu") {
        let v36 = 0;
        let v38 = "byteOffset";
        const v42 = Math.min(3581391932,1,undefined,v38);
        // v42 = .unknown
        do {
            const v44 = "symbol".replace("symbol","symbol");
            // v44 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            const v45 = v28[v30];
            // v45 = .unknown
            const v46 = v36 + 1;
            // v46 = .primitive
            v36 = v46;
        } while (v36 < 8);
        const v48 = eval(v28);
        // v48 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v51 = v50;
const v52 = v29(v51);
// v52 = .unknown
const v56 = Object();
// v56 = .object()
const v58 = new Proxy(v16,Object);
// v58 = .unknown
for (const v59 in v58) {
}
}
%NeverOptimizeFunction(main);
main();
