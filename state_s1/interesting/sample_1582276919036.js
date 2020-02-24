function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {a:"caller",valueOf:v4,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "c", "b", "constructor"])
const v8 = [v6];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v9 = v8;
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = v11;
function v13(v14,v15) {
    const v17 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v15,set:RegExp,construct:v13,setPrototypeOf:v15,has:v13};
    // v17 = .object(ofGroup: Object, withProperties: ["defineProperty", "setPrototypeOf", "__proto__"], withMethods: ["deleteProperty", "construct", "set", "apply", "getPrototypeOf", "has"])
    const v19 = new Proxy(v9,v17);
    // v19 = .unknown
    const v20 = Object.freeze(v19);
    // v20 = .undefined
    return Object;
}
let v21 = v12;
const v22 = v13(v21);
// v22 = .unknown
const v23 = v13("zuZMR1J0+t",v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
