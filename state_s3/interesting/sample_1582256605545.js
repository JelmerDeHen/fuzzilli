function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [v2,v4];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {d:13.37,a:-65537,b:-65537,constructor:13.37,__proto__:v2,valueOf:v2,e:v5};
// v6 = .object(ofGroup: Object, withProperties: ["b", "e", "d", "constructor", "__proto__", "a", "valueOf"])
let v7 = 13.37;
function v9(v10,v11) {
    const v12 = v10 in v9;
    // v12 = .boolean
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    const v20 = {set:v9};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    let v21 = v2;
    if (v11) {
        v21[1024] = v11;
    } else {
        v21.__proto__ = 1337;
    }
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
    let v31 = 0;
    for (const v32 in "boolean") {
        let v35 = 0;
        let v38 = 0;
        const v39 = v38 + 1;
        // v39 = .primitive
        v38 = v39;
        for (const v50 of "pvU0UUjoya") {
        }
        const v51 = v35 + 1;
        // v51 = .primitive
        v35 = v51;
    }
    do {
        const v52 = v31 + 1;
        // v52 = .primitive
        v31 = v52;
    } while (v31 < v7);
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v57 = v56;
const v58 = v9(v57);
// v58 = .unknown
const v59 = v9(1024,4.0);
// v59 = .unknown
const v60 = v9(1337);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
