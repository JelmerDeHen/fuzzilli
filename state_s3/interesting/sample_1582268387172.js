function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v1 = v0;
const v3 = Symbol.unscopables;
// v3 = .unknown
const v4 = v1[v3];
// v4 = .unknown
let v7 = 0;
function v9(v10,v11) {
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            const v27 = [13.37,13.37,13.37];
            // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v33 = [3156875969,3156875969,127,DataView];
            // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v34 = {constructor:v33,c:v33,e:13.37,d:127,a:3156875969,__proto__:"boolean"};
            // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "a", "e", "c"])
            let v36 = 0;
            const v37 = v27[v36];
            // v37 = .unknown
            const v38 = v37 && "boolean";
            // v38 = .boolean
            v34.a = v38;
            const v39 = v25 + 1;
            // v39 = .primitive
            v25 = v39;
            let v42 = 0;
            const v46 = v22 + 1;
            // v46 = .primitive
            let v53 = 0;
            let v56 = 0;
            let v59 = 0;
            v22 = v46;
        } while (v22 < 8);
    }
    const v63 = DataView + 1;
    // v63 = .primitive
    v18 = v63;
}
const v66 = [1337];
// v66 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v67 = v66;
const v68 = v9(v67);
// v68 = .unknown
const v69 = v7 + 1;
// v69 = .primitive
v7 = v69;
}
%NeverOptimizeFunction(main);
main();
