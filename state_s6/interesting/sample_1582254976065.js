function main() {
function v18(v19,v20) {
    const v21 = v19 in v18;
    // v21 = .boolean
    for (const v28 in "object") {
    }
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v30 = {constructor:v29,c:v29,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v30 = .object(ofGroup: Object, withProperties: ["a", "e", "c", "__proto__", "constructor", "d"])
    const v31 = {e:DataView,constructor:1337,valueOf:1337,d:v29};
    // v31 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "e", "d"])
    for (let v45 = 0; v45 < 10; v45++) {
    }
    for (const v53 in "boolean") {
        let v56 = 0;
        do {
            let v59 = 0;
            do {
                const v60 = v59 + 1;
                // v60 = .primitive
                v59 = v60;
            } while (v59 < 7);
            const v65 = v56 + 1;
            // v65 = .primitive
            v56 = v65;
        } while (v56 < 8);
    }
}
const v68 = [1337];
// v68 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v69 = v68;
const v74 = v18(v69);
// v74 = .unknown
const v82 = typeof Array;
// v82 = .string
const v84 = v82 === "undefined";
// v84 = .boolean
const v89 = [];
// v89 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v90 = {valueOf:v89,length:13.37,d:127,e:127};
// v90 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "e", "__proto__"])
const v98 = v18();
// v98 = .unknown
}
%NeverOptimizeFunction(main);
main();
