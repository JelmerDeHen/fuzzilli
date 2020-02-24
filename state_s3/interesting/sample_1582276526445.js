function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v10 = undefined;
try {
    let v14 = undefined;
    const v18 = {valueOf:JSON,length:"search"};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
    JSON[v18] = 13.37;
    const v22 = JSON.stringify(JSON,JSON,2153514987);
    // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v23 = JSON.parse(v22,Uint32Array);
    // v23 = .unknown
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
