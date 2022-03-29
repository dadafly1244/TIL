### git을 사용할 때 고쳐야 할 나쁜 습관!! 

강사님이 git add와 git commit 습관을 말해주셨는데, 완전 뜨끔했다...  
 
 * * *

#### 1. git add . (X) 

`git add . ` 대신 `git add {파일이름!!}\` 를 사용하자!! 

 * * *

#### 2. git commit -m " 커밋설명" (X) 

```
git commit -m " 커밋설명
> 설명 치다가 오타가 나면
> 엔터를 누르면 못고친다....

"
```

[##_Image|kage@bNwtBH/btrxVkrOzRA/tNhSxD6TRYvuxViffEMvW1/img.png|CDM|1.3|{"originWidth":363,"originHeight":28,"style":"alignLeft","caption":"git commit 해서 vim 에서 commit 메시지 쓰기!"}_##]

그래서 `git commit`만 해서 

vim에서 커밋메시지를 넣어주는 것이 좋음. 

 * * *

### 3. commit convention 

commit을 할 때 지켜야 할 것 !! 협업을 위해서 중요하다! 

* 커밋 제목은 50자 이내로 요약 
* 제목과 내용사이 한칸
* prefix를 사용해서 커밋 용도를 한눈에 보기 쉽게 정리하기!! prefix를 붙여서 어떤 작업을 해준건지 명시해줄 수 있다.

> feat : features 새로운 기능 추가, 개발은 한 경우!! 
> docs : documentations 문서 수정
> conf : configurations 
> test: test 테스트 코드, 리펙토링 테스트 코드 추가
> fix: bug-fix 버그 수정 ( 오류가 일어난 것을 수정하는 작업! 오타수정을 포함함!)
> refactor: refactoring 코드 리펙토링 (코드 기능 향상)
> ci: Continuous Integration 
> build: Build
> perf: Performance

commit 메시지 같은 경우에는 영어로 작성하는 것이 좋다. 프론트앤드는 MDN 같은 사이트를 영어로 보면서 익히자!! 

 * * *
 
 
 ### 4. commit하는 단위

commit은 **코드가 동작하는 단위**로 해야한다! 

무조건 동작하는 것을 commit 해야한다는 점!! 

예를 들면 

[##_Image|kage@bLcTzs/btrxVkS2qAK/c3NYBl36BTpeJfJtVYARCk/img.png|CDM|1.3|{"originWidth":202,"originHeight":333,"style":"alignLeft"}_##]

위 코드의 경우 4번 커밋 하는거가 best!


[##_Image|kage@AEMQ0/btrxQ5oRN8K/HJeZpGxGk7luP4aQvrtjjK/img.png|CDM|1.3|{"originWidth":213,"originHeight":229,"style":"alignLeft"}_##]

만약 pass 없었으면 동작을하지 않기때문에 잘못된 커밋이라고봐야함!!

  * * *
 
 
### 5. 깃 시작하기 

#### git init

``` shell 

$ mkdir {디렉토리이름}
$ cd {디렉토리이름}
//깃 생성
$ git init

// 깃헙이랑 연결하기 
$ git remote add origin {Github repo URL}

//새로운 파일 생성하고 편집하기  
$ touch readme.md
$ vi readme.md

// git 상태확인하고 commit하기!! 
$ git status
$ git add readme.md
$ git commit 
// docs: 등 prefix 붙이기!! 

//init을 하면 master에서 main으로 branch 변경해주기!! 
$ git branch -M main 
//원격 저장소랑 로컬 저장소랑 설정을 위해서 -u를 꼭 붙여주기!! 
$ git push -u origin main

```


#### git clone

```shell
// git clone 해오기!
$ git clone {Github repo URL}

//git commit하기!! 
$ git add {파일이름}
$ git commit 
// docs: 등 prefix 붙이기!! 

$ git push origin main

```

* git clone이 설정이 쉬움!!  작업할게 많이 줄어드니까 clone을 더 많이 사용하자!! 




 
 * * *
 
### 오늘의 꿀팁..

alt + tap : 창전환, 강의 들을때 넘 편하다... 
ctrl + R : 새로고침 


git inti 을 하면  push를  할때 꼭 -u를 붙어줘야함.

git push -u mask main

이런 작업들이 귀찮으니까 그냥 clone을 추천함. ㅋㅋ 



* 참고 
	* [ 강사님 git 블로그 ](https://ulgoon.github.io/2019/09/first-to-git/)
    * [commit massage](https://doublesprogramming.tistory.com/256) 