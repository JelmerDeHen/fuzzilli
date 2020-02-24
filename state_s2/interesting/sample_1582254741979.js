function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "length", "__proto__"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__"], withMethods: ["d"])
let v10 = v8;
function v12(v13,v14) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            try {
                let v28 = 0;
                do {
                    const v29 = v28 + 1;
                    // v29 = .primitive
                    v28 = v29;
                } while (v28 < 7);
            } catch(v30) {
                let v33 = 0;
            }
            const v37 = v25 + 1;
            // v37 = .primitive
            v25 = v37;
        } while (v25 < 8);
    }
    do {
        const v38 = v21 + 1;
        // v38 = .primitive
        v21 = v38;
    } while (v21 < 3);
    for (const v40 in "object") {
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v44 = v43;
const v45 = v12(v44);
// v45 = .unknown
const v46 = v12(1024,4.0);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
