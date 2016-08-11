"use strict";
var fs = require("fs");
SupCore.system.registerPlugin("typescriptAPI", "Sup.Math.Noise", {
    code: fs.readFileSync(__dirname + "/noise.ts.txt", { encoding: "utf8" }),
    defs: fs.readFileSync(__dirname + "/noise.d.ts.txt", { encoding: "utf8" })
});
