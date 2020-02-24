function main() {
const v1 = {length:"N0Xx92zvHQ"};
// v1 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v3 = {c:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {c:v1};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
}
%NeverOptimizeFunction(main);
main();
