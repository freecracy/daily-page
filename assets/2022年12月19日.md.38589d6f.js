import{_ as s,c as a,o as n,a as e}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年12月19日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年12月19日.md","lastUpdated":1671379897000}'),p={name:"2022年12月19日.md"},l=e(`<h1 id="_2022年12月19日" tabindex="-1">2022年12月19日 <a class="header-anchor" href="#_2022年12月19日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/1q9wbq2" target="_blank" rel="noreferrer">100元实践k8s搭建过程</a></p><p><a href="https://toutiao.io/k/mvd1ipo" target="_blank" rel="noreferrer">“爆料” 完整秒杀架构的设计到技术关键点的 “情报信息”</a></p><p><a href="https://toutiao.io/k/caarwl0" target="_blank" rel="noreferrer">如何才能成长为一名合格的架构师 ？</a></p><p><a href="https://toutiao.io/k/81aiap0" target="_blank" rel="noreferrer">聊聊 MySQL 日志，好牛的设计！</a></p><p><a href="https://toutiao.io/k/0agnq5z" target="_blank" rel="noreferrer">浅谈 Remote Work</a></p><p><a href="https://toutiao.io/k/7n02bwk" target="_blank" rel="noreferrer">大数据开发流程及规范（建议收藏）</a></p><p><a href="https://toutiao.io/k/fbkwx3q" target="_blank" rel="noreferrer">为什么 React Zustand 是当下复杂状态管理的最佳选择</a></p><p><a href="https://toutiao.io/k/d8w6pef" target="_blank" rel="noreferrer">.NET 零开销抽象指南</a></p><p><a href="https://toutiao.io/k/ce0asha" target="_blank" rel="noreferrer">阿里云孙成浩：生而为云，连接增长——洛神云网络3.0持续演进</a></p><p><a href="https://toutiao.io/k/l5m6in4" target="_blank" rel="noreferrer">Python 为什么如此设计？</a></p><p><a href="https://toutiao.io/k/uggha0x" target="_blank" rel="noreferrer">[推荐] 前端本地化部署</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/find-if-path-exists-in-graph" target="_blank" rel="noreferrer">寻找图中是否存在路径</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么？为什么？</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">People</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Student</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stu </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Student</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Student</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s is nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s is not nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> p People </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p is nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p is not nil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：s is </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 和 p is not </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#A6ACCD;">这道题会不会有点诧异，我们分配给变量 p 的值明明是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">，然而 p 却不是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">。记住一点，当且仅当动态值和动态类型都为 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 时，接口类型值才为 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">。上面的代码，给变量 p 赋值之后，p 的动态值是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">，但是动态类型却是 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Student，是一个 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 指针，所以相等条件不成立。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5622579.html" target="_blank" rel="noreferrer">前阿里资深产品经理：为面试加分，靠的是这样的作品集！</a></p><p><a href="https://www.woshipm.com/it/5708612.html" target="_blank" rel="noreferrer">几万元加盟的小说代理平台，瓜分网文市场一大“利器”？</a></p><p><a href="https://www.woshipm.com/zhichang/5708569.html" target="_blank" rel="noreferrer">2022转型众生相：有人成网红，有人创业火，有人待业等第二春</a></p><p><a href="https://www.woshipm.com/chuangye/5708609.html" target="_blank" rel="noreferrer">创业书籍不会告诉你的事</a></p><p><a href="https://www.woshipm.com/it/5708587.html" target="_blank" rel="noreferrer">2022年，电商渡劫</a></p><p><a href="https://www.woshipm.com/pd/5705803.html" target="_blank" rel="noreferrer">B端 | 必看的筛选设计复盘</a></p><p><a href="https://www.woshipm.com/marketing/5707901.html" target="_blank" rel="noreferrer">玛莎拉蒂X波司登：4299元的羽绒服，你买吗？</a></p><p><a href="https://www.woshipm.com/open/5622579.html" target="_blank" rel="noreferrer">前阿里资深产品经理：为面试加分，靠的是这样的作品集！</a></p><p><a href="https://www.woshipm.com/it/5708293.html" target="_blank" rel="noreferrer">双十二没落史：从绿叶到鸡肋的一生</a></p><p><a href="https://www.woshipm.com/pd/5708060.html" target="_blank" rel="noreferrer">接一个第三方支付，开发说要2个月？</a></p><p><a href="https://www.woshipm.com/it/5707546.html" target="_blank" rel="noreferrer">积攒电子功德，是年轻人最后的精神稳定法</a></p><p><a href="https://www.woshipm.com/it/5708185.html" target="_blank" rel="noreferrer">退货率超80%，物流快递只是替罪羊</a></p><p><a href="https://www.woshipm.com/operate/5708164.html" target="_blank" rel="noreferrer">从素人到第一网红，他是被算法选中的“天选之子”？</a></p><p><a href="https://www.woshipm.com/it/5708184.html" target="_blank" rel="noreferrer">2022十大假松弛，我不敢转到朋友圈</a></p><p><a href="https://www.woshipm.com/ai/5708240.html" target="_blank" rel="noreferrer">人工智能新浪潮来临，比移动互联网机会大10倍</a></p><p><a href="https://www.woshipm.com/it/5708041.html" target="_blank" rel="noreferrer">今年刷屏B站最多的词，两个字</a></p><p><a href="https://www.woshipm.com/user-research/5707362.html" target="_blank" rel="noreferrer">Salesforce：2022 客户连接体验报告</a></p><p><a href="https://www.woshipm.com/marketing/5708136.html" target="_blank" rel="noreferrer">想进入海外市场，如何跨越文化差异这道坎？</a></p><p><a href="https://www.woshipm.com/it/5702016.html" target="_blank" rel="noreferrer">如何做好并用好风控模型监控？</a></p><p><a href="https://www.woshipm.com/it/5707525.html" target="_blank" rel="noreferrer">抖音做得好外卖的生意吗？</a></p><p><a href="https://www.woshipm.com/marketing/5708023.html" target="_blank" rel="noreferrer">世界杯营销“众生相”：平台借势，品牌玩梗</a></p><p><a href="https://www.woshipm.com/pd/5707918.html" target="_blank" rel="noreferrer">4000字丨手把手教你从0到1搭建计费体系</a></p><p><a href="https://www.woshipm.com/marketing/5707928.html" target="_blank" rel="noreferrer">干货收藏 | B2B内容营销如何叫好又叫座？</a></p><p><a href="https://www.woshipm.com/open/5708034.html" target="_blank" rel="noreferrer">前资深天猫产品专家亲授：0-3岁电商产品经理必懂的大厂电商优惠券产品设计</a></p><p><a href="https://www.woshipm.com/it/5706626.html" target="_blank" rel="noreferrer">年轻人向货架电商回流</a></p><p><a href="https://www.woshipm.com/zhichang/5707765.html" target="_blank" rel="noreferrer">如何提升逻辑思维能力？</a></p><p><a href="https://www.woshipm.com/ucd/5707498.html" target="_blank" rel="noreferrer">交互设计探索：如何构建视频便捷手势模型，提升用户体验？</a></p><p><a href="https://www.woshipm.com/pd/5707217.html" target="_blank" rel="noreferrer">B端组件｜关于按钮的那些事儿</a></p><p><a href="https://www.woshipm.com/pd/5707139.html" target="_blank" rel="noreferrer">基于合同的建模方法–以货运场景为例</a></p><p><a href="https://www.woshipm.com/user-research/5707092.html" target="_blank" rel="noreferrer">购物为什么让人焦虑</a></p><p><a href="https://www.woshipm.com/marketing/5707832.html" target="_blank" rel="noreferrer">VIP品牌升级 | 打造有温度的二次元形象</a></p><p><a href="https://www.woshipm.com/zhichang/5264380.html" target="_blank" rel="noreferrer">【万字长文】PRD面面观，手把手带你写出优秀的PRD</a></p><p><a href="https://www.woshipm.com/it/5706849.html" target="_blank" rel="noreferrer">万物皆可元宇宙，元宇宙有哪些行业机会？</a></p><p><a href="https://www.woshipm.com/it/5707501.html" target="_blank" rel="noreferrer">终于！微信给手机“减负”了……</a></p><p><a href="https://www.woshipm.com/operate/5707160.html" target="_blank" rel="noreferrer">为什么做小红书？近期小红书运营7条心得！</a></p><p><a href="https://www.woshipm.com/operate/5707401.html" target="_blank" rel="noreferrer">我在小红书约拍，月入1.5W</a></p><p><a href="https://www.woshipm.com/open/5707775.html" target="_blank" rel="noreferrer">0-2岁的产品新人，如何理清原型设计的标准流程？</a></p><p><a href="https://www.woshipm.com/marketing/5707116.html" target="_blank" rel="noreferrer">如何利用经济学原理，做好积分营销</a></p>`,56),r=[l];function t(o,c,i,h,D,m){return n(),a("div",null,r)}const y=s(p,[["render",t]]);export{F as __pageData,y as default};
