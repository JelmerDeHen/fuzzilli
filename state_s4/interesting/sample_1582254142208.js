function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
for (let v17 = 0; v17 < 100; v17++) {
}
const v18 = v0[6];
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
