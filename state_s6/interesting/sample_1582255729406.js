function main() {
let v1 = eval;
let v9 = 0;
let v12 = 0;
let v15 = 0;
let v18 = 0;
const v24 = [13.37,13.37,13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v25 = v24;
try {
    const v37 = {isExtensible:Object,ownKeys:Array,call:v1,defineProperty:Object,get:Object};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "get", "call", "defineProperty"])
    const v39 = Proxy(1337,v37);
    // v39 = .unknown
} catch(v40) {
}
}
%NeverOptimizeFunction(main);
main();
