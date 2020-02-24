function main() {
function v0(v1,v2) {
    const v6 = {valueOf:JSON,length:"search"};
    // v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v6] = 13.37;
    const v10 = JSON.stringify(JSON,JSON,2153514987);
    // v10 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v11 = JSON.parse(v10,Object);
    // v11 = .unknown
    JSON[v1] = v10;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v16 = v0();
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
