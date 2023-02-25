const fetch=require("node-fetch");
const express=require("express");
const fs=require("fs");
const path=require("path");
let site=new express();
site.use(express.static(path.join(__dirname + '/static')));
site.use('/favicon.ico', express.static('static/images/bario.png'))
site.listen(80,()=>{
    console.log("Site online");
});
site.get('/about', async (req, res) => {
	res.send(fs.readFileSync('static/about.html', 'utf-8'));
});
site.get('/contact', async (req, res) => {
	res.send(fs.readFileSync('static/contact.html', 'utf-8'));
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
site.get('/support', async (req, res) => {
	res.send(fs.readFileSync('static/support.html', 'utf-8'));
});
site.get('/*',async (req,res)=>{
    res.send("<script>document.location.replace('https://kestron.software/');</script>");
});