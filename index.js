const express=require("express");
const fs=require("fs");
const path=require("path");
let site=new express();
site.use(express.static(path.join(__dirname + '/static')));
site.use('/favicon.ico', express.static('static/images/kestron.png'))
site.listen(3000,()=>{
    console.log("Site online");
});
site.get('/about', async (req, res) => {
	res.send(fs.readFileSync('static/index.html', 'utf-8'));
});
site.get('/ethics', async (req, res) => {
	res.send(fs.readFileSync('static/ethics.html', 'utf-8'));
});
site.get('/links', async (req, res) => {
	res.send(fs.readFileSync('static/links.html', 'utf-8'));
});
site.get('/projects', async (req, res) => {
	res.send(fs.readFileSync('static/projects.html', 'utf-8'));
});
site.get('/admin', async (req, res) => {
	res.send(fs.readFileSync('static/admin.html', 'utf-8'));
});
site.get('/*',async (req,res)=>{
    res.send("<script>document.location.replace('https://kestron.software/');</script>");
});
