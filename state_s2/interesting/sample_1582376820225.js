function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6,v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:v7,b:13.37,length:v7,toString:v6,constructor:Set};
// v8 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "toString", "constructor", "b"])
const v9 = {length:v8,b:1337,e:Set};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "length"])
v4.length = v6;
const v10 = v4.__proto__;
// v10 = .object()
const v11 = v9[-2027845694];
// v11 = .unknown
let v12 = 4114666531;
function v15(v16,v17) {
    let v21 = 0;
    function v22(v23,v24,v25,v26,v27) {
    }
    const v28 = v21 + 1;
    // v28 = .primitive
    v21 = v28;
    const v30 = [13.37];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v33 = -1024;
    while (v33 < 5) {
        const v35 = {set:v22,get:gc};
        // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
        const v37 = Object.defineProperty(v30,"__proto__",v35);
        // v37 = .undefined
        const v38 = v33 + 1;
        // v38 = .primitive
        v33 = v38;
    }
    const v39 = v30.__proto__;
    // v39 = .object()
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v42 = v41;
const v43 = v15(v42);
// v43 = .unknown
const v44 = v15(v43,1337);
// v44 = .unknown
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
const v50 = new Uint16Array(1337);
// v50 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
v50.constructor = Float32Array;
const v54 = v50.slice(-2538985663,8);
// v54 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "buffer", "length", "constructor", "byteLength", "__proto__"], withMethods: ["subarray", "reduceRight", "indexOf", "find", "sort", "slice", "filter", "reduce", "join", "includes", "keys", "map", "entries", "set", "some", "reverse", "findIndex", "lastIndexOf", "values", "every", "copyWithin", "fill", "forEach"])
}
%NeverOptimizeFunction(main);
main();
