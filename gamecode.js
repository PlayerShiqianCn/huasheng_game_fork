document.addEventListener('DOMContentLoaded', function () {
    // 获取所有侧边栏的链接
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    
    // 获取所有页面元素
    const pages = document.querySelectorAll('.page');
    
    // 页面切换函数
    function switchPage(pageId) {
        // 隐藏所有页面
        pages.forEach(page => page.classList.remove('active'));
        
        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // 更新侧边栏的高亮效果
        sidebarLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');  // 当前页对应的链接高亮
            } else {
                link.classList.remove('active');  // 其他链接去掉高亮
            }
        });
    }

    // 初始加载时，设置默认页面（比如 home+）
    switchPage('homework+');

    // 监听侧边栏的点击事件
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // 防止默认的链接跳转
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);  // 切换页面
        });
    });
});
const p1p = document.getElementById("tips");

// 控制弹窗显示
function showPopup(a) {
    p1p.innerHTML = a
    p1p.classList.add("show");
    setInterval(function(){
        p1p.classList.remove("show")
    },10000)
}

document.getElementById('homework+').classList.add('active');
let speed = document.getElementById("speed")
let helpon = document.getElementById("help")
let helpoff = document.getElementById("closeButton");
let helpwindow = document.getElementById("helpwindow");
let brainstorm = document.getElementById("brainstorm")
let progress = document.getElementById("progress")
let save = document.getElementById("save")
let load = document.getElementById("load")
let cgbutton = [
    cgbt1 = document.getElementById("challenge1"),
    cgbt2 = document.getElementById("challenge2"),
    cgbt3 = document.getElementById("challenge3"),
    cgbt4 = document.getElementById("challenge4"),
    cgbt5 = document.getElementById("challenge5"),
    cgbt6 = document.getElementById("challenge6"),
    cgbt7 = document.getElementById("challenge7"),
    cgbt8 = document.getElementById("challenge8"),
    cgbt9 = document.getElementById("challenge9")
]
let text = [
    texthomework = document.getElementById("homework"),
    textpen = document.getElementById("textpen"),
    textmachine = document.getElementById("textmachine"),
    textpencase = document.getElementById("textpencase"),
    textboard = document.getElementById("textboard"),
    textclass = document.getElementById("textclass"),
    textschool = document.getElementById("textschool"),
    textreset = document.getElementById("texthandin"),
    textmultihandin = document.getElementById("textmultihandin")
]
let buy = [
    buyhomework = document.getElementById("dohomework"),
    buypen = document.getElementById("buypen"),
    buymachine = document.getElementById("buymachine"),
    buypencase = document.getElementById("buypencase"),
    buyboard = document.getElementById("buyboard"),
    buyclass = document.getElementById("buyclass"),
    buyschool = document.getElementById("buyschool"),
]
let multi = [
    multipen = document.getElementById("multipen"),
    multimachine = document.getElementById("multimachine"),
    multipencase =document.getElementById("multipencase"),
    multiboard = document.getElementById("multiboard"),
    multiclass = document.getElementById("multiclass"),
    multischool = document.getElementById("multischool"),
]
let text2 = [
    textknowledge = document.getElementById("knowledge")
]
let resetbutton = [
    handinhomework = document.getElementById("handinhomework"),
]
let upbutton = [
    upbu1 = document.getElementById("upgrade1"),
    upbu2 = document.getElementById("upgrade2"),
    upbu3 = document.getElementById("upgrade3"),
    upbu4 = document.getElementById("upgrade4"),
    upbu5 = document.getElementById("upgrade5"),
    upbu6 = document.getElementById("upgrade6"),
    upbu7 = document.getElementById("upgrade7"),
    upbu8 = document.getElementById("upgrade8"),
    upbu9 = document.getElementById("upgrade9"),
    upbu10 = document.getElementById("upgrade10"),
    upbu11 = document.getElementById("upgrade11"),
    upbu12 = document.getElementById("upgrade12"),
]
let automachine = [
    auto1 = document.getElementById("auto1"),
    auto2 = document.getElementById("auto2"),
    auto3 = document.getElementById("auto3"),
    auto4 = document.getElementById("auto4"),
    auto5 = document.getElementById("auto5"),
    auto6 = document.getElementById("auto6"),
    auto7 = document.getElementById("auto7"),
    auto8 = document.getElementById("auto8")
]
let autoswitch = [
    switch1 = document.getElementById("switch1"),
    switch2 = document.getElementById("switch2"),
    switch3 = document.getElementById("switch3"),
    switch4 = document.getElementById("switch4"),
    switch5 = document.getElementById("switch5"),
    switch6 = document.getElementById("switch6"),
    switch7 = document.getElementById("switch7"),
    switch8 = document.getElementById("switch8")
]
function abs(a){
    if (a<0){
        a=-1*a
    }
    return a
}//绝对值
function std(a){
    if (a[0]===0){
        a[1]=0
    }else{
        while (abs(a[0])>=10){
            a[1]+=1
            a[0]/=10
        }
        while (abs(a[0])<1){
            a[1]-=1
            a[0]*=10
        }
    }
    if (a[1]<-15){
        a[0]=0
        a[1]=0
    }
    return a
}//标准化
function time(a,b){
    let c = [0,0]
    if(a[0]===0 || b[0]===0){
        c[0]=0
        c[1]=0
    }else{
        c[0]=a[0]*b[0]
        c[1]=a[1]+b[1]
    }
    return std(c)
}//乘法
function add(a,b){
    let c = [0,0]
    if (abs(a[1]-b[1])<=7) {
        if (a[1]>b[1]) {
            c[0]=b[0]+a[0]*10**(a[1]-b[1])
            c[1]=b[1]
        }else if (a[1]<b[1]) {
            c[0]=a[0]+b[0]*10**(b[1]-a[1])
            c[1]=a[1]
        }else{
            c[0]=a[0]+b[0]
            c[1]=a[1]
        }
    }else{
        if (a[1]>b[1]){
            c[0]=a[0]
            c[1]=a[1]
        }else{
            c[0]=b[0]
            c[1]=b[1]
        }
    }
    return std(c)
}//加法
function cutnum(num) {
    let strNum = num.toString();

    // 截取前三位
    return strNum.substring(0, 8);
}//删减
function shownum(a,b,c,d) {
    if (a[0] === 'infinity'){
        b.innerHTML = (c+'无限'+d)
    }
    if (a[1] <= 5){
        b.innerHTML = (c+cutnum(a[0]*10**a[1])+d)
    }else{
        b.innerHTML = (c+cutnum(a[0])+'e'+a[1]+d)
    }
}//显示
function compa(a,b,c) {
    if (b ==='>'){
        if (a[1]>c[1]){
            return true
        }else if (a[1]<c[1]){
            return false
        }else if (a[0]>c[0]){
            return true
        }else{
            return false
        }
    }else if(b==='=='){
        if (a[1]===c[1] && a[0]===c[0]){
            return true            
        }else{
            return false
        }
    }else if(b==='>='){
        if (a[1]>c[1]){
            return true
        }else if (a[1]<c[1]){
            return false
        }else if (a[0]>=c[0]){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
function power(a,b){
    let c = [0,0]
    if (a[0]===0){
        c = [0,0]
    }else if (b[0]===0){
        c = [1,0]
    }else if (b == [1,0]){
        c = a
    }else{
        c[0] = 10**(((Math.log10(a[0])+a[1])*(b[0]*10**b[1]))-Math.trunc((Math.log10(a[0])+a[1])*(b[0]*10**b[1])))
        c[1] = Math.trunc((Math.log10(a[0])+a[1])*(b[0]*10**b[1]))
    }
    return c
}
function storm(){
    storming = 0
        thing = [[0,[1,1],[1,0],[1,0]],[0,[1,2],[0,0],[1,0]],[0,[1,3],[0,0],[1,0]],[0,[1,4],[0,0],[1,0]],[0,[1,5],[0,0],[1,0]],[0,[1,6],[0,0],[1,0]]]
        if (upgrade[1]===1){
            product[0] = [1,2]
        }else{
            product[0] = [0,0]
        }
        if (upgrade[5]){
            reset = [[5,[1,2],[1,0]]]
        }else{
            reset = [[0,[1,2],[1,0]]]
        }
}
function breakbrainreset(){
    storming = 0
    thing = [[0,[1,1],[1,0],[1,0]],[0,[1,2],[0,0],[1,0]],[0,[1,3],[0,0],[1,0]],[0,[1,4],[0,0],[1,0]],[0,[1,5],[0,0],[1,0]],[0,[1,6],[0,0],[1,0]]]
    product[1] = add(product[1],getproduct1)
    if (upgrade[1]===1){
        product[0] = [1,2]
    }else{
        product[0] = [0,0]
    }
    if (upgrade[5]){
        reset = [[5,[1,2],[1,0]]]
    }else{
        reset = [[0,[1,2],[1,0]]]
    }
}
function a(a){
    let b = std([(a[0]-0.78)**0.75*10**((a[1]-308)**0.85-Math.trunc((a[1]-308)**0.85)),Math.trunc((a[1]-308)**0.85)])
    return b
}
function handin(){
    if (reset[0][0] <= 5 || inchallenge !== 2){
        reset[0][0] += 1
        if (reset[0][0]>14 && unlock[1]===1){
            reset[0][1] = time(reset[0][1],[1,100])
        }else if (reset[0][0]>5){
            if (upgrade[7]===1){
                reset[0][1] = time(reset[0][1],[1,7])
            }else{
                reset[0][1] = time(reset[0][1],[1,8])
            }
        }else{
            if (upgrade[3]===1){
                reset[0][1] = time(reset[0][1],[1,4])
            }else{
                reset[0][1] = time(reset[0][1],[1,5])
            }
        }
        if (upgrade[1]===1){
            product[0] = [1,2]
        }else{
            product[0] = [0,0]
        }
        thing[0] = [0,[1,1],[1,0],[1,0]]
        for(i=1;i<=6;i++){
            thing[i] = [0,[1,i+1],[0,0],[1,0]]
        }
        if (reset[0][0]>5){
            if (upgrade[8] === 1){
                reset[0][2] = time(reset[0][2],[2,1])
            }else{
                reset[0][2] = time(reset[0][2],[1.6,1])
            }
        }
    }
}
// 游戏状态变量
let getproduct1 = [0,0]
let autobuyer = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]//解锁，开关
let adder = [1,0]
let gethomework = 0
let typingsaves = 0
let kpprice = [1,1,1,2,3,5,8,10,15,20,3,1]
let firstdo = [0,0,0,0,0,0,0,0,0,0,0,0]
//交作业 解锁学校 脑容量爆炸 购买升级 自动购买器 突破脑容量
let unlock = [0,0,0,0,0,0,0]
//知识 突破脑容量
let challenge = [0,0,0,0,0,0,0,0,0]
//是否解锁挑战
let inchallenge = 0
let upgrade = [0,0,0,0,0,0,0,0,0,0,0,0]
//脑容量爆炸
let storming = 0
let product = [[0,0],[0,0]]
//作业 知识点
let thing = [[0,[1,1],[1,0],[1,0]],[0,[1,2],[0,0],[1,0]],[0,[1,3],[0,0],[1,0]],[0,[1,4],[0,0],[1,0]],[0,[1,5],[0,0],[1,0]],[0,[1,6],[0,0],[1,0]]]
//(购买次数,价格，数量，乘数)
//笔，写作业机，文具盒，电子白板，班级，学校
let reset =[[0,[1,2],[1,0]]]
//(重置次数，价格，给的乘数)
//交作业

//窗口——————————————————————————————————————————————————————————————————————————————————
helpon.addEventListener("click", function(){
    helpwindow.style.display = "block"
})
helpoff.addEventListener("click", function(){
    helpwindow.style.display = "none"
})


{//自动购买器————————————————————————————————————————————————————————————————————————————
setInterval(function(){
    if (autobuyer[7][0]===1 &autobuyer[7][1]===1){
        if (unlock[1]!==1){
            if (compa(product[0],'>=',[1.78,308])){
                if (inchallenge !== 0){
                    challenge[inchallenge-1] = 1
                    inchallenge = 0
                    if (inchallenge !== 9){
                        autobuyer[inchallenge-1][0] = 1
                    }
                }
                storm()
                if (upgrade[6]===1){
                    product[1] = add(product[1],[2,0])
                }else{
                    product[1] = add(product[1],[1,0])
                }
            }
        }else{
            if (compa(getproduct1,'>=',thelimit)){
                breakbrainreset()
                if (inchallenge !== 0){
                    challenge[inchallenge-1] = 1
                    inchallenge = 0
                    if (inchallenge !== 9){
                        autobuyer[inchallenge-1][0] = 1
                    }
                }
            }
        }
    }
},1)
setInterval(function(){
    if (autobuyer[6][0]===1 &autobuyer[6][1]===1)
        if (compa(product[0],'>=',reset[0][1])){
            handin()
    }
},1)
for (let i=5;i>=0;i--){
    setInterval(function(){
        if (inchallenge !== 1 || i !== 0){
            if (autobuyer[i][0]===1 && autobuyer[i][1]===1 && reset[0][0]>=i){
                if (compa(product[0],'>=',thing[i][1])){
                    thing[i][0] += 1
                    thing[i][2] = add(thing[i][2],[1,0])
                    product[0] = add(product[0], [-1 * thing[i][1][0], thing[i][1][1]])
                    if (unlock[1] === 1 && compa(product[0],'>=',[1.8,308])){
                        if (thing[i][0] % 10 === 0 && thing[i][0] >= 10) {
                            thing[i][1] = time(thing[i][1], [1,(i+1)*7]);
                        }
                        if (thing[i][0] % 5 === 0 && thing[i][0] >= 5) {
                            thing[i][3] = time(thing[i][3], [2+upgrade[0]+upgrade[4], 0]);
                        }
                    }else{
                        if (thing[i][0] % 10 === 0 && thing[i][0] >= 10) {
                            thing[i][1] = time(thing[i][1], [1,i+1]);
                        }
                        if (thing[i][0] % 5 === 0 && thing[i][0] >= 5) {
                            thing[i][3] = time(thing[i][3], [2+upgrade[0]+upgrade[4], 0]);
                        }
                    }
                }
            }
        }
    },1)
}
setInterval(function(){
    if (unlock[1]!==1){
        if (inchallenge === 8){
            if (compa(product[0],'>=',[1,600])){
                storming = 1
            }
        }else if (compa(product[0],'>=',[1.78,308])){
            storming = 1
        }
    }else{
        if (compa(product[0],'>=',[1.78,308])){
            brainstorm.style.animationPlayState = 'running'
            brainstorm.disabled = false
            if (upgrade[11]===1){
                getproduct1[0] = std((product[0][0]-0.78)**0.5*10**((product[0][1]-308)**0.75-Math.trunc((product[0][1]-308)**0.75)))
                getproduct1[1] = Math.trunc((product[0][1]-308)**0.75)
            }else{
                getproduct1[0] = std((product[0][0]-0.78)**0.25*10**((product[0][1]-308)**0.5-Math.trunc((product[0][1]-308)**0.5)))
                getproduct1[1] = Math.trunc((product[0][1]-308)**0.5)
                if (upgrade[6]===1){
                    getproduct1 = time(getproduct1,[2,0])
                }
            }
        }else{
            brainstorm.style.animationPlayState = 'paused'
            brainstorm.disabled = true
        }
    }

},0)
}
for (let i=0;i<=7;i++){
    autoswitch[i].addEventListener("click", function(){
    if (autobuyer[i][1]===1){
        autobuyer[i][1] = 0
    }else{
        autobuyer[i][1] = 1
    }
})
//设置上限
let braindownlimit = document.getElementById("braindownlimit");
let wait = 0
braindownlimit.addEventListener('blur', function() {
    wait = 1
})
braindownlimit.addEventListener('focus', function() {
    wait = 0
})
setInterval(function(){
    if (wait){
        thelimit = JSON.parse(braindownlimit.value)
    }
},10)
}
{//购买
buy[0].addEventListener("click", function(){
    product[0] = add(product[0],time(thing[0][2],time(thing[0][3],reset[0][2])));
});

//作业区域购买
for (let i=1;i<=6;i++) {
    buy[i].addEventListener("click", function() {
        if (inchallenge !== 1 || i !== 1){
            if (unlock[1] === 1 && compa(product[0],'>=',[1.8,308])){
                thing[i - 1][2] = add(thing[i - 1][2], [1, 0]);
                thing[i - 1][0] += 1;
                product[0] = add(product[0], [-1 * thing[i - 1][1][0], thing[i - 1][1][1]]);
                
                if (thing[i - 1][0] % 10 === 0 && thing[i - 1][0] >= 10) {
                    thing[i - 1][1] = time(thing[i - 1][1], [1, i*7]);
                }
                
                if (thing[i - 1][0] % 5 === 0 && thing[i - 1][0] >= 5) {
                    thing[i - 1][3] = time(thing[i - 1][3], [2+upgrade[0]+upgrade[4], 0]);
                }
            }else{
                thing[i - 1][2] = add(thing[i - 1][2], [1, 0]);
                thing[i - 1][0] += 1;
                product[0] = add(product[0], [-1 * thing[i - 1][1][0], thing[i - 1][1][1]]);
                
                if (thing[i - 1][0] % 10 === 0 && thing[i - 1][0] >= 10) {
                    thing[i - 1][1] = time(thing[i - 1][1], [1, i]);
                }
                
                if (thing[i - 1][0] % 5 === 0 && thing[i - 1][0] >= 5) {
                    thing[i - 1][3] = time(thing[i - 1][3], [2+upgrade[0]+upgrade[4], 0]);
                }
                
            }
            
        }
    })
}
//知识升级
for(let i=0;i<=11;i++){
    upbutton[i].addEventListener("click", function(){
        upgrade[i] = 1
        product[1] = add(product[1],std([-1*kpprice[i],0]))
    })
}
for(let i=0;i<=8;i++){
    cgbutton[i].addEventListener("click", function(){
        inchallenge = i + 1
        if (i === 8){
            producttime = 30000
        }
        storm()
    })
}
document.getElementById("exitchallenge").addEventListener("click", function(){
    inchallenge = 0
    storm()
})
}
{//重置
resetbutton[0].addEventListener("click", function(){
    handin()
})

brainstorm.addEventListener("click", function(){
    if (upgrade[6]===1){
        product[1] = add(product[1],[2,0])
    }else{
        product[1] = add(product[1],[1,0])
    }
    if (inchallenge !== 0){
        challenge[inchallenge-1] = 1
        inchallenge = 0
        if (inchallenge !== 9){
            autobuyer[inchallenge-1][0] = 1
        }
    }
    if (unlock[1]===1){
        breakbrainreset()
    }else{
        storm()
    }
})
}
let producttime = 0
document.getElementById("focus").addEventListener("click", function(){
    producttime += 1000
})
{//生产
setInterval(function() {
    if(producttime > 0){
        producttime -= 50
    }
    if (upgrade[9]===1){
        product[1] = add(product[1],time(product[1],[1,-4]))
    }
    if ( storming === 1 ){
        thing = [[0,['infinity','infinity'],[0,0],[0,0]],[0,['infinity','infinity'],[0,0],[0,0]],[0,['infinity','infinity'],[0,0],[0,0]],[0,['infinity','infinity'],[0,0],[0,0]],[0,['infinity','infinity'],[0,0],[0,0]],[0,['infinity','infinity'],[0,0],[0,0]]]
    }else{
        if (!compa(product[1],'==',[0,0])){
            adder = power(product[1],time([upgrade[2],0],[2.5,-1]))
        }
        adder = time(adder,[1,0])
        if (compa([1,0],'>=',adder)){
            adder = [1,0]
        }
        if (inchallenge === 3){
            thing[3][2] = add(thing[3][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
            thing[2][2] = add(thing[2][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
        }else if(inchallenge === 4){
            if (producttime !== 0){
                thing[4][2] = add(thing[4][2],time(thing[5][2],time(thing[5][3],time(reset[0][2],adder))))
                thing[3][2] = add(thing[3][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
                thing[2][2] = add(thing[2][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
            }
        }else if(inchallenge === 5){
            thing[4][2] = add(thing[4][2],power(time(thing[5][2],time(thing[5][3],time(reset[0][2],adder))),[5,-1]))
            thing[3][2] = add(thing[3][2],power(time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))),[5,-1]))
            thing[2][2] = add(thing[2][2],power(time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))),[5,-1]))
        }else{
            thing[4][2] = add(thing[4][2],time(thing[5][2],time(thing[5][3],time(reset[0][2],adder))))
            thing[3][2] = add(thing[3][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
            thing[2][2] = add(thing[2][2],time(thing[4][2],time(thing[4][3],time(reset[0][2],adder))))
        }
        
        
        if(inchallenge === 4){
            if(producttime !== 0){
                thing[1][2] = add(thing[1][2],time(thing[3][2],time(thing[3][3],time(reset[0][2],adder))))
            }
        }else if(inchallenge === 5){
            thing[1][2] = add(thing[1][2],power(time(thing[3][2],time(thing[3][3],time(reset[0][2],adder))),[5,-1]))
        }else{
            thing[1][2] = add(thing[1][2],time(thing[3][2],time(thing[3][3],time(reset[0][2],adder))))
        }
        
        
        if (inchallenge === 1){
            thing[0][2] = add(thing[0][2],power(time(thing[2][2],time(thing[2][3],time(reset[0][2],adder))),[1,-2]))
        }else if(inchallenge === 4){
            if (producttime !== 0){
                thing[0][2] = add(thing[0][2],time(thing[2][2],time(thing[2][3],time(reset[0][2],adder))))
            }
        }else if(inchallenge === 5){
            thing[0][2] = add(thing[0][2],power(time(thing[2][2],time(thing[2][3],time(reset[0][2],adder))),[5,-1]))
        }else{
            thing[0][2] = add(thing[0][2],time(thing[2][2],time(thing[2][3],time(reset[0][2],adder))))
        }
        
        
        if(inchallenge === 4){
            if (producttime !== 0){
                product[0] = add(product[0],time(time(thing[1][2],thing[0][2]),time(thing[1][3],time(thing[0][3],time(reset[0][2],adder)))))
            }
        }else if(inchallenge === 5){
            product[0] = add(product[0],power(time(time(thing[1][2],thing[0][2]),time(thing[1][3],time(thing[0][3],time(reset[0][2],adder)))),[5,-1]))
        }else{
            product[0] = add(product[0],time(time(thing[1][2],thing[0][2]),time(thing[1][3],time(thing[0][3],time(reset[0][2],adder)))))
        }
        
        
        gethomework = time(time(time(time(time(time(thing[0][3],reset[0][2]),thing[1][3]),thing[1][2]),thing[0][2]),[2,1]),adder)
        if (upgrade[2]===1 && compa(product[1],'>=',[1,0])){
            gethomework = time(gethomework,power(product[1],[2.5,-1]))
        }
        if (inchallenge === 4){
            if (producttime === 0){
                gethomework = [0,0]
            }
        }else if(inchallenge === 5){
            gethomework = power(gethomework,[5,-1])
        }
    }
}, 50)
}
{//显示
setInterval(function() {
    shownum(reset[0][1],resetbutton[0],'交作业<br>需要 ',' 本作业')
    shownum(reset[0][2],text[8],'目前提供 x',' 乘数')
    shownum(time(thing[0][2],time(thing[0][3],reset[0][2])),buy[0],'写作业<br>每次 ',' 本')
    shownum(product[0],text[0],'','')
    shownum(gethomework,speed,'','')
    if (inchallenge === 1){
        buy[1].innerHTML = "无法购买签字笔<br>挑战1的影响"
    }else{
        shownum(thing[0][1],buy[1],'购买签字笔<br>需要 ',' 本作业')
    }
    if (inchallenge === 4){
        document.getElementById("focustime").innerHTML = "剩余 "+producttime+"ms 可生产"
    }else if (inchallenge === 9){
        document.getElementById("focustime").innerHTML = "距离挑战失败还有 "+producttime+"ms"
        if (producttime === 0){
            inchallenge = 0
            alert("挑战失败")
        }
    }
    shownum(thing[0][2],text[1],'当前签字笔 ',' 支')
    shownum(thing[0][3],multi[0],'签字笔乘数 x','')
    shownum(thing[1][1],buy[2],'购买写作业机<br>需要',' 本作业')
    shownum(thing[1][2],text[2],'当前写作业机 ','台')
    shownum(thing[1][3],multi[1],'写作业机乘数 x','')
    shownum(thing[2][1],buy[3],'购买文具盒<br>需要 ',' 本作业')
    shownum(thing[2][2],text[3],'当前文具盒 ','个')
    shownum(thing[2][3],multi[2],'文具盒乘数 x','')
    shownum(thing[3][1],buy[4],'购买电子白板<br>需要 ',' 本作业')
    shownum(thing[3][2],text[4],'当前电子白板 ','个')
    shownum(thing[3][3],multi[3],'电子白板乘数 x','')
    shownum(thing[4][1],buy[5],'购买班级<br>需要 ',' 本作业')
    shownum(thing[4][2],text[5],'当前班级 ','个')
    shownum(thing[4][3],multi[4],'班级乘数 x','')
    shownum(thing[5][1],buy[6],'购买学校<br>需要 ',' 本作业')
    shownum(thing[5][2],text[6],'当前学校 ',' 个')
    shownum(thing[5][3],multi[5],'学校乘数 x','')
    if (reset[0][0] === 0){
        text[7].textContent = ('将会解锁 写作业机')
    }else if (reset[0][0] === 1){
        text[7].textContent = ('将会解锁 文具盒')
    }else if (reset[0][0] === 2){
        text[7].textContent = ('将会解锁 电子白板')
    }else if (reset[0][0] === 3){
        text[7].textContent = ('将会解锁 班级')
    }else if (reset[0][0] === 4){
        text[7].textContent = ('将会解锁 学校')
    }else{
        if (inchallenge === 2){
            text[7].textContent = ("将不提供任何乘数(挑战2的影响)")
        }else{
            if (reset[0][0]>5 && upgrade[8]===1){
                text[7].textContent = ('将会给所有项目 x20')
            }else{
                text[7].textContent = ('将会给所有项目 x16')
            }
        }
    shownum(reset[0][1],resetbutton[0],"交作业<br>需要 "," 本作业")

    }
    if (upgrade[2]===1 && compa(product[1],'>=',[1,0])){
        shownum(power(product[1],[5,-1]),document.getElementById("kpmulti"),'当前获得基于KP的乘数 x','')
    }else{
        shownum(power(product[1],[5,-1]),document.getElementById("kpmulti"),'当前获得基于KP的乘数 x','(已无效化)')
    }
    if (unlock[1]===1){
        if (compa(product[0],'>=',[1.78,308])){
            shownum(getproduct1,brainstorm,'脑容量爆炸<br>获得 ',' 知识')
        }else{
            brainstorm.innerHTML = '脑容量爆炸<br>作业不足'
        }
    }
    //页面2
    shownum(product[1],text2[0],'','')
    shownum(time(product[1],[1,-3]),document.getElementById("kp+"),'','')
    //进度
    if (unlock[0]===0){
        progress.textContent = ("距离 脑容量爆炸 还有 "+(308-product[0][1]+" 指数"))
    }else{
        progress.textContent = ("距离 思维过载 还有 "+(308-product[1][1]+" 指数"))
    }
    for (i=0;i<=8;i++){
        if ( inchallenge === (i+1) ){
            cgbutton[i].innerHTML = "正在进行中"
        }else{
            cgbutton[i].innerHTML = ["挑战1 忘记带笔<br>禁止购买签字笔，文具盒生产速度^0.01<br>解锁签字笔自动机","挑战2 自愿作业<br>交作业不提供任何乘数，不受升级影响<br>解锁写作业机机","挑战3 请了个假<br>学校不生产任何东西<br>解锁文具盒自动机","挑战4 昨晚没睡<br>不进行生产，按下\"集中精神\"后一秒内正常生产<br>解锁电子白板自动机","挑战5 磨磨蹭蹭<br>全部生产速度^0.5<br>解锁班级自动机","挑战6 作业翻倍<br>每过1s全部项目价格跳到下一阶段,交作业后重置<br>解锁学校自动机","挑战7 没带作业<br>每1秒都会清空除了学校以外的全部项目<br>解锁交作业自动机","挑战8 头脑风暴<br>脑容量爆炸需求变为1e600<br>解锁脑容量爆炸自动机","挑战9 突破极限<br>在30s内达到脑容量爆炸<br>解锁突破大脑极限，项目价格增加"][i]
        }
    }
},50)
}
setInterval(function(){
    if (inchallenge === 6){
        for (i=0;i<=5;i++){
            thing[i][1] = time(thing[i][1], [1,i+1])
        }
    }
    if (inchallenge === 7){
        for (i=0;i<=4;i++){
                thing[i][2] = [0,0]
            }
    }
} ,1000)
{//按钮
setInterval(function(){
    if (compa(product[0],'>=',reset[0][1]) && inchallenge !== 2){
        resetbutton[0].disabled = false
        resetbutton[0].style.color ="#ffffff"
        resetbutton[0].style.textShadow = "0px 0px 8px #ffffff"
    }else{
        resetbutton[0].disabled = true
        resetbutton[0].style.color ="#707070"
        resetbutton[0].style.textShadow = "0px 0px 8px #707070"
    }
    for (i=1;i<=5;i++){
        if (i>reset[0][0]){
            text[i+1].style.display = 'none'
            buy[i+1].style.display = 'none'
            multi[i].style.display = 'none'
            buy[i+1].disabled = true
        }else{
            text[i+1].style.display = 'inline-block'
            buy[i+1].style.display = 'inline-block'
            multi[i].style.display = 'inline-block'
        }
    }
    for (i=0;i<=5;i++){
        if (i === 0 && inchallenge === 1){
            buy[i+1].disabled = true
            buy[i+1].style.color ="#707070"
            buy[i+1].style.textShadow = "0px 0px 8px #707070"
        }else{
            if (compa(product[0],'>=',thing[i][1])) {
                    buy[i+1].disabled = false
                buy[i+1].style.color ="#ffffff"
                buy[i+1].style.textShadow = "0px 0px 8px #ffffff"
            }else{
                buy[i+1].disabled = true
                buy[i+1].style.color ="#707070"
                buy[i+1].style.textShadow = "0px 0px 8px #707070"
            }
        }
    }
    if (inchallenge === 4){
        document.getElementById("focus").style.display = 'inline-block'
    }else{
        document.getElementById("focus").style.display = 'none'
    }
    if (inchallenge === 4 || inchallenge === 9){
        document.getElementById("focustime").style.display = 'inline-block'
    }else{
        document.getElementById("focustime").style.display = 'none'
    }
    if (unlock[1] === 1){
        brainstorm.style.display = 'block'
    }else{
        if (storming === 1){
        brainstorm.style.display = 'block'
        }else if(storming === 0){
        brainstorm.style.display = 'none'
    }
    }

    for (i=0;i<=10;i++){
        if (upgrade[i]===1){
            upbutton[i].disabled = true
                upbutton[i].style.background = "#6ad87b"
                upbutton[i].style.borderColor = "#166338"
        }else{
            if (compa(product[1],'>=',std([kpprice[i],0]))){
                upbutton[i].disabled = false
                upbutton[i].style.background = "#44ad54"
                upbutton[i].style.borderColor = "#285c3f"
            }else{
                upbutton[i].disabled = true
                upbutton[i].style.background = "#858585"
                upbutton[i].style.borderColor = "#272727"
            }
        }
    }
    for (i=0;i<=8;i++){
        if ( inchallenge !== 0 ){
            if ( i+1 === inchallenge ){
                cgbutton[i].disabled = true
                cgbutton[i].style.background = "#ddc228"
                cgbutton[i].style.borderColor = "#6d5e0d"
            }else{
                if (challenge[i] === 1){
                    cgbutton[i].disabled = true
                    cgbutton[i].style.borderColor = "#39c76f"
                    cgbutton[i].style.background = "#095509"
                }else{
                    cgbutton[i].disabled = true
                    cgbutton[i].style.background = "#616161"
                    cgbutton[i].style.borderColor = "#272727"
                }
            }
        }else{
            if (challenge[i] === 1){
                cgbutton[i].disabled = true
                cgbutton[i].style.borderColor = "#39c76f"
                cgbutton[i].style.background = "#095509"
            }else{
                cgbutton[i].disabled = false
                cgbutton[i].style.background = "#616161"
                cgbutton[i].style.borderColor = "#272727"
            }
        }
    }
    if (unlock[1]===1){
        upbutton[11].style.display = "inline-block"
        if (upgrade[11]===1){
            upbutton[11].disabled = true
            upbutton[11].style.background = "#6ad87b"
            upbutton[11].style.borderColor =  "#166338"
        }else if (compa(product[1],'>=',[kpprice[11],10])){
            upbutton[11].disabled = false
            upbutton[11].style.background = "#44ad54"
            upbutton[11].style.borderColor = "#285c3f"
        }else{
            upbutton[11].disabled = true
            upbutton[11].style.background = "#858585"
            upbutton[11].style.borderColor = "#272727"
        }
    }else{
        upbutton[11].style.display = "none"
    }
    for (let i=0;i<=7;i++){
        if (autobuyer[i][1]===1){
            autoswitch[i].innerHTML = "ON"
            autoswitch[i].style.background = "#e26f6f"
            autoswitch[i].style.border = "#8d3636"
        }else{
            autoswitch[i].innerHTML = "OFF"
            autoswitch[i].style.background = "#747474"
            autoswitch[i].style.border = "#616161"
        }
    }
},10)
}
{//解锁
setInterval(function() {
    if (firstdo[3] === 1 && storming === 0){
        unlock[0] = 1
    }
    if (challenge[8] === 1){
        unlock[1] = 1
    }
    if (unlock[0] === 1){
        document.getElementById("knowledgepage").style.display = 'block'
    }else{
        document.getElementById("knowledgepage").style.display = 'none'
    }
    if (unlock[0] === 1){
        document.getElementById("autobuypage").style.display = 'block'
    }else{
        document.getElementById("autobuypage").style.display = 'none'
    }
    if (upgrade[2] === 1){
        document.getElementById("kpmulti").style.display = 'block'
    }else{
        document.getElementById("kpmulti").style.display = 'none'
    }
    if (upgrade[9] === 1){
        document.getElementById("kp+").style.display = 'inline-block'
        document.getElementById("kp+l").style.display = 'inline-block'
        document.getElementById("kp+r").style.display = 'inline-block'
    }else{
        document.getElementById("kp+").style.display = 'none'
        document.getElementById("kp+l").style.display = 'none'
        document.getElementById("kp+r").style.display = 'none'
    }
    if (unlock[0] === 1){
        document.getElementById("challenge").style.display = 'block'
    }else{
        document.getElementById("challenge").style.display = 'none'

    }
    if (typingsaves===1){
        document.getElementById("inputField").style.display = 'block'
        document.getElementById("showsaves").style.display = 'block'
        document.getElementById("loadin").style.display = 'block'
    }else{
        document.getElementById("inputField").style.display = 'none'
        document.getElementById("showsaves").style.display = 'none'
        document.getElementById("loadin").style.display = 'none'
    }
    if (inchallenge !== 0){
        document.getElementById("challengename").style.display = 'inline-block'
        document.getElementById("exitchallenge").style.display = 'inline-block'
        document.getElementById("challengename").innerHTML = '正在进行挑战 '+inchallenge
    }else{
        document.getElementById("challengename").style.display = 'none'
        document.getElementById("exitchallenge").style.display = 'none'
    }
    for (i=0;i<=7;i++){
        if (autobuyer[i][0]===1){
            automachine[i].style.display = 'inline-block'
            autoswitch[i].style.display = 'inline-block'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'inline-block'
            }
        }else{
            automachine[i].style.display = 'none'
            autoswitch[i].style.display = 'none'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'none'
            }
        }
    }
},10)
}
{//提示
setInterval(function(){
    if (firstdo[0] === 0 && compa(product[0],">=",[1,0])){
        showPopup("达成成就<br>万物起源<br>你获得了第一本作业!这是游戏开始的象征,加油!")
        firstdo[0] = 1
    }
    if (firstdo[1] === 0 && reset[0][0] === 1) {
        showPopup("达成成就<br>从头再来<br>你进行了一次「重置」，「重置」会清除你的一些进度，但是这将会解锁新的东西或是带来加成，加油吧!")
        firstdo[1] = 1
    }
    if (firstdo[2] === 0 && reset[0][0] === 5) {
        showPopup("达成成就<br>最后一个?<br>你解锁了目前最后一个项目,解锁学校后，每次「交作业」后目标需求增长变为x1e8，加油吧!离成功不远了!")
        firstdo[2] = 1
    }
    if (firstdo[3] === 0 && storming === 1) {
        showPopup("达成成就<br>炸我一脸<br>boom!你的脑袋瓜炸掉了,这是一次新的，更大的重置，你将要许多解锁新的内容!")
        firstdo[3] = 1
    }
    if (firstdo[4] === 0 && upgrade.includes(1)) {
        showPopup("达成成就<br>获得提升<br>你刚刚购买了第一个升级,继续,我们还得更快!")
        firstdo[4] = 1
    }
    if (firstdo[5] === 0 && unlock[1] === 1) {
        showPopup("达成成就<br>头顶怎么尖尖的<br>噗叽啪!你打破了1.78e308的上限，你的作业现在只会被硬上限圈住了，同时，脑容量爆炸按钮常亮")
        firstdo[5] = 1
    }
    if (firstdo[6] === 0 && challenge.includes(1)){
        showPopup("达成成就<br>蘸豆,爽!<br>你完成了第一个挑战!那困难吗?好了，可别止步于此,加油!")
        firstdo[6] = 1
    }
},100)
}
{//存档
save.addEventListener("click", function(){
    navigator.clipboard.writeText(btoa(btoa(JSON.stringify([kpprice,firstdo,unlock,upgrade,product,thing,reset,storming,challenge,inchallenge,autobuyer]))))
  .then(() => {
    alert('存档已经写入剪贴板!');
  })
  .catch(err => {
    console.error('有些奇怪的问题导致无法写入剪贴板:', err,'试试以文件格式保存?');
  });
})

let inputField = document.getElementById("inputField");
let loadsave
setInterval(function(){
    loadsave = JSON.parse(atob(atob(inputField.value)))
    if (typingsaves===1){
        if (loadsave !== "") {
            if (loadsave[9] !==0){
                document.getElementById("showsaves").textContent = ("此存档拥有"+cutnum(loadsave[4][0][0])+'e'+loadsave[4][0][1]+"本作业,"+cutnum(loadsave[4][1][0])+'e'+loadsave[4][1][1]+"点知识,正在进行挑战 "+loadsave[9])
            }else{
                document.getElementById("showsaves").textContent = ("此存档拥有"+cutnum(loadsave[4][0][0])+'e'+loadsave[4][0][1]+"本作业,"+cutnum(loadsave[4][1][0])+'e'+loadsave[4][1][1]+"点知识")
            }
        }else{
            document.getElementById("showsaves").textContent = '你似乎什么都没填充'
        }
    }
},10)
load.addEventListener("click", function(){
    typingsaves = 1
})
document.getElementById("loadin").addEventListener("click", function(){
kpprice = loadsave[0]
firstdo = loadsave[1]
unlock = loadsave[2]
upgrade = loadsave[3]
product = loadsave[4]
thing = loadsave[5]
reset = loadsave[6]
storming = loadsave[7]
challenge = loadsave[8]
inchallenge = loadsave[9]
autobuyer = loadsave[10]
typingsaves = 0
})
}
