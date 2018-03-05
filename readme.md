
## 结构  
- 项目分层  
Browser-->Node-->php-->mySQL  

- 项目结构  
│&nbsp;&nbsp;.babelrc  
│&nbsp;&nbsp;app.js	项目主程序（入口）  
│&nbsp;&nbsp;babel-node.cmd  
│&nbsp;&nbsp;babel.cmd  
│&nbsp;&nbsp;geckodriver.exe  
│&nbsp;&nbsp;index.html  
│&nbsp;&nbsp;karma.conf.js  
│&nbsp;&nbsp;package-lock.json  
│&nbsp;&nbsp;package.json  
│&nbsp;&nbsp;readme.md 
│&nbsp;&nbsp;  
├─config  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.js	配置文件  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─controller  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initController.js	路由初始  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─models  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise.js	  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─public	静态文件  
│&nbsp;&nbsp;└─js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise-button-babel.js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise-button.js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─renders	页面渲染  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initRenders.js   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─service	PHP服务  
│&nbsp;&nbsp;├─common		通用  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;utility.php  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
│&nbsp;&nbsp;├─controller		  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise.php  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
│&nbsp;&nbsp;├─DAL	数据访问层  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db-define.php		数据库基本信息定义  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise.php	praise数据处理  
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
│&nbsp;&nbsp;└─model	  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ResultInfo.php   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
├─test		测试文件夹  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app.spec.js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e2e.js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;praise-button-babel.spec.js  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
└─views		  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;layout.html   
  
## 框架&Third Lib  
#### Browser  
- jquery  
- axios  
#### Node  
- koa  
- koa-swig  
- koa-router  
- request-promise  
- koa-static  
#### 代码转换  
- babel  
  babel.cmd仅用于windows  
