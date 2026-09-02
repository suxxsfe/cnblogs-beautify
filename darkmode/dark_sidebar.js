<script>

/*此文件只需修改下面两行信息*/
/*分别写你的用户名，博客开始使用的年、月、日*/
var USERNAME="Gokix";
var STARTY=2022,STARTM=5,STARTD=5;
</script>

<script>
function sleep(time){
	var startTime = new Date().getTime() + parseInt(time, 10);
	while(new Date().getTime() < startTime) {}
}

/*回到顶部*/
var scrolling;
function gotoTopWork(){
	let dy = document.documentElement.scrollTop / 10; // 每次更新scrollTop改变的大小
	if(document.documentElement.scrollTop > 0) {
		document.documentElement.scrollTop -= Math.max(dy, 10);
		setTimeout(() => {
			gotoTopWork();
		}, 15);
	}
}
function gotoTop() {
	if(scrolling) return;
	scrolling=1;
	gotoTopWork();
	setTimeout(function(){
		scrolling=0;
	},800);
}

function gotoBottomWork(){
	let dy = (document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop) / 10; 
	if(document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop> 0) {
		document.documentElement.scrollTop += Math.max(dy, 10);
		setTimeout(()=>{
			gotoBottomWork();
		},15);
	}
}
function gotoBottom(){
	if(scrolling) return;
	scrolling=1;
	gotoBottomWork();
	setTimeout(function(){
		scrolling=0;
	},800);
}
</script>



<script>

/*对首页/非首页的处理*/


function doFuckingThings(){

	if(nowUrl=="/"+USERNAME+"/"||nowUrl=="/"+USERNAME){
//  is_user_name=1;
	console.log("first page!");
	var backgroundimg=["https://pic.downk.cc/item/5e7cd9d5504f4bcb04e063ec.jpg",
	"https://pic.downk.cc/item/5e7cd9d5504f4bcb04e063ce.jpg",
	"https://pic.imgdd.cc/item/69f9e251e90cebd85ddae811.png",
	"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5c0.jpg",
	"https://pic.downk.cc/item/5e7b16bf504f4bcb04d910cd.jpg",
	"https://pic.downk.cc/item/5e7b16e5504f4bcb04d93068.png",
	"https://pic.downk.cc/item/5e7b171b504f4bcb04d961dd.jpg",
	"https://pic.imgdd.cc/item/69f9d622e90cebd85dda92a2.png",
	"https://pic.imgdd.cc/item/69f9e475e90cebd85ddaeb37.png",
	"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5b4.jpg"
	];
	  titlePage.style.backgroundImage="url(\" "+backgroundimg[Math.floor(Math.random()*10)]+"\")";
	  titlePage.style.height="100vh";

	  document.getElementById("onePoem").style.display="block";
	  document.getElementById("onePoemTitle").style.display="block";
	  
	  var style=document.createElement("style");
	  style.type="text/css";
	  style.innerHTML="@media only screen and (max-width:1000px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 68vh;    height: 68vh;    max-height:68vh;    padding: 15% 0;}}@media only screen and (max-width:950px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 64vh;    height:64vh;    max-height:64vh;    padding: 15% 0;}}@media only screen and (max-width:900px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 60vh;    height: 60vh;    max-height:60vh;    padding: 15% 0;}#userName{font-size:55px;}}@media only screen and (max-width:850px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 56vh;    height: 56vh;    max-height:56vh;    padding: 15% 0;}#userName{font-size:55px;}}@media only screen and (max-width:800px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 53vh;    height: 53vh;    max-height:53vh;    padding: 15% 0;}#userName{font-size:50px;}}@media only screen and (max-width:760px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 50vh;    height: 50vh;    max-height: 50vh;    padding: 15% 0;}#userName{font-size:50px;}}@media only screen and (max-width:700px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 46vh;    height: 46vh;    max-height:46vh;    padding: 15% 0;}#userName{font-size:45px;}}@media only screen and (max-width:650px){#page_begin_html{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 43vh;    height: 43vh;    max-height:43vh;    padding: 15% 0;}#userName{font-size:45px;}}"; 
	  document.getElementsByTagName("HEAD")[0].appendChild(style);
	}
	/************************非首页******************/

	else{
	  console.log("this is not first page")
	  console.log(nowUrl);

	/*寻找当前的标题并处理*/
	  var articleTitle;
	  articleTitle=document.getElementsByClassName("PostListTitle")[0];/*标签列表标题*/
	  if(!articleTitle) articleTitle=document.getElementsByClassName("entrylistTitle")[0];/*分类列表标题，随便，文章档案标题*/
	  if(!articleTitle) articleTitle=document.getElementById("cb_post_title_url");/*文章的标题*/
	  if(!articleTitle) articleTitle=document.getElementById("taglist_title");
	  if(!articleTitle) articleTitle=document.getElementsByClassName("big_a_top")[0],is_user_name=1;/*名字*/
	  var userName=document.getElementById("userName");
	  userName.innerHTML=articleTitle.innerHTML;
	//  console.log(articleTitle.innerHTML);
	  if(!is_user_name){
		  articleTitle.style.display="none";
		  document.getElementById("topTitle_p").innerHTML=articleTitle.innerHTML;
	  }
	  else document.getElementById("topTitle").style.display="none";

	/*处理home的位置*/
	  titlePageHeight.innerHTML="#titlePage{height:45vh;}";
	  document.getElementsByTagName("HEAD")[0].appendChild(titlePageHeight);
	  userNameStyle.innerHTML="#userName{font-size:3em;font-weight:800;}";
	  document.getElementsByTagName("HEAD")[0].appendChild(userNameStyle);
	  let page_begin_htmlHeight;
	  titlePageHeight=document.createElement("style");
	  titlePageHeight.tpye="text/css";
	  titlePageHeight.innerHTML="#page_begin_html{height:45vh;}";
	  document.getElementsByTagName("HEAD")[0].appendChild(titlePageHeight);

	/*背景图*/
	  var backgroundimg=[
	"https://pic.downk.cc/item/5e7b1700504f4bcb04d9496b.jpg",
	"https://pic.downk.cc/item/5e7e24a0504f4bcb04a0cc60.png",
	"https://pic.imgdb.cn/item/61dd44e22ab3f51d918ab998.png"];
	  titlePage.style.backgroundImage="url(\" "+backgroundimg[Math.floor(Math.random()*3)]+"\")";

	  var style=document.createElement("style");
	  style.type="text/css";
	  style.innerHTML="@media only screen and (max-width:900px){#page_begin_html{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 35vh;    height: 35vh;    max-height:35vh;}}@media only screen and (max-width:800px){#page_begin_html{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 32vh;    height: 32vh;    max-height:32vh;}#userName{  font-size:2em !important;}}@media only screen and (max-width:700px){#page_begin_html{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 28vh;    height: 28vh;    max-height:28vh;  min-height:28vh;}#userName{  font-size:2em !important;}}@media only screen and (max-width:600px){#page_begin_html{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;  min-height:25vh; height: 25vh;    max-height:25vh;  min-height:25vh;}#userName{  font-size:1.5em !important;}}";
	  document.getElementsByTagName("HEAD")[0].appendChild(style);
	  
	  document.getElementById("onePoem").remove();
	  document.getElementById("onePoemTitle").remove();

	}
	document.getElementById("userName").style.display="block";
}


