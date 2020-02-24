function main() {
const v15 = (0).toString();
// v15 = .unknown
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
let v20 = Reflect;
const v21 = v20 >> v20;
// v21 = .integer
let v24 = 0;
v18 = v19;
}
%NeverOptimizeFunction(main);
main();
