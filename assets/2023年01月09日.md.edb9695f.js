import{_ as s,c as n,o as a,a as l}from"./app.eff5f3e9.js";const b=JSON.parse('{"title":"2023年01月09日","description":"","frontmatter":{},"headers":[{"level":2,"title":"头条","slug":"头条","link":"#头条","children":[]},{"level":2,"title":"code","slug":"code","link":"#code","children":[]},{"level":2,"title":"每日一题","slug":"每日一题","link":"#每日一题","children":[]},{"level":2,"title":"产品经理","slug":"产品经理","link":"#产品经理","children":[]}],"relativePath":"2023年01月09日.md","lastUpdated":1673194296000}'),e={name:"2023年01月09日.md"},p=l(`<h1 id="_2023年01月09日" tabindex="-1">2023年01月09日 <a class="header-anchor" href="#_2023年01月09日" aria-hidden="true">#</a></h1><h2 id="头条" tabindex="-1">头条 <a class="header-anchor" href="#头条" aria-hidden="true">#</a></h2><p><a href="https://toutiao.io/k/gy1rlq0" target="_blank" rel="noreferrer">Java 虚拟机内存优化实战案例分析指南</a></p><p><a href="https://toutiao.io/k/xh6e3lb" target="_blank" rel="noreferrer">美团开放平台SDK自动生成技术与实践</a></p><p><a href="https://toutiao.io/k/vyxb3i9" target="_blank" rel="noreferrer">独立开发变现周刊（第86期）：月收入4000美元的日程规划器</a></p><p><a href="https://toutiao.io/k/92sjc6f" target="_blank" rel="noreferrer">优雅应对故障：QQ音乐怎么做高可用架构体系？</a></p><p><a href="https://toutiao.io/k/8zwupau" target="_blank" rel="noreferrer">如何实现一个用于查看 OpenSumi 通信消息的 Chrome 插件？| OpenSumi Contributor 专访</a></p><p><a href="https://toutiao.io/k/f6lxvkv" target="_blank" rel="noreferrer">看谁还不会 Redis 高级特性 </a></p><p><a href="https://toutiao.io/k/0u7zetx" target="_blank" rel="noreferrer">中文编程不如英文香？今年诞生的这些国产编程语言表示不服</a></p><p><a href="https://toutiao.io/k/wfk3ppp" target="_blank" rel="noreferrer">主动学习（Active Learning）概述及最新研究</a></p><p><a href="https://toutiao.io/k/estb3ea" target="_blank" rel="noreferrer">携程 IT 数字办公平台 iDesk 的运营实践</a></p><p><a href="https://toutiao.io/k/az6xou0" target="_blank" rel="noreferrer">【五万言】Rust 2022 生态版图调研报告（上）</a></p><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><p><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation" target="_blank" rel="noreferrer">还原排列的最少操作步数</a></p><h2 id="每日一题" tabindex="-1">每日一题 <a class="header-anchor" href="#每日一题" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  下面这段代码输出的内容</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">defer_call</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defer_call</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">打印前</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">打印中</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">打印后</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">panic</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">触发异常</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    查看答案</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                  答案解析：</span></span>
<span class="line"><span style="color:#A6ACCD;">                  打印后</span></span>
<span class="line"><span style="color:#A6ACCD;">打印中</span></span>
<span class="line"><span style="color:#A6ACCD;">打印前</span></span>
<span class="line"><span style="color:#A6ACCD;">panic</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 触发异常</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">解析：</span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> 的执行顺序是后进先出。当出现 panic 语句的时候，会先按照 </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> 的后进先出的顺序执行，最后才会执行panic。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="产品经理" tabindex="-1">产品经理 <a class="header-anchor" href="#产品经理" aria-hidden="true">#</a></h2><p><a href="http://www.woshipm.com" target="_blank" rel="noreferrer">产品经理</a></p>`,18),r=[p];function o(t,c,i,D,F,y){return a(),n("div",null,r)}const C=s(e,[["render",o]]);export{b as __pageData,C as default};
