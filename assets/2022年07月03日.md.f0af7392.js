import{_ as a,c as s,o as n,a as e}from"./app.eff5f3e9.js";const y=JSON.parse('{"title":"2022年07月03日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年07月03日.md","lastUpdated":1656803677000}'),r={name:"2022年07月03日.md"},l=e(`<h1 id="_2022年07月03日" tabindex="-1">2022年07月03日 <a class="header-anchor" href="#_2022年07月03日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/i7tdmsy" target="_blank" rel="noreferrer">优质网站同好者周刊（第 072 期） | 倾城博客</a></p><p><a href="https://toutiao.io/k/rsgjy5z" target="_blank" rel="noreferrer">推荐一款 JSON 可视化工具神器！</a></p><p><a href="https://toutiao.io/k/qz3rxp6" target="_blank" rel="noreferrer">go-zero微服务实战系列（八、如何处理每秒上万次的下单请求）</a></p><p><a href="https://toutiao.io/k/37d4dui" target="_blank" rel="noreferrer">有关 Vue 源码的简单实现，做一个属于自己的 min-vue</a></p><p><a href="https://toutiao.io/k/5bfyp33" target="_blank" rel="noreferrer">跟HR在大群吵了一架...</a></p><p><a href="https://toutiao.io/k/c0mnyrh" target="_blank" rel="noreferrer">欢迎加入读者圈子，一起交流！</a></p><p><a href="https://toutiao.io/k/nz567nx" target="_blank" rel="noreferrer">零配置python日志，安装即用！</a></p><p><a href="https://toutiao.io/k/xs34jb6" target="_blank" rel="noreferrer">基于Impala的高性能数仓实践之执行引擎模块</a></p><p><a href="https://toutiao.io/k/5xx92iz" target="_blank" rel="noreferrer">Git进阶系列 | 6. 交互式Rebase</a></p><p><a href="https://toutiao.io/k/3i7yfq0" target="_blank" rel="noreferrer">【第2658期】Vue 2.7 正式发布，代号为 Naruto</a></p><p><a href="https://toutiao.io/k/b0g4460" target="_blank" rel="noreferrer">[推荐] 3000帧动画图解MySQL为什么需要binlog、redo log和undo log</a></p><p><a href="https://toutiao.io/k/ptp0ru2" target="_blank" rel="noreferrer">[推荐] 吐血整理：一份不可多得的架构师图谱！</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/next-greater-element-iii" target="_blank" rel="noreferrer">下一个更大元素 III</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面代码下划线处可以填入哪个选项？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yes nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> s1</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> s2</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> s1、s2 都可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：A。</span></span>
<span class="line"><span style="color:#A6ACCD;">知识点：</span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 切片和空切片。</span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 切片和 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 相等，一般用来表示一个不存在的切片；空切片和 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 不相等，表示一个空的集合。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/online/5506608.html" target="_blank" rel="noreferrer">0-2岁产品新人必看：如何提高原型设计效率，锻炼深度思考能力？</a></p><p><a href="http://www.woshipm.com/pd/5510780.html" target="_blank" rel="noreferrer">九千字，从定义到案例，讲透UI必懂的5个心理学知识！</a></p><p><a href="http://www.woshipm.com/evaluating/5510713.html" target="_blank" rel="noreferrer">好轻产品体验报告 ｜ 一位深巷里的体重管理专家</a></p><p><a href="http://www.woshipm.com/pd/5511265.html" target="_blank" rel="noreferrer">大厂都在推的“多屏协同”究竟都有啥不同？</a></p><p><a href="http://www.woshipm.com/user-research/5510280.html" target="_blank" rel="noreferrer">B端SaaS | 全方位洞察客户的实践方法论</a></p><p><a href="http://www.woshipm.com/it/5511013.html" target="_blank" rel="noreferrer">鸿星尔克爆红一年后，“继任者”带着雪莲文学走来了</a></p><p><a href="http://www.woshipm.com/it/5509600.html" target="_blank" rel="noreferrer">为什么一次性商品越来越多了？</a></p><p><a href="http://www.woshipm.com/open/5511065.html" target="_blank" rel="noreferrer">万亿智能硬件产品市场，产品人需要了解的那些事 |「2022互联网人破圈计划」系列直播第16期</a></p><p><a href="http://www.woshipm.com/blockchain/5505444.html" target="_blank" rel="noreferrer">Web3项目的GTM战略：新的心态、策略和衡量标准</a></p><p><a href="http://www.woshipm.com/user-research/5502714.html" target="_blank" rel="noreferrer">一篇可落地的「用户留存」体系</a></p><p><a href="http://www.woshipm.com/marketing/5510316.html" target="_blank" rel="noreferrer">新手博主如何从0到1？试试这5大步骤【建议收藏】</a></p><p><a href="http://www.woshipm.com/ucd/5508949.html" target="_blank" rel="noreferrer">B端组件设计红黑榜</a></p><p><a href="http://www.woshipm.com/pd/5510063.html" target="_blank" rel="noreferrer">产品设计中的延迟数据</a></p><p><a href="http://www.woshipm.com/operate/5509106.html" target="_blank" rel="noreferrer">案例拆解：从抖音FACT+全域经营方法论拆解「东方甄选」的运营策略</a></p><p><a href="http://www.woshipm.com/marketing/5510074.html" target="_blank" rel="noreferrer">直播电商的“矩阵原理”</a></p><p><a href="http://www.woshipm.com/online/5510102.html" target="_blank" rel="noreferrer">围观｜一批新鲜出炉的产品offer</a></p><p><a href="http://www.woshipm.com/it/5509854.html" target="_blank" rel="noreferrer">网易云音乐做匿名社交，要靠算法赢Soul？</a></p>`,36),p=[l];function t(o,c,i,h,D,m){return n(),s("div",null,p)}const F=a(r,[["render",t]]);export{y as __pageData,F as default};
