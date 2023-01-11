import{_ as s,c as a,o as n,a as l}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年04月24日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年04月24日.md","lastUpdated":1650730856000}'),p={name:"2022年04月24日.md"},e=l(`<h1 id="_2022年04月24日" tabindex="-1">2022年04月24日 <a class="header-anchor" href="#_2022年04月24日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/nosdyyu" target="_blank" rel="noreferrer">如何基于 Docker 部署 Uptime Kuma 服务？ - 悠然宜想亭</a></p><p><a href="https://toutiao.io/k/drtvhbu" target="_blank" rel="noreferrer">基于代价的慢查询优化建议</a></p><p><a href="https://toutiao.io/k/0acpnu3" target="_blank" rel="noreferrer">如果你是一个Golang面试官，你会问哪些问题？</a></p><p><a href="https://toutiao.io/k/vskpw1w" target="_blank" rel="noreferrer">IM开发干货分享：浅谈IM系统中离线消息、历史消息的最佳实践</a></p><p><a href="https://toutiao.io/k/deertl3" target="_blank" rel="noreferrer">Spring容器组件添加的五驾马车</a></p><p><a href="https://toutiao.io/k/j5z3sjc" target="_blank" rel="noreferrer">浅谈Web容器设计的边界和目标</a></p><p><a href="https://toutiao.io/k/tp9f8fe" target="_blank" rel="noreferrer">有福了！这款二次元客户端开源啦！美观、易用、无广告</a></p><p><a href="https://toutiao.io/k/ox4glwt" target="_blank" rel="noreferrer">尝试用不同的方式显示一下404这个数字咯~</a></p><p><a href="https://toutiao.io/k/h2b9zqr" target="_blank" rel="noreferrer">从使用到原理，吃透Tapable</a></p><p><a href="https://toutiao.io/k/d8e0mjw" target="_blank" rel="noreferrer">4.23世界读书日，推荐9本好书｜附读书笔记</a></p><p><a href="https://toutiao.io/k/zq8oiet" target="_blank" rel="noreferrer">[推荐] 技术开发人员如何制定自己的OKR</a></p><p><a href="https://toutiao.io/k/26za4ep" target="_blank" rel="noreferrer">[推荐] 9大高性能优化经验总结，强烈建议收藏！！！</a></p><p><a href="https://toutiao.io/k/jtyo70d" target="_blank" rel="noreferrer">[推荐] 微服务网关选型：5种主流 API 网关，哪个最香！</a></p><p><a href="https://toutiao.io/k/edts5o5" target="_blank" rel="noreferrer">[推荐] 别再说你不懂规则引擎了！</a></p><p><a href="https://toutiao.io/k/3f3i7ey" target="_blank" rel="noreferrer">[推荐] 万字长文，教你用go开发区块链应用</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/binary-gap" target="_blank" rel="noreferrer">二进制间距</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么？为什么？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[...]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 使用短变量声明 </span><span style="color:#89DDFF;">(:=)</span><span style="color:#A6ACCD;"> 的形式迭代变量，需要注意的是，变量 i、v 在每次循环体中都会被重用，而不是重新声明。</span></span>
<span class="line"><span style="color:#A6ACCD;">各个 goroutine 中输出的 i、v 值都是 </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 循环结束后的 i、v 最终值，而不是各个 goroutine 启动时的 i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v值。可以理解为闭包引用，使用的是上下文环境的值。两种可行的 fix 方法</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">使用函数传递</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">使用临时变量保留当前值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> i           </span><span style="color:#676E95;font-style:italic;">// 这里的 := 会重新声明变量，而不是重用</span></span>
<span class="line"><span style="color:#A6ACCD;">	v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">reference</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//tonybai.com/2015/09/17/7-things-you-may-not-pay-attation-to-in-go/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/online/5396066.html" target="_blank" rel="noreferrer">“对不起，没有经验想转岗产品，我们公司不招 ！”</a></p><p><a href="http://www.woshipm.com/pmd/5407507.html" target="_blank" rel="noreferrer">你对产品经理有误解</a></p><p><a href="http://www.woshipm.com/it/5406813.html" target="_blank" rel="noreferrer">字节内测上线汽水音乐，能砸出水花吗？</a></p><p><a href="http://www.woshipm.com/operate/5404689.html" target="_blank" rel="noreferrer">10张图，全解析SaaS的用户分层工具怎么做？附用户分层方法论</a></p><p><a href="http://www.woshipm.com/pd/5407049.html" target="_blank" rel="noreferrer">设计沉思录｜企业校招官网升级项目总结</a></p><p><a href="http://www.woshipm.com/pd/5404981.html" target="_blank" rel="noreferrer">为什么企业的MRP跑不起来？</a></p><p><a href="http://www.woshipm.com/pd/5406994.html" target="_blank" rel="noreferrer">一场解构之旅：什么才是优秀的产品？</a></p><p><a href="http://www.woshipm.com/it/5407070.html" target="_blank" rel="noreferrer">直播电商，“风往哪吹”？</a></p><p><a href="http://www.woshipm.com/pd/5406100.html" target="_blank" rel="noreferrer">广告主如何搭建广告平台来赋能业务增长——第一阶段</a></p><p><a href="http://www.woshipm.com/it/5404305.html" target="_blank" rel="noreferrer">靠直播跳操7天涨粉1000万，刘畊宏做对了什么？</a></p><p><a href="http://www.woshipm.com/operate/5407276.html" target="_blank" rel="noreferrer">读书博主的门槛，越来越低了</a></p><p><a href="http://www.woshipm.com/operate/5406631.html" target="_blank" rel="noreferrer">不懂SCQA，方案再怎么改也不受待见（文末有书单，建议收藏）</a></p><p><a href="http://www.woshipm.com/pd/5406732.html" target="_blank" rel="noreferrer">如何利用认知偏差达成设计目标？</a></p><p><a href="http://www.woshipm.com/pmd/5406355.html" target="_blank" rel="noreferrer">大厂产品经理晋升的关键——业务思维</a></p><p><a href="http://www.woshipm.com/pd/5407340.html" target="_blank" rel="noreferrer">电商商详页呈现信息调优案例分享：一些不起眼的小信息，可能撬动大转化</a></p><p><a href="http://www.woshipm.com/pd/5407249.html" target="_blank" rel="noreferrer">百度进军语音社交，能否后发先至？</a></p><p><a href="http://www.woshipm.com/it/5406489.html" target="_blank" rel="noreferrer">泛娱乐场景下的银发经济：老龄用户画像及触网行为分析</a></p><p><a href="http://www.woshipm.com/ai/5402707.html" target="_blank" rel="noreferrer">VR（虚拟现实）是什么</a></p><p><a href="http://www.woshipm.com/it/5407227.html" target="_blank" rel="noreferrer">一文详解：从“人货场”思考刘畊宏教练的流量密码</a></p>`,41),r=[e];function o(t,c,i,D,y,C){return n(),a("div",null,r)}const h=s(p,[["render",o]]);export{F as __pageData,h as default};
