function main() {
const v2 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "b", "e"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
function v18(v19,v20) {
    return v2;
}
const v21 = v18 >= Number;
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
