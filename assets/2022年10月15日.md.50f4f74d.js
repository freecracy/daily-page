import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const A=JSON.parse('{"title":"2022年10月15日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年10月15日.md","lastUpdated":1665764408000}'),p={name:"2022年10月15日.md"},e=l(`<h1 id="_2022年10月15日" tabindex="-1">2022年10月15日 <a class="header-anchor" href="#_2022年10月15日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/mtrqmru" target="_blank" rel="noreferrer">欢迎加入读者圈子，一起交流！</a></p><p><a href="https://toutiao.io/k/z0e7y3o" target="_blank" rel="noreferrer">Linux 主机性能测试方法</a></p><p><a href="https://toutiao.io/k/c5l12vd" target="_blank" rel="noreferrer">Spring 事务的这 10 种坑使得事务失效了</a></p><p><a href="https://toutiao.io/k/hnbu55g" target="_blank" rel="noreferrer">用 Charles 断点调试 HTTPS 请求，原理揭秘</a></p><p><a href="https://toutiao.io/k/e7r4jd1" target="_blank" rel="noreferrer">关于AspectJ，你知道多少？</a></p><p><a href="https://toutiao.io/k/79lidh8" target="_blank" rel="noreferrer">深入浅出音视频与 WebRTC</a></p><p><a href="https://toutiao.io/k/fwck7q3" target="_blank" rel="noreferrer">MySQL 在 K8S 环境中部署与监控，一篇搞定它</a></p><p><a href="https://toutiao.io/k/njiyozv" target="_blank" rel="noreferrer">老了就不能编程？大龄程序员在线“辟谣”：15 年后，我变得更好了</a></p><p><a href="https://toutiao.io/k/8efbl3c" target="_blank" rel="noreferrer">基于 CNN 的新词发现算法</a></p><p><a href="https://toutiao.io/k/a26nr0w" target="_blank" rel="noreferrer">收藏！200+ 精选 Apache Pulsar 资料合集</a></p><p><a href="https://toutiao.io/k/d2yeddo" target="_blank" rel="noreferrer">DBA 助攻日志平台改造：用 ClickHouse 冷热分离存储完美替代 ES</a></p><p><a href="https://toutiao.io/k/lh0iga3" target="_blank" rel="noreferrer">21 个 MySQL 表设计的经验准则</a></p><p><a href="https://toutiao.io/k/yiz2z23" target="_blank" rel="noreferrer">300 万数据导入导出优化方案，从 80s 优化到 8s（实测）</a></p><p><a href="https://toutiao.io/k/2cxka33" target="_blank" rel="noreferrer">两万字长文带你深入 Go 语言 GC 源码</a></p><p><a href="https://toutiao.io/k/6pzdcth" target="_blank" rel="noreferrer">一文了解知识图谱技术体系</a></p><p><a href="https://toutiao.io/k/slwwx9b" target="_blank" rel="noreferrer">标签评分：海量标签如何进行系统治理？</a></p><p><a href="https://toutiao.io/k/tu498f5" target="_blank" rel="noreferrer">2022 年我的面试万字总结（浏览器网络篇）</a></p><p><a href="https://toutiao.io/k/ydmg6cf" target="_blank" rel="noreferrer">谷歌云发布重磅安全产品，逆转软件供应链领域攻防形势</a></p><p><a href="https://toutiao.io/k/5k8626t" target="_blank" rel="noreferrer">如何理解 JVM（Java Virtual Machine）？</a></p><p><a href="https://toutiao.io/k/3c9cnfy" target="_blank" rel="noreferrer">VSCode扩展之 git</a></p><p><a href="https://toutiao.io/k/wci1eno" target="_blank" rel="noreferrer">[推荐] 7000 字 + 24 张图带你彻底弄懂线程池</a></p><p><a href="https://toutiao.io/k/5wihja2" target="_blank" rel="noreferrer">[推荐] 超实用！整理了 34 个 Python 自动化办公库</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/build-an-array-with-stack-operations" target="_blank" rel="noreferrer">用栈操作构建数组</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  以下代码有什么问题，说明原因</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">student</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Age  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//定义map</span></span>
<span class="line"><span style="color:#A6ACCD;">    m </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">student</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//定义student数组</span></span>
<span class="line"><span style="color:#A6ACCD;">    stus </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">student</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhou</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//将数组依次添加到map中</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> stu </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> stus </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">stu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">stu</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//打印map</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k </span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  结果</span></span>
<span class="line"><span style="color:#A6ACCD;">遍历结果出现错误，输出结果为</span></span>
<span class="line"><span style="color:#A6ACCD;">zhou </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> wang</span></span>
<span class="line"><span style="color:#A6ACCD;">li </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> wang</span></span>
<span class="line"><span style="color:#A6ACCD;">wang </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> wang</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 中的 </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> 个 key 均指向数组中最后一个结构体。</span></span>
<span class="line"><span style="color:#A6ACCD;">分析</span></span>
<span class="line"><span style="color:#A6ACCD;">foreach 中，stu 是结构体的一个拷贝副本，所以m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">stu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">]=&amp;</span><span style="color:#A6ACCD;">stu实际上一致指向同一个指针， 最终该指针的值为遍历的最后一个struct的值拷贝。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">正确写法</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">student</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Age  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//定义map</span></span>
<span class="line"><span style="color:#A6ACCD;">    m </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">student</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//定义student数组</span></span>
<span class="line"><span style="color:#A6ACCD;">    stus </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">student</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhou</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 遍历结构体数组，依次赋值给map</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stus</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        m</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">stus</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">stus</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">//打印map</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k </span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">运行结果</span></span>
<span class="line"><span style="color:#A6ACCD;">zhou </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> zhou</span></span>
<span class="line"><span style="color:#A6ACCD;">li </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> li</span></span>
<span class="line"><span style="color:#A6ACCD;">wang </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> wang</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/online/5627150.html" target="_blank" rel="noreferrer">从总助到鹅厂产品经理，我经历了什么？</a></p><p><a href="https://www.woshipm.com/marketing/5643725.html" target="_blank" rel="noreferrer">“疯狂下属”整顿鸿星尔克，众品牌评论区集体“挖人”</a></p><p><a href="https://www.woshipm.com/pd/5550603.html" target="_blank" rel="noreferrer">语义搜索中手动排序与智能推荐——商品信息识别</a></p><p><a href="https://www.woshipm.com/it/5643708.html" target="_blank" rel="noreferrer">抢占综艺赛道，短视频有何“杀手锏”？</a></p><p><a href="https://www.woshipm.com/pd/5643118.html" target="_blank" rel="noreferrer">产品设计 | 浅谈B端产品用户权限</a></p><p><a href="https://www.woshipm.com/operate/5644041.html" target="_blank" rel="noreferrer">揭开私域转化之谜，设计师能做的有很多</a></p><p><a href="https://www.woshipm.com/it/5643673.html" target="_blank" rel="noreferrer">中国SaaS的唯一出路</a></p><p><a href="https://www.woshipm.com/zhichang/5643842.html" target="_blank" rel="noreferrer">产品经理身体语言分析实战</a></p><p><a href="https://www.woshipm.com/it/5642848.html" target="_blank" rel="noreferrer">阿里和腾讯的互联互通，为何扭扭捏捏？</a></p><p><a href="https://www.woshipm.com/open/5643806.html" target="_blank" rel="noreferrer">做个B端竞品分析，我快被难哭了</a></p><p><a href="https://www.woshipm.com/it/5643510.html" target="_blank" rel="noreferrer">为什么“社区团购”做不下去了？</a></p><p><a href="https://www.woshipm.com/ucd/5643791.html" target="_blank" rel="noreferrer">服务体验 | 使用数据定义框架整合数据与设计思维</a></p><p><a href="https://www.woshipm.com/it/5643421.html" target="_blank" rel="noreferrer">“中国SaaS即将爆发”，为啥我们感受不到？</a></p><p><a href="https://www.woshipm.com/it/5643622.html" target="_blank" rel="noreferrer">互联网广告不怕短期主义</a></p><p><a href="https://www.woshipm.com/it/5643142.html" target="_blank" rel="noreferrer">外卖为何比店里的价格贵？谁在加价？</a></p><p><a href="https://www.woshipm.com/marketing/5642878.html" target="_blank" rel="noreferrer">直播整活卖货：形式花哨，结果寂寥</a></p>`,45),o=[e];function r(t,c,D,i,y,C){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
