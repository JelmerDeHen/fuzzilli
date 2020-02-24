function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,"prototype",v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {e:v6,a:1337,length:13.37,toString:-2180848285};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "e", "length", "__proto__", "a"])
const v9 = v8.e;
// v9 = .unknown
const v10 = {d:v6,toString:v4};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString"])
let v11 = v6;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
let v21 = 0;
const v22 = [1337,1337,1337,1337,1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v25 = [13.37,13.37,13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v26(v27,v28) {
    function v31(v32,v33) {
        let v37 = -128;
        while (v37 < 5) {
            let v40 = 0;
            const v41 = v40 + 1;
            // v41 = .primitive
            v40 = v41;
            arguments.length = v33;
            const v42 = v37 + 1;
            // v42 = .primitive
            v37 = v42;
        }
        return "dch8*NZu3p";
    }
    const v43 = gc(...arguments);
    // v43 = .undefined
    let v46 = 0;
    const v47 = v31(Array);
    // v47 = .unknown
    const v49 = Symbol.species;
    // v49 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v22[v49] = v43;
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    let v56 = 0;
    const v57 = v56 + 1;
    // v57 = .primitive
    v56 = v57;
    let v59 = 0;
    while (v59 < 1337) {
        const v60 = v59 + 1;
        // v60 = .primitive
        v59 = v60;
    }
    return v7;
}
const v61 = v25.sort(v26);
// v61 = .undefined
let v64 = 0;
const v65 = v64 + 1;
// v65 = .primitive
v64 = v65;
}
%NeverOptimizeFunction(main);
main();
