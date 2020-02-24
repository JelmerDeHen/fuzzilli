function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (let v5 = 0; v5 < 100; v5++) {
}
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v12 = 0;
do {
    const v13 = v12 + 1;
    // v13 = .primitive
    function v18(v19,v20) {
    }
    const v21 = {length:"N0Xx92zvHQ"};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v22 = v18 >= Number;
    // v22 = .boolean
    const v23 = {get:Number,set:Number};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    Number.__proto__ = v21;
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
    const v30 = gc();
    // v30 = .undefined
    v12 = v13;
} while (v12 < 3);
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
}
%NeverOptimizeFunction(main);
main();
