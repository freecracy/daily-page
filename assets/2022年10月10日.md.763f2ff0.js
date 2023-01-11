import{_ as a,c as s,o as e,a as n}from"./app.eff5f3e9.js";const w=JSON.parse('{"title":"2022年10月10日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年10月10日.md","lastUpdated":1665332219000}'),r={name:"2022年10月10日.md"},p=n(`<h1 id="_2022年10月10日" tabindex="-1">2022年10月10日 <a class="header-anchor" href="#_2022年10月10日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/54f7165" target="_blank" rel="noreferrer">JuiceFS 在 Elasticsearch/ClickHouse 温冷数据存储中的实践</a></p><p><a href="https://toutiao.io/k/385cm7h" target="_blank" rel="noreferrer">TCP 拥塞控制详解 | 7. 超越 TCP</a></p><p><a href="https://toutiao.io/k/zu4hyfd" target="_blank" rel="noreferrer">深入理解 ForkJoinPool：入门、使用、原理</a></p><p><a href="https://toutiao.io/k/bgbsmkh" target="_blank" rel="noreferrer">高性能 Java 计算服务的性能调优实战</a></p><p><a href="https://toutiao.io/k/lrp0ulc" target="_blank" rel="noreferrer">Jakarta EE 10 发布，开启云原生 Java 时代</a></p><p><a href="https://toutiao.io/k/8576wwj" target="_blank" rel="noreferrer">Go 内存泄漏，pprof 够用了么？</a></p><p><a href="https://toutiao.io/k/e8oognu" target="_blank" rel="noreferrer">Flink 数据倾斜优化方案</a></p><p><a href="https://toutiao.io/k/5gle43p" target="_blank" rel="noreferrer">这些强大的 JS 操作符，你知道几个？</a></p><p><a href="https://toutiao.io/k/6het6ih" target="_blank" rel="noreferrer">OneFlow 的大模型分片保存和加载策略</a></p><p><a href="https://toutiao.io/k/q6l4zbt" target="_blank" rel="noreferrer">浅谈数据：数据领域需要掌握些什么？</a></p><p><a href="https://toutiao.io/k/azf7ub6" target="_blank" rel="noreferrer">[推荐] 性能优化必备——火焰图</a></p><p><a href="https://toutiao.io/k/f7r13v5" target="_blank" rel="noreferrer">[推荐] 分享16个我总结的思维模型（程序员必读，受用终身）</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing" target="_blank" rel="noreferrer">使序列递增的最小交换次数</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码能否通过编译，如果可以，输出什么？</span></span>
<span class="line"><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	size </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span></span>
<span class="line"><span style="color:#A6ACCD;">	max_size </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">max_size</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案：不能通过编译。</span></span>
<span class="line"><span style="color:#A6ACCD;">参考解析：这道题的主要知识点是变量声明的简短模式，形如：x </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100.</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">但这种声明方式有限制：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">必须使用显示初始化；</span></span>
<span class="line"><span style="color:#A6ACCD;">不能提供数据类型，编译器会自动推导；</span></span>
<span class="line"><span style="color:#A6ACCD;">只能在函数内部使用简短模式；</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5634895.html" target="_blank" rel="noreferrer">入行2年，只会接需求画原型，我还能做好B端产品经理吗？</a></p><p><a href="https://www.woshipm.com/pd/5636235.html" target="_blank" rel="noreferrer">新零售SaaS架构：组织管理的底层逻辑与架构设计</a></p><p><a href="https://www.woshipm.com/evaluating/5636325.html" target="_blank" rel="noreferrer">看估值过亿的降噪工具，如何打造PLG飞轮</a></p><p><a href="https://www.woshipm.com/pd/5636176.html" target="_blank" rel="noreferrer">卡片式设计 | 掌握这些技法，快速提升界面效果！</a></p><p><a href="https://www.woshipm.com/ucd/5636346.html" target="_blank" rel="noreferrer">超肝交互改版长篇 | 飞书多维表格交互改版全流程分享</a></p><p><a href="https://www.woshipm.com/pd/5636330.html" target="_blank" rel="noreferrer">MVP的极简做法，适用于从0到1的初创公司或大厂孵化的新业务</a></p><p><a href="https://www.woshipm.com/it/5636263.html" target="_blank" rel="noreferrer">凡客，复活在抖音直播间</a></p><p><a href="https://www.woshipm.com/zhichang/5635084.html" target="_blank" rel="noreferrer">产品总监裸辞？我是怎么思考这件事的</a></p><p><a href="https://www.woshipm.com/chuangye/5636292.html" target="_blank" rel="noreferrer">风口背后：第一批 00 后 Web3 创业者，和他们的「人间清醒」</a></p><p><a href="https://www.woshipm.com/marketing/5636290.html" target="_blank" rel="noreferrer">如何用web3.0的方式，创造品牌星球元宇宙？</a></p><p><a href="https://www.woshipm.com/it/5636261.html" target="_blank" rel="noreferrer">贵妇堆里“捡垃圾”：小镇女孩在小红书学习薅羊毛</a></p><p><a href="https://www.woshipm.com/pd/5636032.html" target="_blank" rel="noreferrer">不同发展阶段的SaaS，如何把握好产品规划重点？</a></p><p><a href="https://www.woshipm.com/it/5636143.html" target="_blank" rel="noreferrer">闲鱼引入七天无理由退货，是什么信号？</a></p><p><a href="https://www.woshipm.com/open/5636147.html" target="_blank" rel="noreferrer">我，2年B端产品，每天接需求画原型，变成了一个功能产品经理</a></p><p><a href="https://www.woshipm.com/it/5635984.html" target="_blank" rel="noreferrer">现在入局TikTok，是怨种炮灰还是抢占红利？</a></p><p><a href="https://www.woshipm.com/ucd/5634859.html" target="_blank" rel="noreferrer">Apple 是怎么为阿拉伯用户做设计的？</a></p><p><a href="https://www.woshipm.com/it/5635539.html" target="_blank" rel="noreferrer">轮到淘宝直播“守擂”了</a></p>`,36),l=[p];function t(o,i,c,h,m,b){return e(),s("div",null,l)}const u=a(r,[["render",t]]);export{w as __pageData,u as default};
