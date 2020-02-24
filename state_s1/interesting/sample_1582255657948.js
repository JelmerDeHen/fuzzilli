function main() {
function v0(v1,v2) {
    let v7 = 0;
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v18 = [];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v19 = {valueOf:v18,length:13.37,d:127,e:127};
            // v19 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "length", "e"])
            const v20 = {c:v18,valueOf:v19,d:Array,a:1337};
            // v20 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "valueOf"], withMethods: ["d"])
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
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v31 = v30;
const v32 = v0(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
