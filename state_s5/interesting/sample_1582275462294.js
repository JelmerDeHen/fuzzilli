function main() {
let v3 = 0;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v10 = [13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [v12];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {valueOf:Int32Array,c:v12,__proto__:v13,b:v10};
// v14 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "c"])
const v16 = new Map(v14);
// v16 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
for (const v17 of v16) {
}
const v18 = v3 + 1;
// v18 = .primitive
v3 = v18;
function v19(v20,v21) {
    let v28 = undefined;
    try {
        const v31 = [13.37,13.37];
        // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v32 = v31[1024];
        // v32 = .unknown
        const v33 = {has:gc,construct:v32,defineProperty:v32,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v32,isExtensible:v32,call:v32,set:gc,getOwnPropertyDescriptor:gc};
        // v33 = .object(ofGroup: Object, withProperties: ["call", "defineProperty", "__proto__", "construct", "preventExtensions", "isExtensible"], withMethods: ["deleteProperty", "set", "has", "setPrototypeOf", "getOwnPropertyDescriptor"])
        const v35 = new Proxy(v31,v33);
        // v35 = .unknown
        delete v35[558351006];
    } catch(v36) {
    }
    let v37 = 0;
    const v38 = v37 + 1;
    // v38 = .primitive
    v37 = v38;
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v45 = v44;
const v46 = v19(v45);
// v46 = .unknown
const v47 = v19();
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
