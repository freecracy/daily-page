import{_ as a,c as s,o as n,a as e}from"./app.eff5f3e9.js";const f=JSON.parse('{"title":"2022年07月17日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年07月17日.md","lastUpdated":1657987979000}'),r={name:"2022年07月17日.md"},l=e(`<h1 id="_2022年07月17日" tabindex="-1">2022年07月17日 <a class="header-anchor" href="#_2022年07月17日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/wjiq1dv" target="_blank" rel="noreferrer">优质网站同好者周刊（第 074 期） | 倾城博客</a></p><p><a href="https://toutiao.io/k/5cpvhga" target="_blank" rel="noreferrer">MySQL六十六问，两万字+五十图详解！有点六！</a></p><p><a href="https://toutiao.io/k/kx9h6j4" target="_blank" rel="noreferrer">基于 CRON 库扩展的分布式 Crontab 的实现</a></p><p><a href="https://toutiao.io/k/6kgja66" target="_blank" rel="noreferrer">前端趋势 2022</a></p><p><a href="https://toutiao.io/k/pqkj5w9" target="_blank" rel="noreferrer">开源数据质量解决方案——Apache Griffin入门宝典</a></p><p><a href="https://toutiao.io/k/84iz6z1" target="_blank" rel="noreferrer">字节遭遇离职潮</a></p><p><a href="https://toutiao.io/k/w2jzwpe" target="_blank" rel="noreferrer">基于大数据的OLAP技术，4个角度一篇讲明白</a></p><p><a href="https://toutiao.io/k/7yq9ig0" target="_blank" rel="noreferrer">如何在 React 18中 利用Suspense 实现 服务端渲染(SSR)</a></p><p><a href="https://toutiao.io/k/te7l1kw" target="_blank" rel="noreferrer">K8s里Spring 微服务项目，Pod 关闭对用户的影响比较大！</a></p><p><a href="https://toutiao.io/k/9gemqsj" target="_blank" rel="noreferrer">SDN系统方法 | 1. 概述</a></p><p><a href="https://toutiao.io/k/93k2zfb" target="_blank" rel="noreferrer">[推荐] 高并发，你真的理解透彻了吗？</a></p><p><a href="https://toutiao.io/k/xhwa9mo" target="_blank" rel="noreferrer">[推荐] 服务端监控架构设计与实践</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/array-nesting" target="_blank" rel="noreferrer">数组嵌套</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码正确的输出是什么？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> F M D</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> D F M</span></span>
<span class="line"><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> F D M</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：C。</span></span>
<span class="line"><span style="color:#A6ACCD;">被调用函数里的 </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> 语句在返回之前就会被执行，所以输出顺序是 F D M。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/online/5521100.html" target="_blank" rel="noreferrer">为什么我能写PRD，却依旧拿不到产品经理Offer？</a></p><p><a href="https://www.woshipm.com/it/5527816.html" target="_blank" rel="noreferrer">谁来捉拿版权刺客？</a></p><p><a href="https://www.woshipm.com/it/5528111.html" target="_blank" rel="noreferrer">微信视频号带货，放出了“视频号小店”这个大招</a></p><p><a href="https://www.woshipm.com/marketing/5527919.html" target="_blank" rel="noreferrer">网红品牌信任原罪，在定位？</a></p><p><a href="https://www.woshipm.com/marketing/5526584.html" target="_blank" rel="noreferrer">心域营销：不要抢占心智，而是进入心域</a></p><p><a href="https://www.woshipm.com/it/5527385.html" target="_blank" rel="noreferrer">最高级的思考方式，是底层逻辑</a></p><p><a href="https://www.woshipm.com/marketing/5526955.html" target="_blank" rel="noreferrer">9种“占便宜”的营销策略方案，助你轻松精准引流、成交客户！</a></p><p><a href="https://www.woshipm.com/operate/5526914.html" target="_blank" rel="noreferrer">如何让1000个人帮你赚钱？</a></p><p><a href="https://www.woshipm.com/pmd/5526553.html" target="_blank" rel="noreferrer">产品经理第一要务之求真模型</a></p><p><a href="https://www.woshipm.com/user-research/5527224.html" target="_blank" rel="noreferrer">用户体验之用户满意度测量</a></p><p><a href="https://www.woshipm.com/ai/5527487.html" target="_blank" rel="noreferrer">大厂齐造人，同向不同路：搭平台、养IP、工具人、大撒币</a></p><p><a href="https://www.woshipm.com/evaluating/5520095.html" target="_blank" rel="noreferrer">对不起，99%的品牌都不会做竞品分析</a></p><p><a href="https://www.woshipm.com/it/5526825.html" target="_blank" rel="noreferrer">解析数智化敏捷组织建设：重构、升级和进化</a></p><p><a href="https://www.woshipm.com/user-research/5526620.html" target="_blank" rel="noreferrer">听懂用户们在说什么——UGC文本分析怎么做？</a></p><p><a href="https://www.woshipm.com/zhichang/5527189.html" target="_blank" rel="noreferrer">系统支点：为什么你忙活半天，却没解决问题？</a></p><p><a href="https://www.woshipm.com/pd/5526704.html" target="_blank" rel="noreferrer">轮播图失宠？无轮播图设计可能成为移动产品设计趋势</a></p><p><a href="https://www.woshipm.com/it/5527100.html" target="_blank" rel="noreferrer">大厂的“小红书梦”该醒了</a></p><p><a href="https://www.woshipm.com/it/5527302.html" target="_blank" rel="noreferrer">卧底周杰伦粉丝群一个月：爱豆那套，我们不屑</a></p>`,37),p=[l];function t(o,c,i,h,m,b){return n(),s("div",null,p)}const w=a(r,[["render",t]]);export{f as __pageData,w as default};
