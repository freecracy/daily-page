import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年03月26日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]}],"relativePath":"2022年03月26日.md","lastUpdated":1648225349000}'),p={name:"2022年03月26日.md"},e=l(`<h1 id="_2022年03月26日" tabindex="-1">2022年03月26日 <a class="header-anchor" href="#_2022年03月26日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/1dwwpfd" target="_blank" rel="noreferrer">时间轮原理及其在框架中的应用</a></p><p><a href="https://toutiao.io/k/bnh6bt7" target="_blank" rel="noreferrer">「GoCN酷Go推荐」后现代时代远程办公网络问题的golang开源解决方案 —— PairMesh</a></p><p><a href="https://toutiao.io/k/pjxqnnq" target="_blank" rel="noreferrer">不会这个技巧，成不了高级开发</a></p><p><a href="https://toutiao.io/k/iqa9o4a" target="_blank" rel="noreferrer">京东二面：MySQL 主从延迟，读写分离 7 种解决方案</a></p><p><a href="https://toutiao.io/k/o2s925x" target="_blank" rel="noreferrer">流程开放平台表单引擎的设计与实现</a></p><p><a href="https://toutiao.io/k/y2pfkty" target="_blank" rel="noreferrer">数位上市公司 CTO 都在订阅，你还等什么？</a></p><p><a href="https://toutiao.io/k/jwkvxd8" target="_blank" rel="noreferrer">琚致远：95 后 Apache Member 的成长之路</a></p><p><a href="https://toutiao.io/k/92ci7ci" target="_blank" rel="noreferrer">有了jmespath，处理python中的json数据就变成了一种享受...</a></p><p><a href="https://toutiao.io/k/qnjwz7d" target="_blank" rel="noreferrer">vivo 商品中台的可视化微前端实践</a></p><p><a href="https://toutiao.io/k/udk7zty" target="_blank" rel="noreferrer">常见游戏特效学习与实现！</a></p><p><a href="https://toutiao.io/k/id2vuof" target="_blank" rel="noreferrer">深入浅出前端监控</a></p><p><a href="https://toutiao.io/k/6sns7ln" target="_blank" rel="noreferrer">清华刘知远：大模型「十问」，寻找新范式下的研究方向</a></p><p><a href="https://toutiao.io/k/gqd796v" target="_blank" rel="noreferrer">Flink Next：Beyond Stream Processing</a></p><p><a href="https://toutiao.io/k/yf44ahf" target="_blank" rel="noreferrer">浅议C#客户端和服务端通信的几种方法：Rest和GRPC和其他</a></p><p><a href="https://toutiao.io/k/imb80z4" target="_blank" rel="noreferrer">数据治理工作的8种推进套路！</a></p><p><a href="https://toutiao.io/k/u0kb7et" target="_blank" rel="noreferrer">TensorFlow在美团外卖推荐场景的GPU训练优化实践</a></p><p><a href="https://toutiao.io/k/qnn5wcv" target="_blank" rel="noreferrer">二叉树的遍历方式(二)</a></p><p><a href="https://toutiao.io/k/3onlwh2" target="_blank" rel="noreferrer">设计模式系列——享元模式</a></p><p><a href="https://toutiao.io/k/ro3km69" target="_blank" rel="noreferrer">两步实现让antd与IDE和睦相处的处理案例</a></p><p><a href="https://toutiao.io/k/8jfl3pp" target="_blank" rel="noreferrer">[推荐] 消息队列经典十连问，你能扛到第几问？</a></p><p><a href="https://toutiao.io/k/02whm5c" target="_blank" rel="noreferrer">[推荐] 2万字 + 50 张图，细说 JVM 内存分布、内存对齐、压缩指针！</a></p><p><a href="https://toutiao.io/k/enmg99d" target="_blank" rel="noreferrer">[推荐] 架构师如何选型分布式业务网关</a></p><p><a href="https://toutiao.io/k/gsosp6w" target="_blank" rel="noreferrer">[推荐] 阿里巴巴开源的低代码引擎</a></p><p><a href="https://toutiao.io/k/qnfl3t6" target="_blank" rel="noreferrer">[推荐] 最常用的架构模式</a></p><p><a href="https://toutiao.io/k/qudsbeg" target="_blank" rel="noreferrer">[推荐] 你管这破玩意儿叫高可用</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/baseball-game" target="_blank" rel="noreferrer">棒球比赛</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面代码输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Work</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	i </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">w Work</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> w</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">w Work</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> w</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a A </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Work</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.(</span><span style="color:#A6ACCD;">Work</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ShowA</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ShowB</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> compilation </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：A。</span></span>
<span class="line"><span style="color:#A6ACCD;">知识点：类型断言。这道题可以和第 </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> 天的第三题 和第 </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> 天的第三题结合起来看。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,31),r=[e];function o(t,c,i,D,A,y){return a(),n("div",null,r)}const b=s(p,[["render",o]]);export{F as __pageData,b as default};
