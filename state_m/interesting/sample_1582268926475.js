function main() {
const v2 = {length:13.37,a:gc,constructor:gc};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a", "constructor"])
function v3(v4,v5) {
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v13 = new Int16Array(19873);
    // v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    return gc;
}
const v14 = v3();
// v14 = .unknown
const v15 = v14();
// v15 = .unknown
const v16 = {defineProperty:v15,get:v15,getOwnPropertyDescriptor:gc,apply:v14,set:v3,preventExtensions:v15,setPrototypeOf:gc,construct:gc};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "defineProperty", "get", "apply"], withMethods: ["set", "construct", "setPrototypeOf", "getOwnPropertyDescriptor"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
for (const v19 in v18) {
}
}
%NeverOptimizeFunction(main);
main();
