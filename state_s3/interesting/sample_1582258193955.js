function main() {
function v2(v3,v4) {
    function v5(v6,v7) {
        const v8 = {defineProperty:v2,construct:v2,apply:v2,set:v4,getPrototypeOf:v6,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v3,get:Promise,deleteProperty:v4,call:Promise,isExtensible:v2,preventExtensions:Promise};
        // v8 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "getOwnPropertyDescriptor", "preventExtensions", "getPrototypeOf", "set", "get", "ownKeys", "__proto__", "call", "deleteProperty"], withMethods: ["isExtensible", "apply", "construct", "defineProperty"])
        const v10 = new Proxy(v5,v8);
        // v10 = .unknown
        with (v10) {
            d = v4;
        }
        let v13 = 0;
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v17 = v16;
    const v18 = v5(v17);
    // v18 = .unknown
}
const v23 = v2("boolean",1337);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
