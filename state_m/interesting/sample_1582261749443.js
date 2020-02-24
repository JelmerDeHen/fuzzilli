function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [1337,13.37,v4,-1155643050];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {__proto__:v6,constructor:Int32Array,toString:v4,c:v4,valueOf:-1155643050};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "toString", "c"])
const v9 = {__proto__:v7,constructor:v8,d:Int32Array,c:-1155643050};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "d"])
function v10(v11,v12) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            let v28 = 0;
            do {
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
            } while (v28 < 7);
            let v32 = 0;
            const v35 = v25 + 1;
            // v35 = .primitive
            v25 = v35;
        } while (v25 < 8);
    }
    const v36 = v21 + 1;
    // v36 = .primitive
    v21 = v36;
    const v38 = v7.some(gc,Object);
    // v38 = .boolean
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v44 = v43;
const v45 = v10(v44);
// v45 = .unknown
const v46 = v10(1337,1337);
// v46 = .unknown
const v47 = v10();
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
