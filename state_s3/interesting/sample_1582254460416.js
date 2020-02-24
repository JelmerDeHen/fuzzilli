function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = "object".constructor;
// v6 = .function()
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
(7).toString = v6;
const v13 = (-2583972016).toString();
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
