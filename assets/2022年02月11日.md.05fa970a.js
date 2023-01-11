import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2022年02月11日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]}],"relativePath":"2022年02月11日.md","lastUpdated":1644593026000}'),p={name:"2022年02月11日.md"},e=l(`<h1 id="_2022年02月11日" tabindex="-1">2022年02月11日 <a class="header-anchor" href="#_2022年02月11日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/obimloc" target="_blank" rel="noreferrer">2022 年别再焦虑啦！加入我们！</a></p><p><a href="https://toutiao.io/k/t1d9x3b" target="_blank" rel="noreferrer">如何撰写好技术方案设计-真实案例干货分享</a></p><p><a href="https://toutiao.io/k/on9i9p4" target="_blank" rel="noreferrer">Redis 在 vivo 推送平台的应用与优化实践</a></p><p><a href="https://toutiao.io/k/es8kiqb" target="_blank" rel="noreferrer">流量录制与回放在vivo的落地实践</a></p><p><a href="https://toutiao.io/k/7p0meht" target="_blank" rel="noreferrer">案例：知乎是怎么落地Istio的？</a></p><p><a href="https://toutiao.io/k/rg953es" target="_blank" rel="noreferrer">担保这次能看懂！DDD落地数据库设计实战</a></p><p><a href="https://toutiao.io/k/lmke626" target="_blank" rel="noreferrer">一文讲透大数据列存标准格式：Parquet</a></p><p><a href="https://toutiao.io/k/7zvfdzt" target="_blank" rel="noreferrer">如何设计一个复杂的业务系统？从对领域设计、云原生、微服务、中台的理解开始</a></p><p><a href="https://toutiao.io/k/p21t9eh" target="_blank" rel="noreferrer">这个Dubbo注册中心扩展，有点意思！</a></p><p><a href="https://toutiao.io/k/v03xfke" target="_blank" rel="noreferrer">Trino（Presto SQL）新版本发布！</a></p><p><a href="https://toutiao.io/k/kydff3r" target="_blank" rel="noreferrer">【第2523期】搭建场景下的页面编译提速方案探索</a></p><p><a href="https://toutiao.io/k/d2m85fr" target="_blank" rel="noreferrer">Android 13 首个开发者预览版到来</a></p><p><a href="https://toutiao.io/k/7mphoiz" target="_blank" rel="noreferrer">千万不要这么写SQL，有坑！</a></p><p><a href="https://toutiao.io/k/lnq5xiv" target="_blank" rel="noreferrer">独立开发变现周刊（第41期）：一个开源项目一个人每月收入8万美金</a></p><p><a href="https://toutiao.io/k/je2y6ea" target="_blank" rel="noreferrer">Cucumber测试实践</a></p><p><a href="https://toutiao.io/k/mycr10e" target="_blank" rel="noreferrer">回望 2021 年大前端技术，未来可期！</a></p><p><a href="https://toutiao.io/k/mn4oh6q" target="_blank" rel="noreferrer">大型有状态服务基于 K8s 的落地实践——按部门租户隔离</a></p><p><a href="https://toutiao.io/k/arftq9n" target="_blank" rel="noreferrer">137 python|第八部分：并发网络编程（二）网络编程下</a></p><p><a href="https://toutiao.io/k/q0sox0k" target="_blank" rel="noreferrer">[推荐] 百度和米哈游的Golang面试经验分享</a></p><p><a href="https://toutiao.io/k/he7umju" target="_blank" rel="noreferrer">[推荐] 真香啊！接私活必备的 N 个开源项目（附源码合集第一期）！收藏走起！</a></p><p><a href="https://toutiao.io/k/92sk26n" target="_blank" rel="noreferrer">[推荐] 阿里专家：如何画出优秀的架构图？</a></p><p><a href="https://toutiao.io/k/1g7flto" target="_blank" rel="noreferrer">[推荐] 作为研发Leader，如何做总结</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores" target="_blank" rel="noreferrer">学生分数的最小差值</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  以下代码输出什么？</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">encoding/json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">time</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	t </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span></span>
<span class="line"><span style="color:#A6ACCD;">		N </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}{</span></span>
<span class="line"><span style="color:#A6ACCD;">		time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Date</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2020</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UTC</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Marshal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A：</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2020-12-20T00:00:00Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">N</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">；B：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2020-12-20T00:00:00Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">；C：</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">N</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">；D：</span><span style="color:#89DDFF;">&lt;nil&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  这是来自《Go语言爱好者周刊第74期》的题目，正确率 </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#A6ACCD;">大家不用在乎是不是刁钻的题目，通过题目能学到知识才是最重要的。</span></span>
<span class="line"><span style="color:#F78C6C;">01</span></span>
<span class="line"><span style="color:#A6ACCD;">对一个结构体实例进行 json 系列化，直觉很容易选 A。但很显然，不可能这么简单，因此需要仔细看代码。至于选 C 和 D 的人，多半是瞎猜的吧，当然选 B 也不排除有瞎猜的。</span></span>
<span class="line"><span style="color:#A6ACCD;">为什么选 B 呢？我想借助一个例子讲解。</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">encoding/json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name  </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  hobby </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  person </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Person</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polarisxu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> hobby</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Golang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Marshal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">如果你认为输出 </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polarisxu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Golang</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">，那你得去补补 encoding</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">json 包的知识了。要想输出  </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polarisxu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Golang”}，一般我们会这么做：将 Person 的字段导出，同时设置上 tag。</span></span>
<span class="line"><span style="color:#C3E88D;">type Person struct {</span></span>
<span class="line"><span style="color:#C3E88D;">  Name  string \`json:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  Hobby string \`json:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">但如果我们不想导出 Person 的字段呢？可以通过实现 Marshaler 来做到。</span></span>
<span class="line"><span style="color:#C3E88D;">func (p Person) MarshalJSON() ([]byte, error) {</span></span>
<span class="line"><span style="color:#C3E88D;">	return []byte(\`{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#C3E88D;">+p.name+</span><span style="color:#89DDFF;">\`&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#C3E88D;">+p.hobby+</span><span style="color:#89DDFF;">\`&quot;</span><span style="color:#C3E88D;">}\`), nil</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">02</span></span>
<span class="line"><span style="color:#C3E88D;">回到题目上，time.Time 是什么类型？</span></span>
<span class="line"><span style="color:#C3E88D;">type Time struct {</span></span>
<span class="line"><span style="color:#C3E88D;">    // contains filtered or unexported fields</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">这是一个没有导出任何字段的结构体类型，因此它肯定实现了 Marshaler 接口。</span></span>
<span class="line"><span style="color:#C3E88D;">// MarshalJSON implements the json.Marshaler interface.</span></span>
<span class="line"><span style="color:#C3E88D;">// The time is a quoted string in RFC 3339 format, with sub-second precision added if present.</span></span>
<span class="line"><span style="color:#C3E88D;">func (t Time) MarshalJSON() ([]byte, error) {</span></span>
<span class="line"><span style="color:#C3E88D;">	if y := t.Year(); y &lt; 0 || y &gt;= 10000 {</span></span>
<span class="line"><span style="color:#C3E88D;">		// RFC 3339 is clear that years are 4 digits exactly.</span></span>
<span class="line"><span style="color:#C3E88D;">		// See golang.org/issue/4556#c15 for more discussion.</span></span>
<span class="line"><span style="color:#C3E88D;">		return nil, errors.New(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MarshalJSON</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> year outside of </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">9999</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">	b := make([]byte, 0, len(RFC3339Nano)+2)</span></span>
<span class="line"><span style="color:#C3E88D;">	b = append(b, &#39;</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">)</span></span>
<span class="line"><span style="color:#C3E88D;">	b = t.AppendFormat(b, RFC3339Nano)</span></span>
<span class="line"><span style="color:#C3E88D;">	b = append(b, </span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#C3E88D;">&#39;)</span></span>
<span class="line"><span style="color:#C3E88D;">	return b, nil</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">这么说，答案不应该就是 A 吗？别急。</span></span>
<span class="line"><span style="color:#C3E88D;">03</span></span>
<span class="line"><span style="color:#C3E88D;">如果 t 是这么定义的：</span></span>
<span class="line"><span style="color:#C3E88D;">t := struct {</span></span>
<span class="line"><span style="color:#C3E88D;">  Time time.Time</span></span>
<span class="line"><span style="color:#C3E88D;">  N int</span></span>
<span class="line"><span style="color:#C3E88D;">}{</span></span>
<span class="line"><span style="color:#C3E88D;">  time.Date(2020, 12, 20, 0, 0, 0, 0, time.UTC),</span></span>
<span class="line"><span style="color:#C3E88D;">  5,</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">那结果就是 A。而题目中，time.Time 是内嵌的。你学习 Go 时，应该看过通过内嵌来模拟继承的功能吧！</span></span>
<span class="line"><span style="color:#C3E88D;">正是因为内嵌，t 的方法集包括了 time.Time 的方法集，所以，t 自动实现了 Marshaler 接口。因此答案是 B。</span></span>
<span class="line"><span style="color:#C3E88D;">其实这道题的情况，在日常工作中还真有可能遇到。所以，当你内嵌某个类型时，特别这个类型不是你自己定义的，需要留意这种情况。</span></span>
<span class="line"><span style="color:#C3E88D;">一般解决这个问题的方法有两种：1）不内嵌；2）重新实现 MarshalJSON 方法。</span></span>
<span class="line"><span style="color:#C3E88D;">然而这道题无法重新实现 MarshalJSON 方法，因为结构体类型是匿名的。只能通过不内嵌来得到正确的结果。</span></span>
<span class="line"><span style="color:#C3E88D;">04</span></span>
<span class="line"><span style="color:#C3E88D;">最后一起看下 json.Marshal 函数的文档，主要看下面这段：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Marshal traverses the value v recursively. If an encountered value implements the Marshaler interface and is not a nil pointer, Marshal calls its MarshalJSON method to produce JSON. If no MarshalJSON method is present but the value implements encoding.TextMarshaler instead, Marshal calls its MarshalText method and encodes the result as a JSON string. The nil pointer exception is not strictly necessary but mimics a similar, necessary exception in the behavior of UnmarshalJSON.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">大意是说，如果值实现了 json.Marshaler 接口并且不是 nil 指针，则 Marshal 函数会调用其 MarshalJSON 方法以生成 JSON。如果不存在 MarshalJSON 方法，但该值实现 encoding.TextMarshaler 接口，则 Marshal 函数调用其 MarshalText 方法并将结果编码为 JSON 字符串。</span></span>
<span class="line"><span style="color:#C3E88D;">可见，json.Marshal 函数优先调用 MarshalJSON，然后是 MarshalText，如果都没有，才会走正常的类型编码逻辑。</span></span>
<span class="line"><span style="color:#C3E88D;">答案解析来自：https://polarisxu.studygolang.com/posts/go/action/weekly-question-embed-time/。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div>`,28),o=[e];function r(t,c,D,i,y,F){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{b as __pageData,u as default};
