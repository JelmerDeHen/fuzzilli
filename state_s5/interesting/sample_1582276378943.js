function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = Float64Array <= 10;
// v6 = .boolean
const v7 = {set:Symbol,deleteProperty:Symbol,has:Symbol,getPrototypeOf:Symbol,apply:Symbol,setPrototypeOf:Symbol,get:Symbol,defineProperty:Symbol,isExtensible:Symbol};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "get", "setPrototypeOf", "deleteProperty", "defineProperty", "getPrototypeOf", "apply", "set"])
const v9 = new Proxy(v3,v7);
// v9 = .unknown
try {
    const v10 = Symbol.for(v9);
    // v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
} catch(v11) {
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
}
}
%NeverOptimizeFunction(main);
main();
