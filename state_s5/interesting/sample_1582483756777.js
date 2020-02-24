function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:v7,a:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a"])
const v9 = {b:4294967296,a:4294967296,length:4294967296,valueOf:isFinite,__proto__:"SBIgGOipEm"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "b"], withMethods: ["valueOf"])
let v10 = v9;
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v16(v17,v18) {
    for (const v20 in "boolean") {
        this.valueOf = 13.37;
        const v24 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "apply", "construct", "defineProperty", "get", "isExtensible", "set", "preventExtensions", "ownKeys", "getPrototypeOf", "deleteProperty"])
        for (const v26 in v24) {
            let v29 = 0;
            do {
                const v30 = {isExtensible:v14,b:256,toString:0,constructor:13.37,...v18,...valueOf,...v18,...v29};
                // v30 = .object(ofGroup: Object, withProperties: ["isExtensible", "b", "__proto__", "constructor", "toString"])
                const v31 = v29 + 1;
                // v31 = .primitive
                v29 = v31;
            } while (v29 < 256);
        }
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v34 = v33;
const v35 = v16(v34);
// v35 = .unknown
let v40 = 0;
const v42 = new Uint16Array(1337);
// v42 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
let v49 = v46;
const v50 = Math.asin(v49,7);
// v50 = .number
const v53 = "function".replace("function","function");
// v53 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v54 = RegExp;
const v56 = new String(v53);
// v56 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v57 = v54.apply(v53,v56);
// v57 = .unknown
const v58 = Math.cos(v50);
// v58 = .number
v45 = v46;
v42.constructor = Int32Array;
const v59 = v42.slice(Int32Array,100);
// v59 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["reduce", "lastIndexOf", "includes", "keys", "subarray", "some", "join", "slice", "filter", "copyWithin", "findIndex", "find", "map", "reduceRight", "every", "sort", "entries", "set", "reverse", "forEach", "values", "fill", "indexOf"])
let v62 = 0;
}
%NeverOptimizeFunction(main);
main();
