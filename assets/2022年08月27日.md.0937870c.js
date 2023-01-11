import{_ as a,c as e,o as r,a as s}from"./app.eff5f3e9.js";const k=JSON.parse('{"title":"2022年08月27日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年08月27日.md","lastUpdated":1661530519000}'),n={name:"2022年08月27日.md"},t=s(`<h1 id="_2022年08月27日" tabindex="-1">2022年08月27日 <a class="header-anchor" href="#_2022年08月27日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/1x2qzr6" target="_blank" rel="noreferrer">全网最通透：MySQL 的 redo log 保证数据不丢的原理</a></p><p><a href="https://toutiao.io/k/ou4wma0" target="_blank" rel="noreferrer">《阿里巴巴 Java 开发手册》为什么建议使用 BigDecimal 进行浮点数运算？</a></p><p><a href="https://toutiao.io/k/j3g3q3r" target="_blank" rel="noreferrer">如何给注册中心锦上添花？</a></p><p><a href="https://toutiao.io/k/ssuyj5l" target="_blank" rel="noreferrer">Java 日期处理易踩的十个坑</a></p><p><a href="https://toutiao.io/k/irtkssl" target="_blank" rel="noreferrer">Replication（上）：常见的复制模型&amp;分布式系统的挑战</a></p><p><a href="https://toutiao.io/k/ht1gq0v" target="_blank" rel="noreferrer">Linux下，如何自动对日志进行压缩备份？</a></p><p><a href="https://toutiao.io/k/bey4wzo" target="_blank" rel="noreferrer">可以借鉴的谷歌公司BUG管理经验</a></p><p><a href="https://toutiao.io/k/wetgg6k" target="_blank" rel="noreferrer">分布式接口幂等性、分布式限流：Guava 、nginx和lua限流</a></p><p><a href="https://toutiao.io/k/pze9uny" target="_blank" rel="noreferrer">Flink在转转商业实时数仓的应用</a></p><p><a href="https://toutiao.io/k/8ki7src" target="_blank" rel="noreferrer">Java 中为什么不全部使用 static 方法？</a></p><p><a href="https://toutiao.io/k/vrl6sg5" target="_blank" rel="noreferrer">深入解读新一代全栈框架 Fresh</a></p><p><a href="https://toutiao.io/k/lm22lco" target="_blank" rel="noreferrer">KubeSphere 双协议应用路由实践</a></p><p><a href="https://toutiao.io/k/t1237nr" target="_blank" rel="noreferrer">浅析神经网络 Neural Networks</a></p><p><a href="https://toutiao.io/k/qv4g8wj" target="_blank" rel="noreferrer">6个机器学习可解释性框架！</a></p><p><a href="https://toutiao.io/k/f0455n8" target="_blank" rel="noreferrer">Hadoop维护123</a></p><p><a href="https://toutiao.io/k/68s2vuv" target="_blank" rel="noreferrer">基于Python的一个开源OCR工具，轻松实现批量图片转文字</a></p><p><a href="https://toutiao.io/k/axc7q1m" target="_blank" rel="noreferrer">独立开发变现周刊（第69期）：语音转录浏览器扩展插件，一年获取20倍增长</a></p><p><a href="https://toutiao.io/k/kx2uqft" target="_blank" rel="noreferrer">【第2713期】工程化思维：主题切换架构</a></p><p><a href="https://toutiao.io/k/918ipol" target="_blank" rel="noreferrer">了解“预训练-微调”，看这一篇就够了</a></p><p><a href="https://toutiao.io/k/t9sj17s" target="_blank" rel="noreferrer">[推荐] Java线上CPU内存冲高问题排查步骤</a></p><p><a href="https://toutiao.io/k/tiobp8c" target="_blank" rel="noreferrer">[推荐] 一文读懂 | Linux系统启动过程</a></p><p><a href="https://toutiao.io/k/wcwg3fn" target="_blank" rel="noreferrer">[推荐] 聊聊 13 种锁的实现方式</a></p><p><a href="https://toutiao.io/k/lozkmee" target="_blank" rel="noreferrer">[推荐] 全网最全的权限系统设计方案（图解）</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/maximum-width-of-binary-tree" target="_blank" rel="noreferrer">二叉树最大宽度</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码有什么缺陷：</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">total </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案：第二个返回值没有命名。</span></span>
<span class="line"><span style="color:#A6ACCD;">解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">在函数有多个返回值时，只要有一个返回值有命名，其他的也必须命名。</span><span style="color:#82AAFF;">如果有多个返回值必须加上括号</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">；</span><span style="color:#82AAFF;">如果只有一个返回值且命名也必须加上括号</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">。这里的第一个返回值有命名 total，第二个没有命名，所以错误。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/online/5575809.html" target="_blank" rel="noreferrer">有作品集就能稳拿产品offer？别傻了……</a></p><p><a href="https://www.woshipm.com/zhichang/5579388.html" target="_blank" rel="noreferrer">备受关注的00后</a></p><p><a href="https://www.woshipm.com/pmd/5579468.html" target="_blank" rel="noreferrer">辩证难题 | 产品经理要不要懂技术？</a></p><p><a href="https://www.woshipm.com/operate/5579564.html" target="_blank" rel="noreferrer">老罗回归直播间，“卖货前先答题”的内容创新，吃香吗？</a></p><p><a href="https://www.woshipm.com/it/5579555.html" target="_blank" rel="noreferrer">资本前面飞，技术后面追，元宇宙是泡沫还是未来？</a></p><p><a href="https://www.woshipm.com/evaluating/5578079.html" target="_blank" rel="noreferrer">千岛竞品分析报告</a></p><p><a href="https://www.woshipm.com/it/5577833.html" target="_blank" rel="noreferrer">一个90后不用手机的365天</a></p><p><a href="https://www.woshipm.com/pmd/5579265.html" target="_blank" rel="noreferrer">传统企业里，产品团队=咨询公司</a></p><p><a href="https://www.woshipm.com/open/5579428.html" target="_blank" rel="noreferrer">“我，做竞品分析，被老板diss到想哭”，到底哪里出了问题？</a></p><p><a href="https://www.woshipm.com/evaluating/5577900.html" target="_blank" rel="noreferrer">《微信读书》产品分析报告</a></p><p><a href="https://www.woshipm.com/copy/5578966.html" target="_blank" rel="noreferrer">为什么80%的品牌文案都是无效文案？</a></p><p><a href="https://www.woshipm.com/marketing/5577725.html" target="_blank" rel="noreferrer">这5种类型的营销故事，会让你的品牌更出众</a></p><p><a href="https://www.woshipm.com/it/5578020.html" target="_blank" rel="noreferrer">600万粉丝博主被指虐狗，“做不好直播”的萌宠生意钱景几何？</a></p><p><a href="https://www.woshipm.com/it/5579027.html" target="_blank" rel="noreferrer">抖音饿了么合作，谁着急？</a></p><p><a href="https://www.woshipm.com/marketing/5578871.html" target="_blank" rel="noreferrer">能救鸿星尔克的，不是热搜与流量！</a></p><p><a href="https://www.woshipm.com/it/5578884.html" target="_blank" rel="noreferrer">拆卡直播间：收割年轻人的新项目来了？</a></p><p><a href="https://www.woshipm.com/pd/5578146.html" target="_blank" rel="noreferrer">到底什么是好的B端产品设计？</a></p><p><a href="https://www.woshipm.com/open/5579066.html" target="_blank" rel="noreferrer">“月薪高达50K，拥有这项技能的运营人居然这么吃香？”</a></p>`,48),p=[t];function l(o,i,h,c,f,m){return r(),e("div",null,p)}const w=a(n,[["render",l]]);export{k as __pageData,w as default};
