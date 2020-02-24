function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {constructor:"OQrlgqwgVv",b:1337,valueOf:1337,a:v3,e:9007199254740992};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "a", "constructor", "__proto__", "b"])
function v6(v7,v8) {
    let v12 = 0;
    do {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    } while (v12 < 3);
    const v14 = v6 << v3;
    // v14 = .integer
    const v16 = [13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    for (const v17 in 1337) {
        const v18 = ~v16;
        // v18 = .boolean
    }
    const v19 = v3 <= v16;
    // v19 = .boolean
    const v20 = v4.valueOf;
    // v20 = .unknown
    let v23 = 0;
    do {
        const v24 = v23 + 1;
        // v24 = .primitive
        v23 = v24;
    } while (v23 < 7);
    for (let v29 = 0; v29 < 10; v29++) {
    }
    let v32 = 0;
    for (const v33 in "boolean") {
        let v36 = 0;
        do {
            try {
                let v39 = 0;
                do {
                    const v40 = v39 + 1;
                    // v40 = .primitive
                    v39 = v40;
                } while (v39 < 7);
            } catch(v41) {
                let v44 = 0;
                while (v44 < 10) {
                }
            }
            const v48 = v36 + 1;
            // v48 = .primitive
            v36 = v48;
        } while (v36 < 8);
    }
    do {
        const v50 = [1337,1337,1337,1337];
        // v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        for (const v51 of v50) {
            return v51;
        }
    } while (v32 < 3);
}
const v55 = [1337];
// v55 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v56 = v55;
const v57 = v6(v56);
// v57 = .unknown
const v58 = v6(1024,4.0);
// v58 = .unknown
const v59 = v6();
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
