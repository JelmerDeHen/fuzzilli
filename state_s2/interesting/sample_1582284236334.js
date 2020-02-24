function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [1337,1337,v4,Float32Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v9 = {toString:13.37,b:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString"])
let v10 = v7;
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v17 = "undefined" - 1;
// v17 = .primitive
for (const v18 in "undefined") {
    let v21 = 0;
    while (v21 < 10) {
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
    }
}
const v23 = typeof v15;
// v23 = .string
const v25 = v23 === "number";
// v25 = .boolean
const v26 = new Uint8Array(v15);
// v26 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
const v27 = 2 === 2;
// v27 = .boolean
let v28 = 2;
if (v27) {
    const v31 = new Uint8Array(43354);
    // v31 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
    v28 = v31;
} else {
    const v32 = v26.__proto__;
    // v32 = .object()
    v28 = v32;
}
const v33 = [1337,1337,1337,1337,1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v34 = [];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v35 = {constructor:Uint8Array,b:13.37};
// v35 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
const v36 = {b:"undefined",__proto__:Uint8Array,a:Uint8Array,toString:v33,constructor:v34};
// v36 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "b", "toString"])
let v37 = v34;
const v39 = [13.37,13.37,13.37,13.37,13.37];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v43 in "object") {
    const v46 = [1337,Promise];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v47 = v46;
    function v48(v49,v50) {
        let v54 = 0;
        const v59 = v54 + 1;
        // v59 = .primitive
        v54 = v59;
        let v63 = 0;
        const v64 = v39 + 1;
        // v64 = .primitive
        v63 = v64;
        let v71 = 0;
        const v72 = v71 + 1;
        // v72 = .primitive
        v71 = v72;
        const v95 = [13.37,13.37,13.37,13.37,13.37];
        // v95 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v100 = Object();
        // v100 = .object()
        const v101 = "object".length;
        // v101 = .integer
        const v103 = Symbol.species;
        // v103 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v104 = {d:v95,...v71};
        // v104 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
        const v106 = Symbol.isConcatSpreadable;
        // v106 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v9[v106] = v48;
        const v107 = v8.__proto__;
        // v107 = .object()
        const v108 = Object & 0;
        // v108 = .integer
        Promise[v103] = 2;
        const v109 = "number".charAt(0);
        // v109 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        let v112 = 0;
        do {
            const v113 = typeof v50;
            // v113 = .string
            const v115 = v113 === "boolean";
            // v115 = .boolean
            let v118 = 0;
            while (v118 < 7) {
                const v121 = v118 + 1;
                // v121 = .primitive
                v118 = v121;
            }
            const v122 = v112 + 1;
            // v122 = .primitive
            v112 = v122;
        } while (v112 < 7);
    }
    const v124 = [1337];
    // v124 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v125 = v124;
    const v126 = v48(v125);
    // v126 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
