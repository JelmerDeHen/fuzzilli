function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [v2,3673825185,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        const v15 = 13.37 << v10;
        // v15 = .integer
        let v16 = 0;
        const v17 = v16 != v15;
        // v17 = .boolean
        const v20 = v13 + 1;
        // v20 = .primitive
        v13 = v20;
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
const v25 = [-1825918256];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v26 = {isExtensible:v23,getOwnPropertyDescriptor:v23,apply:v23,setPrototypeOf:v23,set:v6,deleteProperty:v6};
// v26 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "apply", "setPrototypeOf", "isExtensible", "__proto__"], withMethods: ["deleteProperty", "set"])
const v28 = new Proxy(v4,v26);
// v28 = .unknown
const v29 = {c:v28,d:v25};
// v29 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__"])
let v32 = 0;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
let v38 = v29;
const v39 = ["symbol",v38,v38];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v32 = v39;
const v40 = JSON.stringify(v32);
// v40 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
