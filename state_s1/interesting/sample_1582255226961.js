function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {a:-4294967297,valueOf:"function",b:1337,length:v4,d:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "a", "b", "__proto__"])
const v9 = [1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = ~13.37;
// v10 = .boolean
let v13 = 0;
function v16(v17,v18) {
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                let v29 = 0;
                const v30 = [v26,7];
                // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v31 = {a:v23,c:v30,valueOf:v29,constructor:0,b:"N0Xx92zvHQ"};
                // v31 = .object(ofGroup: Object, withProperties: ["b", "constructor", "valueOf", "a", "c", "__proto__"])
                const v33 = {set:v18};
                // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                const v35 = Object.defineProperty(v31,"d",v33);
                // v35 = .undefined
            } catch(v36) {
            }
            const v37 = v26 + 1;
            // v37 = .primitive
            v26 = v37;
        } while (v26 < 8);
    }
    const v38 = v22 + 1;
    // v38 = .primitive
    v22 = v38;
}
const v41 = v16(1024,4.0);
// v41 = .unknown
const v42 = v9 + 1;
// v42 = .primitive
v13 = v42;
const v46 = typeof Array;
// v46 = .string
const v48 = v46 === "undefined";
// v48 = .boolean
let v51 = 0;
const v53 = v51 + 1;
// v53 = .primitive
v51 = v53;
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
}
%NeverOptimizeFunction(main);
main();
