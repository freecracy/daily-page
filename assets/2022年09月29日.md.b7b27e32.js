import{_ as a,c as s,o as e,a as n}from"./app.eff5f3e9.js";const d=JSON.parse('{"title":"2022年09月29日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年09月29日.md","lastUpdated":1664382306000}'),r={name:"2022年09月29日.md"},l=n(`<h1 id="_2022年09月29日" tabindex="-1">2022年09月29日 <a class="header-anchor" href="#_2022年09月29日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/o8wbfmb" target="_blank" rel="noreferrer">如何利用mysql5.7提供的虚拟列来提高查询效率</a></p><p><a href="https://toutiao.io/k/ussdz4q" target="_blank" rel="noreferrer">[推荐] Netty、Kafka中的零拷贝技术到底有多牛?</a></p><p><a href="https://toutiao.io/k/luf0yh6" target="_blank" rel="noreferrer">[推荐] 聊聊 8种 架构模式</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/string-rotation-lcci" target="_blank" rel="noreferrer">字符串轮转</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 与 </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 的区别</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 和 </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 是 Go 语言内建函数，用来分配内存，但适用的类型不同。</span></span>
<span class="line"><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 会为 T 类型的新值分配已置零的内存空间，并返回地址（指针），即类型为 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">T 的值。换句话说就是，返回一个指针，该指针指向新分配的、类型为 T 的零值。适用于值类型，如数组、结构体等。</span></span>
<span class="line"><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 返回初始化之后的 T 类型的值，这个值并不是 T 类型的零值，也不是指针 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">T，是经过初始化之后的 T 的引用。</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 只适用于 slice、</span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 和 channel。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5614061.html" target="_blank" rel="noreferrer">2022产品经理大会正式官宣 | 6大专场，带来一场年度的思维盛宴！</a></p><p><a href="https://www.woshipm.com/marketing/5626273.html" target="_blank" rel="noreferrer">“看脸”时代的消费风口，“医美圈”的专业营销与生态“净化”</a></p><p><a href="https://www.woshipm.com/chuangye/5625773.html" target="_blank" rel="noreferrer">创业指南 | 如何组织创业团队？</a></p><p><a href="https://www.woshipm.com/it/5625561.html" target="_blank" rel="noreferrer">Zepeto 进军 Web3，元宇宙社交的“真需求”到底是什么？</a></p><p><a href="https://www.woshipm.com/operate/5620143.html" target="_blank" rel="noreferrer">如何玩转数字化门店经营，用户教育中的降本增效</a></p><p><a href="https://www.woshipm.com/operate/5626052.html" target="_blank" rel="noreferrer">小众赛道也能变现百万，揭秘“兴趣达人”的生意经</a></p><p><a href="https://www.woshipm.com/ucd/5625971.html" target="_blank" rel="noreferrer">交互设计的价值是什么？</a></p><p><a href="https://www.woshipm.com/marketing/5625633.html" target="_blank" rel="noreferrer">小红书上，还有中小创业者的机会吗？</a></p><p><a href="https://www.woshipm.com/it/5625586.html" target="_blank" rel="noreferrer">寒冬下的大厂广告，“无人生还”？</a></p><p><a href="https://www.woshipm.com/it/5625463.html" target="_blank" rel="noreferrer">从东南亚到欧美，淘金TikTok的正确姿势是什么？</a></p><p><a href="https://www.woshipm.com/online/5625632.html" target="_blank" rel="noreferrer">新人会画规范原型有多重要？年薪20万的产品岗位是这样要求的……</a></p><p><a href="https://www.woshipm.com/pd/5625443.html" target="_blank" rel="noreferrer">产品成长期，如何用设计提升产品增长？</a></p><p><a href="https://www.woshipm.com/it/5625338.html" target="_blank" rel="noreferrer">抖音加码图文，平台们逐鹿“种草”</a></p><p><a href="https://www.woshipm.com/pd/5625322.html" target="_blank" rel="noreferrer">5年中台实践的7条经验</a></p><p><a href="https://www.woshipm.com/it/5618015.html" target="_blank" rel="noreferrer">巨头围猎，跨境电商重新洗牌？</a></p><p><a href="https://www.woshipm.com/user-research/5625199.html" target="_blank" rel="noreferrer">踩过很多坑后，我们吐血归纳了提升电话邀约成功率的方法</a></p>`,26),p=[l];function t(o,c,h,i,m,w){return e(),s("div",null,p)}const D=a(r,[["render",t]]);export{d as __pageData,D as default};
