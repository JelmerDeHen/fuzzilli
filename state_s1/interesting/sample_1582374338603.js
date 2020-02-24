function main() {
let v2 = arguments;
v2.constructor = 13.37;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v6 = {get:v2};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v8 = Object.defineProperty(v4,536870912,v6);
    // v8 = .undefined
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
