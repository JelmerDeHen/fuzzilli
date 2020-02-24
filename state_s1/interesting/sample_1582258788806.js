function main() {
function v1(v2,v3) {
    const v5 = {has:v2,call:v1,deleteProperty:isFinite,setPrototypeOf:v2,ownKeys:isFinite,get:v2,construct:v2,isExtensible:v3,preventExtensions:isFinite,apply:v2};
    // v5 = .object(ofGroup: Object, withProperties: ["isExtensible", "apply", "get", "construct", "has", "__proto__", "setPrototypeOf"], withMethods: ["ownKeys", "deleteProperty", "preventExtensions", "call"])
    const v6 = v5.preventExtensions(3156875969);
    // v6 = .unknown
    function v7(v8,v9,v10) {
        const v11 = {get:v10};
        // v11 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
        return v6;
    }
    for (let v15 = 0; v15 < 100; v15++) {
        const v16 = v7(v6);
        // v16 = .unknown
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v19 = v18;
const v20 = v1(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
