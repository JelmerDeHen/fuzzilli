function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:String,length:v4,e:2952336965,valueOf:2952336965,d:2952336965,b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "length", "__proto__", "b"], withMethods: ["__proto__"])
const v9 = {b:v7,a:v7,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b"])
let v10 = 1337;
let v15 = 0;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v20 = v15 + 1;
// v20 = .primitive
v15 = v20;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
const v29 = [v4];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v30(v31,v32) {
    const v39 = new Uint8Array(19873);
    // v39 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
    const v43 = [1337,1337];
    // v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v44 = {b:13.37,d:1607264097,e:1607264097,constructor:v43,valueOf:WeakSet};
    // v44 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "d", "e", "constructor"])
    for (const v45 in v44) {
        for (const v46 of v39) {
        }
    }
    return v30;
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v49 = v48;
const v50 = v30(v49);
// v50 = .unknown
const v51 = v30(-274804284,v29);
// v51 = .unknown
v4[65536] = v29;
const v52 = v30(v10,v28);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
