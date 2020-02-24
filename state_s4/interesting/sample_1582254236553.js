function main() {
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
for (const v47 in "object") {
    let v65 = 0;
    const v66 = v65 + 1;
    // v66 = .primitive
    v65 = v66;
    const v117 = {};
    // v117 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v123 = {};
    // v123 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v124 = Array(2815038421);
    // v124 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    v123.__proto__ = v117;
    const v135 = gc();
    // v135 = .undefined
    function v140(v141,v142,v143) {
    }
}
}
%NeverOptimizeFunction(main);
main();
