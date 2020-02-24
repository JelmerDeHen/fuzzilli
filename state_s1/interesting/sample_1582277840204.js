function main() {
const v3 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "d", "a", "length"])
let v4 = 3122233220;
v4 = Promise;
const v6 = {ownKeys:Promise,deleteProperty:Promise,getOwnPropertyDescriptor:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "getOwnPropertyDescriptor", "deleteProperty"])
const v8 = new Proxy(v4,v6);
// v8 = .unknown
const v9 = v3[3122233220];
// v9 = .unknown
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = v11;
let v14 = undefined;
let v20 = 0;
let v23 = 0;
try {
    let v26 = 0;
    for (const v27 in v8) {
    }
} catch(v34) {
}
const v38 = v23 + 1;
// v38 = .primitive
v23 = v38;
const v39 = v20 + 1;
// v39 = .primitive
v20 = v39;
}
%NeverOptimizeFunction(main);
main();
