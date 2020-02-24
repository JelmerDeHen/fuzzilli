function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = [-437311.50498529465,-437311.50498529465,-437311.50498529465,-437311.50498529465];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = ["valueOf",v9];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = v10.toLocaleString();
// v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v12 = ["c",1337,3488870410];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = {__proto__:3488870410,length:"c",e:13.37,c:v12,d:Uint32Array};
// v13 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "length", "e"])
const v14 = {constructor:Uint32Array,c:v12};
// v14 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__"])
let v15 = v6;
function v16(v17,v18) {
    let v25 = 0;
    do {
        let v28 = 0;
        const v29 = v28 + 1;
        // v29 = .primitive
        v28 = v29;
        let v32 = 0;
        const v33 = v25 + 1;
        // v33 = .primitive
        v25 = v33;
    } while (v25 < 8);
    let v36 = 0;
    for (const v37 in "boolean") {
        let v41 = 0;
        if (v18) {
        } else {
            function v42(v43,v44,v45,v46,v47) {
                return v16;
            }
        }
        const v48 = v41 + 1;
        // v48 = .primitive
        v41 = v48;
        let v50 = 0;
        do {
            let v53 = 0;
            let v55 = 0;
            do {
                const v56 = v55 + 1;
                // v56 = .primitive
                v55 = v56;
            } while (v55 < 7);
            let v59 = 0;
            const v66 = v50 + 1;
            // v66 = .primitive
            v50 = v66;
        } while (v50 < 8);
    }
    const v67 = v36 + 1;
    // v67 = .primitive
    v36 = v67;
    return 13.37;
}
const v70 = [1337];
// v70 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v71 = v70;
const v72 = v16(v71);
// v72 = .unknown
const v73 = typeof "c";
// v73 = .string
const v75 = v73 === "symbol";
// v75 = .boolean
v72.valueOf = v72;
const v76 = v16();
// v76 = .unknown
const v77 = v16(v71,v75);
// v77 = .unknown
}
%NeverOptimizeFunction(main);
main();
