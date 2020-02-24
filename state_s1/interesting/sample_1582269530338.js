function main() {
const v4 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "b", "d"])
const v10 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v10 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "e", "__proto__"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
let v18 = 0;
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v23 = v18 + 1;
// v23 = .primitive
v18 = v23;
v10.length = parseFloat;
const v24 = Symbol.toStringTag;
// v24 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v4[v24] = "boolean";
}
%NeverOptimizeFunction(main);
main();
