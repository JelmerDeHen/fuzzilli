function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [Map,1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:v6,e:2190462590,length:v6,b:v6,d:"icwMk+nkjD",toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "b", "e", "c", "length", "d", "__proto__"])
const v9 = {a:13.37,b:"icwMk+nkjD",constructor:2190462590,__proto__:13.37,toString:v6,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "a", "constructor", "toString", "d"])
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v20 = [13.37,Reflect,983068.8825596711];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = 255;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v25 = new Uint16Array(v20);
// v25 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
let v26 = 1337;
try {
    for (const v27 of v9) {
    }
} catch(v28) {
    v28.__proto__ = v6;
    v26 = v28;
}
try {
    const v30 = {set:v26};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
    const v32 = Object.defineProperty(v25,0,v30);
    // v32 = .undefined
} catch(v33) {
}
}
%NeverOptimizeFunction(main);
main();
