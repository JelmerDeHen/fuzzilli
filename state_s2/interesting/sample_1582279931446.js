function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = new Int16Array(19873);
// v12 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
let v14 = 3122233220;
v14 = Promise;
const v16 = {ownKeys:v2,deleteProperty:Promise,getOwnPropertyDescriptor:v14};
// v16 = .object(ofGroup: Object, withProperties: ["deleteProperty", "ownKeys", "getOwnPropertyDescriptor", "__proto__"])
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
