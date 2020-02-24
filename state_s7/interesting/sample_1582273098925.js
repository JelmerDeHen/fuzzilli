function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {valueOf:v7,__proto__:parseFloat,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__"], withMethods: ["__proto__"])
const v9 = {d:v4,a:v4};
// v9 = .object(ofGroup: Object, withProperties: ["a", "d", "__proto__"])
let v10 = v6;
function v29(v30,v31) {
    const v32 = v30 in v6;
    // v32 = .boolean
    for (const v39 in "object") {
    }
    const v40 = [3156875969,3156875969,1337,DataView];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v41 = {constructor:v40,c:v40,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v41 = .object(ofGroup: Object, withProperties: ["constructor", "c", "d", "__proto__", "a", "e"])
    const v42 = {e:DataView,constructor:1337,valueOf:1337,d:v40};
    // v42 = .object(ofGroup: Object, withProperties: ["d", "constructor", "e", "__proto__", "valueOf"])
    for (let v56 = 0; v56 < 10; v56++) {
    }
    for (const v64 in "boolean") {
        let v67 = 0;
        do {
            let v70 = 0;
            do {
                const v71 = v70 + 1;
                // v71 = .primitive
                v70 = v71;
            } while (v70 < 7);
            const v76 = v9 + 1;
            // v76 = .primitive
            v67 = v76;
        } while (v67 < 8);
    }
    return "undefined";
}
const v79 = [1337];
// v79 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v80 = v79;
const v85 = v29(v80);
// v85 = .unknown
const v93 = typeof Array;
// v93 = .string
const v95 = v93 === "undefined";
// v95 = .boolean
const v100 = [];
// v100 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v101 = {valueOf:v100,length:13.37,d:127,e:127};
// v101 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "e", "valueOf"])
const v109 = v29();
// v109 = .unknown
}
%NeverOptimizeFunction(main);
main();
