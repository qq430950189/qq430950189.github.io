"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5218],{3671:(e,n)=>{n.A=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},1850:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>Q,data:()=>$});var s=a(7847);const t=(0,s.Lk)("p",null,"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。",-1),l=(0,s.Lk)("h2",{id:"评论插件",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#评论插件"},[(0,s.Lk)("span",null,"评论插件")])],-1),i={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},c={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},d={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Lk)("h2",{id:"waline",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#waline"},[(0,s.Lk)("span",null,"Waline")])],-1),k=(0,s.Lk)("p",null,"Waline 支持 Akismet 反垃圾评论和免注册留言，但匿名留言会带来安全隐患。建议开启评论通知来避免出现极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等。对于评论的回复，仅支持邮件通知。",-1),b={href:"https://waline.js.org/guide/server/notification.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://waline.js.org/reference/server.html",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Lk)("code",null,"*.vercel.app",-1),f=(0,s.Lk)("h3",{id:"手动部署",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#手动部署"},[(0,s.Lk)("span",null,"手动部署")])],-1),w=(0,s.Lk)("p",null,"请注意，Vercel 和 LeanCloud 有额度限制。如果你的网站日访客超过一千人次，建议使用自行部署的方案。以下是我的部署步骤：",-1),L={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Lk)("sup",{class:"footnote-ref"},[(0,s.Lk)("a",{href:"#footnote1"},"[1]"),(0,s.Lk)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),W=(0,s.Fv)('<li><p>配置必要的环境变量，可添加于 /etc/environment。配置完成后，需要重启项目让环境变量生效。并注意最后一行需保留空行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">MYSQL_DB</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>\n<span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>\n<span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署 Waline 服务端，使用 forever 让其持久化运行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 切换到站点路径</span>\n<span class="token builtin class-name">cd</span> /www/wwwroot/node/waline\n\n<span class="token comment"># 安装 waline 前端包</span>\n<span class="token function">yarn</span> <span class="token function">add</span> @waline/vercel <span class="token parameter variable">--dev</span>\n\n<span class="token comment"># 运行模块内的 vanilla.js 文件</span>\n<span class="token function">node</span> node_modules/@waline/vercel/vanilla.js\n\n<span class="token comment"># 使用 forever 持久化运行程序</span>\n<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> forever <span class="token parameter variable">-g</span>\nforever start app.js  <span class="token comment">#启动应用</span>\nforever stop app.js  <span class="token comment">#关闭应用</span>\nforever restartall  <span class="token comment">#重启所有应用</span>\n\n<span class="token comment"># 持久化运行 Waline</span>\nforever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js\n\n<span class="token comment"># 更改 package.json 版本号，升级并重启</span>\nforever stop /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js\n<span class="token builtin class-name">cd</span> /www/wwwroot/node/waline <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> forever start /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开网页管理后台，通过导入事先备份的 JSON 文件来还原数据。</p></li>',3),y=(0,s.Fv)('<p>新手可以使用宝塔面板的 Node.js 版本管理器来部署 Node.js。安装后，受限更新版本列表，然后选择要使用的 Node 版本，将其设置为命令行版本，接着配置服务器的环境变量。虽然宝塔可以管理 Node 项目，但容易出现错误。处理流程为进入「网站」&gt;「Node 项目」&gt;「添加 Node 项目」，将启动选项设置为模块内的 vanilla.js 文件，将项目端口设置为 8360，并设置绑定域名。</p><p>注意：如果你选择手动部署反向代理服务器，请务必使用 Waline 官方提供的 Nginx 配置文件，否则可能会导致<strong>无法登录后台</strong>，或是<strong>版本升级后仍然提示升级</strong>等问题。如果仍然有问题，请检查是否使用 SSH 直连服务器，而非宝塔自带网页终端。宝塔网页终端执行的命令有几率出错，一定要使用正常的 SSH 链接。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>server\n<span class="token punctuation">{</span>\n  listen <span class="token number">80</span><span class="token punctuation">;</span>\n  listen <span class="token number">443</span> ssl http2<span class="token punctuation">;</span>\n  server_name waline.newzone.top<span class="token punctuation">;</span>\n  root /www/wwwroot/waline<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    rewrite ^<span class="token punctuation">(</span>/.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment"># SSL setting</span>\n  ssl_certificate    /www/server/panel/vhost/cert/waline/fullchain.pem<span class="token punctuation">;</span>\n  ssl_certificate_key    /www/server/panel/vhost/cert/waline/privkey.pem<span class="token punctuation">;</span>\n  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3<span class="token punctuation">;</span>\n  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>\n  ssl_prefer_server_ciphers on<span class="token punctuation">;</span>\n  ssl_session_cache shared:SSL:10m<span class="token punctuation">;</span>\n  ssl_session_timeout 10m<span class="token punctuation">;</span>\n  add_header Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token comment"># proxy to 8360</span>\n  location / <span class="token punctuation">{</span>\n    proxy_pass http://127.0.0.1:8360<span class="token punctuation">;</span>\n    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>\n    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>\n    proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>\n    proxy_set_header REMOTE-HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n    add_header X-Cache <span class="token variable">$upstream_cache_status</span><span class="token punctuation">;</span>\n    <span class="token comment"># cache</span>\n    add_header Cache-Control no-cache<span class="token punctuation">;</span>\n    expires 12h<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入时间处理" tabindex="-1"><a class="header-anchor" href="#导入时间处理"><span>导入时间处理</span></a></h2><p>如果 Waline 数据导入还原后，评论发布时间被重置为当前时间，则说明时间格式不兼容。以下以 LeanCloud 转 MySQL 为例：</p>',5),S=(0,s.Lk)("code",null,"2023-03-24T17:27:28.121Z",-1),C={href:"https://web-platform-dzhkey.stackblitz.io",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Lk)("code",null,"[{},{}……,{}]",-1),q={href:"https://www.convertjson.com/json-to-sql.htm#",target:"_blank",rel:"noopener noreferrer"},V=(0,s.Lk)("li",null,[(0,s.Lk)("p",null,[(0,s.eW)("在 json2sql 页面中，点击按钮「Format JSON」，然后按截图勾选「Still not happy」「Enclose field names」「Backtick ("),(0,s.Lk)("code",null,"name"),(0,s.eW)(")」，取消勾选第一个值的 key。同时，取消勾选 objectId 的「Include」，该项将不会导入数据库。")]),(0,s.Lk)("figure",null,[(0,s.Lk)("img",{src:"https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,s.Lk)("figcaption")])],-1),j=(0,s.Lk)("li",null,[(0,s.Lk)("p",null,"将「Schema.Table or View Name」依次设为「`wl_Comment`」「`wl_Counter`」「`wl_Users`」，取消勾选「Create Table/View」。")],-1),G=(0,s.Lk)("li",null,[(0,s.Lk)("p",null,"在 Step 3: Generate output 下点击按钮「JSON TO SQL Insert」，然后点击复制按钮。")],-1),E=(0,s.Lk)("li",null,[(0,s.Lk)("p",null,"进入 phpMyAdmin 数据库后台，选中要操作的表（如 wl_Comment），点击右侧的 SQL 按钮运行 SQL 查询，将复制的内容粘贴到此，并点击执行。若无报错，则说明数据导入正常。")],-1),F=(0,s.Fv)('<p>处理后时间可以正常导入，但由于 id 结构不同，旧的评论回复将失去联系。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk"><span>Gitalk</span></a></h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>将以下代码复制粘贴至 docsify 页面，即可启动 Gitalk：</p><div class="language-HTML line-numbers-mode" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;\n\n&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n    /* 使用下面的 Javascript 代码生成 gitalk 插件 */\n    const gitalk = new Gitalk({\n        clientID: &#39;2f3da234d27ed9a7c290&#39;,\n        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,\n        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)\n        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)\n        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）\n        // id: location.pathname,   // Ensure uniqueness and length less than 50\n        distractionFreeMode: false  // Facebook-like distraction free mode\n    })\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">',9),D={class:"footnotes"},T={class:"footnotes-list"},H={id:"footnote1",class:"footnote-item"},A={href:"https://waline.js.org/guide/database.html#mysql",target:"_blank",rel:"noopener noreferrer"},N=(0,s.Lk)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),M={id:"footnote2",class:"footnote-item"},z={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Lk)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),R={},Q=(0,a(3671).A)(R,[["render",function(e,n){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[t,l,(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.Lk)("a",i,[(0,s.eW)("Waline"),(0,s.bF)(a)]),(0,s.eW)("：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。")]),(0,s.Lk)("li",null,[(0,s.Lk)("a",r,[(0,s.eW)("Valine"),(0,s.bF)(a)]),(0,s.eW)("：快速、简洁且高效的无后端评论系统，可匿名互动。")]),(0,s.Lk)("li",null,[(0,s.Lk)("a",o,[(0,s.eW)("giscus"),(0,s.bF)(a)]),(0,s.eW)("：基于 github discussion，近似于论坛。查看 "),(0,s.Lk)("a",c,[(0,s.eW)("配置方法"),(0,s.bF)(a)]),(0,s.eW)("。")]),(0,s.Lk)("li",null,[(0,s.Lk)("a",p,[(0,s.eW)("Gitalk"),(0,s.bF)(a)]),(0,s.eW)("：基于 github commit，需配置独立库用于存储评论。")]),(0,s.Lk)("li",null,[(0,s.Lk)("a",d,[(0,s.eW)("Gitter"),(0,s.bF)(a)]),(0,s.eW)("：要登录的公共聊天室。样例如："),(0,s.Lk)("a",u,[(0,s.eW)("boardgame"),(0,s.bF)(a)]),(0,s.eW)("，"),(0,s.Lk)("a",m,[(0,s.eW)("regauge"),(0,s.bF)(a)]),(0,s.eW)("。")])]),v,k,(0,s.Lk)("p",null,[(0,s.eW)("Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 "),(0,s.Lk)("a",b,[(0,s.eW)("Waline 评论通知"),(0,s.bF)(a)]),(0,s.eW)("配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 "),(0,s.Lk)("a",h,[(0,s.eW)("Waline 服务端配置"),(0,s.bF)(a)]),(0,s.eW)("。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。目前 "),g,(0,s.eW)(" 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。")]),f,w,(0,s.Lk)("ol",null,[(0,s.Lk)("li",null,[(0,s.Lk)("p",null,[(0,s.eW)("新建数据库，并导入 "),(0,s.Lk)("a",L,[(0,s.eW)("waline.sql"),(0,s.bF)(a)]),(0,s.eW)(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。"),_])]),W]),y,(0,s.Lk)("ol",null,[(0,s.Lk)("li",null,[(0,s.Lk)("p",null,[S,(0,s.eW)(' 这个时间戳中的格式 "T" 和 "Z" 不被 MySQL 支持，要将 "T" 替换为空格并将 "Z" 删除。我写了个'),(0,s.Lk)("a",C,[(0,s.eW)("网页工具"),(0,s.bF)(a)]),(0,s.eW)("处理时间格式替换。")])]),(0,s.Lk)("li",null,[(0,s.Lk)("p",null,[(0,s.eW)("提取数据中的 Comment、Counter 和 Users，格式为 "),x,(0,s.eW)("，依次复制到 "),(0,s.Lk)("a",q,[(0,s.eW)("json2sql"),(0,s.bF)(a)]),(0,s.eW)(" 进行操作。")])]),V,j,G,E]),F,(0,s.Lk)("section",D,[(0,s.Lk)("ol",T,[(0,s.Lk)("li",H,[(0,s.Lk)("p",null,[(0,s.Lk)("a",A,[(0,s.eW)("Waline 多数据库服务支持"),(0,s.bF)(a)]),(0,s.eW)(),N])]),(0,s.Lk)("li",M,[(0,s.Lk)("p",null,[(0,s.Lk)("a",z,[(0,s.eW)("超 Nice 的评论组件 —— Gitalk"),(0,s.bF)(a)]),(0,s.eW)(),O])])])])])}]]),$=JSON.parse('{"path":"/web/Comments.html","title":"评论插件","lang":"zh-CN","frontmatter":{"article":false,"title":"评论插件","icon":"comment","order":3,"description":"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效...","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/Comments.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"评论插件"}],["meta",{"property":"og:description","content":"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-13T04:29:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"评论插件"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-03-13T04:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"评论插件\\",\\"description\\":\\"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效...\\"}"]]},"headers":[{"level":2,"title":"评论插件","slug":"评论插件","link":"#评论插件","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[{"level":3,"title":"手动部署","slug":"手动部署","link":"#手动部署","children":[]}]},{"level":2,"title":"导入时间处理","slug":"导入时间处理","link":"#导入时间处理","children":[]},{"level":2,"title":"Gitalk","slug":"gitalk","link":"#gitalk","children":[]}],"git":{"createdTime":1710304188000,"updatedTime":1710304188000,"contributors":[{"name":"qq430950189","email":"98295593+qq430950189@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.39,"words":1616},"filePathRelative":"web/Comments.md","localizedDate":"2024年3月13日","excerpt":"<p>LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline &gt; Valine &gt; giscus &gt; Gitalk &gt; Gitter。</p>\\n<h2>评论插件</h2>\\n<ul>\\n<li><a href=\\"https://waline.js.org/guide/get-started.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Waline</a>：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。</li>\\n<li><a href=\\"https://github.com/xCss/Valine\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Valine</a>：快速、简洁且高效的无后端评论系统，可匿名互动。</li>\\n<li><a href=\\"https://github.com/giscus/giscus\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">giscus</a>：基于 github discussion，近似于论坛。查看 <a href=\\"https://blog.csdn.net/duninet/article/details/125280107\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">配置方法</a>。</li>\\n<li><a href=\\"https://github.com/gitalk/gitalk\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gitalk</a>：基于 github commit，需配置独立库用于存储评论。</li>\\n<li><a href=\\"https://gitter.im/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gitter</a>：要登录的公共聊天室。样例如：<a href=\\"https://boardgame.io/documentation/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">boardgame</a>，<a href=\\"https://itchef.github.io/regauge/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">regauge</a>。</li>\\n</ul>","autoDesc":true}')}}]);