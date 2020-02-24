function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
function v8(v9,v10) {
    let v13 = -2908695906;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            const v22 = [1337,1337];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v25 = 0;
            const v28 = [1337,1337,1337,1337];
            // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v29 = v22.shift();
            // v29 = .unknown
            const v31 = Symbol.toPrimitive;
            // v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v31[v31] = v28;
            const v32 = 1024 % 13.37;
            // v32 = .number
            let v35 = 0;
            const v36 = v35 + 1;
            // v36 = .primitive
            v35 = v36;
            const v37 = v17 + 1;
            // v37 = .primitive
            const v40 = "8zPbosN*N8".__proto__;
            // v40 = .object()
            const v41 = "8zPbosN*N8".includes(v40,3);
            // v41 = .boolean
            let v45 = 0;
            const v47 = "N0Xx92zvHQ".__proto__;
            // v47 = .object()
            let v48 = 0;
            const v49 = v48 + 1;
            // v49 = .primitive
            const v51 = "replace".__proto__;
            // v51 = .object()
            const v52 = v51.split;
            // v52 = .unknown
            const v53 = (-2908695906)[v51];
            // v53 = .unknown
            v17 = v37;
        } while (v17 < 8);
    }
}
const v54 = v8();
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
