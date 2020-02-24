function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
let v7 = 0;
v2 = v3;
let v9 = this;
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            v9.__proto__ = v21;
        } while (v20 < 8);
    }
}
const v22 = v12.forEach(v13,"eeeRbEqfAO");
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
