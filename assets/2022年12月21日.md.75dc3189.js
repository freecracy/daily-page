import{_ as s,c as a,o as n,a as p}from"./app.eff5f3e9.js";const C=JSON.parse('{"title":"2022年12月21日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年12月21日.md","lastUpdated":1671552813000}'),l={name:"2022年12月21日.md"},e=p(`<h1 id="_2022年12月21日" tabindex="-1">2022年12月21日 <a class="header-anchor" href="#_2022年12月21日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/h1z5lkl" target="_blank" rel="noreferrer">最强开源 OLAP 数据库，你应该选择的 10 个理由</a></p><p><a href="https://toutiao.io/k/2q8zy8p" target="_blank" rel="noreferrer">Linux 最常用命令：能解决 95% 以上的问题</a></p><p><a href="https://toutiao.io/k/zcezqpo" target="_blank" rel="noreferrer">如何用 Java 实现一致性 hash 算法 (consistent hashing)（上）</a></p><p><a href="https://toutiao.io/k/ffc9tj1" target="_blank" rel="noreferrer">Go 编程语言与环境：万字长文复盘导致 Go 语言成功的那些设计决策（译）</a></p><p><a href="https://toutiao.io/k/9c0uz2q" target="_blank" rel="noreferrer">软件架构的 23 个基本原则</a></p><p><a href="https://toutiao.io/k/cscwfmy" target="_blank" rel="noreferrer">万字避坑指南！C++ 的缺陷与思考（上）</a></p><p><a href="https://toutiao.io/k/6mc5xz7" target="_blank" rel="noreferrer">从工业界的视角看图数据库的现状与发展</a></p><p><a href="https://toutiao.io/k/3j1iwrp" target="_blank" rel="noreferrer">Kafka 中的 advertised.listeners 你真的理解吗</a></p><p><a href="https://toutiao.io/k/43k6p3s" target="_blank" rel="noreferrer">强化学习调参技巧（二）：DDPG、TD3、SAC 算法为例</a></p><p><a href="https://toutiao.io/k/tthmujc" target="_blank" rel="noreferrer">Java 线程池源码深度解析</a></p><p><a href="https://toutiao.io/k/vg47ljm" target="_blank" rel="noreferrer">计算存储分离在京东云消息中间件 JCQ 上的应用</a></p><p><a href="https://toutiao.io/k/l2vw968" target="_blank" rel="noreferrer">如何搭建适合自己团队的构建部署平台</a></p><p><a href="https://toutiao.io/k/arlz23x" target="_blank" rel="noreferrer">前端本地化部署</a></p><p><a href="https://toutiao.io/k/hashklh" target="_blank" rel="noreferrer">定制 ASP.NET Core 的身份认证</a></p><p><a href="https://toutiao.io/k/4g8vixo" target="_blank" rel="noreferrer">React 我爱你，但你太让我失望了</a></p><p><a href="https://toutiao.io/k/uggha0x" target="_blank" rel="noreferrer">[推荐] 前端本地化部署</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/maximum-score-from-removing-stones" target="_blank" rel="noreferrer">移除石子的最大得分</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面代码输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Math</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> compilation </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：B，编译报错 cannot assign to </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> field m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x in </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;">。错误原因：对于类似  X </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Y的赋值操作，必须知道 X 的地址，才能够将 Y 的值赋给 X，但 </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> 中的 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 的 value 本身是不可寻址的。</span></span>
<span class="line"><span style="color:#A6ACCD;">有两个解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">使用临时变量</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Math</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	tmp </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">	tmp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">	m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tmp</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">修改数据结构</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Math</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%#v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// %#v 格式化输出详细信息</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">references</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//blog.csdn.net/qq_36431213/article/details/82805043</span></span>
<span class="line"><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.cnblogs.com/DillGao/p/7930674.html</span></span>
<span class="line"><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//haobook.readthedocs.io/zh_CN/latest/periodical/201611/zhangan.html</span></span>
<span class="line"><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//suraj.pro/post/golang_workaround/</span></span>
<span class="line"><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//blog.ijun.org/2017/07/cannot-assign-to-struct-field-in-map.html</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5684639.html" target="_blank" rel="noreferrer">热门产品火了，只是偶然吗？ 深度拆解热门产品背后的运营增长逻辑！</a></p><p><a href="https://www.woshipm.com/pmd/5710982.html" target="_blank" rel="noreferrer">业务太强势，产品经理如何有效破局？</a></p><p><a href="https://www.woshipm.com/it/5710799.html" target="_blank" rel="noreferrer">微信键盘诞生背后：国产输入法30年</a></p><p><a href="https://www.woshipm.com/pmd/5710910.html" target="_blank" rel="noreferrer">一文搞懂中台与产品微服务、SaaS的区别</a></p><p><a href="https://www.woshipm.com/it/5711046.html" target="_blank" rel="noreferrer">被称“女版小杨哥”、半年粉丝破千万，搞笑剧情账号又有爆款？</a></p><p><a href="https://www.woshipm.com/operate/5710335.html" target="_blank" rel="noreferrer">中低客单价的SaaS行业应该如何做客户成功？-（1）有限资源的有效利用</a></p><p><a href="https://www.woshipm.com/pd/5710148.html" target="_blank" rel="noreferrer">助贷业务背景下的支付模式研究</a></p><p><a href="https://www.woshipm.com/pd/5710504.html" target="_blank" rel="noreferrer">都在讲产品，产品力到底从何而来？</a></p><p><a href="https://www.woshipm.com/data-analysis/5709565.html" target="_blank" rel="noreferrer">效果分析的关键是「指标能算出来」</a></p><p><a href="https://www.woshipm.com/operate/5710707.html" target="_blank" rel="noreferrer">这3个品牌小红书投放超百万！为何又消失了！</a></p><p><a href="https://www.woshipm.com/open/5710981.html" target="_blank" rel="noreferrer">有作品集就能稳拿offer吗？这样的作品集反而成为面试扣分项！</a></p><p><a href="https://www.woshipm.com/marketing/5710257.html" target="_blank" rel="noreferrer">三张图，讲透世界杯里的内容营销</a></p><p><a href="https://www.woshipm.com/it/5710493.html" target="_blank" rel="noreferrer">万亿本地零售，美团、抖音谁主沉浮？</a></p><p><a href="https://www.woshipm.com/pd/5659524.html" target="_blank" rel="noreferrer">【CRM系列】客户盘点</a></p><p><a href="https://www.woshipm.com/it/5710526.html" target="_blank" rel="noreferrer">这届年轻人，靠开线上小酒馆月入5万</a></p><p><a href="https://www.woshipm.com/data-analysis/5710717.html" target="_blank" rel="noreferrer">数据产品破局思路</a></p><p><a href="https://www.woshipm.com/ai/5710406.html" target="_blank" rel="noreferrer">人工智能：2023年科技界的主角</a></p><p><a href="https://www.woshipm.com/operate/5710297.html" target="_blank" rel="noreferrer">5000字详解：SaaS产品生命周期及企业策略</a></p><p><a href="https://www.woshipm.com/it/5710302.html" target="_blank" rel="noreferrer">我去了趟东南亚，看到了“信心”和“力量”</a></p><p><a href="https://www.woshipm.com/user-research/5710344.html" target="_blank" rel="noreferrer">以拼团、砍价、分销为场景的用户增长，裂变和转化才是关键</a></p><p><a href="https://www.woshipm.com/it/5710518.html" target="_blank" rel="noreferrer">Temu的第一批淘金商户怎么样了？</a></p><p><a href="https://www.woshipm.com/operate/5710002.html" target="_blank" rel="noreferrer">自媒体运营的5个阶段，以及增长策略</a></p><p><a href="https://www.woshipm.com/online/5710755.html" target="_blank" rel="noreferrer">“我，转岗产品，看了上百篇干货，他们却嫌我没经验！”</a></p><p><a href="https://www.woshipm.com/zhichang/5710591.html" target="_blank" rel="noreferrer">【收藏】设计年终总结/汇报怎么写，关注这几条！</a></p><p><a href="https://www.woshipm.com/it/5710554.html" target="_blank" rel="noreferrer">世界杯结束了，抖音10亿花得值吗？</a></p><p><a href="https://www.woshipm.com/marketing/5710449.html" target="_blank" rel="noreferrer">你《围炉煮茶》了吗？引爆流行的背后都是老树发新芽</a></p><p><a href="https://www.woshipm.com/pd/5709386.html" target="_blank" rel="noreferrer">信贷常见中后台系统简述及设计原则</a></p><p><a href="https://www.woshipm.com/zhichang/5703763.html" target="_blank" rel="noreferrer">大厂产品面试题：6个领导5杯水该怎么分，你会怎么答？</a></p><p><a href="https://www.woshipm.com/it/5709244.html" target="_blank" rel="noreferrer">小红书给流量“削藩”</a></p><p><a href="https://www.woshipm.com/open/5710442.html" target="_blank" rel="noreferrer">直播倒计时4天！年度大会收官「TO B产品的业务探索与实践」专场报名即将截止</a></p><p><a href="https://www.woshipm.com/data-analysis/5710057.html" target="_blank" rel="noreferrer">如何用数据挖掘潜力用户？</a></p><p><a href="https://www.woshipm.com/it/5709752.html" target="_blank" rel="noreferrer">2022，AIGC元年？</a></p><p><a href="https://www.woshipm.com/operate/5709950.html" target="_blank" rel="noreferrer">10种办法助力官网流量10倍增长</a></p><p><a href="https://www.woshipm.com/operate/5709419.html" target="_blank" rel="noreferrer">ToB市场运营如何快速理解公司业务，快速入手新工作？</a></p><p><a href="https://www.woshipm.com/pd/5709609.html" target="_blank" rel="noreferrer">大厂APP正默默撤下banner</a></p>`,58),r=[e];function o(t,c,D,i,F,y){return n(),a("div",null,r)}const m=s(l,[["render",o]]);export{C as __pageData,m as default};
