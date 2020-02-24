function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {c:10,constructor:10,valueOf:v3,__proto__:10,toString:"YjXjEe2.bY"};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "c", "toString", "valueOf", "__proto__"])
let v6 = 1337;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        const v13 = v6.constructor(1337);
        // v13 = .unknown
        let v15 = 0;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v15 + 1;
            // v20 = .primitive
            v15 = v20;
        } while (v15 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
v6 = v3;
const v25 = v7(v4);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
