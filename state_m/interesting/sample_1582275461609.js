function main() {
let v3 = 0;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v10 = [13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = [v12];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = {valueOf:Int32Array,c:v12,__proto__:v13,b:v10};
// v14 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "c"])
const v16 = new Map(v14);
// v16 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["forEach", "entries", "clear", "set", "keys", "delete", "get", "values", "has"])
for (const v17 of v16) {
}
const v18 = v3 + 1;
// v18 = .primitive
v3 = v18;
function v19(v20,v21) {
    let v28 = undefined;
    try {
        const v31 = [13.37,13.37];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v32 = v31[1024];
        // v32 = .unknown
        const v33 = {has:gc,construct:v32,defineProperty:v32,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v32,isExtensible:v32,call:v32,set:gc,getOwnPropertyDescriptor:gc};
        // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "call", "construct", "preventExtensions", "defineProperty"], withMethods: ["has", "getOwnPropertyDescriptor", "set", "deleteProperty", "setPrototypeOf"])
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
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v45 = v44;
const v46 = v19(v45);
// v46 = .unknown
const v47 = v19();
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
