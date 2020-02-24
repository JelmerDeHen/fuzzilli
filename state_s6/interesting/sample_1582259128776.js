function main() {
function v0(v1,v2) {
    for (const v4 in "prototype") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
        } while (v7 < 8);
    }
    const v14 = [];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v15 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
    const v16 = RegExp.bind(v15);
    // v16 = .unknown
    const v17 = new Int16Array(19873);
    // v17 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    for (const v18 of v17) {
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
const v23 = v0();
// v23 = .unknown
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
}
%NeverOptimizeFunction(main);
main();
