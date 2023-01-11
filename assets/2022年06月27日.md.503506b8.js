import{_ as s,c as a,o as n,a as e}from"./app.eff5f3e9.js";const A=JSON.parse('{"title":"2022年06月27日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年06月27日.md","lastUpdated":1656283347000}'),l={name:"2022年06月27日.md"},p=e(`<h1 id="_2022年06月27日" tabindex="-1">2022年06月27日 <a class="header-anchor" href="#_2022年06月27日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/9z6dese" target="_blank" rel="noreferrer">云计算的全球变局与中国故事</a></p><p><a href="https://toutiao.io/k/he3fzao" target="_blank" rel="noreferrer">[推荐] Redis夺命52连问</a></p><p><a href="https://toutiao.io/k/bclz2n6" target="_blank" rel="noreferrer">[推荐] 肝了一个月的 DDD，一文带你掌握！</a></p><p><a href="https://toutiao.io/k/ulsc0so" target="_blank" rel="noreferrer">[推荐] 高并发下如何防重？</a></p><p><a href="https://toutiao.io/k/4tls39t" target="_blank" rel="noreferrer">[推荐] 我们公司使用了 5 年的系统限流方案！从实现到部署实战详解，稳的一批!​</a></p><p><a href="https://toutiao.io/k/b0g4460" target="_blank" rel="noreferrer">[推荐] 3000帧动画图解MySQL为什么需要binlog、redo log和undo log</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/longest-uncommon-subsequence-ii" target="_blank" rel="noreferrer">最长特殊序列 II</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">People</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">People</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">People</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Teacher</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	People</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Teacher</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">teacher showB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	t </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Teacher</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">	t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">showA</span></span>
<span class="line"><span style="color:#A6ACCD;">showB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">知识点：结构体嵌套。这道题可以结合第 </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> 天的第三题一起看，Teacher 没有自己 </span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">，所以调用内部类型 People 的同名方法，需要注意的是第 </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> 行代码调用的是 People 自己的 ShowB 方法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/online/5485393.html" target="_blank" rel="noreferrer">2022年，我为什么劝你来做B端产品经理？</a></p><p><a href="http://www.woshipm.com/evaluating/5499633.html" target="_blank" rel="noreferrer">Lazada在东南亚跨境电商中如何保持自身竞争力？</a></p><p><a href="http://www.woshipm.com/marketing/5501137.html" target="_blank" rel="noreferrer">餐饮品牌必看，肯德基、麦当劳如何做到私域步步为“赢”</a></p><p><a href="http://www.woshipm.com/copy/5486841.html" target="_blank" rel="noreferrer">20年实战总结，爆款标题的7个方法，短视频推文都好用</a></p><p><a href="http://www.woshipm.com/pd/5502036.html" target="_blank" rel="noreferrer">「防呆」手法在设计中的应用</a></p><p><a href="http://www.woshipm.com/it/5501716.html" target="_blank" rel="noreferrer">《梦华录》点映风波：不赚钱的爆款，不正常的业态</a></p><p><a href="http://www.woshipm.com/pd/5471542.html" target="_blank" rel="noreferrer">产品需要了解的游戏化设计</a></p><p><a href="http://www.woshipm.com/ucd/5501453.html" target="_blank" rel="noreferrer">B端交互 | 重新认识页面、浮层、弹窗和抽屉</a></p><p><a href="http://www.woshipm.com/zhichang/5501432.html" target="_blank" rel="noreferrer">创业公司的员工如何不靠运气致富？</a></p><p><a href="http://www.woshipm.com/it/5501518.html" target="_blank" rel="noreferrer">饿了么免单第四天，我日均自费六顿饭</a></p><p><a href="http://www.woshipm.com/it/5501032.html" target="_blank" rel="noreferrer">短期看流量，中期看供给，长期看品牌</a></p><p><a href="http://www.woshipm.com/pd/5498232.html" target="_blank" rel="noreferrer">B端SaaS | 通过电话调研快速识别产品关键问题</a></p><p><a href="http://www.woshipm.com/it/5501451.html" target="_blank" rel="noreferrer">外卖还能卷出新故事？</a></p><p><a href="http://www.woshipm.com/pd/5498206.html" target="_blank" rel="noreferrer">平衡计分卡：驱动影响力的框架</a></p><p><a href="http://www.woshipm.com/it/5500508.html" target="_blank" rel="noreferrer">谁是下一个“互联网嘴替”？</a></p><p><a href="http://www.woshipm.com/it/5501428.html" target="_blank" rel="noreferrer">为什么说小程序的商业价值被低估了？</a></p><p><a href="http://www.woshipm.com/it/5489102.html" target="_blank" rel="noreferrer">网红式露营，退🤺退🤺退🤺</a></p><p><a href="http://www.woshipm.com/it/5500457.html" target="_blank" rel="noreferrer">符号 · 社交：元宇宙下数字藏品的破圈</a></p><p><a href="http://www.woshipm.com/it/5501118.html" target="_blank" rel="noreferrer">不提GMV，618电商平台要讲什么</a></p>`,32),r=[p];function o(t,c,i,D,h,F){return n(),a("div",null,r)}const b=s(l,[["render",o]]);export{A as __pageData,b as default};
