function main() {
function v1(v2,v3) {
    const v6 = [13.37,13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v8 = [1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v9 = [v8,v8,v8];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v10 = {d:"undefined",e:v6,__proto__:v8,c:v8,toString:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "c", "d"])
    let v16 = 0;
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            for (const v34 of "name") {
            }
            const v35 = v20 + 1;
            // v35 = .primitive
            v20 = v35;
        } while (v20 < 8);
    }
    const v36 = v16 + 1;
    // v36 = .primitive
    v16 = v36;
    const v46 = [1337];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v47 = {b:v46,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v47 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "valueOf", "a", "length"])
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    let v56 = 0;
    const v57 = v56 + 1;
    // v57 = .primitive
    v56 = v57;
    const v59 = {...v47,...0,...v56};
    // v59 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "length", "b", "e"])
    v59.valueOf = "string";
}
const v61 = [1337];
// v61 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v62 = v61;
const v63 = v1(v62);
// v63 = .unknown
const v64 = v1(1337,13.37);
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();