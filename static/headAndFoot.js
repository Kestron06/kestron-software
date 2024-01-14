const banner=`
<div id="banner">
    <a href="/"><img src='images/kestron.png' id="kestronIcon"><img src='images/banner.png' id="kestronBanner"></a><br>
    <a href='/about' class="bannerBtn">About</a><a href='/projects' class="bannerBtn">Projects</a><a href='/links' class="bannerBtn">Links</a><a href='/ethics' class="bannerBtn">Ethics</a>
</div>
<br><br>
`;
const footer=`
<footer>
    <a href='mailto:kestron@kestron.software'>Kestron@Kestron.software</a> <a href="https://discord.gg/k3yVkrrvez">Discord Support Server</a>
</footer>
`;
document.body.innerHTML=banner+document.body.innerHTML+footer;