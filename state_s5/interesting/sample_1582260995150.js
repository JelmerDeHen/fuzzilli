function main() {
let v4 = 0;
Number[9] = "name";
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = v8 + 1;
// v13 = .primitive
v8 = v13;
for (const v14 in Number) {
}
}
%NeverOptimizeFunction(main);
main();
