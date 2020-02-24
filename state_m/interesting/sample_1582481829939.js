function main() {
let v8 = 0;
const v9 = {a:1337,valueOf:13.37,e:isNaN};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf"], withMethods: ["e"])
function v11(v12,v13,v14,v15,...v16) {
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v19 = v18;
    const v20 = {b:1337,e:v19,length:v9,__proto__:v11,d:v14,...v11};
    // v20 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "d", "b"], withMethods: ["__proto__"])
}
const v21 = v11(1337);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
