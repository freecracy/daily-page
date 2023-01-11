import{_ as a,c as e,o as r,a as s}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2022年09月01日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年09月01日.md","lastUpdated":1661962545000}'),t={name:"2022年09月01日.md"},n=s(`<h1 id="_2022年09月01日" tabindex="-1">2022年09月01日 <a class="header-anchor" href="#_2022年09月01日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/4ivnhwu" target="_blank" rel="noreferrer">面试官：MySQL 数据库查询慢，除了索引问题还可能是什么原因？</a></p><p><a href="https://toutiao.io/k/2u61cx8" target="_blank" rel="noreferrer">也许是最客观、全面的比较 Rust 与 Go：都想把 Rust 也学一下</a></p><p><a href="https://toutiao.io/k/uxupyzj" target="_blank" rel="noreferrer">MySQL 的 timestamp 会存在时区问题？</a></p><p><a href="https://toutiao.io/k/ymhzlck" target="_blank" rel="noreferrer">提高「程序员」的思维方式</a></p><p><a href="https://toutiao.io/k/cq3qyuh" target="_blank" rel="noreferrer">Spring Boot + Netty + WebSocket 实现消息推送</a></p><p><a href="https://toutiao.io/k/2e01od7" target="_blank" rel="noreferrer">阿里官方 Redis 开发规范</a></p><p><a href="https://toutiao.io/k/slkzrxk" target="_blank" rel="noreferrer">一文彻底理解Go语言栈内存/堆内存</a></p><p><a href="https://toutiao.io/k/fjgw51o" target="_blank" rel="noreferrer">CB Simulator，曾经统治了整个网络的论坛</a></p><p><a href="https://toutiao.io/k/gotsnft" target="_blank" rel="noreferrer">Input标签这么牛？居然也自带颜色选择器功能？</a></p><p><a href="https://toutiao.io/k/yptrht8" target="_blank" rel="noreferrer">必撸系列！Go另外几个黑魔法技巧汇总</a></p><p><a href="https://toutiao.io/k/rlbn5zy" target="_blank" rel="noreferrer">Kafka监控与指标解析-UnderReplicatedPartitions</a></p><p><a href="https://toutiao.io/k/v6qvn9o" target="_blank" rel="noreferrer">利用 AOP 记录接口日志</a></p><p><a href="https://toutiao.io/k/qhgd7sr" target="_blank" rel="noreferrer">【第2715期】精读《设计完美的日期选择器》</a></p><p><a href="https://toutiao.io/k/0p3333v" target="_blank" rel="noreferrer">两组数据量相对大时，如何高效进行比对</a></p><p><a href="https://toutiao.io/k/c9pibub" target="_blank" rel="noreferrer">奇安信“挂黑页”事件解析</a></p><p><a href="https://toutiao.io/k/yzkqbg0" target="_blank" rel="noreferrer">100 个常见错误「GitHub 热点速览 v.22.35」</a></p><p><a href="https://toutiao.io/k/eglxpgh" target="_blank" rel="noreferrer">日志服务 CLS 时序搜索引擎入选VLDB，性能提升近40倍！</a></p><p><a href="https://toutiao.io/k/vmcdjq5" target="_blank" rel="noreferrer">你“寒”你的，我“暖”我的</a></p><p><a href="https://toutiao.io/k/m1ptsjo" target="_blank" rel="noreferrer">在Rust web服务中使用Redis</a></p><p><a href="https://toutiao.io/k/c48048f" target="_blank" rel="noreferrer">开源公开课丨ChengYing安装原理剖析</a></p><p><a href="https://toutiao.io/k/t9sj17s" target="_blank" rel="noreferrer">[推荐] Java线上CPU内存冲高问题排查步骤</a></p><p><a href="https://toutiao.io/k/tiobp8c" target="_blank" rel="noreferrer">[推荐] 一文读懂 | Linux系统启动过程</a></p><p><a href="https://toutiao.io/k/6gp2yxu" target="_blank" rel="noreferrer">[推荐] 公司新来了一个同事，把权限系统设计的炉火纯青！</a></p><p><a href="https://toutiao.io/k/6muqkam" target="_blank" rel="noreferrer">[推荐] 丢弃掉那些BeanUtils工具类吧，MapStruct真香！！！</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop" target="_blank" rel="noreferrer">商品折扣后的最终价格</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 与 </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 的区别</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 和 </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 是 Go 语言内建函数，用来分配内存，但适用的类型不同。</span></span>
<span class="line"><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 会为 T 类型的新值分配已置零的内存空间，并返回地址（指针），即类型为 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">T 的值。换句话说就是，返回一个指针，该指针指向新分配的、类型为 T 的零值。适用于值类型，如数组、结构体等。</span></span>
<span class="line"><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 返回初始化之后的 T 类型的值，这个值并不是 T 类型的零值，也不是指针 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">T，是经过初始化之后的 T 的引用。</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> 只适用于 slice、</span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 和 channel。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/it/5584856.html" target="_blank" rel="noreferrer">为商城开放“一级入口”，快手也开始“淘宝化”？</a></p><p><a href="https://www.woshipm.com/pd/5584822.html" target="_blank" rel="noreferrer">元宇宙：打造银行人自己的DAO社区产品之总体设计</a></p><p><a href="https://www.woshipm.com/pd/5584303.html" target="_blank" rel="noreferrer">抖音上线点踩功能，向更良性的社区氛围迈进</a></p><p><a href="https://www.woshipm.com/operate/5584744.html" target="_blank" rel="noreferrer">数字化全景：从个人到企业的案例解析</a></p><p><a href="https://www.woshipm.com/evaluating/5584413.html" target="_blank" rel="noreferrer">二手书市场的快速增长：多抓鱼产品分析报告</a></p><p><a href="https://www.woshipm.com/it/5584731.html" target="_blank" rel="noreferrer">周杰伦在元宇宙卖盲盒</a></p><p><a href="https://www.woshipm.com/pmd/5584740.html" target="_blank" rel="noreferrer">转型产品 2 个月，我还没去掉程序员的傲慢</a></p><p><a href="https://www.woshipm.com/it/5584725.html" target="_blank" rel="noreferrer">60多款App密集下架，互联网再无产品神话？</a></p><p><a href="https://www.woshipm.com/it/5584424.html" target="_blank" rel="noreferrer">二手盲盒“闯入”直播：代工厂清仓、隐藏款被掉包</a></p><p><a href="https://www.woshipm.com/open/5584603.html" target="_blank" rel="noreferrer">电商产品新人必看：大厂电商标准用户端流量体系全解析</a></p><p><a href="https://www.woshipm.com/marketing/5584137.html" target="_blank" rel="noreferrer">SaaS销售模式的转型，是大势所趋</a></p><p><a href="https://www.woshipm.com/data-analysis/5584316.html" target="_blank" rel="noreferrer">数据分析终极一问：指标波动有多大，才算是大！</a></p><p><a href="https://www.woshipm.com/it/5584339.html" target="_blank" rel="noreferrer">从明天起，商家再也不能从淘宝手里拿到消费者的手机号了</a></p><p><a href="https://www.woshipm.com/marketing/5583602.html" target="_blank" rel="noreferrer">麦当劳“闯进”元宇宙始末：10万份数字藏品，“咔滋脆”的体验</a></p><p><a href="https://www.woshipm.com/ucd/5580915.html" target="_blank" rel="noreferrer">如何提高界面信息识别效率？（总结篇）</a></p>`,46),p=[n];function l(o,i,h,c,f,m){return r(),e("div",null,p)}const u=a(t,[["render",l]]);export{b as __pageData,u as default};
