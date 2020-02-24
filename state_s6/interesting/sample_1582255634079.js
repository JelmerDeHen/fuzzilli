function main() {
function v0(v1,v2) {
    let v7 = 0;
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v18 = [];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v19 = {valueOf:v18,length:13.37,d:127,e:127};
            // v19 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "__proto__", "length"])
            const v20 = {c:v18,valueOf:v19,d:Array,a:1337};
            // v20 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "c"], withMethods: ["d"])
            length = v20;
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 7);
            let v26 = 0;
            const v27 = v11 + 1;
            // v27 = .primitive
            v11 = v27;
        } while (v11 < 8);
    }
    const v28 = v7 + 1;
    // v28 = .primitive
    v7 = v28;
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v31 = v30;
const v32 = v0(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
