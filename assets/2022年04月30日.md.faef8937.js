import{_ as s,c as a,o as n,a as e}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年04月30日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年04月30日.md","lastUpdated":1651249404000}'),l={name:"2022年04月30日.md"},p=e(`<h1 id="_2022年04月30日" tabindex="-1">2022年04月30日 <a class="header-anchor" href="#_2022年04月30日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/5bzbzuu" target="_blank" rel="noreferrer">建设下一代 Web 开放技术——WebContainer</a></p><p><a href="https://toutiao.io/k/t49l6og" target="_blank" rel="noreferrer">码农周刊 - 每周五发送，欢迎订阅！打破「信息茧房」，不妨从这份Newsletter开始！</a></p><p><a href="https://toutiao.io/k/2uwj3wc" target="_blank" rel="noreferrer">9张图轻松吃透Go内存管理单元</a></p><p><a href="https://toutiao.io/k/aw2mg7n" target="_blank" rel="noreferrer">美团外卖广告智能算力的探索与实践（二）</a></p><p><a href="https://toutiao.io/k/qizlixd" target="_blank" rel="noreferrer">Kafka基础详解</a></p><p><a href="https://toutiao.io/k/m70wnkv" target="_blank" rel="noreferrer">五一没地方去？来这里吧！</a></p><p><a href="https://toutiao.io/k/frwdq0r" target="_blank" rel="noreferrer">混合多云时代数据保护难在哪？</a></p><p><a href="https://toutiao.io/k/urggbta" target="_blank" rel="noreferrer">多维度分片需求，如何解决查询问题？</a></p><p><a href="https://toutiao.io/k/chq31l6" target="_blank" rel="noreferrer">重磅！流式数据库新星 RisingWave 是下一个 Apache Flink 吗？</a></p><p><a href="https://toutiao.io/k/gkbs1ei" target="_blank" rel="noreferrer">[科普] Service Worker 入门指南</a></p><p><a href="https://toutiao.io/k/nwlvexw" target="_blank" rel="noreferrer">提升速度与精度，FedReg: 减轻灾难性遗忘加速联邦收敛（ICLR 2022）</a></p><p><a href="https://toutiao.io/k/u5zet7c" target="_blank" rel="noreferrer">7000 字 | 20 图 | 一文带你搭建一套 ELK Stack 日志平台</a></p><p><a href="https://toutiao.io/k/gejsguu" target="_blank" rel="noreferrer">独立开发变现周刊（第52期）：在Shopify上开发一个月收入2万美元的APP</a></p><p><a href="https://toutiao.io/k/038r6k3" target="_blank" rel="noreferrer">统一推送联盟就改了个名字，都能被网友喷成筛子。。。</a></p><p><a href="https://toutiao.io/k/7auoy26" target="_blank" rel="noreferrer">一个代理使用的WebAssembly库</a></p><p><a href="https://toutiao.io/k/8ab20e9" target="_blank" rel="noreferrer">[推荐] 面渣逆袭：Spring三十五问，四万字+五十图详解！建议收藏！</a></p><p><a href="https://toutiao.io/k/jtyo70d" target="_blank" rel="noreferrer">[推荐] 微服务网关选型：5种主流 API 网关，哪个最香！</a></p><p><a href="https://toutiao.io/k/edts5o5" target="_blank" rel="noreferrer">[推荐] 别再说你不懂规则引擎了！</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/smallest-range-i" target="_blank" rel="noreferrer">最小差值 I</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面代码里的 counter 的输出值？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">21</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	counter </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		counter</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter is </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> counter</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> 或 </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案及解析：C。</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 是无序的，如果第一次循环到 A，则输出 </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">；否则输出 </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/online/5402937.html" target="_blank" rel="noreferrer">看过60分的PRD后，我总结了95分的PRD该有的样子</a></p><p><a href="http://www.woshipm.com/marketing/5418857.html" target="_blank" rel="noreferrer">万字干货，从0到1破解出海DTC品牌模式</a></p><p><a href="http://www.woshipm.com/it/5408371.html" target="_blank" rel="noreferrer">浅谈传统人工质检的4大痛点</a></p><p><a href="http://www.woshipm.com/it/5419163.html" target="_blank" rel="noreferrer">社交、电商、元宇宙……2022年哪些大厂新产品能杀出血路？</a></p><p><a href="http://www.woshipm.com/ucd/5419164.html" target="_blank" rel="noreferrer">一个拖拽，就暴露了国内外大厂的差距</a></p><p><a href="http://www.woshipm.com/it/5418738.html" target="_blank" rel="noreferrer">朴朴超市，困在福州</a></p><p><a href="http://www.woshipm.com/it/5416937.html" target="_blank" rel="noreferrer">虚拟人是来爱你的，还是来挣钱的？</a></p><p><a href="http://www.woshipm.com/pd/5419036.html" target="_blank" rel="noreferrer">大厂环伺小红书，抖音淘宝之后，网易也来了</a></p><p><a href="http://www.woshipm.com/it/5419048.html" target="_blank" rel="noreferrer">深度学习走进死胡同了？</a></p><p><a href="http://www.woshipm.com/pd/5417581.html" target="_blank" rel="noreferrer">返回按钮和关闭按钮，你用的对吗？</a></p><p><a href="http://www.woshipm.com/it/5418090.html" target="_blank" rel="noreferrer">教育机器人是新的“智商税”吗？</a></p><p><a href="http://www.woshipm.com/marketing/5417768.html" target="_blank" rel="noreferrer">五一劳动节的话题营销怎能一动不动？</a></p><p><a href="http://www.woshipm.com/it/5414460.html" target="_blank" rel="noreferrer">从微信读书到免费网文，聊聊我眼中的「移动阅读」</a></p><p><a href="http://www.woshipm.com/pd/5418330.html" target="_blank" rel="noreferrer">产品设计与数据（上）</a></p><p><a href="http://www.woshipm.com/online/5418897.html" target="_blank" rel="noreferrer">我，3年B端产品，还做不好业务调研</a></p><p><a href="http://www.woshipm.com/it/5414504.html" target="_blank" rel="noreferrer">卷不动的00后，失效的「画饼学」</a></p><p><a href="http://www.woshipm.com/it/5418192.html" target="_blank" rel="noreferrer">面对疫情消退，互联网医疗如何应对用户增长乏力？</a></p><p><a href="http://www.woshipm.com/pd/5406127.html" target="_blank" rel="noreferrer">揭秘预付卡那些事</a></p><p><a href="http://www.woshipm.com/pd/5417141.html" target="_blank" rel="noreferrer">还不会画图标，这篇解答你所有问题！</a></p>`,44),r=[p];function t(o,c,i,D,h,C){return n(),a("div",null,r)}const A=s(l,[["render",t]]);export{F as __pageData,A as default};
