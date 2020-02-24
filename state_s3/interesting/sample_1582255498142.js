function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,v6,"e",v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {b:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {valueOf:"e",length:1337,a:v6,b:v6,e:1337};
// v9 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "b", "a"])
let v10 = "e";
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v21 = 0;
let v24 = 0;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
let v34 = 0;
let v41 = 0;
let v44 = 0;
const v45 = v24 + 1;
// v45 = .primitive
v24 = v45;
const v46 = v21 + 1;
// v46 = .primitive
v21 = v46;
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
let v55 = 0;
do {
    const v56 = v55 + 1;
    // v56 = .primitive
    function v57(v58,v59) {
        let v66 = 0;
        for (const v67 in "boolean") {
            let v70 = 0;
            do {
                try {
                    let v73 = 0;
                    do {
                        const v74 = v73 + 1;
                        // v74 = .primitive
                        v73 = gc;
                    } while (v73 < 7);
                } catch(v75) {
                    let v78 = 0;
                    while (v78 < 10) {
                    }
                }
                const v79 = v70 + 1;
                // v79 = .primitive
                v70 = v79;
            } while (v70 < 8);
        }
        const v80 = v66 + 1;
        // v80 = .primitive
        v66 = v80;
        for (const v82 in "object") {
        }
    }
    const v84 = [1337];
    // v84 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v85 = v84;
    const v86 = v57(v85);
    // v86 = .unknown
    v55 = v56;
} while (v55 < 7);
v50 = v51;
const v91 = [3156875969,3156875969,1337,DataView];
// v91 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v92 = v91.toLocaleString();
// v92 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
