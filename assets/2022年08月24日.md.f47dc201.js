import{_ as e,c as a,o as r,a as t}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2022年08月24日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2022年08月24日.md","lastUpdated":1661271420000}'),s={name:"2022年08月24日.md"},n=t(`<h1 id="_2022年08月24日" tabindex="-1">2022年08月24日 <a class="header-anchor" href="#_2022年08月24日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/8csj4gy" target="_blank" rel="noreferrer">一文彻底理解Go语言栈内存/堆内存</a></p><p><a href="https://toutiao.io/k/3nzbc9s" target="_blank" rel="noreferrer">Python爬虫之BeautifulSoup4使用</a></p><p><a href="https://toutiao.io/k/m3mjhpl" target="_blank" rel="noreferrer">老手也常误用！详解 Go channel 内存泄漏问题</a></p><p><a href="https://toutiao.io/k/rew8jt1" target="_blank" rel="noreferrer">1500字简述 Apache ZooKeeper 的基本原理</a></p><p><a href="https://toutiao.io/k/br8mb1w" target="_blank" rel="noreferrer">7大特征交互模型，最好的深度学习推荐算法总结</a></p><p><a href="https://toutiao.io/k/qsbb7gs" target="_blank" rel="noreferrer">SpringBoot 实现接口幂等性的 4 种方案！</a></p><p><a href="https://toutiao.io/k/ugeb95g" target="_blank" rel="noreferrer">图解 Kafka 网络层源码实现机制之收发消息全过程</a></p><p><a href="https://toutiao.io/k/r0onfek" target="_blank" rel="noreferrer">性能大PK count(*)、count(1)和count(列)</a></p><p><a href="https://toutiao.io/k/52qhy81" target="_blank" rel="noreferrer">你真的需要Apple TV吗？不如自制一个Android TV！</a></p><p><a href="https://toutiao.io/k/qufjf59" target="_blank" rel="noreferrer">重新推荐一下ssseg，一个简单好用的通用分割框架</a></p><p><a href="https://toutiao.io/k/hvhr0ls" target="_blank" rel="noreferrer">浅谈API安全的应用</a></p><p><a href="https://toutiao.io/k/a0xntht" target="_blank" rel="noreferrer">如何使用 Rust 宏：深入讲解</a></p><p><a href="https://toutiao.io/k/bjnnb01" target="_blank" rel="noreferrer">持续交付 2.0</a></p><p><a href="https://toutiao.io/k/heeojxm" target="_blank" rel="noreferrer">用完Gradle之后，我开始嫌弃Maven了！</a></p><p><a href="https://toutiao.io/k/ns54vyn" target="_blank" rel="noreferrer">别具一格的Mobile/PC跨端开发方案，前端架构可以借鉴一波</a></p><p><a href="https://toutiao.io/k/so4w3op" target="_blank" rel="noreferrer">老梗新玩「GitHub 热点速览 v.22.34」</a></p><p><a href="https://toutiao.io/k/uc7dh10" target="_blank" rel="noreferrer">如何通过puppetter实现PDF聚合阅读器初始模型以及产品思维构想</a></p><p><a href="https://toutiao.io/k/67lemmt" target="_blank" rel="noreferrer">一步一图带你深入剖析 JDK NIO ByteBuffer 在不同字节序下的设计与实现</a></p><p><a href="https://toutiao.io/k/9mza845" target="_blank" rel="noreferrer">Fresh：新一代 React 全栈框架，能打败 Remix 和 Next.js 吗？</a></p><p><a href="https://toutiao.io/k/3ntocla" target="_blank" rel="noreferrer">在 Go 里用 CGO？这 7 个问题你要关注！</a></p><p><a href="https://toutiao.io/k/3m8iq2m" target="_blank" rel="noreferrer">[推荐] 掌握这些 SpringBoot 启动扩展点，已经超过 90% 的人了</a></p><p><a href="https://toutiao.io/k/lozkmee" target="_blank" rel="noreferrer">[推荐] 全网最全的权限系统设计方案（图解）</a></p><p><a href="https://toutiao.io/k/wcwg3fn" target="_blank" rel="noreferrer">[推荐] 聊聊 13 种锁的实现方式</a></p><p><a href="https://toutiao.io/k/9k1wfc7" target="_blank" rel="noreferrer">[推荐] 连流量染色都没有，你说要搞微服务？</a></p><p><a href="https://toutiao.io/k/4hjv10p" target="_blank" rel="noreferrer">[推荐] 微服务接口设计原则</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays" target="_blank" rel="noreferrer">通过翻转子数组使两个数组相等</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 的 key 为什么是无序的？</span></span>
<span class="line"><span style="color:#A6ACCD;">在遍历 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 的时候，我们会发现，输出的 key 是无序的。为什么？</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 在扩容后，会发生 key 的搬迁，原来落在同一个 bucket 中的 key，搬迁后，有些 key 就要远走高飞了（bucket 序号加上了 </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">B）。而遍历的过程，就是按顺序遍历 bucket，同时按顺序遍历 bucket 中的 key。搬迁后，key 的位置发生了重大的变化，有些 key 飞上高枝，有些 key 则原地不动。这样，遍历 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 的结果就不可能按原来的顺序了。</span></span>
<span class="line"><span style="color:#A6ACCD;">当然，如果我就一个 hard code 的 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;">，我也不会向 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 进行插入删除的操作，按理说每次遍历这样的 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 都会返回一个固定顺序的 key</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">value 序列吧。的确是这样，但是 Go 杜绝了这种做法，因为这样会给新手程序员带来误解，以为这是一定会发生的事情，在某些情况下，可能会酿成大错。</span></span>
<span class="line"><span style="color:#A6ACCD;">当然，Go 做得更绝，当我们在遍历 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 时，并不是固定地从 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 号 bucket 开始遍历，每次都是从一个随机值序号的 bucket 开始遍历，并且是从这个 bucket 的一个随机序号的 cell 开始遍历。这样，即使你是一个写死的 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;">，仅仅只是遍历它，也不太可能会返回一个固定序列的 key</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">value 对了。</span></span>
<span class="line"><span style="color:#A6ACCD;">多说一句，“迭代 </span><span style="color:#89DDFF;">map</span><span style="color:#A6ACCD;"> 的结果是无序的”这个特性是从 </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#A6ACCD;"> 开始加入的。</span></span>
<span class="line"><span style="color:#A6ACCD;">答案解析来自：https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//golang.design/go-questions/map/unordered/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="https://www.woshipm.com/open/5570635.html" target="_blank" rel="noreferrer">从定制化项目到平台通用型设计 B端产品经理如何做好需求平衡？</a></p><p><a href="https://www.woshipm.com/zhichang/5575472.html" target="_blank" rel="noreferrer">3本书带来3个小故事——有关增长、营销、成长</a></p><p><a href="https://www.woshipm.com/it/5575366.html" target="_blank" rel="noreferrer">冥想不香了？海外用户涌向其他App解决心理难题</a></p><p><a href="https://www.woshipm.com/it/5575444.html" target="_blank" rel="noreferrer">野生网红打卡地，疫后三年沉浮史</a></p><p><a href="https://www.woshipm.com/marketing/5573731.html" target="_blank" rel="noreferrer">营销日历 | 九月创意营销攻略来袭，快来找到属于你的营销热点吧！</a></p><p><a href="https://www.woshipm.com/it/5573937.html" target="_blank" rel="noreferrer">Meta的转型难题：卡在元宇宙和TikTok之间</a></p><p><a href="https://www.woshipm.com/operate/5572099.html" target="_blank" rel="noreferrer">知乎月均付费会员超千万，但为什么不是件好事</a></p><p><a href="https://www.woshipm.com/it/5575263.html" target="_blank" rel="noreferrer">社交元宇宙的进化论</a></p><p><a href="https://www.woshipm.com/it/5574719.html" target="_blank" rel="noreferrer">共享充电宝价格疯涨，谁才是“罪魁祸首”？</a></p><p><a href="https://www.woshipm.com/pd/5574491.html" target="_blank" rel="noreferrer">PMM立身之本系列 | GTM的【6+1】必备元素</a></p><p><a href="https://www.woshipm.com/marketing/5575019.html" target="_blank" rel="noreferrer">别把“做品牌”搞复杂了</a></p><p><a href="https://www.woshipm.com/it/5574738.html" target="_blank" rel="noreferrer">抖音“放弃”兴趣推荐：算法再变，用户会买单吗？</a></p><p><a href="https://www.woshipm.com/user-research/5574214.html" target="_blank" rel="noreferrer">用户需求决定产品的价值，如何识别真假需求？</a></p><p><a href="https://www.woshipm.com/it/5575003.html" target="_blank" rel="noreferrer">饿了么再得关键“手牌”：携手抖音狂奔本地到家赛道</a></p><p><a href="https://www.woshipm.com/marketing/5574983.html" target="_blank" rel="noreferrer">直播电商“未来式”：我在直播间追综艺</a></p><p><a href="https://www.woshipm.com/evaluating/5574293.html" target="_blank" rel="noreferrer">化妆品的成分之战：美丽修行竞品分析报告</a></p><p><a href="https://www.woshipm.com/it/5574552.html" target="_blank" rel="noreferrer">边涨价边促销，长视频平台不是“赚吆喝”</a></p><p><a href="https://www.woshipm.com/it/5574316.html" target="_blank" rel="noreferrer">周期理论看互联网</a></p><p><a href="https://www.woshipm.com/operate/5574589.html" target="_blank" rel="noreferrer">私域2.0时代，我在小程序拆盲盒，万人围观</a></p><p><a href="https://www.woshipm.com/open/5575065.html" target="_blank" rel="noreferrer">B端客户需求差异大、难平衡？3个案例带你理清设计思路！</a></p><p><a href="https://www.woshipm.com/it/5574450.html" target="_blank" rel="noreferrer">抖音饿了么，不走快手美团的老路</a></p>`,53),p=[n];function l(o,h,i,c,f,m){return r(),a("div",null,p)}const w=e(s,[["render",l]]);export{b as __pageData,w as default};
