function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [Promise];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {valueOf:v4,toString:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString"])
const v9 = {toString:v6,__proto__:"number",valueOf:v7,b:v6,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "valueOf", "toString"])
let v10 = 1337;
const v12 = Promise != Promise;
// v12 = .boolean
const v17 = [13.37,13.37,0];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v21 = 9;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
for (const v24 in "undefined") {
    let v27 = 0;
    function v28(v29,v30) {
        return v30;
    }
    try {
        const v31 = 13.37 in "undefined";
        // v31 = .boolean
    } catch(v32) {
        let v35 = 0;
        const v36 = v35 + 1;
        // v36 = .primitive
        v35 = v36;
    }
    const v37 = v17[1000];
    // v37 = .unknown
    const v38 = !0;
    // v38 = .boolean
    try {
        const v39 = Promise(...v38,...v28);
        // v39 = .unknown
    } catch(v40) {
    }
    const v41 = v27 + 1;
    // v41 = .primitive
    v27 = v41;
}
}
%NeverOptimizeFunction(main);
main();
