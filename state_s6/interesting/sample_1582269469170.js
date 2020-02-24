function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (let v5 = 0; v5 < 3; v5++) {
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    const v17 = {valueOf:JSON,length:"search"};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
    JSON[v17] = 13.37;
    const v20 = JSON.stringify(JSON,JSON,2153514987);
    // v20 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v21 = JSON.parse(v20,v1);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
