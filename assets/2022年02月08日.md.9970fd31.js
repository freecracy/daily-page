import{_ as s,c as a,o as n,a as e}from"./app.eff5f3e9.js";const h=JSON.parse('{"title":"2022年02月08日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]}],"relativePath":"2022年02月08日.md","lastUpdated":1644333822000}'),l={name:"2022年02月08日.md"},p=e(`<h1 id="_2022年02月08日" tabindex="-1">2022年02月08日 <a class="header-anchor" href="#_2022年02月08日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/obimloc" target="_blank" rel="noreferrer">2022 年别再焦虑啦！加入我们！</a></p><p><a href="https://toutiao.io/k/rdpao5x" target="_blank" rel="noreferrer">Go 原生并发原语和最佳实践</a></p><p><a href="https://toutiao.io/k/nrwlirv" target="_blank" rel="noreferrer">赵学敏：京东商品图谱构建与实体对齐</a></p><p><a href="https://toutiao.io/k/5tx1zgw" target="_blank" rel="noreferrer">支付系统架构设计详解</a></p><p><a href="https://toutiao.io/k/ch1khtj" target="_blank" rel="noreferrer">聊一聊如何用C#轻松完成一个SAGA分布式事务</a></p><p><a href="https://toutiao.io/k/6d7kip2" target="_blank" rel="noreferrer">深度剖析 Vue3 的调度系统</a></p><p><a href="https://toutiao.io/k/x1af9rz" target="_blank" rel="noreferrer">136 python|第八部分：并发网络编程（一）网络编程上</a></p><p><a href="https://toutiao.io/k/hetjoek" target="_blank" rel="noreferrer">递归调用uGo函数</a></p><p><a href="https://toutiao.io/k/brnxhv9" target="_blank" rel="noreferrer">面试官：Context携带数据是线程安全的吗？</a></p><p><a href="https://toutiao.io/k/92sk26n" target="_blank" rel="noreferrer">[推荐] 阿里专家：如何画出优秀的架构图？</a></p><p><a href="https://toutiao.io/k/1g7flto" target="_blank" rel="noreferrer">[推荐] 作为研发Leader，如何做总结</a></p><p><a href="https://toutiao.io/k/fib82nl" target="_blank" rel="noreferrer">[推荐] JVM调优的几种场景（建议收藏）</a></p><p><a href="https://toutiao.io/k/ectyif9" target="_blank" rel="noreferrer">[推荐] 原来这才是动态代理！！！</a></p><p><a href="https://toutiao.io/k/7hrrplb" target="_blank" rel="noreferrer">[推荐] 面试官问: 如何设计一个高并发系统?</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/grid-illumination" target="_blank" rel="noreferrer">网格照明</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面赋值正确的是：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#C792EA;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：BD。这道题考的知识点是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">。</span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 只能赋值给指针、</span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 或 slice 类型的变量。强调下 D 选项的 </span><span style="color:#C792EA;">error</span><span style="color:#A6ACCD;"> 类型，它是一种内置接口类型，看它的源码就知道，所以 D 是对的。</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,20),r=[p];function o(t,c,i,D,A,C){return n(),a("div",null,r)}const b=s(l,[["render",o]]);export{h as __pageData,b as default};
