function main() {
function v0(v1,v2) {
    const v6 = {valueOf:JSON,length:"search"};
    // v6 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
    JSON[v6] = 13.37;
    const v10 = JSON.stringify(JSON,JSON,2153514987);
    // v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v11 = JSON.parse(v10,Object);
    // v11 = .unknown
    JSON[v1] = v10;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v16 = v0();
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
