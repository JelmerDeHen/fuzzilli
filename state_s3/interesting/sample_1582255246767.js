function main() {
let v3 = 0;
const v4 = "e".indexOf(v3);
// v4 = .integer
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = v8 + 1;
// v13 = .primitive
v8 = v13;
}
%NeverOptimizeFunction(main);
main();
