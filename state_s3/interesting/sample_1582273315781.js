function main() {
let v2 = 0;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
let v9 = 0;
const v13 = v2 + 1;
// v13 = .primitive
v2 = v13;
function v14(v15,v16) {
    let v20 = 0;
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    const v25 = v20 + 1;
    // v25 = .primitive
    let v26 = v25;
    function v27(v28,v29) {
        v27.prototype = 1337;
        return v27;
    }
    const v31 = v27();
    // v31 = .unknown
    v31.toString = v26;
    v31.toString = v15;
    let v34 = 0;
    const v35 = v34 + 1;
    // v35 = .primitive
    v34 = v35;
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = v37;
const v39 = v14(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
