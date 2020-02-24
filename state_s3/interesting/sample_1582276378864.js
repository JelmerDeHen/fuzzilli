function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = Float64Array <= 10;
// v6 = .boolean
const v7 = {set:Symbol,deleteProperty:Symbol,has:Symbol,getPrototypeOf:Symbol,apply:Symbol,setPrototypeOf:Symbol,get:Symbol,defineProperty:Symbol,isExtensible:Symbol};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "isExtensible", "setPrototypeOf", "deleteProperty", "defineProperty", "set", "get", "getPrototypeOf"])
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
