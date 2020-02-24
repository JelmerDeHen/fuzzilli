function main() {
for (let v3 = 0; v3 < 6; v3++) {
}
for (let v7 = 0; v7 < 3; v7++) {
    let v10 = 0;
    while (v10 < 9) {
        const v11 = v10 + 1;
        // v11 = .primitive
        v10 = v11;
    }
}
const v17 = [13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (const v18 in "object") {
    const v19 = ~v17;
    // v19 = .boolean
    const v20 = Object(v19,v18,4294967297);
    // v20 = .object()
    const v22 = {set:Object,get:Object};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v24 = Object.defineProperty(v20,-2676874943,v22);
    // v24 = .undefined
}
const v27 = [13.37,13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v27[1337] = 4294967297;
let v30 = 0;
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
}
%NeverOptimizeFunction(main);
main();
