import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年02月12日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]}],"relativePath":"2022年02月12日.md","lastUpdated":1644679064000}'),p={name:"2022年02月12日.md"},e=l(`<h1 id="_2022年02月12日" tabindex="-1">2022年02月12日 <a class="header-anchor" href="#_2022年02月12日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/obimloc" target="_blank" rel="noreferrer">2022 年别再焦虑啦！加入我们！</a></p><p><a href="https://toutiao.io/k/dtraf4e" target="_blank" rel="noreferrer">Redis 7.0 Multi Part AOF的设计和实现</a></p><p><a href="https://toutiao.io/k/gc9jet5" target="_blank" rel="noreferrer">20000字详解大厂实时数仓建设</a></p><p><a href="https://toutiao.io/k/n9hfkus" target="_blank" rel="noreferrer">从0到1剖析并编码实现短链系统</a></p><p><a href="https://toutiao.io/k/vysw00t" target="_blank" rel="noreferrer">冰墩墩官方NFT盲盒开售；蚂蚁高P何昌华离职；极狐正式发布GitLabSaaS｜开发者头条</a></p><p><a href="https://toutiao.io/k/ksw7b48" target="_blank" rel="noreferrer">解构流存储 — Pravega，与 Flink 构建端到端的大数据流水处理线</a></p><p><a href="https://toutiao.io/k/zy2njkc" target="_blank" rel="noreferrer">谈谈我这些年对前端框架的理解</a></p><p><a href="https://toutiao.io/k/dh89y23" target="_blank" rel="noreferrer">Salesforce架构师的10大原则</a></p><p><a href="https://toutiao.io/k/omqguov" target="_blank" rel="noreferrer">删库跑路大神的一生：曾在家造炸弹被捕，现卖房押宝 NFT，原是开源创业之星</a></p><p><a href="https://toutiao.io/k/5tx1zgw" target="_blank" rel="noreferrer">[推荐] 支付系统架构设计详解</a></p><p><a href="https://toutiao.io/k/1g7flto" target="_blank" rel="noreferrer">[推荐] 作为研发Leader，如何做总结</a></p><p><a href="https://toutiao.io/k/rdpao5x" target="_blank" rel="noreferrer">[推荐] Go 原生并发原语和最佳实践</a></p><p><a href="https://toutiao.io/k/he7umju" target="_blank" rel="noreferrer">[推荐] 真香啊！接私活必备的 N 个开源项目（附源码合集第一期）！收藏走起！</a></p><p><a href="https://toutiao.io/k/92sk26n" target="_blank" rel="noreferrer">[推荐] 阿里专家：如何画出优秀的架构图？</a></p><p><a href="https://toutiao.io/k/q0sox0k" target="_blank" rel="noreferrer">[推荐] 百度和米哈游的Golang面试经验分享</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/number-of-enclaves" target="_blank" rel="noreferrer">飞地的数量</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  今天给两道类似的题目，注意，有半数以上的人可能会做错！</span></span>
<span class="line"><span style="color:#A6ACCD;">题一：</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">题二：</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> a int8 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">它们分别输出什么？请写出你的答案，能解释原因最好。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  这是站长在去年双节期间公众号「polarisxu」上发布的题目。</span></span>
<span class="line"><span style="color:#A6ACCD;">答对的人真不多（半数以上答错了），特别是题一，一半以上竟然是 </span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">，难道不知道 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 能表示的范围吗？</span><span style="color:#89DDFF;">[-</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">。不过为什么答案是：题一 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">，题二编译错误？</span></span>
<span class="line"><span style="color:#A6ACCD;">其实这是一道计算机基础题。</span></span>
<span class="line"><span style="color:#A6ACCD;">先看看网友 Jayce 的解释：第一题是 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">（untyped </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;">）</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> var</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">，untyped 隐式转换为 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;">，刚好在范围内，结果是 </span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> ，溢出 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 的范围。因为结果不是常量，允许溢出，最高位为符号位，变成了补码，刚好又是 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">。 第二题 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 和 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> 都是 </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;">，直接在编译时求值，untyped 的 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 隐式转 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;">，结果为 </span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">，仍然是一个 </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;">。</span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> 转换时不允许溢出，编译错误。 其实差别就是表达式的值，题一不是常量题二是，常量类型转换不允许溢出后 truncate。</span></span>
<span class="line"><span style="color:#A6ACCD;">关于补码</span></span>
<span class="line"><span style="color:#A6ACCD;">如果你忘了补码（Two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s Complement，2 的补码，一般直接称为补码），这里简单做个说明。</span></span>
<span class="line"><span style="color:#C3E88D;">先问一个问题：在计算机内部 -1 二进制表示是什么（假如为 int8）？</span></span>
<span class="line"><span style="color:#C3E88D;">我们很容易这么想：1 的二进制是 00000001，而最高位是符号位，因此 -1 是 10000001。因为 1 + (-1) = 0，但 00000001 + 10000001 = 10000010，很显然，这个结果不是 0。这是原码表示。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">所以，计算机内部采用补码（Two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">s Complement）表示负数。补码怎么得到呢？一般分两步：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">第一步，每一个二进制位都取相反值，</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 变成 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">，</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> 变成 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">。比如，</span><span style="color:#F78C6C;">00000001</span><span style="color:#A6ACCD;"> 的相反值就是 </span><span style="color:#F78C6C;">11111110</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">第二步，将上一步得到的值加 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">。</span><span style="color:#F78C6C;">11111110</span><span style="color:#A6ACCD;"> 就变成 </span><span style="color:#F78C6C;">11111111</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">关于原码、反码和补码，可以看这篇文章：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html，很详细。</span></span>
<span class="line"><span style="color:#A6ACCD;">题解</span></span>
<span class="line"><span style="color:#A6ACCD;">先看题一</span></span>
<span class="line"><span style="color:#A6ACCD;">因为 </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a 不是常量表达式，因此 untyped 常量 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 隐式转换为 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 类型（即和 a 的类型一致），所以 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a 的结果是 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 类型，值是 </span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">，超出了 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 的范围。因为结果不是常量，允许溢出，</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 的二进制表示是 </span><span style="color:#F78C6C;">10000000</span><span style="color:#A6ACCD;">，正好是 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 的补码。所以，第一题的结果是 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">关于整数溢出的 Go 语言规范说明：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//hao.studygolang.com/golang_spec.html#id158。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">在 Go 语言规范中关于整数运算有这样的说明：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//hao.studygolang.com/golang_spec.html#id327</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">对于两个整数值 x 和 y ，其整数商 q </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> y 和余数 r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> y 满足如下关系：</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r 且 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">这个规则有一个例外，如果对于 x 的整数类型来说，被除数 x 是该类型中最负的那个值，那么，因为 补码 的 整数溢出 ，商 q </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> 等于 x （并且 r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> ）。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">所以例外情况有：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">类型</span></span>
<span class="line"><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> q 的值</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int8</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int16</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">32768</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int32</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2147483648</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int64</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">9223372036854775808</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">再看题二</span></span>
<span class="line"><span style="color:#A6ACCD;">对于 </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a，因为 a 是 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 类型常量，所以 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a 是常量表达式，在编译器计算，结果必然也是常量。因为 a 的类型是 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;">，因此 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 也会隐式转为 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 类型，</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> 这个结果超过了 </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> 的范围，但常量不允许溢出，因此编译报错。</span></span>
<span class="line"><span style="color:#A6ACCD;">总结</span></span>
<span class="line"><span style="color:#A6ACCD;">这题并非 Go 独有，而是计算机的基础。比如相应的 C 语言程序，结果和 Go 对应程序是一样的。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对应题一</span></span>
<span class="line"><span style="color:#A6ACCD;">#include </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">stdio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        char a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        char b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">结果 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对应题二</span></span>
<span class="line"><span style="color:#A6ACCD;">#include </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">stdio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> char a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        char b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">编译报错。</span></span>
<span class="line"><span style="color:#A6ACCD;">答案解析来自：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//polarisxu.studygolang.com/posts/basic/complement/。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div>`,21),o=[e];function r(c,t,C,D,y,A){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
