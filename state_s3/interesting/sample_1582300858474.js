function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5) {
    const v8 = [13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v10 = {a:1337,e:v8,valueOf:13.37};
    // v10 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "e", "__proto__"])
    let v11 = 4294967297;
    let v14 = this;
    let v15 = v14;
    this["MIN_VALUE"] = v10;
    v14[4294967297] = v11;
    const v18 = new Proxy(v15,Object);
    // v18 = .unknown
    const v19 = Object.freeze(v18);
    // v19 = .undefined
}
const v20 = v2.forEach(v3,"eeeRbEqfAO");
// v20 = .undefined
}
%NeverOptimizeFunction(main);
main();
