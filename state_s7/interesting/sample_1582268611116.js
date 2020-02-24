function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4,"boolean","boolean"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {length:v6,a:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length"])
const v9 = {valueOf:v6,d:2,toString:v4,length:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "d", "valueOf"])
let v10 = 2;
function v13(v14,v15) {
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            let v26 = 0;
            const v29 = new Int16Array(19873);
            // v29 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            const v30 = v26 + 1;
            // v30 = .primitive
            v26 = v30;
            const v31 = v23 + 1;
            // v31 = .primitive
            v23 = v31;
        } while (v23 < 8);
    }
    function v33(v34,v35) {
        const v36 = v35 / v35;
        // v36 = .number
        const v39 = eval(1337);
        // v39 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        return v34;
    }
    for (let v44 = 0; v44 < 129; v44++) {
        const v45 = v33("boolean",1337);
        // v45 = .unknown
    }
    return 1337;
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v49 = v48;
const v50 = v13(v49);
// v50 = .unknown
const v51 = v13(1024,-1000.0);
// v51 = .unknown
const v52 = typeof v6;
// v52 = .string
const v54 = v52 === "boolean";
// v54 = .boolean
const v55 = v13(v6,"boolean");
// v55 = .unknown
}
%NeverOptimizeFunction(main);
main();
