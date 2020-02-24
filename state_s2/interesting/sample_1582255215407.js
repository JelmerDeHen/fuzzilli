function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",-9007199254740992,-9007199254740992];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "valueOf", "c", "toString", "__proto__"])
const v9 = {toString:v4,valueOf:v8,d:1337,constructor:-9007199254740992};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "valueOf", "d"])
let v10 = 1337;
function v12(v13,v14) {
    const v18 = [13.37,13.37,13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v19 = [v18,-1970853828,DataView];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v22 = Object.preventExtensions(v19);
    // v22 = .object()
    let v25 = -2908695906;
    for (const v26 in "boolean") {
        let v29 = 0;
        do {
            let v31 = 0;
            const v32 = v29 + 1;
            // v32 = .primitive
            const v34 = [1337,1337];
            // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v37 = 0;
            const v38 = 0 + 1;
            // v38 = .primitive
            const v41 = [1337,1337,1337,1337];
            // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v42 = v34.shift();
            // v42 = .unknown
            const v44 = Symbol.toPrimitive;
            // v44 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v44[v44] = v41;
            const v45 = 1024 % 13.37;
            // v45 = .number
            let v48 = -256;
            do {
                const v49 = v48 + 1;
                // v49 = .primitive
                v48 = v49;
            } while (v48 < 7);
            const v50 = v29 + 1;
            // v50 = .primitive
            v29 = v50;
        } while (v29 < 8);
    }
    const v51 = v25 + 1;
    // v51 = .primitive
    return "boolean";
}
const v53 = [-9007199254740992];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v54 = v53;
const v55 = v12(v54);
// v55 = .unknown
const v56 = v12();
// v56 = .unknown
const v60 = 2.0 << Array;
// v60 = .integer
const v61 = "pvU0UUjoya".codePointAt(v60);
// v61 = .integer
const v62 = Array(v61);
// v62 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
