function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v5 = Math.atan2(917785591,v4);
// v5 = .number
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v12 = 0;
}
%NeverOptimizeFunction(main);
main();
