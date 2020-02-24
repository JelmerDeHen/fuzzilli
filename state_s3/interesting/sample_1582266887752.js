function main() {
function v0(v1,v2) {
    const v8 = [1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v9 = {valueOf:JSON,length:"search"};
    // v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v9] = 13.37;
    const v13 = JSON.stringify(JSON,JSON,2153514987);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v25 = v24;
const v26 = v0(v25);
// v26 = .unknown
const v27 = v0();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
