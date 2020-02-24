function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {c:10,constructor:10,valueOf:v3,__proto__:10,toString:"YjXjEe2.bY"};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "c", "valueOf", "constructor", "__proto__"])
let v6 = 0;
let v9 = 0;
function v10(v11,v12) {
    let v17 = undefined;
    try {
        const v19 = [371375.4036167406,371375.4036167406,371375.4036167406];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v23 = new Int16Array(19873);
        // v23 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        const v25 = [13.37,13.37];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v26 = v25[1024];
        // v26 = .unknown
        const v27 = {has:gc,construct:v26,defineProperty:v26,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v26,isExtensible:v26,call:v26,set:gc,getOwnPropertyDescriptor:gc};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "construct", "preventExtensions", "defineProperty", "call"], withMethods: ["set", "setPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor", "has"])
        const v29 = new Proxy(v25,v27);
        // v29 = .unknown
        for (const v31 in "object") {
            v19.__proto__ = v29;
        }
    } catch(v32) {
    }
}
const v33 = [v3];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v34 = v33;
const v35 = v10(v34);
// v35 = .unknown
const v36 = v10(v6,0);
// v36 = .unknown
const v37 = {preventExtensions:v35,call:v10,getOwnPropertyDescriptor:v36,isExtensible:v10,ownKeys:v35,has:v10,get:v10,deleteProperty:v35,apply:v35,setPrototypeOf:v35,set:v36,construct:v36};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "deleteProperty", "set", "getOwnPropertyDescriptor", "setPrototypeOf", "apply", "construct", "ownKeys"], withMethods: ["call", "isExtensible", "has", "get"])
const v39 = new Proxy(v33,v37);
// v39 = .unknown
const v40 = v34.concat(v39,v9,v4,v37,Proxy);
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
}
%NeverOptimizeFunction(main);
main();
