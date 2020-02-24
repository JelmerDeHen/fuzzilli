function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v9 = {get:Array,ownKeys:Array,isExtensible:Array,construct:Boolean,preventExtensions:Array,getPrototypeOf:Array};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "isExtensible", "construct", "ownKeys", "getPrototypeOf"])
    const v11 = Proxy(1337,v9);
    // v11 = .unknown
} catch(v12) {
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v21 = Array(2815038421);
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();
