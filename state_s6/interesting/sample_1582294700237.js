function main() {
let v2 = 0;
let v5 = 0;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = v5 + 1;
// v10 = .primitive
v5 = v10;
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v13 of v12) {
    function v14(v15,v16) {
        let v21 = 0;
        let v23 = v21;
        while (v23 === v21) {
            const v24 = v23 / 512;
            // v24 = .number
            const v25 = ~v24;
            // v25 = .boolean
            const v30 = [13.37,13.37];
            // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v32 = [1337,1337];
            // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v33 = [v30,13.37,v32,-4294967296];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v34 = {__proto__:v30,valueOf:"number",a:Object,d:v33};
            // v34 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf"], withMethods: ["a"])
            const v35 = v34[1024];
            // v35 = .unknown
            v23 = v25;
        }
        for (let v36 = 0; v36 < 512; v36++) {
        }
    }
    const v38 = [-1073741824];
    // v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v39 = v38;
    const v40 = v14(v39);
    // v40 = .unknown
}
const v41 = v2 + 1;
// v41 = .primitive
v2 = v41;
}
%NeverOptimizeFunction(main);
main();
