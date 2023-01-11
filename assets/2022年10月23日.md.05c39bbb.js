import{_ as s,c as n,o as a,a as e}from"./app.eff5f3e9.js";const A=JSON.parse('{"title":"2022年10月23日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年10月23日.md","lastUpdated":1666455469000}'),l={name:"2022年10月23日.md"},p=e(`<h1 id="_2022年10月23日" tabindex="-1">2022年10月23日 <a class="header-anchor" href="#_2022年10月23日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/merge-strings-alternately" target="_blank" rel="noreferrer">交替合并字符串</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么以及原因？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    h </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> hello</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> h </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> not </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> compilation </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案及解析：B。这道题目里面，是将函数 hello 赋值给变量 h，而不是函数的返回值（即不是进行函数调用），所以输出 not </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">。注意 Go 中函数是一等公民。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/online/5638590.html" target="_blank" rel="noreferrer">我，2年小公司B端产品经理，拒绝成为“野路子”</a></p><p><a href="https://www.woshipm.com/operate/5651697.html" target="_blank" rel="noreferrer">硬件产品降本策略</a></p><p><a href="https://www.woshipm.com/it/5651486.html" target="_blank" rel="noreferrer">智慧物流到智慧供应链的商业化PaaS之路</a></p><p><a href="https://www.woshipm.com/pd/5651363.html" target="_blank" rel="noreferrer">交互稿不仅仅是一张黑白稿而已！</a></p><p><a href="https://www.woshipm.com/it/5651667.html" target="_blank" rel="noreferrer">双11前，阿里系上线微信小程序，互联网“拆墙”怎样了</a></p><p><a href="https://www.woshipm.com/marketing/5651624.html" target="_blank" rel="noreferrer">私域SCRM避坑指南：新手最容易踩的6大坑</a></p><p><a href="https://www.woshipm.com/user-research/5651233.html" target="_blank" rel="noreferrer">这届网友有多爱复读：一个视频，重复刷好几遍</a></p><p><a href="https://www.woshipm.com/pd/5650144.html" target="_blank" rel="noreferrer">子账户之道 | 好的账户模型，从“分割子账开始”</a></p><p><a href="https://www.woshipm.com/operate/5651356.html" target="_blank" rel="noreferrer">ToB产品生命周期的不同阶段，产品经理的阶段目标和关键任务（一）</a></p><p><a href="https://www.woshipm.com/it/5601059.html" target="_blank" rel="noreferrer">深度长文：关于跨境Saas的一些思考</a></p><p><a href="https://www.woshipm.com/it/5650801.html" target="_blank" rel="noreferrer">量化青年：把生活过成一场实验</a></p><p><a href="https://www.woshipm.com/operate/5650972.html" target="_blank" rel="noreferrer">以头部电商为例，揭秘企业如何搭建商家成长体系？</a></p><p><a href="https://www.woshipm.com/it/5651560.html" target="_blank" rel="noreferrer">从罗永浩淘宝直播首秀，聊聊头部主播和平台分别是怎么想的</a></p><p><a href="https://www.woshipm.com/operate/5651327.html" target="_blank" rel="noreferrer">初级、中级、高级运营，他们的思维有何不同？</a></p><p><a href="https://www.woshipm.com/pd/5651238.html" target="_blank" rel="noreferrer">教你玩转礼物交互系统设计！</a></p><p><a href="https://www.woshipm.com/open/5651496.html" target="_blank" rel="noreferrer">用户量甩对手几条街的Keep，运营策略有何高超之处？</a></p><p><a href="https://www.woshipm.com/pd/5643457.html" target="_blank" rel="noreferrer">以房产业务为例，分享SaaS业务设计心路</a></p>`,24),r=[p];function o(t,c,i,h,D,m){return a(),n("div",null,r)}const b=s(l,[["render",o]]);export{A as __pageData,b as default};
