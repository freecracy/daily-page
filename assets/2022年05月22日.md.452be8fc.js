import{_ as a,c as s,o as e,a as n}from"./app.eff5f3e9.js";const F=JSON.parse('{"title":"2022年05月22日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年05月22日.md","lastUpdated":1653150070000}'),r={name:"2022年05月22日.md"},p=n(`<h1 id="_2022年05月22日" tabindex="-1">2022年05月22日 <a class="header-anchor" href="#_2022年05月22日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/ggy2fwy" target="_blank" rel="noreferrer">看了同事写的代码，我竟然开始默默的模仿了。。。</a></p><p><a href="https://toutiao.io/k/x7de1uo" target="_blank" rel="noreferrer">新手如何调试 MySQL</a></p><p><a href="https://toutiao.io/k/sfot1ck" target="_blank" rel="noreferrer">《OpenTelemetry可观测性的未来》O&#39;Reilly报告</a></p><p><a href="https://toutiao.io/k/rsfixsg" target="_blank" rel="noreferrer">官宣｜Apache Flink 1.15 发布公告！</a></p><p><a href="https://toutiao.io/k/juhy4n7" target="_blank" rel="noreferrer">欢迎加入读者圈子，一起交流！</a></p><p><a href="https://toutiao.io/k/lm675qi" target="_blank" rel="noreferrer">记一次事故看 Redis 开发规范</a></p><p><a href="https://toutiao.io/k/zsflz9o" target="_blank" rel="noreferrer">Twitter 架构决策</a></p><p><a href="https://toutiao.io/k/u27dujw" target="_blank" rel="noreferrer">Go 怎么处理项目配置文件？</a></p><p><a href="https://toutiao.io/k/jl8ltod" target="_blank" rel="noreferrer">一起看 I/O | 全新 Google Play SDK 索引助您为应用选择合适的 SDK</a></p><p><a href="https://toutiao.io/k/12v6nqf" target="_blank" rel="noreferrer">怎样提高报表呈现的性能</a></p><p><a href="https://toutiao.io/k/0o6t1yg" target="_blank" rel="noreferrer">etcd-raft 模块如何实现分布式一致性？</a></p><p><a href="https://toutiao.io/k/imjqbp3" target="_blank" rel="noreferrer">[推荐] 首个确保缓存与数据库一致性的方案</a></p><p><a href="https://toutiao.io/k/9oljc6o" target="_blank" rel="noreferrer">[推荐] 左耳朵耗子：我做系统架构的一些原则</a></p><p><a href="https://toutiao.io/k/246clz1" target="_blank" rel="noreferrer">[推荐] 跨Mysql、Redis、Mongo的分布式事务</a></p><p><a href="https://toutiao.io/k/i8q3ye4" target="_blank" rel="noreferrer">[推荐] 聊聊我们是如何做系统保障方案的</a></p><p><a href="https://toutiao.io/k/14tz08l" target="_blank" rel="noreferrer">[推荐] TCP 重传、滑动窗口、流量控制、拥塞控好难？看完图解就不愁了（重制）</a></p><p><a href="https://toutiao.io/k/p8lpi5z" target="_blank" rel="noreferrer">[推荐] ThreadLocal夺命11连问</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/can-i-win" target="_blank" rel="noreferrer">我能赢吗</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码能否通过编译，如果可以，输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	s1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	s2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	s1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  参考答案：不能通过编译。</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 的第二个参数不能直接使用 slice，需使用 … 操作符，将一个切片追加到另一个切片上：</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">s2…</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">。或者直接跟上元素，形如：</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com/pd/5449858.html" target="_blank" rel="noreferrer">体验了淘宝上线的新功能后，网友评价：自掘坟墓…</a></p><p><a href="http://www.woshipm.com/it/5450049.html" target="_blank" rel="noreferrer">为什么小红书笔记不收录？5分钟自查解决方案</a></p><p><a href="http://www.woshipm.com/pd/5419533.html" target="_blank" rel="noreferrer">多屏HMI设计，原来有这么多学问？</a></p><p><a href="http://www.woshipm.com/it/5449469.html" target="_blank" rel="noreferrer">520的狂欢，是互联网人的孤单</a></p><p><a href="http://www.woshipm.com/pd/5447566.html" target="_blank" rel="noreferrer">从苹果的系统更新，理解设计中的「控制」与「自由」</a></p><p><a href="http://www.woshipm.com/it/5448345.html" target="_blank" rel="noreferrer">精致露营能走出“北上广”么？</a></p><p><a href="http://www.woshipm.com/it/5448163.html" target="_blank" rel="noreferrer">忙着改“网络门牌”的年轻人，想保住的隐私、人设和生意</a></p><p><a href="http://www.woshipm.com/it/5449923.html" target="_blank" rel="noreferrer">何同学的残酷社会“第一课”</a></p><p><a href="http://www.woshipm.com/pd/5450208.html" target="_blank" rel="noreferrer">不存在的直观设计</a></p><p><a href="http://www.woshipm.com/it/5449884.html" target="_blank" rel="noreferrer">在硬刚了微信、拼多多之后，抖音开始挑战美团了</a></p><p><a href="http://www.woshipm.com/it/5449007.html" target="_blank" rel="noreferrer">我们为什么不看好中国邮政做直播带货？</a></p><p><a href="http://www.woshipm.com/operate/5449887.html" target="_blank" rel="noreferrer">一边跑步，一边赚钱</a></p><p><a href="http://www.woshipm.com/it/5449417.html" target="_blank" rel="noreferrer">知识付费2022：从内容平台到数字出版商？</a></p><p><a href="http://www.woshipm.com/marketing/5448568.html" target="_blank" rel="noreferrer">当营销内卷和流量触顶，品牌如何用小预算撬动新增长？</a></p>`,38),l=[p];function t(o,c,i,h,D,y){return e(),s("div",null,l)}const C=a(r,[["render",t]]);export{F as __pageData,C as default};
