function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
let v10 = undefined;
try {
    let v14 = undefined;
    const v18 = {valueOf:JSON,length:"search"};
    // v18 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
    JSON[v18] = 13.37;
    const v22 = JSON.stringify(JSON,JSON,2153514987);
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    const v23 = JSON.parse(v22,Uint32Array);
    // v23 = .unknown
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
