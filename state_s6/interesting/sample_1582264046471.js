function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [v2,v2,v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v2,__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length"])
const v6 = Symbol.toPrimitive;
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v7 = v4[v6];
// v7 = .unknown
let v10 = 0;
do {
    for (const v11 in v2) {
        const v13 = {set:v7};
        // v13 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
        const v15 = Object.defineProperty(v2,2550708109,v13);
        // v15 = .undefined
    }
    const v16 = v10 + 1;
    // v16 = .primitive
    v10 = v16;
} while (v10 < 6);
}
%NeverOptimizeFunction(main);
main();
