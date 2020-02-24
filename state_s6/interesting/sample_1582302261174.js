function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {length:512,b:v4,toString:512,d:v2,e:v2,a:13.37,__proto__:512};
// v5 = .object(ofGroup: Object, withProperties: ["d", "e", "b", "a", "length", "__proto__", "toString"])
function v6(v7,v8) {
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    const v17 = [13.37,13.37,13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v17,__proto__:v6};
    // v18 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "b"], withMethods: ["__proto__"])
    const v19 = [v18];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v20 = new Map(v19);
    // v20 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "delete", "keys", "set", "entries", "forEach", "values", "clear", "get"])
    const v21 = v20.delete(v8);
    // v21 = .boolean
}
let v22 = v5;
const v23 = v6(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
