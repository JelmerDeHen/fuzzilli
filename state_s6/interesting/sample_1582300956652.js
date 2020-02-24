function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:"string",valueOf:"string",toString:v4,__proto__:ArrayBuffer,a:128,length:128};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "length", "a", "valueOf"])
const v9 = {b:v4,constructor:v7,e:128,d:"string",length:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "length", "d", "constructor"])
let v10 = 128;
for (let v14 = 0; v14 < 100; v14++) {
    let v16 = undefined;
    const v18 = [1337,1337];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    function v20(v21,v22) {
        const v24 = [-2351536326];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v25 = v24;
        let v27 = 257;
        const v28 = v27 + 1;
        // v28 = .primitive
        let v30 = 0;
        v25[v28] = v30;
        const v32 = Object.values(v24);
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v36 = 1337;
        const v37 = JSON.stringify(v36);
        // v37 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        const v39 = (0).toLocaleString();
        // v39 = .unknown
        const v40 = v39.padStart(1337,v37);
        // v40 = .unknown
        const v41 = v37 | v40;
        // v41 = .integer
        const v42 = Math.fround(v21);
        // v42 = .number
        const v44 = v42 === 0;
        // v44 = .boolean
        let v45 = v18;
        if (v44) {
        } else {
        }
        for (const v47 in v24) {
        }
        return v22;
    }
    const v49 = v20(RegExp);
    // v49 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
