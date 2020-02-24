function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = ["undefined",13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "valueOf", "__proto__", "a"])
let v13 = Uint8Array;
const v18 = [13.37,13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = [v18,v20,Uint16Array];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v22 = {b:v20,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v22 = .object(ofGroup: Object, withProperties: ["b", "e", "valueOf", "__proto__", "a", "length"])
const v23 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v23 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "e", "__proto__"])
let v24 = v18;
const v27 = [13.37,13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v28 = ["iterator"];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v33 = [13.37,13.37,13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v36 = [v33,v35,Uint16Array];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v37 = {b:v35,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v37 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "a", "length", "e", "__proto__"])
const v38 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v38 = .object(ofGroup: Object, withProperties: ["d", "b", "e", "__proto__", "toString"])
let v39 = v33;
const v44 = [13.37,13.37,13.37,13.37,13.37];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v47 = [v44,v46,Uint16Array];
// v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v48 = {b:v46,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v48 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "length", "e"])
const v49 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v49 = .object(ofGroup: Object, withProperties: ["toString", "d", "b", "e", "__proto__"])
let v50 = v44;
const v52 = [13.37,13.37,13.37,13.37,13.37];
// v52 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v57 = [13.37,13.37,13.37,13.37,13.37];
// v57 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v59 = [1337];
// v59 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v60 = [v57,v59,Uint16Array];
// v60 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v61 = {b:v59,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v61 = .object(ofGroup: Object, withProperties: ["e", "b", "valueOf", "__proto__", "a", "length"])
const v62 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v62 = .object(ofGroup: Object, withProperties: ["d", "b", "e", "__proto__", "toString"])
let v63 = v57;
const v68 = [13.37,13.37,13.37,13.37,13.37];
// v68 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v70 = [1337];
// v70 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v71 = [v68,v70,Uint16Array];
// v71 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v72 = {b:v70,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v72 = .object(ofGroup: Object, withProperties: ["b", "a", "length", "valueOf", "e", "__proto__"])
const v73 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v73 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "toString", "b", "e"])
let v74 = v68;
const v79 = [13.37,13.37,13.37,13.37,13.37];
// v79 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v81 = ["iterator"];
// v81 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v82 = [v79,v81,Uint16Array];
// v82 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v83 = {b:v81,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v83 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "e", "valueOf", "b"])
const v84 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v84 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "toString", "b"])
let v85 = v79;
const v90 = [13.37,13.37,13.37,13.37,13.37];
// v90 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v92 = [1337];
// v92 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v93 = [v90,v92,Uint16Array];
// v93 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v94 = {b:v92,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v94 = .object(ofGroup: Object, withProperties: ["length", "e", "b", "__proto__", "valueOf", "a"])
const v95 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v95 = .object(ofGroup: Object, withProperties: ["toString", "b", "__proto__", "d", "e"])
let v96 = v90;
let v98 = 0;
const v103 = [13.37,13.37,13.37,13.37,13.37];
// v103 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v105 = [1337];
// v105 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v106 = [v103,v105,Uint16Array];
// v106 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v107 = {b:v105,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v107 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "valueOf", "e", "a"])
let v108 = Uint16Array;
const v109 = v92.concat(v94,"iterator",Uint16Array,4294967297);
// v109 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v110 = 4294967297 in v109;
// v110 = .boolean
const v111 = v109.__proto__;
// v111 = .object()
const v117 = [13.37,13.37,13.37,13.37,13.37];
// v117 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v119 = [1337];
// v119 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v120 = [v117,v119,Uint16Array];
// v120 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v121 = {b:v119,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v121 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "a", "length", "e"])
const v122 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v122 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "__proto__", "e"])
let v123 = v117;
const v125 = Object();
// v125 = .object()
const v126 = 1337 == 13.37;
// v126 = .boolean
let v127 = 1337;
let v129 = 0;
const v134 = [13.37,13.37,13.37,13.37,13.37];
// v134 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v136 = [1337];
// v136 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v137 = [v134,v136,Uint16Array];
// v137 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v141 = Object(13.37,1337);
// v141 = .object()
const v142 = {b:v136,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v142 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "a", "b", "length", "__proto__"])
const v143 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v143 = .object(ofGroup: Object, withProperties: ["b", "e", "toString", "__proto__", "d"])
let v144 = v134;
const v146 = [13.37,13.37,13.37,13.37,13.37];
// v146 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v148 = [1337];
// v148 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v149 = v146;
const v153 = [13.37,13.37];
// v153 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (const v154 in "object") {
}
const v156 = "object".constructor;
// v156 = .function()
const v157 = gc + v148;
// v157 = .primitive
const v158 = v149 - v156;
// v158 = .number
const v159 = v129 + 1;
// v159 = .primitive
const v160 = Uint16Array === v123;
// v160 = .boolean
const v161 = "iterator" + 1;
// v161 = .primitive
const v162 = Object(v161,v160,v121,v120);
// v162 = .object()
const v164 = [13.37,13.37];
// v164 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v166 = [1337,1337,1337,1337];
// v166 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v167 = "object".constructor;
// v167 = .function()
let v169 = 0;
const v170 = v169 + 1;
// v170 = .primitive
for (const v171 in "object") {
}
let v173 = 0;
const v174 = v173 + 1;
// v174 = .primitive
let v176 = 0;
for (const v178 in "object") {
}
for (let v182 = 0; v182 < 0; v182++) {
}
for (let v186 = 0; v186 < 6; v186++) {
}
for (let v190 = 0; v190 < 6; v190++) {
}
for (let v194 = 0; v194 < 3; v194++) {
    const v198 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:gc};
    // v198 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "getPrototypeOf", "preventExtensions", "get", "apply", "defineProperty", "isExtensible", "getOwnPropertyDescriptor", "call"])
    const v200 = new Proxy(gc,v198);
    // v200 = .unknown
    const v201 = v200.prototype;
    // v201 = .unknown
    for (const v203 in "object") {
    }
}
for (const v205 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
