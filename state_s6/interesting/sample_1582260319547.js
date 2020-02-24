function main() {
function v1(v2,v3) {
    const v6 = [13.37,13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v8 = [1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v9 = [v8,v8,v8];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v10 = {d:"undefined",e:v6,__proto__:v8,c:v8,toString:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "c", "e"])
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
    // v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v47 = {b:v46,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v47 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "e", "length", "valueOf"])
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    let v56 = 0;
    const v57 = v56 + 1;
    // v57 = .primitive
    v56 = v57;
    const v59 = {...v47,...0,...v56};
    // v59 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "e", "a", "valueOf"])
    v59.valueOf = "string";
}
const v61 = [1337];
// v61 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v62 = v61;
const v63 = v1(v62);
// v63 = .unknown
const v64 = v1(1337,13.37);
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();
