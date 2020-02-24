function main() {
const v3 = {d:13.37,constructor:"__proto__"};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor"])
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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v18 = v17;
const v19 = v4(v18);
// v19 = .unknown
const v20 = v4();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
