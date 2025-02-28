const ejs=require("ejs");
const express=require("express");
const fs=require("fs");
const path=require("path");
let site=new express();
site.use(express.static(path.join(__dirname + '/static')));
site.use('/favicon.ico', express.static('static/images/kestron2.png'))
site.listen(3000,()=>{
    console.log("Site online");
});
var ejsGlobals={
	"header":`
<div id="banner">
    <a href="/"><img src='images/kestron2.png' id="kestronIcon"><img src='images/banner.png' id="kestronBanner"></a><br>
    <a href='/about' class="bannerBtn">About</a><a href='/projects' class="bannerBtn">Projects</a><a href='/links' class="bannerBtn">Links</a><a href='/ethics' class="bannerBtn">Ethics</a>
</div>
<br><br>`,
	"footer":`
<footer>
    <a href='mailto:kestron@kestron.software'>kestron@kestron.software</a> | <a href="https://discord.gg/k3yVkrrvez">Discord Support Server</a>
</footer>
`
};
fs.readdirSync("./ejs").forEach(file=>{
	site.get(`/${file.split(".")[0]}`,async (req,res)=>{
		ejsGlobals.curDomain=`${req.protocol}://${req.get('host')}${req.originalUrl}`;
		ejs.renderFile(`./ejs/${file}`, ejsGlobals, {}, function(err, str) {
			res.send(str);
		});
	});
});
site.get(`/`,async (req,res)=>{
	ejsGlobals.curDomain=`${req.protocol}://${req.get('host')}${req.originalUrl}`;
	ejs.renderFile(`./ejs/about.ejs`, ejsGlobals, {}, function(err, str) {
		res.send(str);
	});
});
site.get('/*',async (req,res)=>{
    res.send("<script>document.location.replace('https://kestron.com/');</script>");
});