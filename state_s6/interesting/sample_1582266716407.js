function main() {
const v2 = {b:RegExp,__proto__:"length",constructor:RegExp};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["b", "constructor"])
function v3(v4,v5) {
    const v10 = [3156875969,3156875969,1337,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v11 = {ownKeys:v4,getPrototypeOf:RegExp,get:RegExp,has:v3};
    // v11 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["getPrototypeOf", "get", "has"])
    const v13 = new Proxy(v4,v11);
    // v13 = .unknown
    let v20 = 0;
    let v23 = 0;
    const v24 = "boolean".slice(1);
    // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    try {
        let v27 = 0;
        let v30 = 0;
        let v33 = 0;
        const v34 = v24.lastIndexOf(v10,v13);
        // v34 = .integer
        let v37 = 0;
        let v40 = 0;
        let v43 = 0;
    } catch(v47) {
    }
    const v58 = v23 + 1;
    // v58 = .primitive
    v23 = v58;
    const v59 = v20 + 1;
    // v59 = .primitive
    v20 = v59;
}
const v62 = [1337];
// v62 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v63 = v62;
const v64 = v3(v63);
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();