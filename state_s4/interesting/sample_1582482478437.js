function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = new Float32Array(1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
v8.constructor = Uint16Array;
const v11 = v8.slice(1024,-65536);
// v11 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["subarray", "slice", "findIndex", "reverse", "sort", "includes", "some", "values", "indexOf", "every", "fill", "map", "set", "copyWithin", "keys", "forEach", "reduce", "entries", "reduceRight", "lastIndexOf", "find", "join", "filter"])
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = [isFinite,1337,v4];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = {a:4294967296,valueOf:v14,constructor:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "a", "valueOf", "__proto__"])
const v16 = {a:v14,toString:v15,d:isFinite,b:v13,__proto__:1337};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "a"], withMethods: ["d"])
let v17 = 1024;
const v19 = [13.37,13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v20 = {};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v22(v23,v24) {
    for (const v26 in "boolean") {
        this.valueOf = 13.37;
        const v30 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "defineProperty", "isExtensible", "construct", "ownKeys", "getOwnPropertyDescriptor", "deleteProperty", "apply", "getPrototypeOf", "get", "preventExtensions"])
        for (const v32 in v30) {
            let v35 = 0;
            do {
                const v36 = {isExtensible:v20,b:256,toString:0,constructor:13.37,...v24,...valueOf,...v24,...v35};
                // v36 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "isExtensible", "b", "toString"])
                const v37 = v35 + 1;
                // v37 = .primitive
                v35 = v37;
            } while (v35 < 256);
        }
    }
    return 13.37;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v40 = v39;
const v41 = v22(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
