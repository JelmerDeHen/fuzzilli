function main() {
let v2 = arguments;
v2.constructor = 13.37;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
