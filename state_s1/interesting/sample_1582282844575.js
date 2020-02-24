function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {e:1337,valueOf:WeakMap,a:v2,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "e"])
let v6 = v4;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v9 = v8;
function v10(v11,v12) {
    const v14 = {set:RegExp};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v16 = Object.defineProperty(v6,"a",v14);
    // v16 = .undefined
    const v18 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v12,set:RegExp,construct:v10,setPrototypeOf:v12,has:v10};
    // v18 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "defineProperty"], withMethods: ["deleteProperty", "set", "getPrototypeOf", "construct", "has", "apply"])
    const v20 = new Proxy(v6,v18);
    // v20 = .unknown
    const v21 = Object.freeze(v20);
    // v21 = .undefined
}
let v22 = v9;
const v23 = v10(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
