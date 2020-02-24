function main() {
let v3 = 1337;
const v5 = {c:"function"};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v9 = v8;
let v11 = undefined;
let v15 = 0;
function v16(v17,v18,v19,v20,v21) {
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
do {
    const v24 = v15 + 1;
    // v24 = .primitive
    v15 = v24;
    const v26 = [13.37];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v34 = 2.2250738585072014e-308 / 3890419937;
    // v34 = .number
    let v35 = -1024;
    while (v35 < 5) {
        const v39 = new Int32Array(65536);
        // v39 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
        const v40 = {set:v16,get:gc};
        // v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v42 = Object.defineProperty(v26,"__proto__",v40);
        // v42 = .undefined
        const v43 = v35 + 1;
        // v43 = .primitive
        v35 = v43;
    }
    const v44 = [13.37,13.37,13.37,13.37,13.37];
    // v44 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v45 = [v44,v44,v44];
    // v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v46 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v44,__proto__:v45};
    // v46 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
    const v47 = [v46];
    // v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v48 = new WeakMap(v47);
    // v48 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "set", "has"])
    v26.__proto__ = v48;
} while (v15 < 8);
return RegExp;
}
%NeverOptimizeFunction(main);
main();
