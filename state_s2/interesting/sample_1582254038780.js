function main() {
const v38 = "object".constructor;
// v38 = .function()
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v54 = v38();
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
