function main() {
let v2 = arguments;
v2.constructor = 13.37;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
