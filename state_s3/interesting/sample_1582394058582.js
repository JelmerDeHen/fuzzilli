function main() {
const v3 = {d:13.37,constructor:"__proto__"};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d"])
function v4(v5,v6) {
    let v10 = -65535;
    while (v10 < 5) {
        const v11 = v3 === 0;
        // v11 = .boolean
        const v12 = v10 + 1;
        // v12 = .primitive
        const v13 = v11 << v12;
        // v13 = .integer
        const v14 = -65535 + v13;
        // v14 = .primitive
        v10 = v12;
        let v15 = -4277543386;
        delete v14[v15];
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = {__proto__:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v23 = 0;
const v26 = eval(1337);
// v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
let v30 = v17;
const v31 = v4(v30);
// v31 = .unknown
const v32 = v4();
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
