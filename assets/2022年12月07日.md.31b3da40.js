import{_ as a,c as e,o as s,a as r}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2022年12月07日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年12月07日.md","lastUpdated":1670343218000}'),n={name:"2022年12月07日.md"},p=r(`<h1 id="_2022年12月07日" tabindex="-1">2022年12月07日 <a class="header-anchor" href="#_2022年12月07日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/xjbpbso" target="_blank" rel="noreferrer">Java 高级用法，写个代理侵入你 ?</a></p><p><a href="https://toutiao.io/k/i0pdq5y" target="_blank" rel="noreferrer">如何搭建一个自己的音乐服务器</a></p><p><a href="https://toutiao.io/k/w39ytdk" target="_blank" rel="noreferrer">Docker 下快速搭建 MySQL 和 Redis</a></p><p><a href="https://toutiao.io/k/kn65rx0" target="_blank" rel="noreferrer">流程引擎的架构设计</a></p><p><a href="https://toutiao.io/k/0orslcf" target="_blank" rel="noreferrer">微服务架构统一安全认证设计与实践</a></p><p><a href="https://toutiao.io/k/ye6ah6c" target="_blank" rel="noreferrer">Solidity 非权威开发指南（3）： OpenZepplin</a></p><p><a href="https://toutiao.io/k/3ynyzns" target="_blank" rel="noreferrer">4 万字硬核剖析，Kafka 面试 30 问（高级篇）</a></p><p><a href="https://toutiao.io/k/9s9vc5i" target="_blank" rel="noreferrer">支付系统就该这么设计（万能通用），稳的一批</a></p><p><a href="https://toutiao.io/k/yp6n865" target="_blank" rel="noreferrer">MySQL 锁，锁的到底是什么？</a></p><p><a href="https://toutiao.io/k/f1twcqc" target="_blank" rel="noreferrer">Rust 语法梳理与总结（下）</a></p><p><a href="https://toutiao.io/k/3io13j0" target="_blank" rel="noreferrer">Go1.20 继续小修小补 errors 库</a></p><p><a href="https://toutiao.io/k/ol17pg1" target="_blank" rel="noreferrer">深入理解 Kubernetes Pod 调试</a></p><p><a href="https://toutiao.io/k/c37kybv" target="_blank" rel="noreferrer">凹语言点亮 Arduino Nano 33</a></p><p><a href="https://toutiao.io/k/ygli5kr" target="_blank" rel="noreferrer">中通快递数据治理实践</a></p><p><a href="https://toutiao.io/k/z2vv88h" target="_blank" rel="noreferrer">GitHub 开源了多款字体「GitHub 热点速览 v.22.48」</a></p><p><a href="https://toutiao.io/k/5nnfmun" target="_blank" rel="noreferrer">[推荐] SQL 常用脚本大全</a></p><p><a href="https://toutiao.io/k/odpb7yb" target="_blank" rel="noreferrer">[推荐] 这么设计服务的幂等性就对了</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/equal-sum-arrays-with-minimum-number-of-operations" target="_blank" rel="noreferrer">通过最少操作次数使数组的和相等</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面 A、B 两处应该填入什么代码，才能确保顺利打印出结果？</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	m </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">S </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> __  </span><span style="color:#676E95;font-style:italic;">//A</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	p </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> __    </span><span style="color:#676E95;font-style:italic;">//B</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//print &quot;foo&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">S</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 或者 </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 函数返回参数是指针类型，所以可以用 </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> 取结构体的指针；B 处，如果填 </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">，则 p 是 S 类型；如果填 </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">，则 p 是 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">S 类型，不过都可以使用 p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">m 取得结构体的成员。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5698125.html" target="_blank" rel="noreferrer">“老板：不满意，重新写！”竞品分析做不好，可能是你踩了坑！</a></p><p><a href="https://www.woshipm.com/marketing/5697647.html" target="_blank" rel="noreferrer">为什么朋友圈老给我推奢侈品？</a></p><p><a href="https://www.woshipm.com/pd/5697865.html" target="_blank" rel="noreferrer">从用户视角，讨论电商数据产品的设计理念</a></p><p><a href="https://www.woshipm.com/it/5697696.html" target="_blank" rel="noreferrer">闲鱼转转，“换个活法”</a></p><p><a href="https://www.woshipm.com/marketing/5697474.html" target="_blank" rel="noreferrer">标签品牌：数字时代的品牌法则</a></p><p><a href="https://www.woshipm.com/it/5697810.html" target="_blank" rel="noreferrer">广告变现难，内容机构“卷”向自建品牌，可行吗？</a></p><p><a href="https://www.woshipm.com/pd/5697672.html" target="_blank" rel="noreferrer">数据主宰下的产品设计</a></p><p><a href="https://www.woshipm.com/it/5697963.html" target="_blank" rel="noreferrer">腾讯的“玩句”APP，要让创作者动动嘴皮就能做视频</a></p><p><a href="https://www.woshipm.com/operate/5697335.html" target="_blank" rel="noreferrer">运营人如何抓住电商红利</a></p><p><a href="https://www.woshipm.com/data-analysis/5698046.html" target="_blank" rel="noreferrer">一拍二吹三扯皮？一份“靠谱”的年度经营计划</a></p><p><a href="https://www.woshipm.com/ai/5697793.html" target="_blank" rel="noreferrer">从爆火的chatGPT讲起：自然语言生成式AI的前世今生，你想了解的一切</a></p><p><a href="https://www.woshipm.com/marketing/5697972.html" target="_blank" rel="noreferrer">音乐营销，你冲不冲</a></p><p><a href="https://www.woshipm.com/ai/5698029.html" target="_blank" rel="noreferrer">没让它干活，和ChatGPT聊了五千字，真的好像人</a></p><p><a href="https://www.woshipm.com/it/5697273.html" target="_blank" rel="noreferrer">淘宝订单可以导入微信，有人靠这招涨粉百万</a></p><p><a href="https://www.woshipm.com/ai/5698073.html" target="_blank" rel="noreferrer">ChatGPT是有点中文在身上的：鲁迅、脱口秀甚至世界杯…都被玩宕机了</a></p><p><a href="https://www.woshipm.com/open/5698125.html" target="_blank" rel="noreferrer">“老板：不满意，重新写！”竞品分析做不好，可能是你踩了坑！</a></p><p><a href="https://www.woshipm.com/pd/5697266.html" target="_blank" rel="noreferrer">情绪与设计，B端设计思考</a></p><p><a href="https://www.woshipm.com/ai/5697936.html" target="_blank" rel="noreferrer">这么好玩的ChatGPT，不会只是拿来玩的吧？</a></p><p><a href="https://www.woshipm.com/pd/5695418.html" target="_blank" rel="noreferrer">电商产品经理必学知识：订单扣库存方式</a></p><p><a href="https://www.woshipm.com/operate/5697715.html" target="_blank" rel="noreferrer">我帮大厂“拉新”，成本1人3元，月入上万</a></p><p><a href="https://www.woshipm.com/it/5697487.html" target="_blank" rel="noreferrer">元宇宙离我们有多远？</a></p><p><a href="https://www.woshipm.com/marketing/5697389.html" target="_blank" rel="noreferrer">世界杯：商业帝国的海天盛筵</a></p><p><a href="https://www.woshipm.com/operate/5696756.html" target="_blank" rel="noreferrer">连续12年稳坐品类第一，洗衣液王者“蓝月亮”如何利用私域实现业绩增长？</a></p><p><a href="https://www.woshipm.com/pmd/5696015.html" target="_blank" rel="noreferrer">直面用户，PaaS产品经理的“免死金牌”和“尚方宝剑”</a></p><p><a href="https://www.woshipm.com/it/5697303.html" target="_blank" rel="noreferrer">大盘终于回暖：互联网广告谁在增长？</a></p><p><a href="https://www.woshipm.com/ai/5697421.html" target="_blank" rel="noreferrer">两个最强AI模型聊了会天，对话内容令人脊背发凉</a></p><p><a href="https://www.woshipm.com/it/5697450.html" target="_blank" rel="noreferrer">学TikTok做电商，YouTube有点东西</a></p><p><a href="https://www.woshipm.com/pd/5697301.html" target="_blank" rel="noreferrer">场景驱动用户体验设计</a></p><p><a href="https://www.woshipm.com/zhichang/5697099.html" target="_blank" rel="noreferrer">我是如何在转岗2年内做到产品团队负责人的</a></p><p><a href="https://www.woshipm.com/marketing/5697326.html" target="_blank" rel="noreferrer">送给欧阳娜娜，价值千金的品牌起盘思路</a></p><p><a href="https://www.woshipm.com/operate/5697069.html" target="_blank" rel="noreferrer">观察5年，深度拆解usmile爆发背后的底层逻辑，这套方法一学就会</a></p><p><a href="https://www.woshipm.com/open/5697765.html" target="_blank" rel="noreferrer">做个B端竞品分析，我快被难哭了</a></p><p><a href="https://www.woshipm.com/pd/5697185.html" target="_blank" rel="noreferrer">B端产品架构设计：基于深度强化学习的供应链智能补货系统模型</a></p><p><a href="https://www.woshipm.com/it/5696935.html" target="_blank" rel="noreferrer">互联网的最后一公里，在鹤岗</a></p><p><a href="https://www.woshipm.com/marketing/5697136.html" target="_blank" rel="noreferrer">当我们做“品牌”时，到底该做些什么？</a></p><p><a href="https://www.woshipm.com/user-research/5697343.html" target="_blank" rel="noreferrer">从被遗忘的助记码，浅谈用户习惯</a></p><p><a href="https://www.woshipm.com/ai/5697585.html" target="_blank" rel="noreferrer">行走的代码生成器：chatGPT要让谷歌和程序员“下岗”了</a></p><p><a href="https://www.woshipm.com/pd/5696648.html" target="_blank" rel="noreferrer">套现业务的典型类型、案例与调查处理</a></p><p><a href="https://www.woshipm.com/marketing/5697365.html" target="_blank" rel="noreferrer">价值营销，B端产品数字营销最好的催化剂</a></p>`,63),t=[p];function l(o,c,h,i,m,w){return s(),e("div",null,t)}const D=a(n,[["render",l]]);export{b as __pageData,D as default};
