function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v9 = 0;
do {
    const v12 = [13.37,13.37,13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v15 = [v12,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v17 = [13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v18 = {length:1337,toString:v15,__proto__:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__"])
    let v19 = 1337;
    let v22 = "qHZ9xy0D+R";
    const v23 = v19[v22];
    // v23 = .unknown
    const v24 = new Float32Array(v18);
    // v24 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
    const v25 = v24.sort(v23);
    // v25 = .undefined
    let v29 = 0;
    const v30 = [];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v32 = {__proto__:13.37};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v35 = new Int16Array(6992);
    // v35 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    const v36 = v30.__proto__;
    // v36 = .object()
    v36.__proto__ = v35;
    const v41 = v29 + 1;
    // v41 = .primitive
    v29 = v41;
    const v42 = v9 + 1;
    // v42 = .primitive
    v9 = v42;
} while (v9 < 8);
}
%NeverOptimizeFunction(main);
main();
