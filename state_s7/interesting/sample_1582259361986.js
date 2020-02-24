function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = 0;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {length:isNaN,e:1337,b:"EXkcpBKht7",a:v4,d:13.37,constructor:-2695425644};
// v10 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "d", "constructor", "a"], withMethods: ["length"])
const v11 = {length:"EXkcpBKht7",d:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d"])
let v12 = "EXkcpBKht7";
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = v14.__proto__;
// v15 = .object()
function v16(v17,v18) {
    for (const v20 in "boolean") {
        let v23 = 0;
        const v30 = [13.37];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        for (let v34 = 0; v34 < 100; v34++) {
        }
        const v35 = v30.map(gc);
        // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
    return v17;
}
const v41 = new Float64Array(57874);
// v41 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
const v42 = v41.indexOf(8,0);
// v42 = .integer
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v45 = v44;
const v46 = v16(v45);
// v46 = .unknown
let v47 = v4;
if (v46) {
    v12.__proto__ = v16;
    v47 = v14;
} else {
    const v48 = {construct:isNaN,isExtensible:isNaN,getOwnPropertyDescriptor:v16,deleteProperty:v16,set:v16,setPrototypeOf:v16,apply:v16,preventExtensions:v46,call:isNaN,defineProperty:v16,getPrototypeOf:v16};
    // v48 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"], withMethods: ["call", "getPrototypeOf", "set", "apply", "defineProperty", "isExtensible", "construct", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf"])
    const v50 = Proxy(v45,v48);
    // v50 = .unknown
    v47 = v14;
}
v45 = v41;
const v51 = isNaN(v45);
// v51 = .boolean
}
%NeverOptimizeFunction(main);
main();
