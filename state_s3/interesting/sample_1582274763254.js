function main() {
"object"[512] = -9007199254740991;
const v2 = "object" % -9007199254740991;
// v2 = .number
const v3 = "object".slice(-9007199254740991);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [13.37,Object,v8,v6];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {a:"object",b:v8,__proto__:13.37,d:v6};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b", "a"])
const v11 = {length:v8,a:v9,valueOf:13.37,d:"object",constructor:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "valueOf", "d", "length"])
let v12 = Object;
delete v8[v6];
function v14(v15,v16,v17) {
    const v18 = v16.caller;
    // v18 = .unknown
    return v16;
}
v12 = v2;
let v20 = 0;
const v24 = new Set("asyncIterator");
// v24 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["entries", "has", "values", "add", "delete", "forEach", "keys", "clear"])
const v25 = ["symbol",...v24,"asyncIterator"];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v20 = v25;
const v26 = JSON.stringify(v20);
// v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v28 = JSON.parse(v26,0);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
