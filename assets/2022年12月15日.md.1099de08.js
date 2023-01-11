import{_ as s,c as n,o as a,a as p}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年12月15日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年12月15日.md","lastUpdated":1671034402000}'),l={name:"2022年12月15日.md"},e=p(`<h1 id="_2022年12月15日" tabindex="-1">2022年12月15日 <a class="header-anchor" href="#_2022年12月15日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/b0np8xn" target="_blank" rel="noreferrer">看完这篇还不懂 MySQL 的 MVCC 机制算我输</a></p><p><a href="https://toutiao.io/k/nigmnmf" target="_blank" rel="noreferrer">Mybatis 源码解析之执行 SQL 语句</a></p><p><a href="https://toutiao.io/k/ex31nt3" target="_blank" rel="noreferrer">打工人的困境</a></p><p><a href="https://toutiao.io/k/u4dnd17" target="_blank" rel="noreferrer">Raft 中日志的一致性检查貌似会导致日志复制的串行化，这个在实际工程实践中有什么优化方案？</a></p><p><a href="https://toutiao.io/k/2bmrfmg" target="_blank" rel="noreferrer">SpringBoot 中使用 Spring-Retry 重试框架（第 454 篇）</a></p><p><a href="https://toutiao.io/k/4s3ndr2" target="_blank" rel="noreferrer">从零开始搭建一个通用的业务技术架构，这套架构绝了</a></p><p><a href="https://toutiao.io/k/e90cicd" target="_blank" rel="noreferrer">Redis 的字符串是怎么实现的</a></p><p><a href="https://toutiao.io/k/4a5sp7q" target="_blank" rel="noreferrer">在 Apache IoTDB 中使用编译时代码生成</a></p><p><a href="https://toutiao.io/k/0v7369m" target="_blank" rel="noreferrer">2022 年十大数据泄露事件</a></p><p><a href="https://toutiao.io/k/nsxxlp1" target="_blank" rel="noreferrer">美团外卖推荐智能流量分发的实践与探索</a></p><p><a href="https://toutiao.io/k/wmxvxme" target="_blank" rel="noreferrer">React Streaming SSR 原理解析</a></p><p><a href="https://toutiao.io/k/za1ycnl" target="_blank" rel="noreferrer">阿里数据质量管理方法总结（全）</a></p><p><a href="https://toutiao.io/k/jxccqhg" target="_blank" rel="noreferrer">面试官：你会几种分布式 ID 生成方案？？？</a></p><p><a href="https://toutiao.io/k/i1g5f7t" target="_blank" rel="noreferrer">Elasticsearch 8.X 有哪些自动补全的检索方式？</a></p><p><a href="https://toutiao.io/k/9f8v7ji" target="_blank" rel="noreferrer">Python 缩进语法的起源：上世纪 60-70 年代的大胆创意</a></p><p><a href="https://toutiao.io/k/odpb7yb" target="_blank" rel="noreferrer">[推荐] 这么设计服务的幂等性就对了</a></p><p><a href="https://toutiao.io/k/135oq4d" target="_blank" rel="noreferrer">[推荐] 我说 MySQL 单表超过 2000w 就要分库分表，面试官让我回去等通知？</a></p><p><a href="https://toutiao.io/k/uggha0x" target="_blank" rel="noreferrer">[推荐] 前端本地化部署</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/sum-of-digits-of-string-after-convert" target="_blank" rel="noreferrer">字符串转化后的各位数字之和</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  在 Go语言爱好者周刊第 </span><span style="color:#F78C6C;">104</span><span style="color:#A6ACCD;"> 期有一道题目，以下代码输出什么：</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">[][</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A：运行时 panic；B：</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">；C：编译错误；D：</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  正确率只有 </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#A6ACCD;">正确答案：B。</span></span>
<span class="line"><span style="color:#F78C6C;">01</span><span style="color:#A6ACCD;"> 解析题目</span></span>
<span class="line"><span style="color:#A6ACCD;">先剖析下这段代码，x 变量：</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  s </span><span style="color:#89DDFF;">[][</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">注意这里不是定义一个结构体类型，而是定义一个结构体类型指针变量，即 x 是一个指针，指针类型是一个匿名结构体。很显然，x 的值是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">，因为没有初始化，可以打印证实这一点。</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		s </span><span style="color:#89DDFF;">[][</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x.Type = %T; x.Value= %v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">输出：</span></span>
<span class="line"><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">[][</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">uint8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Value</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;nil&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">这也是为什么 </span><span style="color:#F78C6C;">48</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> 的人选择 A （panic） 的原因，毕竟 x 是 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">，panic 很自然的。比如这样就会 panic：</span></span>
<span class="line"><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// panic: runtime error: invalid memory address or nil pointer dereference</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">相应的，fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> 也会 panic。但为什么 </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> 就不 panic 了呢？所以得从 len 入手一探究竟。</span></span>
<span class="line"><span style="color:#F78C6C;">02</span><span style="color:#A6ACCD;"> len 详解</span></span>
<span class="line"><span style="color:#A6ACCD;">len 函数是一个内置类型，什么意思？就是由编译器实现的。它的参数可以接收多种类型，有泛型的味道。</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v Type</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">关于它的说明，标准库文档有说明：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">内建函数 len 返回 v 的长度，这取决于具体类型：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">数组：v 中元素的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">数组指针：</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">v 中元素的数量（v 为 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> 时 panic）</span></span>
<span class="line"><span style="color:#A6ACCD;">切片、</span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;">：v 中元素的数量；若 v 为nil，</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 即为零</span></span>
<span class="line"><span style="color:#A6ACCD;">字符串：v 中字节的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">通道：通道缓存中队列（未读取）元素的数量；若 v 为 </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">，</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 即为零</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">光这个解释，还不够全面，len 函数还有其他一些特殊的点。这要看 Go 语言规范。</span></span>
<span class="line"><span style="color:#A6ACCD;">在规范中，有一节是关于 len 和 cap 的。有如下几个要点：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">返回结果总是 </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">；</span></span>
<span class="line"><span style="color:#A6ACCD;">返回结果有可能是常量；</span></span>
<span class="line"><span style="color:#A6ACCD;">有时对函数参数不求值，即编译期确定返回值；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">、</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> 点解释下。（规范中有说明）</span></span>
<span class="line"><span style="color:#A6ACCD;">如果 len 或 cap 的函数参数 v 是字符串常量，则返回值是一个常量。</span></span>
<span class="line"><span style="color:#A6ACCD;">如果 v 的类型是数组或指向数组的指针，且表达式 v 没有包含 channel 接收或（非常量）函数调用，则返回值也是一个常量。这种情况下，不会对 v 进行求值（即编译期就能确定）。否则返回值不是常量，且会对 v 进行求值（即得运行时确定）。</span></span>
<span class="line"><span style="color:#A6ACCD;">这一点是这道题的关键。</span></span>
<span class="line"><span style="color:#A6ACCD;">首先，x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 的类型是 </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;">，它是一个数组，且表达式 x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 没有包含 channel 接收也不是函数调用，因此不会对  x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 进行求值，不求值自然不会 panic（想不明白？可以想成没有解引用操作）。也就是说，编译器能够在编译阶段分析出 x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 的类型是 </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;">，且不需要对 x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 求值，因此直接返回数组的长度，即 </span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#F78C6C;">03</span><span style="color:#A6ACCD;"> 其他类似情况</span></span>
<span class="line"><span style="color:#A6ACCD;">类似这样不求值的情况还有没有？还真有。比如下面的代码：</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> testdata </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">*[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> testdata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">同样不会 panic，原理和上面的类似，在 Go 语言规范有说明。</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">range</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 子句中右侧的表达式被称为 </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 表达式 ，它可以是数组、数组的指针、切片、字符串、map或是允许接收操作 的 channel。</span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 表达式会在开始此循环前被求值一次，但有一个例外：当存在最多一个迭代变量且 </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 是常量时，</span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> 表达式是不被求值的。</span></span>
<span class="line"><span style="color:#A6ACCD;">所以上面代码中 testdata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a 不会被求值，因为 </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">testdata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 是常量。</span></span>
<span class="line"><span style="color:#A6ACCD;">但如果改为这样：</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> testdata </span><span style="color:#89DDFF;">*struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">*[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> testdata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> j</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">就会 panic。</span></span>
<span class="line"><span style="color:#F78C6C;">04</span><span style="color:#A6ACCD;"> 总结</span></span>
<span class="line"><span style="color:#A6ACCD;">通过这么一道「诡异」的面试题，希望你能够对 len 有更深的理解，也希望你能够重视 Go 语言规范，多留意一些细节，同时学会如何寻找问题的答案。</span></span>
<span class="line"><span style="color:#A6ACCD;">答案解析来自：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//polarisxu.studygolang.com/posts/go/action/weekly-question-104/。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5705575.html" target="_blank" rel="noreferrer">今年最后一场！2022产品经理大会「TO B产品的业务探索与实践专场」直播报名中</a></p><p><a href="https://www.woshipm.com/marketing/5706214.html" target="_blank" rel="noreferrer">27.5亿次播放，“围炉煮茶”为何成为今冬顶流？</a></p><p><a href="https://www.woshipm.com/zhichang/5706205.html" target="_blank" rel="noreferrer">数据人的2023年工作计划，就该这么写</a></p><p><a href="https://www.woshipm.com/operate/5706140.html" target="_blank" rel="noreferrer">直播间频遭打假，主播在选品与恰饭之间难找平衡</a></p><p><a href="https://www.woshipm.com/pd/5704164.html" target="_blank" rel="noreferrer">从大火的Chat GPT看PaaS产品</a></p><p><a href="https://www.woshipm.com/pd/5705709.html" target="_blank" rel="noreferrer">设计技巧 | 利用用户评价提升下单转化</a></p><p><a href="https://www.woshipm.com/ai/5705282.html" target="_blank" rel="noreferrer">透过ChatGPT的进化足迹，OpenAI传达了哪些信号？</a></p><p><a href="https://www.woshipm.com/ucd/5705708.html" target="_blank" rel="noreferrer">B端视觉 | 项目里全是表格页该怎么做加分设计？</a></p><p><a href="https://www.woshipm.com/zhichang/5705832.html" target="_blank" rel="noreferrer">写给数据产品经理新人的职场生存指南</a></p><p><a href="https://www.woshipm.com/it/5705399.html" target="_blank" rel="noreferrer">云游戏拉开产业化大幕</a></p><p><a href="https://www.woshipm.com/open/5705912.html" target="_blank" rel="noreferrer">电商产品新人必学：3大要点带你高效掌握大厂电商订单产品设计</a></p><p><a href="https://www.woshipm.com/it/5705294.html" target="_blank" rel="noreferrer">老年网红迷住年轻人</a></p><p><a href="https://www.woshipm.com/user-research/5705667.html" target="_blank" rel="noreferrer">体验管理 | 从客户体验到员工体验</a></p><p><a href="https://www.woshipm.com/ucd/5705395.html" target="_blank" rel="noreferrer">5000字解析丨蔚来智能座舱-HMI设计师必读</a></p><p><a href="https://www.woshipm.com/ucd/5704528.html" target="_blank" rel="noreferrer">图标中的辅助图形，如何设计才有亮点？我总结了这5条实用经验</a></p><p><a href="https://www.woshipm.com/it/5705168.html" target="_blank" rel="noreferrer">到家这件事，快手还做不做？</a></p><p><a href="https://www.woshipm.com/ai/5704887.html" target="_blank" rel="noreferrer">ChatGPT爆红，百度、搜狗、360等搜索引擎尴尬吗？</a></p><p><a href="https://www.woshipm.com/operate/5705615.html" target="_blank" rel="noreferrer">从小红书的内容生态特征，解读创作者和品牌的增长机会</a></p><p><a href="https://www.woshipm.com/ai/5705257.html" target="_blank" rel="noreferrer">ChatGPT与AIGC“万神殿”</a></p><p><a href="https://www.woshipm.com/chuangye/5705130.html" target="_blank" rel="noreferrer">领英创始人Reid Hoffman：如何在熊市中实现闪电式扩张</a></p><p><a href="https://www.woshipm.com/it/5704888.html" target="_blank" rel="noreferrer">SHEIN的尽头是亚马逊</a></p><p><a href="https://www.woshipm.com/pd/5704843.html" target="_blank" rel="noreferrer">SaaS生命周期系列文章一：SaaS开发生命周期详解</a></p><p><a href="https://www.woshipm.com/operate/5704364.html" target="_blank" rel="noreferrer">逆势增长！瑞幸是如何打好“数字化”这张王牌的？</a></p><p><a href="https://www.woshipm.com/pd/5705121.html" target="_blank" rel="noreferrer">方寸之间纵览世界：浅析数字时代地图设计</a></p><p><a href="https://www.woshipm.com/it/5705338.html" target="_blank" rel="noreferrer">刘畊宏退烧</a></p><p><a href="https://www.woshipm.com/pd/5705371.html" target="_blank" rel="noreferrer">大型项目研发经验分享：以3A游戏为例</a></p><p><a href="https://www.woshipm.com/it/5705305.html" target="_blank" rel="noreferrer">双十二已“死”？</a></p><p><a href="https://www.woshipm.com/open/5705575.html" target="_blank" rel="noreferrer">今年最后一场！2022产品经理大会「TO B产品的业务探索与实践专场」直播报名中</a></p><p><a href="https://www.woshipm.com/it/5705316.html" target="_blank" rel="noreferrer">ChatGPT 爆火之后，阿法狗团队也拿出了一个王炸产品</a></p><p><a href="https://www.woshipm.com/it/5704470.html" target="_blank" rel="noreferrer">一个产品经理的“耿直”理财与操作总结</a></p><p><a href="https://www.woshipm.com/pd/5703718.html" target="_blank" rel="noreferrer">电商货架研究：如何提升用户的访问效率</a></p><p><a href="https://www.woshipm.com/chuangye/5703838.html" target="_blank" rel="noreferrer">00后自述：2022年创业，没那么可怕</a></p><p><a href="https://www.woshipm.com/marketing/5704602.html" target="_blank" rel="noreferrer">解封之后，小生意怎么回春？</a></p><p><a href="https://www.woshipm.com/it/5703776.html" target="_blank" rel="noreferrer">周报真的是互联网最糟糕的发明</a></p><p><a href="https://www.woshipm.com/pd/5703074.html" target="_blank" rel="noreferrer">多商户系统管理——店铺管理设计</a></p><p><a href="https://www.woshipm.com/it/5704454.html" target="_blank" rel="noreferrer">加了屏幕的智能音箱，真的摆脱增长困境吗？</a></p><p><a href="https://www.woshipm.com/marketing/5704186.html" target="_blank" rel="noreferrer">完美日记四个阶段的品牌打法，能再打一遍吗？</a></p><p><a href="https://www.woshipm.com/it/5700742.html" target="_blank" rel="noreferrer">闹钟提醒喝水、锁屏工作，自律软件渡人能渡己吗？</a></p><p><a href="https://www.woshipm.com/online/5705245.html" target="_blank" rel="noreferrer">UI转岗B端产品经理，转行跳槽涨薪30%，我只用了90天</a></p>`,64),r=[e];function o(t,c,D,i,C,y){return a(),n("div",null,r)}const b=s(l,[["render",o]]);export{F as __pageData,b as default};
