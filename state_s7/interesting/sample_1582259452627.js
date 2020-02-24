function main() {
const v4 = {b:"iterator",e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v4 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "valueOf", "a", "length"])
const v9 = v4[4294967297];
// v9 = .unknown
const v14 = [1202235687];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = {b:v14,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v15 = .object(ofGroup: Object, withProperties: ["e", "a", "b", "__proto__", "valueOf", "length"])
const v16 = v14.concat(v15,"iterator",Uint16Array,4294967297);
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v17 = 4294967297 in v16;
// v17 = .boolean
const v20 = 1337 == 13.37;
// v20 = .boolean
let v23 = 0;
let v32 = 0;
function v33(v34,v35,v36,v37,v38) {
    return v37;
}
const v39 = v32 + 1;
// v39 = .primitive
v32 = v39;
let v44 = 0;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
const v52 = Object(1337,gc);
// v52 = .object()
let v55 = 0;
const v56 = v44 + 1;
// v56 = .primitive
v44 = v56;
}
%NeverOptimizeFunction(main);
main();
