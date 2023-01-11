import{_ as a,c as s,o as e,a as n}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2022年12月18日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年12月18日.md","lastUpdated":1671293487000}'),r={name:"2022年12月18日.md"},p=n(`<h1 id="_2022年12月18日" tabindex="-1">2022年12月18日 <a class="header-anchor" href="#_2022年12月18日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/m5pdysq" target="_blank" rel="noreferrer">trzsz ( trz / tsz ) 是兼容 tmux 的 rz / sz，js 和 go 分别发布 1.0 正式版</a></p><p><a href="https://toutiao.io/k/ejxlekc" target="_blank" rel="noreferrer">优质网站同好者周刊（第 096 期） | 倾城博客</a></p><p><a href="https://toutiao.io/k/0iuj402" target="_blank" rel="noreferrer">独立开发变现周刊（第84期）：一个地理位置API服务，月收入1.5万美元</a></p><p><a href="https://toutiao.io/k/1r6dycq" target="_blank" rel="noreferrer">后台开发进阶：白话DDD从入门到实践</a></p><p><a href="https://toutiao.io/k/hp3vboy" target="_blank" rel="noreferrer">【Redis技术探索】「底层架构原理」探索分析服务核心数据结构介绍和案例_洛神灬殇的博客-CSDN博客</a></p><p><a href="https://toutiao.io/k/6cqqd4v" target="_blank" rel="noreferrer">白话并发模型和异步编程范式</a></p><p><a href="https://toutiao.io/k/nhm2b22" target="_blank" rel="noreferrer">你的代码会说话吗？（下）</a></p><p><a href="https://toutiao.io/k/z8jn039" target="_blank" rel="noreferrer">一款开源的 Flutter 60 FPS 稳帧动画库</a></p><p><a href="https://toutiao.io/k/h3v0d8l" target="_blank" rel="noreferrer">ADB批量截图，且用时间命名</a></p><p><a href="https://toutiao.io/k/gpvpney" target="_blank" rel="noreferrer">【第2814期】如何更新 NPM 依赖</a></p><p><a href="https://toutiao.io/k/uggha0x" target="_blank" rel="noreferrer">[推荐] 前端本地化部署</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/minimum-adjacent-swaps-for-k-consecutive-ones" target="_blank" rel="noreferrer">得到连续 K 个 1 的最少相邻交换次数</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">	b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	c    </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">	d    </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#A6ACCD;">知识点：</span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> 的用法。</span></span>
<span class="line"><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> 是 golang 语言的常量计数器，只能在常量的表达式中使用。</span></span>
<span class="line"><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> 在 </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> 关键字出现时将被重置为0，const中每新增一行常量声明将使 </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> 计数一次。</span></span>
<span class="line"><span style="color:#A6ACCD;">Reference</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//studygolang.com/articles/2192</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/it/5700526.html" target="_blank" rel="noreferrer">互联网人的双十二购物车，隐藏着哪些秘密？</a></p><p><a href="https://www.woshipm.com/marketing/5707901.html" target="_blank" rel="noreferrer">玛莎拉蒂X波司登：4299元的羽绒服，你买吗？</a></p><p><a href="https://www.woshipm.com/it/5708293.html" target="_blank" rel="noreferrer">双十二没落史：从绿叶到鸡肋的一生</a></p><p><a href="https://www.woshipm.com/pd/5708060.html" target="_blank" rel="noreferrer">接一个第三方支付，开发说要2个月？</a></p><p><a href="https://www.woshipm.com/it/5707546.html" target="_blank" rel="noreferrer">积攒电子功德，是年轻人最后的精神稳定法</a></p><p><a href="https://www.woshipm.com/it/5708185.html" target="_blank" rel="noreferrer">退货率超80%，物流快递只是替罪羊</a></p><p><a href="https://www.woshipm.com/operate/5708164.html" target="_blank" rel="noreferrer">从素人到第一网红，他是被算法选中的“天选之子”？</a></p><p><a href="https://www.woshipm.com/it/5708184.html" target="_blank" rel="noreferrer">2022十大假松弛，我不敢转到朋友圈</a></p><p><a href="https://www.woshipm.com/ai/5708240.html" target="_blank" rel="noreferrer">人工智能新浪潮来临，比移动互联网机会大10倍</a></p><p><a href="https://www.woshipm.com/it/5708041.html" target="_blank" rel="noreferrer">今年刷屏B站最多的词，两个字</a></p><p><a href="https://www.woshipm.com/user-research/5707362.html" target="_blank" rel="noreferrer">Salesforce：2022 客户连接体验报告</a></p><p><a href="https://www.woshipm.com/marketing/5708136.html" target="_blank" rel="noreferrer">想进入海外市场，如何跨越文化差异这道坎？</a></p><p><a href="https://www.woshipm.com/it/5702016.html" target="_blank" rel="noreferrer">如何做好并用好风控模型监控？</a></p><p><a href="https://www.woshipm.com/it/5707525.html" target="_blank" rel="noreferrer">抖音做得好外卖的生意吗？</a></p><p><a href="https://www.woshipm.com/marketing/5708023.html" target="_blank" rel="noreferrer">世界杯营销“众生相”：平台借势，品牌玩梗</a></p><p><a href="https://www.woshipm.com/pd/5707918.html" target="_blank" rel="noreferrer">4000字丨手把手教你从0到1搭建计费体系</a></p><p><a href="https://www.woshipm.com/marketing/5707928.html" target="_blank" rel="noreferrer">干货收藏 | B2B内容营销如何叫好又叫座？</a></p><p><a href="https://www.woshipm.com/open/5708034.html" target="_blank" rel="noreferrer">前资深天猫产品专家亲授：0-3岁电商产品经理必懂的大厂电商优惠券产品设计</a></p><p><a href="https://www.woshipm.com/it/5706626.html" target="_blank" rel="noreferrer">年轻人向货架电商回流</a></p><p><a href="https://www.woshipm.com/zhichang/5707765.html" target="_blank" rel="noreferrer">如何提升逻辑思维能力？</a></p><p><a href="https://www.woshipm.com/ucd/5707498.html" target="_blank" rel="noreferrer">交互设计探索：如何构建视频便捷手势模型，提升用户体验？</a></p><p><a href="https://www.woshipm.com/pd/5707217.html" target="_blank" rel="noreferrer">B端组件｜关于按钮的那些事儿</a></p><p><a href="https://www.woshipm.com/pd/5707139.html" target="_blank" rel="noreferrer">基于合同的建模方法–以货运场景为例</a></p><p><a href="https://www.woshipm.com/user-research/5707092.html" target="_blank" rel="noreferrer">购物为什么让人焦虑</a></p><p><a href="https://www.woshipm.com/marketing/5707832.html" target="_blank" rel="noreferrer">VIP品牌升级 | 打造有温度的二次元形象</a></p><p><a href="https://www.woshipm.com/zhichang/5264380.html" target="_blank" rel="noreferrer">【万字长文】PRD面面观，手把手带你写出优秀的PRD</a></p><p><a href="https://www.woshipm.com/it/5706849.html" target="_blank" rel="noreferrer">万物皆可元宇宙，元宇宙有哪些行业机会？</a></p><p><a href="https://www.woshipm.com/it/5707501.html" target="_blank" rel="noreferrer">终于！微信给手机“减负”了……</a></p><p><a href="https://www.woshipm.com/operate/5707160.html" target="_blank" rel="noreferrer">为什么做小红书？近期小红书运营7条心得！</a></p><p><a href="https://www.woshipm.com/operate/5707401.html" target="_blank" rel="noreferrer">我在小红书约拍，月入1.5W</a></p><p><a href="https://www.woshipm.com/open/5707775.html" target="_blank" rel="noreferrer">0-2岁的产品新人，如何理清原型设计的标准流程？</a></p><p><a href="https://www.woshipm.com/marketing/5707116.html" target="_blank" rel="noreferrer">如何利用经济学原理，做好积分营销</a></p><p><a href="https://www.woshipm.com/operate/5707559.html" target="_blank" rel="noreferrer">小红书爆文拆解：12个案例来分析如何打造互动量40万+的笔记</a></p><p><a href="https://www.woshipm.com/operate/5707396.html" target="_blank" rel="noreferrer">一个视频涨粉百万，柳夜熙们能成为元宇宙的“船票”吗？</a></p><p><a href="https://www.woshipm.com/zhichang/5700901.html" target="_blank" rel="noreferrer">回顾2022，一面产品，一面咖啡</a></p><p><a href="https://www.woshipm.com/open/5707495.html" target="_blank" rel="noreferrer">这些产品打着为你省钱的口号，却把你的钱都掏空了</a></p><p><a href="https://www.woshipm.com/it/5707333.html" target="_blank" rel="noreferrer">产品周报232期 | 支付宝加入数字人民币受理网络，微信朋友圈橱窗广告上线</a></p>`,55),l=[p];function t(o,c,h,i,m,w){return e(),s("div",null,l)}const f=a(r,[["render",t]]);export{b as __pageData,f as default};
