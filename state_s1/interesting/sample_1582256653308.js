function main() {
const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = v4[1024];
// v5 = .unknown
const v6 = {has:gc,construct:v5,defineProperty:v5,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v5,isExtensible:v5,call:v5,set:gc,getOwnPropertyDescriptor:gc};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "preventExtensions", "construct", "call", "defineProperty"], withMethods: ["getOwnPropertyDescriptor", "set", "setPrototypeOf", "deleteProperty", "has"])
const v8 = new Proxy(v4,v6);
// v8 = .unknown
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
for (const v14 in "object") {
    const v16 = [13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v17 = v16[1024];
    // v17 = .unknown
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    let v25 = 0;
    v1.__proto__ = v8;
    for (const v33 in "boolean") {
        let v36 = 0;
        const v43 = v36 + 1;
        // v43 = .primitive
        v36 = v43;
    }
}
}
%NeverOptimizeFunction(main);
main();
