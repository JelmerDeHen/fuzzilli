function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "length", "e"])
function v7(v8,v9) {
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
    let v21 = 0;
    let v24 = 0;
    const v28 = v24 + 1;
    // v28 = .primitive
    v24 = v28;
    let v31 = 0;
    const v35 = DataView + 1;
    // v35 = .primitive
    v21 = v35;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v39 = v38;
const v40 = v7(v39);
// v40 = .unknown
const v41 = {get:v7,ownKeys:v40,deleteProperty:v7,construct:v40,defineProperty:v40,set:v40,call:v7,setPrototypeOf:v7};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "ownKeys", "construct", "set"], withMethods: ["deleteProperty", "setPrototypeOf", "call", "get"])
let v45 = 0;
const v46 = Reflect.ownKeys(v4);
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v47 = v45 + 1;
// v47 = .primitive
v45 = v47;
}
%NeverOptimizeFunction(main);
main();
