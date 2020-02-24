function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {e:gc,a:v2,__proto__:gc,c:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c"], withMethods: ["__proto__", "e"])
function v4(v5,v6) {
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    const v16 = eval(1337);
    // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    v12 = v13;
    for (let v17 = 0; v17 < 100; v17++) {
        function v18(v19,v20) {
        }
    }
    const v22 = Symbol.replace;
    // v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v23 = v22 === v22;
    // v23 = .boolean
}
let v24 = v3;
const v25 = v4(v24);
// v25 = .unknown
const v26 = v4();
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
