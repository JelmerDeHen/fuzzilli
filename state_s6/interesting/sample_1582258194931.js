function main() {
function v2(v3,v4) {
    function v5(v6,v7) {
        const v8 = {defineProperty:v2,construct:v2,apply:v2,set:v4,getPrototypeOf:v6,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v3,get:Promise,deleteProperty:v4,call:Promise,isExtensible:v2,preventExtensions:Promise};
        // v8 = .object(ofGroup: Object, withProperties: ["call", "getOwnPropertyDescriptor", "deleteProperty", "__proto__", "set", "setPrototypeOf", "getPrototypeOf", "get", "ownKeys", "preventExtensions"], withMethods: ["defineProperty", "apply", "construct", "isExtensible"])
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
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v17 = v16;
    const v18 = v5(v17);
    // v18 = .unknown
}
const v23 = v2("boolean",1337);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
