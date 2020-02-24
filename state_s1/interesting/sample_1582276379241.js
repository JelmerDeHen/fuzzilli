function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = Float64Array <= 10;
// v6 = .boolean
const v7 = {set:Symbol,deleteProperty:Symbol,has:Symbol,getPrototypeOf:Symbol,apply:Symbol,setPrototypeOf:Symbol,get:Symbol,defineProperty:Symbol,isExtensible:Symbol};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "setPrototypeOf", "has", "deleteProperty", "get", "defineProperty", "apply", "isExtensible", "set"])
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
