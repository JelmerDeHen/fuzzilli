function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = "PI".lastIndexOf("PI",0);
// v5 = .integer
let v8 = 0;
}
%NeverOptimizeFunction(main);
main();
