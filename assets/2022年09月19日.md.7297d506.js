import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const A=JSON.parse('{"title":"2022年09月19日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年09月19日.md","lastUpdated":1663517730000}'),p={name:"2022年09月19日.md"},e=l(`<h1 id="_2022年09月19日" tabindex="-1">2022年09月19日 <a class="header-anchor" href="#_2022年09月19日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/udifd0q" target="_blank" rel="noreferrer">听说&quot;羊了个羊”很火，带大家写个代码快速加入羊群~</a></p><p><a href="https://toutiao.io/k/ojs1csb" target="_blank" rel="noreferrer">PostgreSQL 越来越流行</a></p><p><a href="https://toutiao.io/k/ccgjv8r" target="_blank" rel="noreferrer">优雅的使用 Dockerfile 定制镜像，1.5W 字长文，值得收藏！</a></p><p><a href="https://toutiao.io/k/pvgyw02" target="_blank" rel="noreferrer">字节跳动数据湖在实时数仓中的实践</a></p><p><a href="https://toutiao.io/k/mbd7pmc" target="_blank" rel="noreferrer">C++类设计和实现的十大最佳实践</a></p><p><a href="https://toutiao.io/k/cbxriyx" target="_blank" rel="noreferrer">前端各种调试工具的通用原理</a></p><p><a href="https://toutiao.io/k/w4tiunr" target="_blank" rel="noreferrer">go实现规则引擎</a></p><p><a href="https://toutiao.io/k/d9lsbmw" target="_blank" rel="noreferrer">拔掉网线后， 原本的 TCP 连接还存在吗？</a></p><p><a href="https://toutiao.io/k/v022nqp" target="_blank" rel="noreferrer">2022年 AI 技术成熟度曲线</a></p><p><a href="https://toutiao.io/k/j96q7he" target="_blank" rel="noreferrer">攻破主流数仓缺陷，字节跳动基于Doris的湖仓分析探索实践</a></p><p><a href="https://toutiao.io/k/rdhhq5d" target="_blank" rel="noreferrer">[推荐] 微服务网关鉴权：gateway使用、网关限流使用、用户密码加密、JWT鉴权</a></p><p><a href="https://toutiao.io/k/tz7p6nl" target="_blank" rel="noreferrer">[推荐] 1.8w 字的 SQL 优化大全</a></p><p><a href="https://toutiao.io/k/osewvaz" target="_blank" rel="noreferrer">[推荐] 常见分布式系统设计图解</a></p><p><a href="https://toutiao.io/k/3hh68yl" target="_blank" rel="noreferrer">[推荐] Redis高可用方案</a></p><p><a href="https://toutiao.io/k/i1qkq4o" target="_blank" rel="noreferrer">[推荐] 近期 yyds 的 GitHub 项目</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/sort-array-by-increasing-frequency" target="_blank" rel="noreferrer">按照频率将数组升序排序</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么，说明原因。</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	slice </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	m </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">]*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,*</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">解析：这是新手常会犯的错误写法，</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 循环的时候会创建每个元素的副本，而不是元素的引用，所以 m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">val 取的都是变量 val 的地址，所以最后 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 中的所有元素的值都是变量 val 的地址，因为最后 val 被赋值为3，所有输出都是3</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">正确的写法：</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	slice </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	m </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">]*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> val</span></span>
<span class="line"><span style="color:#A6ACCD;">		m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">===&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,*</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">扩展题目</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Test</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	ts </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">Test</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> ts </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">//fmt.Println(reflect.TypeOf(t))</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">参考：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//blog.csdn.net/idwtwt/article/details/87378419</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5601045.html" target="_blank" rel="noreferrer">想成为稀缺的运营人才，你得有这项能力</a></p><p><a href="https://www.woshipm.com/operate/5607196.html" target="_blank" rel="noreferrer">“羊了个羊”很火，能复制吗？</a></p><p><a href="https://www.woshipm.com/it/5602303.html" target="_blank" rel="noreferrer">00后也难逃符号化的宿命？</a></p><p><a href="https://www.woshipm.com/chuangye/5607341.html" target="_blank" rel="noreferrer">效率，决定一家SaaS公司的成败</a></p><p><a href="https://www.woshipm.com/it/5607257.html" target="_blank" rel="noreferrer">羊了个羊爆红的底层逻辑与启示：反常规创新，还有机会</a></p><p><a href="https://www.woshipm.com/evaluating/5605613.html" target="_blank" rel="noreferrer">【摹客RP测评大赛优秀作品】摹客RP，如何重新定义原型设计？</a></p><p><a href="https://www.woshipm.com/pd/5606211.html" target="_blank" rel="noreferrer">别让你的 SaaS 产品由赋能变为“负能”</a></p><p><a href="https://www.woshipm.com/user-research/5606751.html" target="_blank" rel="noreferrer">「羊了个羊」背后的用户心理学</a></p><p><a href="https://www.woshipm.com/newretail/5606218.html" target="_blank" rel="noreferrer">掘金新零售：即时零售，岂止于快</a></p><p><a href="https://www.woshipm.com/user-research/5606210.html" target="_blank" rel="noreferrer">从因为所以的逻辑关系，来看猎奇心理主导的产品爆火操作！</a></p><p><a href="https://www.woshipm.com/evaluating/5602502.html" target="_blank" rel="noreferrer">【摹客RP测评大赛优秀作品】基于用户需求，打造原型设计工具中的卓越用户体验</a></p><p><a href="https://www.woshipm.com/chuangye/5606411.html" target="_blank" rel="noreferrer">第三次创业失败的总结：筑起围绕着你的“护城河”是关键</a></p><p><a href="https://www.woshipm.com/marketing/5605850.html" target="_blank" rel="noreferrer">Wetool被封两年半，如今个微已经被企微完全取代了吗？</a></p><p><a href="https://www.woshipm.com/operate/5606436.html" target="_blank" rel="noreferrer">人人都说的【私域】现在怎么样了？</a></p><p><a href="https://www.woshipm.com/it/5603747.html" target="_blank" rel="noreferrer">百万年薪的新职业，成了00后扎堆的「暴富捷径」？</a></p><p><a href="https://www.woshipm.com/marketing/5605739.html" target="_blank" rel="noreferrer">重识社群真面目——万字深度复盘，护肤私域社群的尝试与创造</a></p>`,38),o=[e];function r(t,c,D,y,i,F){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
