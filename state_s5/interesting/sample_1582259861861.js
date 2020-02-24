function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {valueOf:undefined,c:v5,__proto__:v6,b:v3};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "b"])
function v14(v15,v16) {
    const v18 = [13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v19 = v18[1024];
    // v19 = .unknown
    const v20 = v19 - 1;
    // v20 = .primitive
    const v21 = v20 + 1;
    // v21 = .primitive
    let v24 = 0;
    do {
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            // v28 = .primitive
            const v29 = {constructor:3156875969,...v28,...8};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v27 = v28;
        } while (v27 < 7);
        const v30 = {valueOf:v21,get:v5,..."0DeB1+Gn+W",...v10};
        // v30 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "get", "b", "c", "constructor"], withMethods: ["replace", "indexOf", "padEnd", "lastIndexOf", "startsWith", "substring", "padStart", "concat", "split", "repeat", "charAt", "charCodeAt", "endsWith", "includes", "codePointAt", "slice", "trim"])
        const v31 = v24 + 1;
        // v31 = .primitive
        v24 = v31;
    } while (v24 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v34 = v33;
const v35 = v14(v34);
// v35 = .unknown
const v36 = v14(1024,4.0);
// v36 = .unknown
const v37 = v14(v36,v34);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
