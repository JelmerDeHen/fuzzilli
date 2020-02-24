function main() {
const v5 = {c:1337};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v59 = {toString:13.37};
// v59 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v61 = "undefined" in v5;
// v61 = .boolean
v59.__proto__ = Object;
const v62 = !Object;
// v62 = .boolean
}
%NeverOptimizeFunction(main);
main();
