function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = Float64Array <= 10;
// v6 = .boolean
const v7 = {set:Symbol,deleteProperty:Symbol,has:Symbol,getPrototypeOf:Symbol,apply:Symbol,setPrototypeOf:Symbol,get:Symbol,defineProperty:Symbol,isExtensible:Symbol};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getPrototypeOf", "get", "defineProperty", "isExtensible", "deleteProperty", "setPrototypeOf", "apply", "set"])
const v9 = new Proxy(v3,v7);
// v9 = .unknown
try {
    const v10 = Symbol.for(v9);
    // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
} catch(v11) {
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
}
}
%NeverOptimizeFunction(main);
main();