/*首页和非首页公用*/
/*****定义******/
var nowUrl=window.location.pathname,is_user_name=0;
//console.log(nowUrl);
var titlePage=document.getElementById("titlePage");
var titlePageHeight=document.createElement("style");
titlePageHeight.type="text/css";
var userNameStyle=document.createElement("style");
userNameStyle.type="text/css";

/********预处理*******/
document.getElementById("mainContent").style="width:100% !important;padding-left:25px !important;padding-right:25px !important;";

doFuckingThings();

var st=["<center>We need to go deeper.<br>",
	"<center> 豫章故郡，洪都新府 <br><center> 星分翼轸，地接衡庐 <br>",
	"<center> 襟三江而带五湖 <br><center> 控蛮荆而引瓯越 <br>",
	"<center> 物华天宝，龙光射牛斗之墟 <br><center> 人杰地灵，徐孺下陈蕃之榻 <br>",
	"<center> 雄州雾列, 俊采星驰 <br><center> 台隍枕夷夏之交，宾主尽东南之美 <br>",
	"<center> 都督阎公之雅望，棨戟遥临 <br><center> 宇文新州之懿范，襜帷暂驻 <br>",
	"<center> 十旬休假，胜友如云 <br><center> 千里逢迎，高朋满座 <br>",
	"<center> 腾蛟起凤，孟学士之词宗 <br><center> 紫电青霜，王将军之武库 <br>",
	"<center> 家君作宰，路出名区 <br><center> 童子何知，躬逢胜饯 <br>",
	"<center> 时维九月，序属三秋 <br><center> 潦水尽而寒潭清，烟光凝而暮山紫 <br>",
	"<center> 俨骖𬴂于上路，访风景于崇阿 <br><center> 临帝子之长洲，得天人之旧馆 <br>",
	"<center> 层峦耸翠，上出重霄 <br><center> 飞阁流丹，下临无地 <br>",
	"<center> 鹤汀凫渚，穷岛屿之萦回 <br><center> 桂殿兰宫，即冈峦之体势 <br>",
	"<center> 披绣闼，俯雕甍 <br><center> 山原旷其盈视，川泽纡其骇瞩 <br>",
	"<center> 闾阎扑地，钟鸣鼎食之家 <br><center> 舸舰弥津，青雀黄龙之轴 <br>",
	"<center> 云销雨霁，彩彻区明 <br><center> 落霞与孤鹜齐飞，秋水共长天一色 <br>",
	"<center> 渔舟唱晚，响穷彭蠡之滨 <br><center> 雁阵惊寒，声断衡阳之浦 <br>",
	"<center> 遥襟甫畅，逸兴遄飞 <br><center> 爽籁发而清风生，纤歌凝而白云遏 <br>",
	"<center> 睢园绿竹，气凌彭泽之樽 <br><center> 邺水朱华，光照临川之笔 <br>",
	"<center> 四美具，二难并 <br><center> 穷睇眄于中天，极娱游于暇日 <br>",
	"<center> 天高地迥，觉宇宙之无穷 <br><center> 兴尽悲来，识盈虚之有数 <br>",
	"<center> 关山难越，谁悲失路之人 <br><center> 萍水相逢，尽是他乡之客 <br>",
	"<center> 滕王高阁临江渚 <br><center> 佩玉鸣鸾罢歌舞 <br>",
	"<center> 画栋朝飞南浦云 <br><center> 朱帘暮卷西山雨 <br>",
	"<center> 闲云潭影日悠悠 <br><center> 物换星移几度秋 <br>",
	"<center> 阁中帝子今何在 <br><center> 槛外长江空自流</center>"];
