function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [v5,v5,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:Boolean,a:1337,e:"wJ8gyNw*1r",d:v3,c:v5,length:v5};
// v7 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "__proto__", "c", "a"], withMethods: ["valueOf"])
const v8 = {b:v7,c:13.37,d:v7,length:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "b", "c", "d", "__proto__"])
let v9 = 13.37;
let v12 = 0;
do {
    const v13 = v12 + 1;
    // v13 = .primitive
    const v16 = [1337,1337,1337,1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v17(v18,v19,v20,v21) {
        'use strict'
        try {
            v21[3] = v21;
        } catch(v22) {
            const v29 = [1.7976931348623157e+308];
            // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v31 = [255,255,255];
            // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v32 = {a:255,toString:isFinite,c:v29,__proto__:v31,valueOf:"object",constructor:"gM8oAednYn"};
            // v32 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "c", "valueOf"], withMethods: ["toString"])
            let v36 = RegExp;
            let v37 = v36;
            const v40 = new Proxy(v37,Object);
            // v40 = .unknown
            const v41 = Object.freeze(v40);
            // v41 = .undefined
            const v42 = {toString:v29,valueOf:v32,d:255,constructor:536870912};
            // v42 = .object(ofGroup: Object, withProperties: ["d", "constructor", "toString", "valueOf", "__proto__"])
            const v43 = RegExp.apply(v42,RegExp);
            // v43 = .unknown
            const v44 = "2IdSaX90v.".replace(v43,"1t/yEFbOw4");
            // v44 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        }
        return v16;
    }
    const v45 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:1337,has:v17};
    // v45 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["call", "has", "ownKeys", "preventExtensions", "get", "construct", "isExtensible", "deleteProperty", "getPrototypeOf", "set"])
    const v47 = new Proxy(v16,v45);
    // v47 = .unknown
    v47[1] = "MIN_VALUE";
    v12 = v13;
} while (v12 < 10);
}
%NeverOptimizeFunction(main);
main();
