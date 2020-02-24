function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {b:13.37,length:v4,__proto__:3366735776,d:"undefined"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "b"])
const v9 = {valueOf:"undefined",c:v4,length:"undefined",d:3366735776,__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "c", "length"])
let v10 = v7;
function v11(v12,v13) {
    const v14 = 1337 + 13.37;
    // v14 = .primitive
    const v15 = v7 == v13;
    // v15 = .boolean
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                const v28 = v15 == v23;
                // v28 = .boolean
                const v29 = v12();
                // v29 = .unknown
                const v30 = v13.push(v23,v26,v26);
                // v30 = .unknown
                "undefined".__proto__ = v22;
                const v32 = "boolean".__proto__;
                // v32 = .object()
                v4.valueOf = v30;
                const v34 = {set:v30};
                // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                const v36 = Object.defineProperty(v6,-1024,v34);
                // v36 = .undefined
                const v37 = 1337 / 0;
                // v37 = .number
                v6[65537] = -1024;
                let v38 = 0;
                do {
                    const v39 = v38 + 1;
                    // v39 = .primitive
                    v38 = v39;
                } while (v38 < 7);
            } catch(v40) {
                let v43 = 0;
                while (v43 > 10) {
                }
            }
            const v46 = v26 + 1;
            // v46 = .primitive
            v26 = v46;
        } while (v26 < 8);
    }
    const v47 = v22 + 1;
    // v47 = .primitive
    v22 = v47;
    return 0;
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v51 = v50;
const v52 = v11(v51);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