#### 测试  
- karma  

  用于本项目Thumb类测试  
  - 用法参考  
  [手把手教你如何安装和使用Karma-Jasmine](http://www.cnblogs.com/wushangjue/p/4539189.html)  
  - 使用  
    - 在项目根目录下执行```karma start```歌者```npm test```  
    - 在karma打开的浏览器中点击“Debug”按钮  
    - 在“Debug”按钮弹出的新页面中,按F12-->Control面板，会看到测试结果  
    - 在项目的test\coverage路径下会看到Karma生成的测试覆盖率报告  
- selenium-webdriver  

  e2e测试  
  - 用法看文档：http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html  
  - 更多查源码（更清楚）：https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver  
- Mocha + supertest  

  用于本项目Http请求和路由的测试  
  - 参考  
  https://www.imooc.com/article/2631  
  http://wiki.jikexueyuan.com/project/node-lessons/supertest.html  
  
#### PM2  
- pm2基本使用：  
http://www.cnblogs.com/zhongweiv/p/pm2.html  
该博主的文章写的较好，有nodejs系列，推荐  

- pm2 Keymetrics:  
参考：  
http://blog.csdn.net/starwmx520/article/details/52515362  
注册时使用了github帐号  

#### nginx  
- nginx安装  
  - windows  
  官网下载，解压，直接执行exe  
  - linux  
  参考  0201.http&nginx(直播) 后半段  

- nginx命令(windos)  
以管理员权限运行cmd  
```  
nginx -s reload  
nginx -s quit  
```  
- nginx.conf配置说明  
``` json  
#权限  
#user  nobody;  

#进程数  
#设置值和CPU核心数一致  
worker_processes  1;  

#日志  
#error_log  logs/error.log;  
#error_log  logs/error.log  notice;  
#error_log  logs/error.log  info;  


#pid        logs/nginx.pid;  

#可并发的TCP链接  
events {  
    worker_connections  1024;  
}  


http {  
    include       mime.types;  
    default_type  application/octet-stream;  

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '  
    #                  '$status $body_bytes_sent "$http_referer" '  
    #                  '"$http_user_agent" "$http_x_forwarded_for"';  

    #access_log  logs/access.log  main;  

    sendfile        on;  
    #tcp_nopush     on;  

    #keepalive_timeout  0;  
    keepalive_timeout  65;  

    #gzip  on;  

	#upstream块，可以此处配置负载均衡，默认以轮询方式选择服务器  
    upstream web_crm {  
        server 127.0.0.1:8080;  
		server 127.0.0.1:8088;  
    }  
	
	#upstream块，下面使用了权重，即轮询几率，weight和访问比率成正比  
    upstream web_mgrsys {  
        server 127.0.0.1:8090 weight=2;  
        server 127.0.0.1:8099;  
    }  
	
	#下面是server虚拟主机的配置  
	# server块，可有多个  
    server {		
        listen       80;  
        server_name  localhost;  

		#字符集，下面屏蔽掉的是俄罗斯字符，屏蔽掉后默认为utf8  
        #charset koi8-r;  
		
        #access_log  logs/host.access.log  main;  

		#根路径定义，根路径指向nginx服务的“html”文件夹，默认index页面为index.html index.htm  
        location / {  
            root   html;  
            index  index.html index.htm;  
        }  
		
		#/crm/路径定义  
		#此路径指向前面upstream web_crm块的定义，以实现负载匀衡  
        location /crm/ {  
			
            proxy_pass http://web_crm/crm/;  

            proxy_redirect  off;  
            proxy_set_header Host $host;  

            proxy_http_version 1.1;  
            proxy_set_header Upgrade $http_upgrade;  
            proxy_set_header Connection ‘upgrade’;  
            proxy_cache_bypass $http_upgrade;  

            proxy_set_header X-Real-IP $remote_addr;  
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
        }  
        location /MgrSys/ {  
            proxy_pass http://web_mgrsys/MgrSys/;  

            proxy_redirect  off;  
            proxy_set_header Host $host;  

            proxy_http_version 1.1;  
            proxy_set_header Upgrade $http_upgrade;  
            proxy_set_header Connection ‘upgrade’;  
            proxy_cache_bypass $http_upgrade;  

            proxy_set_header X-Real-IP $remote_addr;  
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
        }  
        #error_page  404              /404.html;  

        # redirect server error pages to the static page /50x.html  
        #  
        error_page   500 502 503 504  /50x.html;  
        location = /50x.html {  
            root   html;  
        }  

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80  
        #  
        #location ~ \.php$ {  
          #    proxy_pass   http://127.0.0.1;  
        #}  

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000  
        #  
        #location ~ \.php$ {  
        #    root           html;  
        #    fastcgi_pass   127.0.0.1:9000;  
        #    fastcgi_index  index.php;  
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;  
        #    include        fastcgi_params;  
        #}  

        # deny access to .htaccess files, if Apache's document root  
        # concurs with nginx's one  
        #  
        #location ~ /\.ht {  
        #    deny  all;  
        #}  
    }  


    # another virtual host using mix of IP-, name-, and port-based configuration  
    #  
    #server {  
    #    listen       8000;  
    #    listen       somename:8080;  
    #    server_name  somename  alias  another.alias;  

    #    location / {  
    #        root   html;  
    #        index  index.html index.htm;  
    #    }  
    #}  


    # HTTPS server  
    #  
    #server {  
    #    listen       443 ssl;  
    #    server_name  localhost;  

    #    ssl_certificate      cert.pem;  
    #    ssl_certificate_key  cert.key;  

    #    ssl_session_cache    shared:SSL:1m;  
    #    ssl_session_timeout  5m;  

    #    ssl_ciphers  HIGH:!aNULL:!MD5;  
    #    ssl_prefer_server_ciphers  on;  

    #    location / {  
    #        root   html;  
    #        index  index.html index.htm;  
    #    }  
    #}  

}  

```  
- 参考：  
https://www.jianshu.com/p/01f574b1a29f  
http://blog.csdn.net/tjcyjd/article/details/50695922  
  