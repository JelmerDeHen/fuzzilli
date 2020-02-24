function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v4(v5,v6) {
    for (const v8 in "prototype") {
        let v11 = 0;
        do {
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
        } while (v11 < 8);
    }
    const v15 = new Int16Array(19873);
    // v15 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v16 = v2.__proto__;
    // v16 = .object()
    const v18 = Symbol.search;
    // v18 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    v16[v18] = 1;
    for (const v19 of v15) {
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v4(v22);
// v23 = .unknown
const v24 = v4();
// v24 = .unknown
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
const v29 = v4(v1);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
