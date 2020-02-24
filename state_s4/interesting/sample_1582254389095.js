function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
for (let v19 = 0; v19 < 100; v19++) {
}
const v20 = Array[9];
// v20 = .unknown
const v21 = (13.37)[v1];
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