if(document.getElementById("onePoem")!=null) document.getElementById("onePoem").innerHTML=st[Math.floor((Math.random()*26))];

/*******************************************************************************************/

</script>

<script>

/*If you want to hide something when you are on it's bottom, you should go to the top at first*/

function gotoPosition(el){//let the top of el in the middle of the screen
		// console.log(el);
	let pos=el.offsetTop;
	//if el is visile, don't do anything
	if(pos>=document.documentElement.scrollTop && pos<=document.documentElement.scrollTop+document.documentElement.clientHeight) return;
	pos-=document.documentElement.clientHeight/2;
	if(pos<0) pos=0;
	document.documentElement.scrollTop=pos;
}

/**************Hide and Show For the Sidebar*************/

function hideAndShow(){
	//	console.log(this);
	let tmp=this.parentElement.childNodes;
	let show=2;
	if(this.value=="Show") this.value="Hide",show=1;
	else if(this.value=="Hide") show=0,this.value="Show";//className == "ShowAndHideButton"
	else{//className == "AlwaysHideButton"
	//	console.log("hide it");
		show=0;
		gotoPosition(this.parentElement);
		for(let i=0;i<tmp.length;i++)if(tmp[i].className=="ShowAndHideButton"){
			tmp[i].value="Show";
			break;
		}
	}
	if(show==2){
		console.log("Erro! Unable to get button properties(Hide or Show)");
		console.log(this);
		return;
	}
	for(let i=0;i<tmp.length;i++)if(tmp[i].className!="ShowAndHideButton"&&tmp[i].tagName){
		if(show) tmp[i].style.display="block";
		else{
			tmp[i].style.display="none";
		}
	}
}

let button_,div_;
let hide=document.getElementsByClassName("hide_at_first");
for(let i=0;i<hide.length;i++){
	button_=document.createElement("input");
	button_.type="button";
	button_.value="Hide";
	button_.classList.add("ShowAndHideButton");
	//	console.log("hide[i]: "+hide[i]);
	hide[i].insertAdjacentHTML("afterbegin",button_.outerHTML);
	
	button_=document.createElement("button");
	button_.classList.add("AlwaysHideButton");
	button_.innerHTML="Hide &#8679;";
	hide[i].insertAdjacentHTML("beforeend",button_.outerHTML);
}
let show=document.getElementsByClassName("show_at_first");
for(let i=0;i<show.length;i++){
	button_=document.createElement("input");
	button_.type="button";
	button_.value="Hide";
	button_.classList.add("ShowAndHideButton");
	show[i].insertAdjacentHTML("afterbegin",button_.outerHTML);
	
	button_=document.createElement("button");
	button_.classList.add("AlwaysHideButton");
	button_.innerHTML="Hide &#8679;";
	show[i].insertAdjacentHTML("beforeend",button_.outerHTML);
}
for(let el of document.querySelectorAll('.ShowAndHideButton')){
	el.onclick=hideAndShow;
	if(el.parentElement.className=="hide_at_first") el.onclick();
}
for(let el of document.querySelectorAll('.AlwaysHideButton')){
	el.onclick=hideAndShow;
}

</script>

