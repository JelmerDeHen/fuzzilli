function main() {
const v2 = {b:RegExp,__proto__:"length",constructor:RegExp};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor", "b"])
function v3(v4,v5) {
    const v10 = [3156875969,3156875969,1337,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v11 = {ownKeys:v4,getPrototypeOf:RegExp,get:RegExp,has:v3};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["getPrototypeOf", "has", "get"])
    const v13 = new Proxy(v4,v11);
    // v13 = .unknown
    let v20 = 0;
    let v23 = 0;
    const v24 = "boolean".slice(1);
    // v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
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
// v62 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v63 = v62;
const v64 = v3(v63);
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();
