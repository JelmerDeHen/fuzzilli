function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = new Int16Array(19873);
// v12 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
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
