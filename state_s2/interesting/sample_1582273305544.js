function main() {
function v0(v1,v2) {
    const v6 = {valueOf:JSON,length:"search"};
    // v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v6] = 13.37;
    const v10 = JSON.stringify(JSON,JSON,2153514987);
    // v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    const v11 = JSON.parse(v10,Object);
    // v11 = .unknown
    JSON[v1] = v10;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v16 = v0();
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
