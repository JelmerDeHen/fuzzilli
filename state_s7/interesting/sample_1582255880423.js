function main() {
let v4 = 0;
do {
    const v5 = v4 + 1;
    // v5 = .primitive
    function v6(v7,v8) {
        let v12 = 0;
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
    const v15 = [1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v16 = v15;
    const v17 = v6(v16);
    // v17 = .unknown
    v4 = v5;
} while (v4 < 7);
const v18 = 897087.1028171855 === -1970853828;
// v18 = .boolean
const v21 = [13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = 0;
do {
    const v25 = gc();
    // v25 = .undefined
    const v26 = v24 + 1;
    // v26 = .primitive
    v24 = v26;
} while (v24 < 10);
const v27 = v21[1024];
// v27 = .unknown
let v30 = 0;
do {
    const v31 = v27 - 1;
    // v31 = .primitive
    const v32 = v30 + 1;
    // v32 = .primitive
    const v37 = [13.37,13.37,13.37];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v39 = [1337];
    // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v40 = [3156875969,3156875969,1337,DataView];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v41 = {constructor:v40,c:v40,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v41 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "constructor", "e", "a"])
    const v42 = {e:DataView,constructor:1337,valueOf:1337,d:v40};
    // v42 = .object(ofGroup: Object, withProperties: ["d", "e", "valueOf", "__proto__", "constructor"])
    const v47 = [3156875969,1337,1337,DataView];
    // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v48 = {constructor:v47,c:v47,e:v40,d:1337,a:3156875969,__proto__:"boolean"};
    // v48 = .object(ofGroup: Object, withProperties: ["c", "d", "e", "a", "constructor", "__proto__"])
    const v50 = [13.37,13.37,13.37];
    // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v52 = [1337];
    // v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v53 = v52;
    with (v50) {
        const v55 = v53[1261695261];
        // v55 = .unknown
    }
    v53[-1346405887] = v47;
    v53[0] = v52;
    v30 = v32;
} while (v30 < 3);
}
%NeverOptimizeFunction(main);
main();
