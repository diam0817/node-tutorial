docker-compose build 
docker-compose up
Last login: Tue Aug  2 12:36:35 on ttys000
a206726975@FVFHL030Q05Q ~ % brew install node
zsh: command not found: brew
a206726975@FVFHL030Q05Q ~ % mkdir node-tutorial 
a206726975@FVFHL030Q05Q ~ % cd node-tutorial
a206726975@FVFHL030Q05Q node-tutorial % npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (tutorial) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/a206726975/node-tutorial/package.json:

{
  "name": "tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
npm notice 
npm notice New minor version of npm available! 8.11.0 -> 8.15.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.15.1
npm notice Run npm install -g npm@8.15.1 to update!
npm notice 
a206726975@FVFHL030Q05Q node-tutorial % ls -a
.		..		package.json
a206726975@FVFHL030Q05Q node-tutorial % touch .gitignore .dockerignore server.js
a206726975@FVFHL030Q05Q node-tutorial % ls -a
.		.dockerignore	package.json
..		.gitignore	server.js
a206726975@FVFHL030Q05Q node-tutorial % npm install --save express cors body-parser @rama41222/node-logger
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

added 100 packages, and audited 101 packages in 5s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
a206726975@FVFHL030Q05Q node-tutorial % npm install --save-dev nodemon

added 33 packages, and audited 134 packages in 2s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
a206726975@FVFHL030Q05Q node-tutorial % open server.js
a206726975@FVFHL030Q05Q node-tutorial % npm run dev

> tutorial@1.0.0 dev
> nodemon server.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
2022-08-02 12:54:27 info: sample-express-app running on 0.0.0.0:3000
2022-08-02 12:54:47 info: {"id":"e6d09964-8527-4f6f-a27d-06952a52e7e5","type":"request","date":"2022-08-02T16:54:47.940Z","body":{},"method":"GET","header":{"host":"localhost:3000","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
2022-08-02 12:54:47 info: {"id":"0b6b4e31-16a3-4e1e-b179-88b402cc2ad1","type":"request","date":"2022-08-02T16:54:47.970Z","body":{},"method":"GET","header":{"host":"localhost:3000","connection":"keep-alive","accept":"*/*","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","referer":"http://localhost:3000/","accept-encoding":"gzip, deflate"},"params":{},"query":{},"ip":"127.0.0.1"}
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
2022-08-02 12:55:59 info: sample-express-app running on 0.0.0.0:3000
2022-08-02 12:56:03 info: {"id":"9b7b0eb4-f237-48cf-a934-a04c1c4a84e0","type":"request","date":"2022-08-02T16:56:03.371Z","body":{},"method":"GET","header":{"host":"localhost:3000","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
2022-08-02 12:58:13 info: sample-express-app running on 0.0.0.0:3000
2022-08-02 12:58:24 info: {"id":"ca98946a-f9d7-4dad-ad78-31fa61a46bf2","type":"request","date":"2022-08-02T16:58:24.037Z","body":{},"method":"GET","header":{"host":"localhost:3000","if-none-match":"W/\"d-p98BBjEX8fTqup/nvOYhXZQbxis\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
2022-08-02 12:58:25 info: {"id":"63a3e07d-d1fe-4b8a-9395-3b8b5c58c4f3","type":"request","date":"2022-08-02T16:58:25.710Z","body":{},"method":"GET","header":{"host":"localhost:3000","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
2022-08-02 12:59:10 info: sample-express-app running on 0.0.0.0:3000
2022-08-02 12:59:13 info: {"id":"83742125-551c-4eed-9c1e-d317700c0956","type":"request","date":"2022-08-02T16:59:13.970Z","body":{},"method":"GET","header":{"host":"localhost:3000","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
2022-08-02 13:00:02 info: {"id":"66505d70-e133-428d-9077-4f185777910e","type":"request","date":"2022-08-02T17:00:02.017Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"555214a4-7da4-4b08-abaf-d53376f2a888","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
2022-08-02 13:00:10 info: {"id":"5e1f6686-7a41-4788-a137-ad5d936bbada","type":"request","date":"2022-08-02T17:00:10.305Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"04beb83c-b9a9-4b74-87ad-838934559e7a","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"127.0.0.1"}
^C
a206726975@FVFHL030Q05Q node-tutorial % docker-compose build
zsh: command not found: docker-compose
a206726975@FVFHL030Q05Q node-tutorial % docker compose build
zsh: command not found: docker
a206726975@FVFHL030Q05Q node-tutorial % docker-compose build
web-cli uses an image, skipping
Building api
[+] Building 10.6s (10/10) FINISHED                                             
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 181B                                       0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 34B                                           0.0s
 => [internal] load metadata for docker.io/library/node:11-alpine          3.9s
 => [internal] load build context                                          0.5s
 => => transferring context: 10.12MB                                       0.5s
 => [1/5] FROM docker.io/library/node:11-alpine@sha256:8bb56bab197299c8ff  3.0s
 => => resolve docker.io/library/node:11-alpine@sha256:8bb56bab197299c8ff  0.0s
 => => sha256:de228642d9803e88d8d45bf71205ccb9d546b12039f 1.34MB / 1.34MB  1.0s
 => => sha256:8bb56bab197299c8ff820f1a55462890caf08f57ffe 1.42kB / 1.42kB  0.0s
 => => sha256:14a0af90692b9a78122d011ce27e179e71452fbe13c 1.16kB / 1.16kB  0.0s
 => => sha256:0e31cbec166320f4903926462898f7853ff742156b0 5.66kB / 5.66kB  0.0s
 => => sha256:0362ad1dd800a9d92f8982fa28f173f912026615383 2.69MB / 2.69MB  1.3s
 => => sha256:cf3f534127ef166ff710bf0c564a464fd010d4c96 21.58MB / 21.58MB  2.1s
 => => sha256:d9951aa87a8b4ea7e9d367cc730110fceec6271c25ee034 281B / 281B  1.4s
 => => extracting sha256:0362ad1dd800a9d92f8982fa28f173f9120266153830f990  0.1s
 => => extracting sha256:cf3f534127ef166ff710bf0c564a464fd010d4c96527cd8a  0.7s
 => => extracting sha256:de228642d9803e88d8d45bf71205ccb9d546b12039fa88bd  0.1s
 => => extracting sha256:d9951aa87a8b4ea7e9d367cc730110fceec6271c25ee0342  0.0s
 => [2/5] RUN mkdir -p /usr/src/app                                        0.2s
 => [3/5] WORKDIR /usr/src/app                                             0.0s
 => [4/5] COPY . .                                                         0.1s
 => [5/5] RUN npm install                                                  3.1s
 => exporting to image                                                     0.2s
 => => exporting layers                                                    0.2s
 => => writing image sha256:ca0a884a08310279a2db960881cb539737570be007a3d  0.0s
 => => naming to docker.io/library/sample-express-app                      0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Creating network "node-tutorial_backend" with driver "bridge"
Creating node-tutorial_web-cli_1 ... done
Creating node-tutorial_api_1     ... done
Attaching to node-tutorial_api_1, node-tutorial_web-cli_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 start /usr/src/app
api_1      | > node server.js
api_1      | 
api_1      | (node:18) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:19:25 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:19:38 info: {"id":"064fa0c8-fe3d-4452-987d-79def070f9f0","type":"request","date":"2022-08-03T15:19:38.429Z","body":{},"method":"GET","header":{"host":"localhost:3000","if-none-match":"W/\"f-22WPXUW7gfaOa0tqo2RXemd++zs\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:19:38 info: {"id":"0a7750b4-f8da-44d4-b285-09c19a66cf1f","type":"request","date":"2022-08-03T15:19:38.821Z","body":{},"method":"GET","header":{"host":"localhost:3000","if-none-match":"W/\"d-p98BBjEX8fTqup/nvOYhXZQbxis\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:19:42 info: {"id":"a17d3a63-7ed4-4d80-ab3c-6b73df3c7e83","type":"request","date":"2022-08-03T15:19:42.826Z","body":{},"method":"GET","header":{"host":"localhost:3000","if-none-match":"W/\"f-22WPXUW7gfaOa0tqo2RXemd++zs\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:19:44 info: {"id":"ef5ccf9d-4f1a-405c-9384-2f28289bf290","type":"request","date":"2022-08-03T15:19:44.515Z","body":{},"method":"GET","header":{"host":"localhost:3000","if-none-match":"W/\"d-p98BBjEX8fTqup/nvOYhXZQbxis\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","accept-language":"en-US,en;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:39:54 info: {"id":"72e63f4e-1f56-46fc-a339-5ec5345b8954","type":"request","date":"2022-08-03T15:39:54.900Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"279dc8fd-7873-4c09-9ceb-980e974ac118","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1     ... done
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Starting node-tutorial_web-cli_1 ... done
Starting node-tutorial_api_1     ... done
Attaching to node-tutorial_api_1, node-tutorial_web-cli_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 start /usr/src/app
api_1      | > node server.js
api_1      | 
api_1      | (node:18) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:40:25 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:40:33 info: {"id":"4fdb85ad-fbdf-42d3-a0a3-1693f87de2cc","type":"request","date":"2022-08-03T15:40:33.883Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"8ad2bf26-b199-46d1-bc74-56c4f73b923f","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1     ... done
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Starting node-tutorial_web-cli_1 ... done
Starting node-tutorial_api_1     ... done
Attaching to node-tutorial_web-cli_1, node-tutorial_api_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 start /usr/src/app
api_1      | > node server.js
api_1      | 
api_1      | (node:18) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:42:03 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:42:07 info: {"id":"9b2c3cd9-a116-4b5d-b2cb-809bba758263","type":"request","date":"2022-08-03T15:42:07.264Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"dd7d1a82-27e4-4959-b4cb-a99850176996","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:42:37 info: {"id":"754afc54-3689-4990-89eb-dcfe9729b3cf","type":"request","date":"2022-08-03T15:42:37.762Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"67c9c364-b794-4c92-b7be-e7f63e6e1ed7","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:42:43 info: {"id":"39e27f17-ef2e-490c-b627-10c9bad9e01a","type":"request","date":"2022-08-03T15:42:43.148Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"8de31571-2826-4db0-b88d-e0564045b1e3","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:42:58 info: {"id":"5e465db2-9c87-49e0-93da-42f896b1e1b6","type":"request","date":"2022-08-03T15:42:58.110Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"79c00a6e-797b-4c71-9504-dd647fc33496","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1     ... done
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Starting node-tutorial_web-cli_1 ... done
Starting node-tutorial_api_1     ... done
Attaching to node-tutorial_api_1, node-tutorial_web-cli_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 start /usr/src/app
api_1      | > node server.js
api_1      | 
api_1      | (node:17) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:45:05 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:45:20 info: {"id":"6fcc5695-7897-498c-8a58-48f14c66e12b","type":"request","date":"2022-08-03T15:45:20.394Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"5a114651-3953-495d-b3c5-5d0197283c8d","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:46:36 info: {"id":"c5097df3-5b99-4ea0-a729-31355f8bf846","type":"request","date":"2022-08-03T15:46:36.768Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"9ebde12a-25dd-4c8a-b0d8-76c1cea69ba2","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1     ... done
a206726975@FVFHL030Q05Q node-tutorial % docker-compose build
web-cli uses an image, skipping
Building api
[+] Building 4.3s (10/10) FINISHED                                              
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 37B                                        0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 32B                                           0.0s
 => [internal] load metadata for docker.io/library/node:11-alpine          1.0s
 => [1/5] FROM docker.io/library/node:11-alpine@sha256:8bb56bab197299c8ff  0.0s
 => [internal] load build context                                          0.1s
 => => transferring context: 126.57kB                                      0.1s
 => CACHED [2/5] RUN mkdir -p /usr/src/app                                 0.0s
 => CACHED [3/5] WORKDIR /usr/src/app                                      0.0s
 => [4/5] COPY . .                                                         0.1s
 => [5/5] RUN npm install                                                  2.9s
 => exporting to image                                                     0.2s
 => => exporting layers                                                    0.2s
 => => writing image sha256:d42e617d925340ef079dacb762ed68543b38eb3453c35  0.0s 
 => => naming to docker.io/library/sample-express-app                      0.0s 
                                                                                
Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
a206726975@FVFHL030Q05Q node-tutorial % docker-sompose up
zsh: command not found: docker-sompose
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Recreating node-tutorial_api_1     ... done
Recreating node-tutorial_web-cli_1 ... done
Attaching to node-tutorial_api_1, node-tutorial_web-cli_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 start /usr/src/app
api_1      | > node server.js
api_1      | 
api_1      | (node:17) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:47:25 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:47:29 info: {"id":"c6930e56-2237-48a8-963b-b22153153427","type":"request","date":"2022-08-03T15:47:29.549Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"dc570652-6635-47cf-b945-34a6e6d53a6f","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:47:39 info: {"id":"67fd819e-125f-4f34-abb1-b161a4c0918f","type":"request","date":"2022-08-03T15:47:39.879Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"931935ae-b979-4fa2-92e3-89b669db1e16","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:47:46 info: {"id":"e839ca08-fb4c-43af-afce-cf6c7c0fcc86","type":"request","date":"2022-08-03T15:47:46.862Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"ac7b610b-8cd9-41be-9cb1-b54037421c12","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1       ... done
a206726975@FVFHL030Q05Q node-tutorial % docker-compose build
web-cli uses an image, skipping
Building api
[+] Building 3.5s (10/10) FINISHED                                              
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 179B                                       0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 32B                                           0.0s
 => [internal] load metadata for docker.io/library/node:11-alpine          0.5s
 => [internal] load build context                                          0.1s
 => => transferring context: 126.03kB                                      0.1s
 => [1/5] FROM docker.io/library/node:11-alpine@sha256:8bb56bab197299c8ff  0.0s
 => CACHED [2/5] RUN mkdir -p /usr/src/app                                 0.0s
 => CACHED [3/5] WORKDIR /usr/src/app                                      0.0s
 => [4/5] COPY . .                                                         0.1s
 => [5/5] RUN npm install                                                  2.6s
 => exporting to image                                                     0.2s
 => => exporting layers                                                    0.2s
 => => writing image sha256:206a8af9c791a45a118612c471a432065cdf55254e794  0.0s 
 => => naming to docker.io/library/sample-express-app                      0.0s 
                                                                                
Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
a206726975@FVFHL030Q05Q node-tutorial % docker-compose up
Recreating node-tutorial_api_1     ... done
Recreating node-tutorial_web-cli_1 ... done
Attaching to node-tutorial_web-cli_1, node-tutorial_api_1
node-tutorial_web-cli_1 exited with code 0
api_1      | 
api_1      | > tutorial@1.0.0 dev /usr/src/app
api_1      | > nodemon server.js
api_1      | 
api_1      | [nodemon] 2.0.19
api_1      | [nodemon] to restart at any time, enter `rs`
api_1      | [nodemon] watching path(s): *.*
api_1      | [nodemon] watching extensions: js,mjs,json
api_1      | [nodemon] starting `node server.js`
api_1      | (node:31) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:51:19 info: sample-express-app running on 0.0.0.0:3000
api_1      | [nodemon] restarting due to changes...
api_1      | [nodemon] starting `node server.js`
api_1      | (node:44) ExperimentalWarning: queueMicrotask() is experimental.
api_1      | 2022-08-03 15:51:40 info: sample-express-app running on 0.0.0.0:3000
api_1      | 2022-08-03 15:51:58 info: {"id":"4d8ec04e-84b3-4d04-8db4-ce8e9052b1e2","type":"request","date":"2022-08-03T15:51:58.756Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"7ae5f839-49ef-43e6-a8d8-5b2782f9b142","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
api_1      | 2022-08-03 15:52:00 info: {"id":"33e76e0a-51b9-4e1b-9f8d-db84a4563621","type":"request","date":"2022-08-03T15:52:00.443Z","body":{},"method":"GET","header":{"user-agent":"PostmanRuntime/7.29.2","accept":"*/*","postman-token":"76800f0d-8361-465a-9bd2-40c6e5c9a279","host":"localhost:3000","accept-encoding":"gzip, deflate, br","connection":"keep-alive"},"params":{},"query":{},"ip":"172.18.0.1"}
^CGracefully stopping... (press Ctrl+C again to force)
Stopping node-tutorial_api_1       ... done
a206726975@FVFHL030Q05Q node-tutorial % 
