function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
let v7 = 0;
v2 = v3;
let v9 = this;
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
