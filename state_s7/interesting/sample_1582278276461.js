function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {e:1337,valueOf:WeakMap,a:v2,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "a"])
let v6 = v4;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v9 = v8;
function v10(v11,v12) {
    const v14 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v12,set:RegExp,construct:v10,setPrototypeOf:v12,has:v10};
    // v14 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "defineProperty", "__proto__"], withMethods: ["apply", "construct", "set", "getPrototypeOf", "deleteProperty", "has"])
    const v16 = new Proxy(v6,v14);
    // v16 = .unknown
    const v17 = Object.freeze(v16);
    // v17 = .undefined
}
let v18 = v9;
const v19 = v10(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
