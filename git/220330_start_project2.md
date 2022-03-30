## **<프로젝트 생성 알아두어야 할 것>** 
[블로그에서는 이미지가 깨지지 않습니다.](https://flyda-it.tistory.com/8?category=1088952)

### 1. README.md

-   프로젝트와 REPO를 설명하는 표지 같은 문서!!
-   나와 동료, 이 repo의 사용자를 위한 문서!

[angular project](https://github.com/angular/angular)에서 readme.md랑 commit이 정말 좋음!! 참고하면 좋을 것 같다.

[##_Image|kage@bM0y3k/btrxVGvYIcA/8fJvbyC2njfIa5lr5dFPik/img.png|CDM|1.3|{"originWidth":1517,"originHeight":511,"style":"alignCenter","caption":"angular project참고 하면 좋을 commit 메시지 모습","filename":"angular.png"}_##]

#### 1.1 README.md 파일 참고하면 좋을 예시!! 

```markdown 
 # Project Name  
 Abstract your project in few lines.  
 see [project sample page](project link)  
   
 ## Documentation  
   
 ### Installation  
 To install,  
 `$ pip install sesame`  
 and run `$ python open_sesame.py`  
   
 ### Supported Python versions  
 `>=3.6`  
   
 ### More Information  
 - [API docs]()  
 - [Official website]()  
   
 ### Contributing  
 Please see [CONTRIBUTING.md]()  
   
 ### License  
 Sesame is Free software, and may be redistributed under the terms of specified in the [LICENSE]() file.  
``` 

### 2. LICENSE : 정말 중요 체크를 하고 써야 한다!!

\- MIT License : 마음대로 해도 된다!!   
\- Apache License 2.0 : 아파치 재단에서 만든 라이센스인데, 특허권 관련 내용이 포함되어 있다.   
\- GNU General Public License V3.0 : 가장 많이 알려져 있고, 의무사항이 있다.  GPL을 따라야 한다.( 코드를 쓰면 오픈하던지 아니면 돈 내야 함. ㄷㄷ 정말 중요!!!) 

보통 MIT나 Apache 쓰는 게 편함. 

### 3. .gitignore

[##_Image|kage@cPAbTM/btrx07FWDjI/1xxrYvB0iphUsJZiBivOK0/img.png|CDM|1.3|{"originWidth":1166,"originHeight":646,"style":"alignLeft","caption":".gitignore파일에 auth.* 등의 내용을 넣고 난 이후 git file track(깃 파일 추적)안되는 모습","filename":"blob"}_##]


```
$ ls -a
//-a를 안 넣으면 .gitignore파일이 안 보일 수 있다.
$ git status
$ vi .gitignore
$ git status
```
.gitignore에 들어가는 내용은 직접 추가해 주어도 되지만 밑의 링크를 참고하면 좋다. 

[https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)

여기를 참고하면 자시의 프로젝트에 맞는 gitignore 파일을 만들어준다!! 어떤 언어, 어떤 프레임워크를 쓸 건지 등등을 넣어주면 된다! 



## **\* github blog 만들기 \***

내가 실습한 폴더의 구조는 dev안에 두 폴더가 있는 구조였다.!! 

```
dev
-- username.github.io.git
-- ghblog
```

자주 사용 안 하던 블로그라면 새로 만드는 것이 좋다. 구글에서  SEO(검색 엔진 최적화) 점수가 있는데, 업데이트 내용이 자주 일어나지 않으면 검색 엔진에서 검색이 잘 안된다고 한다.


### 1. Github 레포지토리 만들기

Github에서 새로운 레포지토리를 생성한다. 레포지토리 이름은 `username(깃헙아이디).github.io`로 설정한다.

예를 들면 flyda-it.github.io이다.  


### 2. 로컬저장소(내 컴퓨터 적당한 파일..)에서 git clone을 진행

```
$ git clone {깃헙레포지토리주소/username.github.io.git}

//클론된 폴더로 이동
$ cd username.github.io.git
//index.html생성 & 간단한 편집
$ touch index.html
$ vi index.html
```


index.html 페이지 예시 코드 

```
<!doctype html>
<html>
	<head> 
		<meta charset="utf-8">
		<title> my first github page</title>
	</head>
	<body>
		<h1>home</h1>
		<p> this is home</p>
	</body>
</html>
```

이후 `esc` 를 누르고 `:wq`를 입력해서 쉘로 돌아온다. 

```
//깃의 상태 확인 
$ git status
//git add 하고 commit하기 
$ git add index.html
$ git commit
//commit 내용 : First page

$ git push origin main
```

### 3. nodejs 설치

[nodejs홈페이지](https://nodejs.org/en/)에서 LTS를 다운로드하면 된다. 

```
$ node -v 
$ npm -v
```

두 명령어를 입력해보고 버전이 잘 뜨면 설치 성공!! 

### 4. hexo 설치 

[hexo 홈페이지](https://hexo.io/ko/)에서 docs를 보면 튜토리얼이 있다.  설치부터 따라 하면 좋다~!! 

```
$ npm install hexo-cli
$ hexo

//뭐가 잘 출력이 안되면 밑에 명령어가 공식문서에 있는 명령어다... ㅋㅋ 실습시간에 -g를 안 넣고 했다가 오류나서 당황했다. ㅋㅋ

$ npm install -g hexo-cli
$ hexo
```

[##_Image|kage@blslIB/btrx0Xiiu4h/zYpWNpHVFG8WAIKVyjssy1/img.png|CDM|1.3|{"originWidth":1191,"originHeight":489,"style":"alignLeft","caption":"$hexo를 입력했을 때 이렇게뜨면 설치성공!!"}_##]

[\> hexo 설치 오류 참고 블로그](https://www.steemcoinpan.com/hive-101145/@goodhello/hexo "hexo 오류 참고 블로그")


### 4. hexo init ghblog

그리고 dev 폴더(블로그 리포 클론한 상위 폴더 = 쉘에서 `ls`를 실행하면 username.github.io.git이 나오는 폴더!!)에서

```
$ hexo init ghblog
```

명령어를 입력한다. 쉘에서 **INFO  Start blogging with Hexo!** 라는 줄이 뜨면 성공이다!ㅎㅎ 

```
//ghblog 폴더로 이동!
$ cd ghblog

$ npm install
```

그 후에 ghblog로 옮겨가서 `npm install`을 해주면 된다. 딱히 많은게 설치되지 않는 느낌이어도 상관없다. 


### 5. 포스트 글 생성하기 

* [https://hexo.io/docs/writing](https://hexo.io/docs/writing) 참고 

```
$ hexo new post "My First post"
```

`$ hexo new post "My First post"` 를 입력하면 md파일이 하나 생성되고 주소가 표시가 된다.

그 주소를 따라 들어가서  vim이나 vscode로 해당 파일을 편집한 뒤 저장을 하면 끝!! 

실습시간에는 vim으로 편집을 진행했다.

```
vi {파일이름}.md
```

파일을 열면 다음과 같은 meta 정보가 뜬다.

[##_Image|kage@bkECgZ/btrxVd77xCm/FTKsuyv8PhPRtaWPNKh0xk/img.png|CDM|1.3|{"originWidth":443,"originHeight":123,"style":"alignLeft","width":364,"height":101,"caption":"생성된 md파일의 meta 정보"}_##]

마지막 줄 --- 밑줄에 내용을 작성하면 된다. 


### 6. 잘 작성되었는지 로컬호스트로 확인하기.

```
$ hexo server
```

`$ hexo server` 실행을 해보면!! 

[##_Image|kage@muIEC/btrxVGW968G/cqlOCLxxJE3ViSv6E4kpA1/img.png|CDM|1.3|{"originWidth":1138,"originHeight":107,"style":"alignLeft","caption":"$hexo server를 실행"}_##]

다음과 같은 화면이 뜬다. 크롬 등에 `http://localhost:4000/`을 입력한다. 나는 이 주소를 복사하려고 Ctrl+C를 눌려서 서버가 종료되었다. 마우스로 그냥 복사하거나 직접 입력하자.. ㅋㅋ 

hexo server를 실행 후 로컬 호스트 4000으로 접속하면 다음과 같이 나온다. 

[##_Image|kage@95v4j/btrx0KwJFfG/CeGOc7kkBwxpF9IvixKYsk/img.png|CDM|1.3|{"originWidth":1278,"originHeight":635,"style":"alignLeft","caption":"localhost:4000 접속화면"}_##]

이렇게 첫 포스트가 뜬다.

~아직까지 익숙하지 않아서 그런지 몰라도 티스토리 블로그가 더 쉬운 느낌이다. 강사님이 깃헙블로그로 운영하기를 추천하시는 것 같은데, 열심히 관리하려한 블로그를 버리고 갈아타야 할까봐 걱정이다. ㅋㅋ~ 


### 7. \_config.yml 파일 설정하기 

ghbolg폴더에서 `_config.yml` 파일을 열어준다. 

```
$ vi _config.yml
```

이후에 normal mode에서 `:100`을 입력한다. normal node에서 100번째 줄로 이동하라는 뜻이다.  그리고  h,j,k,l(방향키)을 대충 눌러보면서 밑으로 몇 줄 이동하면 #Deployement가 나온다. 

```
deploy:
	type : ''
```

원래는 이렇게 되어 있다. `i`를 누르고 수정을 다음과 같이 해준다. type, repo, branch는 직접 입력야한다. 

[##_Image|kage@5RGMl/btrx0tCO3rF/Pk8zRmfTN5m5afNxmoMisk/img.png|CDM|1.3|{"originWidth":1038,"originHeight":205,"style":"alignLeft","filename":"blob"}_##]

### 8. 배포 쉽게 하기

이 과정에 대해서 공식문서를 참조하면 더 좋다. [https://hexo.io/ko/docs/one-command-deployment](https://hexo.io/ko/docs/one-command-deployment) 

```
npm install hexo-deployer-git --save
```

위 명령어를 실행한다. 

이후에 다음 명령어를 실행해서 배포한다. 

```
hexo clean && hexo deploy
```

&&는 앞에 명령어가 성공적으로 끝나면 뒤에 명령어도 하라는 의미이다. 

### 9. 블로그 테마 설정하기 

[https://github.com/next-theme/hexo-theme-next](https://github.com/next-theme/hexo-theme-next) 를 참고해서 테마를 설정할 거다. README.md를 읽으면 설치방법이 나와 있지만 실습하면서 어려웠기 때문에 다시 정리한다. ㅋㅋ 

```
npm install hexo-theme-next
```

위 명령어 뿐만 아니라 hexo 관련한 명령어는 **`\_config.yml`** 파일이 있는 폴더에서 수행해야한다. 나의 경우에는 ghblog 폴더이다. 

이후에 \_config.yml 파일을 vi로 열고 :100 하면 바로 테마가 나온다 theme이 다른걸로 설정되어 있는데 그냥 바꿔주면 된다. 

```
theme: next
```

입력!! ㅋㅋ 

### 10. 배포하기 

```
$ hexo clean && hexo deploy
```

이제 이거 입력하면 깃헙블로그 가보면 적용이 되어있다. 

[##_Image|kage@c1dS1Q/btrxWCAdiOL/sNRqywV7m4raqLXUX0RXm1/img.png|CDM|1.3|{"originWidth":1210,"originHeight":538,"style":"alignLeft","caption":"next 테마가 적용된 홈페이지 모습"}_##]

원래 설정되어 있던 우주보다 멋진 거 같다!! 

깃헙블로그가 좀 어려워 보이기는 하지만 다양한 커스텀이 가능하고 티스토리나 다른 블로그에 비해서 `hexo new post "포스트 이름"`랑 `hexo clean && hexo deploy`만 하면 되기 때문에 포스트 내용에 집중할 수 있어서 추천한다고 하신다. 

향후 블로그를 관리할 때는 vim으로 하지 않고 vscode로 관리하면 편안하다. markdown으로 쓰면 된다!! ㅎㅎ

참고 주절주절 )
갑분  아스키아트 이야기가 나왔다. 나중에 필요하면 구글에 ascii art generator라고 검색하면 다양한 사이트가 나온다.