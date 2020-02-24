function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [JSON,-2147483647,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {valueOf:v4,d:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf"])
const v9 = {valueOf:v8,c:v4,b:1337,toString:v7,d:v7,constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["d", "constructor", "b", "__proto__", "c", "valueOf", "toString"])
let v10 = "undefined";
const v12 = -Infinity;
// v12 = .float
const v13 = [v12,v12,v12,v12];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v14(v15,v16) {
    function v19(v20,v21) {
        for (const v23 in "boolean") {
            let v26 = -128;
            while (v26 < 5) {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            }
        }
        return v20;
    }
    const v30 = gc(...arguments);
    // v30 = .undefined
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v33 = v32;
    const v34 = v19(v33);
    // v34 = .unknown
    const v35 = gc(...arguments);
    // v35 = .undefined
    const v36 = arguments + 1;
    // v36 = .primitive
    let v38 = 0;
    while (v38 < 1337) {
        const v39 = v38 + 1;
        // v39 = .primitive
        v38 = v39;
    }
}
const v40 = v13.sort(v14);
// v40 = .undefined
}
%NeverOptimizeFunction(main);
main();
