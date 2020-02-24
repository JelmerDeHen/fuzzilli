function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {b:v5,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["c", "b", "e", "__proto__", "constructor"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = ["undefined",13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v20 = v16.reduce(gc);
// v20 = .unknown
const v22 = [1337,v11];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v23 = {a:eval,length:1337};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v24 = {b:v22,a:v22,__proto__:v22};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b"])
let v25 = eval;
const v27 = [13.37];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v29 = [1337,1337,1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v33 = Object();
// v33 = .object()
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v37 = v36;
let v39 = undefined;
let v43 = 0;
for (const v44 in "boolean") {
    v33.length = v44;
    const v47 = eval(v44);
    // v47 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    "boolean".__proto__ = v47;
    let v50 = 0;
    do {
        const v51 = v37 + 1;
        // v51 = .primitive
        const v52 = v50 + 1;
        // v52 = .primitive
        v50 = v52;
    } while (v50 < 3);
    const v54 = Symbol.iterator;
    // v54 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    "boolean"[v54] = "boolean";
    const v55 = {get:gc};
    // v55 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v57 = Object.defineProperty(v29,9007199254740992,v55);
    // v57 = .undefined
    v43 = 0;
    with (Object) {
        const v61 = {constructor:"symbol",length:9007199254740993};
        // v61 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
        delete v61.length;
        function v62(v63,v64) {
            const v67 = new Int16Array(19873);
            // v67 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            const v71 = [13.37,13.37,13.37,13.37,13.37];
            // v71 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v72 = {length:"N0Xx92zvHQ"};
            // v72 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v73 = v71.filter(Number,v72);
            // v73 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            function v80(v81,v82,v83,v84,v85) {
                v39 = 9007199254740992;
            }
            let v89 = 0;
            const v90 = v89 + 1;
            // v90 = .primitive
            v89 = v90;
            v39 = v80;
        }
        const v92 = [1337];
        // v92 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v93 = v92;
        const v94 = v62(v93);
        // v94 = .unknown
        const v95 = v62(1337,v94);
        // v95 = .unknown
        const v96 = RegExp(v95);
        // v96 = .object()
    }
    const v97 = gc();
    // v97 = .undefined
    let v99 = 0;
    let v102 = 0;
    do {
        const v103 = v102 + 1;
        // v103 = .primitive
        v102 = v103;
    } while (v102 < 7);
    let v105 = 0;
    const v107 = {get:13.37,b:v27,a:0,length:1,__proto__:"boolean"};
    // v107 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "a", "length", "get"])
    const v108 = v99 + 1;
    // v108 = .primitive
    v99 = v108;
}
v39 = Math;
}
%NeverOptimizeFunction(main);
main();
