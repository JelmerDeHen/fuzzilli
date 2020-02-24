function main() {
let v8 = 0;
const v9 = {a:1337,valueOf:13.37,e:isNaN};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a"], withMethods: ["e"])
function v11(v12,v13,v14,v15,...v16) {
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v19 = v18;
    const v20 = {b:1337,e:v19,length:v9,__proto__:v11,d:v14,...v11};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "b", "e"], withMethods: ["__proto__"])
}
const v21 = v11(1337);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
