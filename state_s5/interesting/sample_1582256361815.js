function main() {
let v1 = "function";
function v2(v3,v4) {
    const v9 = [13.37,13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v11 = [1337,v9];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = {b:v11,a:v11,__proto__:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b"])
    let v13 = eval;
    function v14(v15,v16) {
        try {
            v11.toString = v13;
        } catch(v17) {
        }
    }
    for (let v21 = 0; v21 < 100; v21++) {
        const v22 = v14();
        // v22 = .unknown
    }
    let v30 = 0;
    let v33 = 0;
    let v36 = 0;
    const v37 = v36 + 1;
    // v37 = .primitive
    v36 = v37;
    let v43 = 0;
    const v47 = v33 + 1;
    // v47 = .primitive
    v33 = v47;
    const v48 = v30 + 1;
    // v48 = .primitive
    v30 = v48;
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v52 = v51;
const v53 = v2(v52);
// v53 = .unknown
const v57 = v2(v1,v1);
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
