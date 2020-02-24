function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {set:Symbol,deleteProperty:Symbol,has:Symbol,getPrototypeOf:Symbol,apply:Symbol,setPrototypeOf:Symbol,get:Symbol,defineProperty:Symbol,isExtensible:Symbol};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "apply", "getPrototypeOf", "deleteProperty", "isExtensible", "set", "has", "defineProperty", "setPrototypeOf"])
v2.toString = Symbol;
const v6 = new Proxy(v2,v4);
// v6 = .unknown
try {
    const v7 = Symbol.for(v6);
    // v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
} catch(v8) {
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
}
}
%NeverOptimizeFunction(main);
main();
