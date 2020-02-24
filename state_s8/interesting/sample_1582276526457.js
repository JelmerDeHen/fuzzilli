function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
let v10 = undefined;
try {
    let v14 = undefined;
    const v18 = {valueOf:JSON,length:"search"};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
    JSON[v18] = 13.37;
    const v22 = JSON.stringify(JSON,JSON,2153514987);
    // v22 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v23 = JSON.parse(v22,Uint32Array);
    // v23 = .unknown
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
