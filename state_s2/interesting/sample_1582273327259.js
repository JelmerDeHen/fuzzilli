function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v4(v5,v6) {
    const v10 = [1337,1337,1337,1337];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = {constructor:"OQrlgqwgVv",b:1337,valueOf:1337,a:v10,e:9007199254740992};
    // v11 = .object(ofGroup: Object, withProperties: ["e", "a", "constructor", "__proto__", "b", "valueOf"])
    const v14 = [13.37,13.37,v11];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = [1337,1337,1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v17 = [v14,v16];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v18 = {d:13.37,a:-65537,b:-65537,constructor:13.37,__proto__:v14,valueOf:v14,e:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["constructor", "e", "a", "b", "__proto__", "d", "valueOf"])
    const v19 = v14.pop();
    // v19 = .unknown
}
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v4();
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
