function main() {
function v0(v1,v2) {
    const v6 = {valueOf:JSON,length:"search"};
    // v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v6] = 13.37;
    const v10 = JSON.stringify(JSON,JSON,2153514987);
    // v10 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    const v11 = JSON.parse(v10,Object);
    // v11 = .unknown
    JSON[v1] = v10;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v16 = v0();
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
