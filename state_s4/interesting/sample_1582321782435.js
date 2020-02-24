function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = ["+/ZmL+xjy3",v4,v6];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {b:v4,valueOf:v6,a:Infinity,d:1337,length:1337,constructor:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "length", "valueOf", "a", "constructor", "__proto__"])
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v11 = v6;
const v15 = {e:1337};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v18 = [-2637407539,-2637407539,-2637407539,-2637407539,-2637407539];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v19(v20,v21,v22,v23) {
    'use strict'
    let v25 = 13.37;
    try {
        const v27 = [v23,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v30 = 0;
        do {
            const v31 = Math[1076779170];
            // v31 = .unknown
            const v32 = v30 + 1;
            // v32 = .primitive
            v30 = v32;
        } while (v30 < 5);
        const v34 = new Float32Array(19873);
        // v34 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
        v23[3] = v23;
    } catch(v35) {
        const v37 = [-2008211595];
        // v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v38 = {valueOf:v37};
        // v38 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
        const v41 = new ArrayBuffer(1337);
        // v41 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v43 = v41.slice(v15,1337);
        // v43 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    }
    return v25;
}
const v44 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:-1,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v44 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["construct", "isExtensible", "call", "deleteProperty", "ownKeys", "getPrototypeOf", "has", "setPrototypeOf", "set", "preventExtensions"])
const v46 = new Proxy(v18,v44);
// v46 = .unknown
v46[1] = "toString";
}
%NeverOptimizeFunction(main);
main();
