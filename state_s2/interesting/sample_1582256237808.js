function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "e", "d"])
let v5 = v4;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v11 = RegExp;
function v12(v13,v14) {
    const v15 = v13 in v12;
    // v15 = .boolean
    const v24 = [3156875969,3156875969,1337,DataView];
    // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v25 = {constructor:v24,c:v24,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v25 = .object(ofGroup: Object, withProperties: ["c", "e", "__proto__", "a", "d", "constructor"])
    const v27 = v5[v13];
    // v27 = .unknown
    let v30 = 0;
    for (const v31 in "boolean") {
        let v34 = 0;
        do {
            let v37 = 0;
            do {
                const v38 = v37 + 1;
                // v38 = .primitive
                v37 = v38;
            } while (v37 < 7);
            let v44 = 0;
            const v48 = v34 + 1;
            // v48 = .primitive
            v34 = v48;
        } while (v34 < 8);
    }
    const v49 = v30 + 1;
    // v49 = .primitive
    v30 = v49;
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v53 = v52;
const v54 = v12(v53);
// v54 = .unknown
const v55 = v11(v54);
// v55 = .object()
const v56 = v10.forEach(v12,"eeeRbEqfAO");
// v56 = .undefined
function v57(v58,v59) {
    let v65 = 0;
    let v68 = 0;
    for (let v75 = 0; v75 < 100; v75++) {
    }
    const v76 = v68 + 1;
    // v76 = .primitive
    v68 = v76;
    const v77 = v65 + 1;
    // v77 = .primitive
    v65 = v77;
    return v55;
}
const v79 = [1337];
// v79 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v80 = v79;
const v81 = v57(v80);
// v81 = .unknown
const v82 = v57(1024,4.0);
// v82 = .unknown
const v83 = v57(v82,v80);
// v83 = .unknown
}
%NeverOptimizeFunction(main);
main();
