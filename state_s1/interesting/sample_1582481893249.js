function main() {
let v8 = 0;
const v9 = {a:1337,valueOf:13.37,e:isNaN};
// v9 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__"], withMethods: ["e"])
function v11(v12,v13,v14,v15,...v16) {
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v19 = v18;
    const v20 = {b:1337,e:v19,length:v9,__proto__:v11,d:v14,...v11};
    // v20 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "d", "length"], withMethods: ["__proto__"])
}
const v21 = v11(1337);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
