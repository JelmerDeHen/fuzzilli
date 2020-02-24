function main() {
function v0(v1,v2) {
    const v8 = [1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v9 = {valueOf:JSON,length:"search"};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
    JSON[v9] = 13.37;
    const v13 = JSON.stringify(JSON,JSON,2153514987);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v14 = JSON.parse(v13,Object);
    // v14 = .unknown
    let v17 = 0;
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    const v22 = v17 + 1;
    // v22 = .primitive
    v17 = v22;
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v25 = v24;
const v26 = v0(v25);
// v26 = .unknown
const v27 = v0();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
