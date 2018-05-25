S.config({
	"defaultToCurrentScreen" : true,
	"windowHintsShowIcons" : true
});


var full = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY,
	"width" : screenSizeX,
	"height" : screenSizeY
});

var middle = S.op("move", {
	"x" : screenOriginX + screenSizeX/8,
	"y" : screenOriginY+screenSizeY/8,
	"width" : 3*screenSizeX/4,
	"height" : 3*screenSizeY/4
});

var tophalf = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY,
	"width" : screenSizeX,
	"height" : screenSizeY/2
});

var bottomhalf = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY+screenSizeY/2,
	"width" : screenSizeX,
	"height" : screenSizeY/2
});

var lefthalf = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY,
	"width" : screenSizeX/2,
	"height" : screenSizeY
});

var righthalf = S.op("move", {
	"x" : screenOriginX+screenSizeX/2,
	"y" : screenOriginY,
	"width" : screenSizeX/2,
	"height" : screenSizeY	
});

var bottomleft = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY+screenSizeY/2,
	"width" : screenSizeX/2,
	"height" : screenSizeY/2
});

var bottomright = S.op("move", {
	"x" : screenOriginX+screenSizeX/2,
	"y" : screenOriginY+screenSizeY/2,
	"width" : screenSizeX/2,
	"height" : screenSizeY/2
});

var topleft = S.op("move", {
	"x" : screenOriginX,
	"y" : screenOriginY,
	"width" : screenSizeX/2,
	"height" : screenSizeY/2
});

var topright = S.op("move", {
	"x" : screenOriginX+screenSizeX/2,
	"y" : screenOriginY,
	"width" : screenSizeX/2,
	"height" : screenSizeY/2
});

S.bind("pad6:alt", S.op("resize", {"width" : "+10%", "height" : "+0"}));
S.bind("pad4:alt", S.op("resize", {"width" : "-10%", "height" : "+0"}));
S.bind("pad8:alt", S.op("resize", {"width" : "+0%", "height" : "-10%"}));
S.bind("pad2:alt", S.op("resize", {"width" : "+0%", "height" : "+10%"}));

S.bind("pad6:ctrl", S.op("nudge", {"width" : "+10%", "height" : "+0"}));
S.bind("pad4:ctrl", S.op("nudge", {"width" : "-10%", "height" : "+0"}));
S.bind("pad8:ctrl", S.op("nudge", {"width" : "+0", "height" : "-10%"}));
S.bind("pad2:ctrl", S.op("nudge", {"width" : "+0", "height" : "+10%"}));

S.bind("pad1", bottomleft);
S.bind("pad2", bottomhalf);
S.bind("pad3", bottomright);
S.bind("pad4", lefthalf);
S.bind("pad5", middle);
S.bind("pad6", righthalf);
S.bind("pad7", topleft);
S.bind("pad8", tophalf);
S.bind("pad9", topright);
S.bind("pad+", full);
S.bind("pad.", S.op("relaunch"));
S.bind("esc:cmd", S.op("hint"));
//for some reason slate errors out if there's not a comment on the last line