import{_ as s,c as a,o as n,a as e}from"./app.eff5f3e9.js";const h=JSON.parse('{"title":"2022年01月30日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]}],"relativePath":"2022年01月30日.md","lastUpdated":1643555859000}'),p={name:"2022年01月30日.md"},l=e(`<h1 id="_2022年01月30日" tabindex="-1">2022年01月30日 <a class="header-anchor" href="#_2022年01月30日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/obimloc" target="_blank" rel="noreferrer">2022 年别再焦虑啦！加入我们！</a></p><p><a href="https://toutiao.io/k/qsiqiua" target="_blank" rel="noreferrer">基于Skywalking全链路行业解决方案</a></p><p><a href="https://toutiao.io/k/pgjxjvc" target="_blank" rel="noreferrer">贝壳 Go 实现的 IM 群聊优化之路</a></p><p><a href="https://toutiao.io/k/g1apymz" target="_blank" rel="noreferrer">一种比线段树还高效的区间算法</a></p><p><a href="https://toutiao.io/k/2vpircg" target="_blank" rel="noreferrer">从头到尾再讲一遍ThreadLocal</a></p><p><a href="https://toutiao.io/k/88cw3d6" target="_blank" rel="noreferrer">5 张图带你搞懂容器网络的工作原理</a></p><p><a href="https://toutiao.io/k/9ksxizq" target="_blank" rel="noreferrer">134 python|第七部分：数据库（一）</a></p><p><a href="https://toutiao.io/k/cnhj0br" target="_blank" rel="noreferrer">浅析TypeScript Compiler 原理</a></p><p><a href="https://toutiao.io/k/12dfle9" target="_blank" rel="noreferrer">把复杂交给我们，把简单还给你丨TiVP 让 SQL 执行计划可视化</a></p><p><a href="https://toutiao.io/k/2irk48u" target="_blank" rel="noreferrer">开源爱好者月刊《HelloGitHub》第 70 期</a></p><p><a href="https://toutiao.io/k/q6yzp5j" target="_blank" rel="noreferrer">[推荐] 优惠券系统架构设计与实践</a></p><p><a href="https://toutiao.io/k/c7mn7hz" target="_blank" rel="noreferrer">[推荐] 从MVC到DDD的架构演进</a></p><p><a href="https://toutiao.io/k/zgmi04u" target="_blank" rel="noreferrer">[推荐] 技术干货｜缓存一致性最佳实践</a></p><p><a href="https://toutiao.io/k/p935kqr" target="_blank" rel="noreferrer">[推荐] 面试官问：设计高并发系统的时候，数据库层面该如何设计？</a></p><p><a href="https://toutiao.io/k/abc8vou" target="_blank" rel="noreferrer">[推荐] 优雅整洁的 Java 代码命名技巧，风之极·净化</a></p><p><a href="https://toutiao.io/k/lpnakbk" target="_blank" rel="noreferrer">[推荐] Redis 很屌，不懂使用规范就糟蹋了</a></p><p><a href="https://toutiao.io/k/t6j66db" target="_blank" rel="noreferrer">[推荐] 字节的分布式链路追踪实践，教科书式的搭建指南</a></p><p><a href="https://toutiao.io/k/7hrrplb" target="_blank" rel="noreferrer">[推荐] 面试官问: 如何设计一个高并发系统?</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/uncommon-words-from-two-sentences" target="_blank" rel="noreferrer">两句话中的不常见单词</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码能否通过编译，如果可以，输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	s1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	s2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	s1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案：不能通过编译。</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 的第二个参数不能直接使用 slice，需使用 … 操作符，将一个切片追加到另一个切片上：</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">s2…</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">。或者直接跟上元素，形如：</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,24),r=[l];function o(t,c,i,D,y,C){return n(),a("div",null,r)}const A=s(p,[["render",o]]);export{h as __pageData,A as default};
