function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [Map,1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:v6,e:2190462590,length:v6,b:v6,d:"icwMk+nkjD",toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c", "b", "e", "toString", "d"])
const v9 = {a:13.37,b:"icwMk+nkjD",constructor:2190462590,__proto__:13.37,toString:v6,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "__proto__", "a", "toString"])
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v20 = [13.37,Reflect,983068.8825596711];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v23 = 255;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v25 = new Uint16Array(v20);
// v25 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
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
