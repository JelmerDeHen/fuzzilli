function main() {
function v0(v1,v2) {
    for (const v4 in "undefined") {
        let v7 = 0;
        const v8 = v7 + 1;
        // v8 = .primitive
        v7 = v8;
        const v12 = [13.37,13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v13 = {valueOf:"undefined",c:v12,length:"undefined",d:3366735776,__proto__:v12};
        // v13 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "length", "c"])
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                for (let v23 = 0; v23 < 4; v23++) {
                }
                v18 = v19;
                const v24 = v12[128];
                // v24 = .unknown
            } while (v18 < 7);
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
