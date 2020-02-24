function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
            let v22 = 0;
            const v26 = v15 + 1;
            // v26 = .primitive
            v15 = v26;
        } while (v15 < 8);
    }
    const v27 = v11 + 1;
    // v27 = .primitive
    v11 = v27;
    for (let v32 = 0; v32 < 100; v32++) {
        let v34 = undefined;
        const v40 = [1337];
        // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v41 = {b:v40,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
        // v41 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "a", "__proto__", "length", "e"])
        let v44 = 0;
        const v45 = {...v41,...0,...v44};
        // v45 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__", "e", "a"])
    }
}
const v47 = [v1];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v48 = v47;
const v49 = v3(v48);
// v49 = .unknown
const v50 = v3(1024,4.0);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
