function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:v6,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "valueOf", "length"])
let v8 = v7;
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [v14];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = {valueOf:undefined,c:v14,__proto__:v15,b:v12};
// v16 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "b"])
const v18 = new Map(v16);
// v18 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["keys", "delete", "entries", "clear", "has", "get", "forEach", "values", "set"])
function v20(v21,v22) {
    const v24 = v18.size;
    // v24 = .integer
    let v32 = 0;
    let v38 = 0;
    let v41 = 0;
    do {
        let v44 = 0;
        do {
            const v45 = v44 + 1;
            // v45 = .primitive
            const v46 = {constructor:3156875969,...v45,...8};
            // v46 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v44 = v45;
        } while (v44 < 7);
        const v53 = v41 + 1;
        // v53 = .primitive
        v41 = v53;
    } while (v41 < 8);
    const v54 = v38 + 1;
    // v54 = .primitive
    v38 = v54;
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v58 = v57;
const v59 = v20(v58);
// v59 = .unknown
const v60 = v20(1024,4.0);
// v60 = .unknown
const v61 = v20(v60,v58);
// v61 = .unknown
}
%NeverOptimizeFunction(main);
main();
