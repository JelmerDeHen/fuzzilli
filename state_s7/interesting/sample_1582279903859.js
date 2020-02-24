function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = new Int16Array(19873);
// v12 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
let v14 = 3122233220;
v14 = Promise;
const v16 = {ownKeys:v2,deleteProperty:Promise,getOwnPropertyDescriptor:v14};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "getOwnPropertyDescriptor", "deleteProperty", "ownKeys"])
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
