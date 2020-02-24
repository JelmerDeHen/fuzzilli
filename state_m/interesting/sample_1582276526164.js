function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
let v10 = undefined;
try {
    let v14 = undefined;
    const v18 = {valueOf:JSON,length:"search"};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
    JSON[v18] = 13.37;
    const v22 = JSON.stringify(JSON,JSON,2153514987);
    // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    const v23 = JSON.parse(v22,Uint32Array);
    // v23 = .unknown
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
