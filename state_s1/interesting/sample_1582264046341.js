function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [v2,v2,v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v2,__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"])
const v6 = Symbol.toPrimitive;
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v7 = v4[v6];
// v7 = .unknown
let v10 = 0;
do {
    for (const v11 in v2) {
        const v13 = {set:v7};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
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
