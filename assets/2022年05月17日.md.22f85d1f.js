import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年05月17日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年05月17日.md","lastUpdated":1652718349000}'),p={name:"2022年05月17日.md"},e=l(`<h1 id="_2022年05月17日" tabindex="-1">2022年05月17日 <a class="header-anchor" href="#_2022年05月17日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/p8lpi5z" target="_blank" rel="noreferrer">ThreadLocal夺命11连问</a></p><p><a href="https://toutiao.io/k/h50ng9m" target="_blank" rel="noreferrer">面试杀手锏：Redis源码之BitMap</a></p><p><a href="https://toutiao.io/k/8v764sx" target="_blank" rel="noreferrer">大厂的优惠券系统是如何设计的？</a></p><p><a href="https://toutiao.io/k/ku02utp" target="_blank" rel="noreferrer">容器江湖的爱恨情仇</a></p><p><a href="https://toutiao.io/k/686f8we" target="_blank" rel="noreferrer">一文搞懂JavaScript中的预编译，带你领略GO和AO的美妙之处！</a></p><p><a href="https://toutiao.io/k/515r2mx" target="_blank" rel="noreferrer">前端工程化之FaaS SSR方案​</a></p><p><a href="https://toutiao.io/k/f3ub5gp" target="_blank" rel="noreferrer">探究LLVM的基础理论和原理</a></p><p><a href="https://toutiao.io/k/oko249d" target="_blank" rel="noreferrer">详解最大似然估计、最大后验概率估计及贝叶斯公式</a></p><p><a href="https://toutiao.io/k/utp1i8c" target="_blank" rel="noreferrer">3种方式！Go Error处理最佳实践</a></p><p><a href="https://toutiao.io/k/ve2ddfr" target="_blank" rel="noreferrer">这些常见的 Go 编码错误，你遇到吗？（一）</a></p><p><a href="https://toutiao.io/k/wq4i64t" target="_blank" rel="noreferrer">业务数据治理体系化思考与实践</a></p><p><a href="https://toutiao.io/k/f8frctd" target="_blank" rel="noreferrer">消息队列，推拉模式的区别在哪？</a></p><p><a href="https://toutiao.io/k/319h8dk" target="_blank" rel="noreferrer">精彩分享 | 欢乐游戏 Istio 云原生服务网格三年实践思考</a></p><p><a href="https://toutiao.io/k/xskb2m7" target="_blank" rel="noreferrer">React如何原生实现防抖？</a></p><p><a href="https://toutiao.io/k/iquaurr" target="_blank" rel="noreferrer">数据湖存储方案Lakehouse带来数据仓库架构的提升</a></p><p><a href="https://toutiao.io/k/gkw87qp" target="_blank" rel="noreferrer">携程机票iOS Widget实践</a></p><p><a href="https://toutiao.io/k/04rl4yf" target="_blank" rel="noreferrer">架构进化，这篇总算是讲清楚了 ~</a></p><p><a href="https://toutiao.io/k/i0nd49a" target="_blank" rel="noreferrer">微软最受欢迎的开源项目</a></p><p><a href="https://toutiao.io/k/lkkiugx" target="_blank" rel="noreferrer">Android 上屏流水账</a></p><p><a href="https://toutiao.io/k/lnzcjy5" target="_blank" rel="noreferrer">Hyperledger Fabric 核心概念</a></p><p><a href="https://toutiao.io/k/i8q3ye4" target="_blank" rel="noreferrer">[推荐] 聊聊我们是如何做系统保障方案的</a></p><p><a href="https://toutiao.io/k/3qv24va" target="_blank" rel="noreferrer">[推荐] 15K Star！Github 上最火的低代码开发平台！</a></p><p><a href="https://toutiao.io/k/246clz1" target="_blank" rel="noreferrer">[推荐] 跨Mysql、Redis、Mongo的分布式事务</a></p><p><a href="https://toutiao.io/k/14tz08l" target="_blank" rel="noreferrer">[推荐] TCP 重传、滑动窗口、流量控制、拥塞控好难？看完图解就不愁了（重制）</a></p><p><a href="https://toutiao.io/k/iqlrz7b" target="_blank" rel="noreferrer">[推荐] 架构设计资料合集</a></p><p><a href="https://toutiao.io/k/9oljc6o" target="_blank" rel="noreferrer">[推荐] 左耳朵耗子：我做系统架构的一些原则</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/verifying-an-alien-dictionary" target="_blank" rel="noreferrer">验证外星语词典</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  Go </span><span style="color:#F78C6C;">1.15</span><span style="color:#A6ACCD;"> 中 </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a 会有额外堆内存分配吗？</span></span>
<span class="line"><span style="color:#A6ACCD;">具体代码是：</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以下有额外内存分配吗？</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  在 Go 中，接口被实现为一对指针（请参阅 Russ Cox 的 Go 数据结构：接口）：指向有关类型信息的指针和指向值的指针。可以简单的表示为：</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">iface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    tab  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">itab</span></span>
<span class="line"><span style="color:#A6ACCD;">    data unsafe</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pointer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">其中 tab 是指向类型信息的指针；data 是指向值的指针。因此，一般来说接口意味着必须在堆中动态分配该值。</span></span>
<span class="line"><span style="color:#A6ACCD;">然而，</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">Go </span><span style="color:#F78C6C;">1.15</span><span style="color:#A6ACCD;"> 发行说明</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">在 runtime 部分中提到了一个有趣的改进：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Converting a small integer value into an </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> value no longer causes allocation</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">意思是说，将小整数转换为接口值不再需要进行内存分配。小整数是指 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 到 </span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;"> 之间的数。</span></span>
<span class="line"><span style="color:#A6ACCD;">我们实际简单测试一下。</span></span>
<span class="line"><span style="color:#A6ACCD;">创建一个包 smallint，在包中创建文件 smallint</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;">，加上如下代码：</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">smallint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Convert</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]interface{},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        slice</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> val</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> slice</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">为了更好的看到效果，函数中进行了 </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> 次 </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> 到 </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> 的转换。写个基准测试 smallint_test</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;">：</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">smallint_test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">testing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">test/smallint</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BenchmarkConvert</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">testing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">N</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> smallint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Convert</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">分别使用 Go1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> 和 Go1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> 版本进行测试：</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> version</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> version go1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">14.7</span><span style="color:#A6ACCD;"> darwin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bench </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">benchmem </span><span style="color:#89DDFF;">./...</span></span>
<span class="line"><span style="color:#A6ACCD;">goos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> darwin</span></span>
<span class="line"><span style="color:#A6ACCD;">goarch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">pkg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint</span></span>
<span class="line"><span style="color:#A6ACCD;">BenchmarkConvert</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">569830</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">1966</span><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op     </span><span style="color:#F78C6C;">2592</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op      </span><span style="color:#F78C6C;">101</span><span style="color:#A6ACCD;"> allocs</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op</span></span>
<span class="line"><span style="color:#A6ACCD;">PASS</span></span>
<span class="line"><span style="color:#A6ACCD;">ok   test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint 1.647s</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> version</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> version go1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> darwin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bench </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">benchmem </span><span style="color:#89DDFF;">./...</span></span>
<span class="line"><span style="color:#A6ACCD;">goos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> darwin</span></span>
<span class="line"><span style="color:#A6ACCD;">goarch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">pkg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint</span></span>
<span class="line"><span style="color:#A6ACCD;">BenchmarkConvert</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">1859451</span><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">655</span><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op     </span><span style="color:#F78C6C;">1792</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op        </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> allocs</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op</span></span>
<span class="line"><span style="color:#A6ACCD;">PASS</span></span>
<span class="line"><span style="color:#A6ACCD;">ok   test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint 2.178s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">接着讲 smallint_test</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> 中调用 Convert 的参数由 </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> 改为 </span><span style="color:#F78C6C;">256</span><span style="color:#A6ACCD;">，再次使用 Go1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> 运行，结果如下：</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bench </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">benchmem </span><span style="color:#89DDFF;">./...</span></span>
<span class="line"><span style="color:#A6ACCD;">goos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> darwin</span></span>
<span class="line"><span style="color:#A6ACCD;">goarch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">pkg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint</span></span>
<span class="line"><span style="color:#A6ACCD;">BenchmarkConvert</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">551546</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">2049</span><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op     </span><span style="color:#F78C6C;">2592</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op      </span><span style="color:#F78C6C;">101</span><span style="color:#A6ACCD;"> allocs</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">op</span></span>
<span class="line"><span style="color:#A6ACCD;">PASS</span></span>
<span class="line"><span style="color:#A6ACCD;">ok   test</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">smallint 1.502s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">证明了上面提到的优化点。</span></span>
<span class="line"><span style="color:#A6ACCD;">那么，你想过它大概怎么实现的吗？因为上文提到，Go 中接口的实现，使用一个指针字段指向接口值。现在竟然不再额外进行内存分配，说明做了什么特殊的事情。</span></span>
<span class="line"><span style="color:#A6ACCD;">其实答案非常简单。如果你对 Python、Java 等语言熟悉，应该知道大概如何实现的。Go 中如何做的，可以在 Go CL </span><span style="color:#F78C6C;">216401</span><span style="color:#A6ACCD;"> 中（合并到</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">此提交</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">中了，GitHub 上更易于阅读）找到。具体来说就是 Go 中定义了一个特殊的静态数组，该数组由 </span><span style="color:#F78C6C;">256</span><span style="color:#A6ACCD;"> 个整数组成（</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 到 </span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;">）。当必须分配内存以将整数存储在堆上，并将其转换为接口的一部分时，它首先检查是否它可以只返回指向数组中适当元素的指针。这种经常使用的值的静态分配，是一种很常见的优化手段。例如，Python 对小整数执行类似的操作，Java 也有常量池，进行类似的优化处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">实际上，Go 以前有一个优化，如果你将 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 转换为接口值，它将返回一个指向特殊静态零值的指针。这次新的 </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;"> 优化替代了该值。</span></span>
<span class="line"><span style="color:#A6ACCD;">对具体实现细节感兴趣的，可以阅读下上文提到的提交。</span></span>
<span class="line"><span style="color:#A6ACCD;">答案解析来自：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//mp.weixin.qq.com/s/1r0nt8nA3foDRRrbRp4omg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/open/5434975.html" target="_blank" rel="noreferrer">听完这几个案例，你也能懂如何构建元宇宙！| 声网「开播了，星期二」首期直播预告</a></p><p><a href="http://www.woshipm.com/it/5441753.html" target="_blank" rel="noreferrer">你还有真心吗？</a></p><p><a href="http://www.woshipm.com/it/5441696.html" target="_blank" rel="noreferrer">上代人的B站，被1元打包卖掉</a></p><p><a href="http://www.woshipm.com/it/5441869.html" target="_blank" rel="noreferrer">微信第二个十年，重心在回归聊天社交</a></p><p><a href="http://www.woshipm.com/operate/5441687.html" target="_blank" rel="noreferrer">抖音小龙虾外卖爆单，商家日赚10万，美团怕了么？</a></p><p><a href="http://www.woshipm.com/zhichang/5440030.html" target="_blank" rel="noreferrer">需求岗如何为实施团队赋能</a></p><p><a href="http://www.woshipm.com/operate/5439833.html" target="_blank" rel="noreferrer">【万字干货】讲清楚运营人的职业规划发展是什么？怎么做！</a></p><p><a href="http://www.woshipm.com/ai/5439271.html" target="_blank" rel="noreferrer">从AI数羊到“相牛”：人工智能应用如何低门槛化？</a></p><p><a href="http://www.woshipm.com/user-research/5439981.html" target="_blank" rel="noreferrer">Excel 操作篇：应用 RFM 模型客户分群，提效客户体验管理</a></p><p><a href="http://www.woshipm.com/pmd/5439860.html" target="_blank" rel="noreferrer">四千字全面解析数据产品经理必知概念：标签、维度、指标</a></p><p><a href="http://www.woshipm.com/it/5441122.html" target="_blank" rel="noreferrer">流媒体会员模式的软肋</a></p><p><a href="http://www.woshipm.com/it/5439726.html" target="_blank" rel="noreferrer">当私域、会员时代遇上Web3</a></p><p><a href="http://www.woshipm.com/evaluating/5438592.html" target="_blank" rel="noreferrer">Amazon SageMaker Canvas产品测评——人人都是“业务分析师”</a></p><p><a href="http://www.woshipm.com/open/5441368.html" target="_blank" rel="noreferrer">聪明的产品经理，如何做行业选择？看看这4大风口行业！</a></p><p><a href="http://www.woshipm.com/operate/5437921.html" target="_blank" rel="noreferrer">商家运营是做什么的？需要具备哪些能力？</a></p><p><a href="http://www.woshipm.com/pd/5430827.html" target="_blank" rel="noreferrer">这些组件设计细节，真的不能忽视: 5种属性+3种类型</a></p><p><a href="http://www.woshipm.com/operate/5441118.html" target="_blank" rel="noreferrer">露营搜索量暴涨7倍，户外达人能分到几杯羹？</a></p>`,50),o=[e];function r(t,c,C,D,i,y){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
