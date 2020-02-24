function main() {
const v2 = {c:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v8 = {c:0};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
