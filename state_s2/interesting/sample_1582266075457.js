function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = v2;
let v5 = undefined;
function v9(v10,v11) {
    try {
        const v13 = {set:v11};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
        const v14 = v13.set;
        // v14 = .unknown
        const v15 = {set:v14,setPrototypeOf:v10,deleteProperty:v14,construct:v3,getOwnPropertyDescriptor:v10,getPrototypeOf:v14,get:v9,has:v14,isExtensible:String};
        // v15 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "getPrototypeOf", "set", "__proto__", "has", "construct", "getOwnPropertyDescriptor", "deleteProperty"], withMethods: ["isExtensible", "get"])
        const v17 = new Proxy(v13,v15);
        // v17 = .unknown
        const v19 = {get:v17,set:v10};
        // v19 = .object(ofGroup: Object, withProperties: ["set", "get", "__proto__"])
        const v21 = Object.defineProperty(v17,"__proto__",v19);
        // v21 = .undefined
    } catch(v22) {
    }
}
const v24 = v9(1024,4.0);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
