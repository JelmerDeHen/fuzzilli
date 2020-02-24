function main() {
let v3 = "unscopable";
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v11 = 0;
        const v12 = ~v6;
        // v12 = .boolean
        let v13 = v6;
        if (v7) {
            for (let v17 = 0; v17 < 2; v17++) {
                let v20 = 0;
                for (let v24 = 0; v24 < 4; v24++) {
                }
                const v25 = v20 + 1;
                // v25 = .primitive
                v20 = v25;
            }
        } else {
            function v26(v27,v28,...v29) {
                let v32 = 0;
                const v33 = v7[-65535];
                // v33 = .unknown
            }
        }
        const v34 = "unscopable".replace(v9,v7);
        // v34 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        for (const v36 of "pvU0UUjoya") {
        }
        const v37 = {__proto__:v5,constructor:v13,valueOf:v3,c:"boolean"};
        // v37 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "c"], withMethods: ["__proto__"])
        for (let v41 = 0; v41 < 7; v41++) {
        }
        const v42 = v11 + 1;
        // v42 = .primitive
    }
    let v44 = 0;
    function v45(v46,v47) {
        for (const v49 in "boolean") {
            let v52 = 0;
            do {
                let v55 = 0;
                const v56 = v55 + 1;
                // v56 = .primitive
                v55 = v56;
                let v59 = 0;
                const v60 = v52 + 1;
                // v60 = .primitive
                v52 = v60;
            } while (v52 < 8);
        }
    }
    const v62 = [1337];
    // v62 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v63 = v62;
    const v64 = v45(v63);
    // v64 = .unknown
    let v66 = 0;
    const v67 = v66 + 1;
    // v67 = .primitive
    const v68 = v66 % v67;
    // v68 = .number
    let v70 = 0;
    const v72 = Boolean[13.37];
    // v72 = .unknown
    const v74 = [1337,1337,1337,1337,1337];
    // v74 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v75 = 13.37 + 1;
    // v75 = .primitive
}
const v78 = [1337];
// v78 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v79 = v78;
const v80 = v5(v79);
// v80 = .unknown
const v81 = v5(1024,4.0);
// v81 = .unknown
let v84 = 0;
const v85 = v84 + 1;
// v85 = .primitive
v84 = v85;
const v86 = v5();
// v86 = .unknown
}
%NeverOptimizeFunction(main);
main();
