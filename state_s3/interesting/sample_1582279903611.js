function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = new Int16Array(19873);
// v12 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
let v14 = 3122233220;
v14 = Promise;
const v16 = {ownKeys:v2,deleteProperty:Promise,getOwnPropertyDescriptor:v14};
// v16 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "__proto__", "ownKeys", "deleteProperty"])
const v18 = new Proxy(v14,v16);
// v18 = .unknown
try {
    for (const v19 in v18) {
    }
} catch(v20) {
}
let v24 = 0;
let v27 = 0;
let v29 = 1337;
}
%NeverOptimizeFunction(main);
main();
