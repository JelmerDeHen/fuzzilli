function main() {
function v0(v1,v2) {
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            const v24 = {e:13.37};
            // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
            let v25 = 1337;
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v30 = {length:gc,a:v24,constructor:0,b:v25,__proto__:1337,b:v28,e:"object",valueOf:3};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "a", "e", "b"], withMethods: ["length"])
            const v31 = v19 + 1;
            // v31 = .primitive
            v19 = v31;
            let v37 = 0;
            const v47 = v16 + 1;
            // v47 = .primitive
            v16 = v47;
        } while (v16 < 8);
    }
    const v48 = v12 + 1;
    // v48 = .primitive
    v12 = v48;
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v52 = v51;
const v53 = v0(v52);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
