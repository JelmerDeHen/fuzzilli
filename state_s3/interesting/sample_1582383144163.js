function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [2653075825];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:Proxy,__proto__:v6,d:v7,a:"byteLength",length:Proxy};
// v8 = .object(ofGroup: Object, withProperties: ["a", "d", "__proto__", "toString", "length"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v9;
const v12 = [1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = new Float32Array(v12);
// v15 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
v15.constructor = Uint8ClampedArray;
const v17 = v15.slice(v15,1337);
// v17 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "buffer", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["values", "some", "slice", "fill", "forEach", "lastIndexOf", "copyWithin", "entries", "keys", "reduce", "sort", "find", "reverse", "includes", "filter", "reduceRight", "indexOf", "set", "findIndex", "subarray", "map", "join", "every"])
let v21 = 0;
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
const v28 = [13.37,13.37,13.37,13.37];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v29(v30,v31) {
    v9[v21] = 50310;
    const v36 = gc(v28,...arguments);
    // v36 = .undefined
    const v37 = 1337 == v15;
    // v37 = .boolean
    v10 = v6;
    const v38 = new Uint32Array(50310);
    // v38 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
    v9.__proto__ = v31;
    const v40 = {deleteProperty:v30,preventExtensions:v30,set:v31,get:v30,apply:v31,getPrototypeOf:v31};
    // v40 = .object(ofGroup: Object, withProperties: ["apply", "preventExtensions", "deleteProperty", "__proto__", "get", "set", "getPrototypeOf"])
    const v42 = new Proxy(Proxy,v40);
    // v42 = .unknown
    function v43(v44,v45) {
        for (const v47 in "boolean") {
            let v50 = -128;
            while (v50 < 5) {
                const v51 = v50 + 1;
                // v51 = .primitive
                v50 = v51;
            }
        }
    }
    const v54 = gc(...arguments);
    // v54 = .undefined
    const v56 = [1337];
    // v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v57 = v56;
    const v58 = v43(v57);
    // v58 = .unknown
    const v59 = gc(...arguments);
    // v59 = .undefined
    const v60 = arguments + 1;
    // v60 = .primitive
    let v62 = 0;
    while (v62 < 1337) {
        const v63 = v62 + 1;
        // v63 = .primitive
        v62 = v63;
    }
}
const v64 = v28.sort(v29);
// v64 = .undefined
}
%NeverOptimizeFunction(main);
main();
