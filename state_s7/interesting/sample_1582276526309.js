function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = undefined;
let v10 = undefined;
try {
    let v14 = undefined;
    const v18 = {valueOf:JSON,length:"search"};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
    JSON[v18] = 13.37;
    const v22 = JSON.stringify(JSON,JSON,2153514987);
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v23 = JSON.parse(v22,Uint32Array);
    // v23 = .unknown
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
