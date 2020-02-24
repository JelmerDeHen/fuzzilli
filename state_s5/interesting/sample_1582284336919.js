function main() {
function v0(v1,v2) {
    const v6 = {valueOf:JSON,length:"search"};
    // v6 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
    JSON[v6] = -5.0;
    const v10 = JSON.stringify(JSON,JSON,1513747027);
    // v10 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    const v11 = JSON.parse(v10,Object);
    // v11 = .unknown
    JSON[v1] = v10;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v16 = v0();
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
