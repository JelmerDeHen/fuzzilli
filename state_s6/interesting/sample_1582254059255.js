function main() {
const v2 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v2 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "d", "e"])
const v5 = {b:1337,toString:1337,toString:Uint16Array,d:Uint16Array};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "toString"])
const v9 = 1337 == 13.37;
// v9 = .boolean
const v12 = {b:13.37,e:1337,toString:Uint16Array,d:Uint16Array};
// v12 = .object(ofGroup: Object, withProperties: ["e", "b", "toString", "__proto__", "d"])
const v16 = 1337 == 13.37;
// v16 = .boolean
const v18 = Object();
// v18 = .object()
}
%NeverOptimizeFunction(main);
main();