<script>
var topMenu=document.getElementById("topMenu"),now,last=0,type=0;
//type=0 表示顶部菜单为链接，1 代表为标题
window.onscroll=function(){
	
	now=document.documentElement.scrollTop||document.body.scrollTop;
	if(now>last&&!type){/*向上*/
		if(narrowTopmenuShowed) showAndHideNarrowTopmenu();
		setTimeout(function(){
			type=1;
			topMenu.style.transform="translateY(-55px)";
			if(!is_user_name) topMenu.style.height="110px";
		},130);
	}
	else if(now<last&&type){/*向下*/
		setTimeout(function(){
			type=0;
			topMenu.style.transform="translateY(0px)";
			topMenu.style.height="55px";
		},130);
	}
	last=now;
}
</script>

<script>

/*弹出和关闭menu*/
function getMenu(){
  var menuList=document.getElementById("menuList");
  var menus=document.getElementById("menus");
  var menus2=document.getElementById("menus2");
  if(menus.style.display=="block"){
    menus.style.display="none";
    menus2.style.display="block";
    menuList.style.width="250px";
	menuList.style.paddingLeft="10px";
  }
  else{
    menus.style.display="block";
    menus2.style.display="none";
    menuList.style.width="0px";
	menuList.style.paddingLeft="0px";
  }
}

/*离开当前页面时，关闭menu*/
document.addEventListener("visibilitychange", function(){
    if(document.hidden){
		if(document.getElementById("menus2").style.display=="block") getMenu();
	}
});
</script>

<script>

var narrowTopmenuShowed=0,narrowTopmenuSizeNow=0;
var narrowTopmenu=document.getElementById("narrowTopmenu");
function showNarrowTopmenu(){
	narrowTopmenuSizeNow+=0.1;
	if(narrowTopmenuSizeNow>1) narrowTopmenuSizeNow=1;
	narrowTopmenu.style.transform="translate("+(narrowTopmenuSizeNow-1)*50+"%,"+(narrowTopmenuSizeNow-1)*50+"%) scale("+narrowTopmenuSizeNow+")";
	if(narrowTopmenuSizeNow<1) setTimeout(showNarrowTopmenu,15);
}
function hideNarrowTopmenu(){
	narrowTopmenuSizeNow-=0.1;
	if(narrowTopmenuSizeNow<0) narrowTopmenuSizeNow=0;
	narrowTopmenu.style.transform="translate("+(narrowTopmenuSizeNow-1)*50+"%,"+(narrowTopmenuSizeNow-1)*50+"%) scale("+narrowTopmenuSizeNow+")";
	if(narrowTopmenuSizeNow>0) setTimeout(hideNarrowTopmenu,15);
}
function showAndHideNarrowTopmenu(){
	if(narrowTopmenuShowed){
		narrowTopmenuSizeNow=1;
		hideNarrowTopmenu();
	}
	else{
		narrowTopmenuSizeNow=0;
		showNarrowTopmenu();
	}
	narrowTopmenuShowed=narrowTopmenuShowed^1;
}

</script>



<script>
/*将侧边栏复制到menu里*/
const copyMenuStuff = () => {
		console.log("copying!");
	let menu = document.getElementById("menuList");

	let blogStats = document.getElementsByClassName("blogStats")[0].cloneNode(true);
	blogStats.id = "myBlogStats";
	menu.insertBefore(blogStats, topMenuSearch2);

	let sideBarMain = document.getElementById("sideBarMain").cloneNode(true);
	sideBarMain.id = "myMenu";
	menu.appendChild(sideBarMain);

	let footer = document.getElementById("footer").cloneNode(true);
	footer.id = "others";
	document.getElementById("bottom").appendChild(footer);
};

if(document.readyState !== "loading"){
	copyMenuStuff();
}
else{
	window.document.addEventListener("DOMContentLoaded", (event) => {
		console.log("fuck you");
		copyMenuStuff();
	});
}

/******** 同步两个搜索框 **********/
window.document.getElementById("q2").addEventListener("change", (event) => {
	document.getElementById("q").value = event.target.value;
});

</script>

<script>
/*时间*/
function getTime(){
  let date=new Date();
  let x=date.getTime();
  date=new Date(STARTY,STARTM,STARTD);
  let beginTime=date.getTime();
  x=x-beginTime;
  x=Math.floor(x/1000);
  let sec=x%60;
  x=Math.floor(x/60);
  let min=x%60;
  x=Math.floor(x/60);
  let hour=x%24;
  x=Math.floor(x/24);
  let day=x;
  let htmlDate=document.getElementById("date");
  htmlDate.innerHTML="This blog has running: "+day+" days "+hour+" hours "+min+" minutes "+sec+" seconds"
}
setInterval("getTime()", 500);
</script>

 
