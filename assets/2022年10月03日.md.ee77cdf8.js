import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年10月03日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年10月03日.md","lastUpdated":1664727392000}'),p={name:"2022年10月03日.md"},e=l(`<h1 id="_2022年10月03日" tabindex="-1">2022年10月03日 <a class="header-anchor" href="#_2022年10月03日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/5e8o3ht" target="_blank" rel="noreferrer">Linux内存管理机制</a></p><p><a href="https://toutiao.io/k/gqbvxkn" target="_blank" rel="noreferrer">最快的内存数据库横空出世，比 Redis 快 25 倍，Star 数飙升，杀疯了！</a></p><p><a href="https://toutiao.io/k/83sqkd1" target="_blank" rel="noreferrer">如何用Go实现一个异步网络库？</a></p><p><a href="https://toutiao.io/k/w4olo9z" target="_blank" rel="noreferrer">架构师劝退指南</a></p><p><a href="https://toutiao.io/k/9jopsda" target="_blank" rel="noreferrer">性能优化的 10 个技巧！</a></p><p><a href="https://toutiao.io/k/31fwci1" target="_blank" rel="noreferrer">揭秘go内存！</a></p><p><a href="https://toutiao.io/k/ktj8fbw" target="_blank" rel="noreferrer">Spark App 血缘解析方案</a></p><p><a href="https://toutiao.io/k/7cgmeqg" target="_blank" rel="noreferrer">5 种瀑布流场景的实现原理解析</a></p><p><a href="https://toutiao.io/k/1yd8yp7" target="_blank" rel="noreferrer">推荐假期看的几部黑客电影</a></p><p><a href="https://toutiao.io/k/1dnm1nv" target="_blank" rel="noreferrer">TCP拥塞控制详解 | 2. 背景</a></p><p><a href="https://toutiao.io/k/azf7ub6" target="_blank" rel="noreferrer">[推荐] 性能优化必备——火焰图</a></p><p><a href="https://toutiao.io/k/luf0yh6" target="_blank" rel="noreferrer">[推荐] 聊聊 8种 架构模式</a></p><p><a href="https://toutiao.io/k/ussdz4q" target="_blank" rel="noreferrer">[推荐] Netty、Kafka中的零拷贝技术到底有多牛?</a></p><p><a href="https://toutiao.io/k/f7r13v5" target="_blank" rel="noreferrer">[推荐] 分享16个我总结的思维模型（程序员必读，受用终身）</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones" target="_blank" rel="noreferrer">检查二进制字符串字段</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  Go </span><span style="color:#F78C6C;">1.15</span><span style="color:#A6ACCD;"> 中 </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a 会有额外堆内存分配吗？</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/online/5594549.html" target="_blank" rel="noreferrer">职场逆袭 | 从小助理到大厂运营，工资翻倍的她，只准备了3个月！</a></p><p><a href="https://www.woshipm.com/marketing/5632416.html" target="_blank" rel="noreferrer">十大赛道，六十个品牌，2022的消费市场还有这些机会</a></p><p><a href="https://www.woshipm.com/marketing/5630512.html" target="_blank" rel="noreferrer">营销误区 | 只做「内容」，忽略「营销」</a></p><p><a href="https://www.woshipm.com/zhichang/5632363.html" target="_blank" rel="noreferrer">大厂运营总监教你如何深入思考</a></p><p><a href="https://www.woshipm.com/chuangye/5632321.html" target="_blank" rel="noreferrer">创业等“机会”就如同单身狗等人来爱自己一样：门都没有！</a></p><p><a href="https://www.woshipm.com/it/5632272.html" target="_blank" rel="noreferrer">国庆假期，年轻人生活指南</a></p><p><a href="https://www.woshipm.com/data-analysis/5630037.html" target="_blank" rel="noreferrer">以快手“购物车”为例，解析如何利用数据分析评估新功能</a></p><p><a href="https://www.woshipm.com/it/5632292.html" target="_blank" rel="noreferrer">东方甄选究竟是不是泡沫？</a></p><p><a href="https://www.woshipm.com/it/5630425.html" target="_blank" rel="noreferrer">数字化风潮之下，电商正在深度变革</a></p><p><a href="https://www.woshipm.com/chuangye/5632327.html" target="_blank" rel="noreferrer">初创者找创业方向的4个“重叠节点”：定位后置，基础盘前置</a></p><p><a href="https://www.woshipm.com/it/5630792.html" target="_blank" rel="noreferrer">旅游产业元宇宙：数字化旅游（一）——思变篇</a></p><p><a href="https://www.woshipm.com/operate/5630438.html" target="_blank" rel="noreferrer">有了「私域」就不需要「公域」流量了吗？</a></p><p><a href="https://www.woshipm.com/data-analysis/5624440.html" target="_blank" rel="noreferrer">如何用增益模型，探讨精准营销的底层逻辑？</a></p><p><a href="https://www.woshipm.com/it/5632046.html" target="_blank" rel="noreferrer">东方甄选的玉米为什么卖得贵？</a></p><p><a href="https://www.woshipm.com/it/5632047.html" target="_blank" rel="noreferrer">字节跳动又做了一个独立站，这次能抢到SHEIN蛋糕吗？</a></p><p><a href="https://www.woshipm.com/pd/5550884.html" target="_blank" rel="noreferrer">从心理学到产品设计（一）</a></p><p><a href="https://www.woshipm.com/ai/5631435.html" target="_blank" rel="noreferrer">不明觉厉的AI绘画，对内容创作者来说有什么用？</a></p><p><a href="https://www.woshipm.com/marketing/5630814.html" target="_blank" rel="noreferrer">收集一时爽，一直收集一直爽</a></p>`,39),o=[e];function r(t,c,C,D,y,A){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
