const banner=`
<div id="banner">
    <img src='images/banner.png'><br>
    <a href='/'>Home</a><a href='/about'>About</a><a href='/projects'>Projects</a><a href='/links'>Links</a><a href='/ethics'>Ethics</a><a href='/support'>Support Kestron</a>
</div>
<br><br>
`;
const footer=`
<hr>
<footer>
    ©Kestron 2023 <a href='/contact'>Contact/Support</a>.
</footer>
`;
document.body.innerHTML=banner+document.body.innerHTML+footer;