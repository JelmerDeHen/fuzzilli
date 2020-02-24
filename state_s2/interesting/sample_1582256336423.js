function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = [v6,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = {__proto__:13.37,a:v8,constructor:"object",b:Promise,toString:v8,length:v8};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "toString", "constructor", "length", "b"])
const v10 = {__proto__:v8,a:v6,valueOf:13.37,length:v6,toString:Promise};
// v10 = .object(ofGroup: Object, withProperties: ["length", "a", "toString", "valueOf", "__proto__"])
let v11 = 13.37;
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v23 = 0;
        while (v23 < 6) {
            const v26 = new Uint8ClampedArray(39670);
            // v26 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
            const v27 = v16 + 1;
            // v27 = .primitive
            v23 = v27;
        }
        let v28 = 0;
        do {
            for (const v30 of "pvU0UUjoya") {
            }
            const v31 = v28 + 1;
            // v31 = .primitive
            v28 = v31;
        } while (v28 < 8);
    }
    const v34 = [1000000.0];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v36 = [-3401763702,-3401763702,-3401763702];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v37 = {a:-3401763702,toString:1000000.0,c:v34,__proto__:v36,valueOf:"a",constructor:v34};
    // v37 = .object(ofGroup: Object, withProperties: ["a", "toString", "constructor", "__proto__", "valueOf", "c"])
    return v16;
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v41 = v40;
const v42 = v14(v41);
// v42 = .unknown
const v43 = v14(1024,v11);
// v43 = .unknown
const v44 = gc();
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
