function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [1337,1337,v4,Float32Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = new Uint8Array(13.37);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
const v12 = new Uint32Array(v11);
// v12 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
const v13 = {toString:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v14 = {toString:13.37,b:1337};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b"])
let v15 = v7;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
function v24(v25,v26) {
    let v29 = -2908695906;
    for (const v30 in "boolean") {
        let v34 = 0;
        do {
            let v36 = 0;
            const v37 = v36 + 1;
            // v37 = .primitive
            const v39 = [-2908695906,1337];
            // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v42 = 0;
            const v45 = [1337,1337,1337,1337];
            // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v47 = v39.shift();
            // v47 = .unknown
            const v49 = Symbol.toPrimitive;
            // v49 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v49[v49] = v45;
            const v50 = 1024 % 13.37;
            // v50 = .number
            let v53 = 0;
            const v54 = v53 + 1;
            // v54 = .primitive
            v53 = v54;
            const v55 = v34 + 1;
            // v55 = .primitive
            const v58 = v37.__proto__;
            // v58 = .unknown
            const v59 = "8zPbosN*N8".includes(v58,v39);
            // v59 = .boolean
            let v63 = 0;
            const v65 = "N0Xx92zvHQ".__proto__;
            // v65 = .object()
            let v66 = 0;
            const v67 = v66 + 1;
            // v67 = .primitive
            const v69 = "replace".__proto__;
            // v69 = .object()
            const v70 = v69.split;
            // v70 = .unknown
            const v71 = v34[v69];
            // v71 = .unknown
            v34 = v55;
        } while (v34 < 8);
    }
    return v24;
}
const v72 = v24();
// v72 = .unknown
}
%NeverOptimizeFunction(main);
main();
