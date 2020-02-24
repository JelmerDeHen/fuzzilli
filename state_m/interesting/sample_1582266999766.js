function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [v3,v1,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    const v11 = {valueOf:JSON,length:"search"};
    // v11 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v11] = 13.37;
    const v15 = JSON.stringify(JSON,JSON,2153514987);
    // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    const v16 = JSON.parse(v15,Object);
    // v16 = .unknown
    const v17 = v4[1337];
    // v17 = .unknown
    JSON.b = "search";
}
const v21 = v5(1337);
// v21 = .unknown
const v22 = v5();
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
