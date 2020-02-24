function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {__proto__:JSON,toString:"function",d:v4,a:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "toString", "d"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [1337,v9,"e",v9];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = {valueOf:"e",length:1337,a:v9,b:v9,e:1337};
// v11 = .object(ofGroup: Object, withProperties: ["b", "a", "length", "e", "__proto__", "valueOf"])
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v15 = {valueOf:v14,length:v5,d:127,e:127};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "e", "length"])
let v16 = v15;
function v19(v20,v21) {
    const v25 = [3156875969,3156875969,1337,DataView];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v26 = {e:DataView,constructor:1337,valueOf:1337,d:v25};
    // v26 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__", "e", "constructor"])
    let v28 = 0;
    let v31 = 0;
    do {
        try {
            let v34 = 0;
            do {
                const v35 = v34 + 1;
                // v35 = .primitive
                const v36 = {constructor:3156875969,...v35,...8};
                // v36 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
                v16 = v25;
                v34 = v35;
            } while (v34 < 7);
            v26.__proto__ = v11;
            const v37 = "e".includes(v28,-1024);
            // v37 = .boolean
            let v39 = 1337;
            do {
                const v40 = 0 * v10;
                // v40 = .number
            } while (v39 < 3);
        } catch(v41) {
            for (let v45 = 0; v45 < 100; v45++) {
            }
        }
        const v46 = v31 + 1;
        // v46 = .primitive
        v31 = v46;
    } while (v31 < 8);
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v49 = v48;
const v50 = v19(v49);
// v50 = .unknown
const v51 = v19(1024,4.0);
// v51 = .unknown
const v52 = v19(v51,v49);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
