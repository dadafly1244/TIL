## < Git Branch >

### 1\. Git branch 만들기

> 블로그 https://flyda-it.tistory.com/9

Branch는 분기점을 생성하여 독립적으로 코드를 변경할 수 있도록 도와주는 모델이다.

branch를 만들고 merge(병합)을 하는 시나리오를 실습했다.

```
$ git branch
```

현재 브런치들이 무엇이 있고, 현재 어떤 브런치에서 작업중인지 알려주는 명령어이다.

먼저 main 에서 어떤 파일을 작업한 뒤 브런치를 만들고 병합을 해볼거다.

```
$ git branch
```

현재 브런치가 main인지 확인해준다. 아마 아무런 브런치를 만든 것이 없다면 main만 표시될 거다.

```
//연습용 파이썬 파일 하나를 생성한다.
$ touch hello.py

$ vi hello.py

$ git status
$ git add hello.py
$ git commit
```

hello.py 파일을 작업하고 난 다음에 add, commit을 한다. hello.py파일은 일단 아무것도 작업하지 않는다.

이제 본격적으로 새로운 브런치를 만든다. git branch를 만들면 그 순간부터 새로운 브런치에서 작업하게 되는거다!!

```
//지금 어떤 브런치에 있는지 확인해준다. 아직까지는 main만 뜬다! 
$ git branch

//새로운 브런치를 만들어 준다. $ git branch {새로운 브랜치 이름} 
//브런치 이름은 그 브런치에서 어떤 일을 할 것인지 알려주는 것이 좋다.
$ git branch hello

//hello 브런치가 생성이 되었다. main과 hello 두개가 뜰 것이다.
$ git branch

//hello 브런치로 이동한다. 예전 버전은 git checkout hello 명령어를 실행하면 된다. 
$ git switch hello 

//hello로 브런치가 변경된 모습을 볼 수 있다. 
$ git branch
```

이제 새로운 브런치에서 작업할 준비가 끝이 났다. branch의 이름을 정할때는 이름에 어떤 일을 하고 싶은지 명시적으로 알 수 있어야한다. !! 나는 hello를 그냥 단순하게 출력해줄 브런치이기 때문에 hello라고 지었다. hello.py 파일을 열고 내용을 변경해준다.

```
$ vi hello.py
```

hello브런치에서 작업한 hello.py 파일 예시는 다음과 같다.

```
//hello 브런치에서 hello.py파일
print('hello')
```

이제 hello 브런치에서 작업한 것을 main으로 병합(merge)해줄 것이다! main에 hello를 병합하기 위해서는 main에서 병합(merge)을 진행헤야한다.

```
//main 브런치로 옮겨가기 
$ git switch main
//main으로 잘 옮겨 갔는지 확인하기
$ git branch 

//main에 hello 브런치를 병합해주기! 
$ git merge hello

//python이 설치가 되어 있다면 hello.py를 확인하고 실행해본다
$ cat hello.py
$ python hello.py
```

그러면 main 브런치에 hello 브런치가 병합이 된다. 이제 hello 브런치는 지워주면 된다. 브렌치가 생명이 다하거나 실패했을때 브런치를 지워주면된다. 브런치를 제때 지워주는 것이 중요하다고 한다.

```
// 브런치를 삭제하기 
$ git branch -D hello
```

브런치를 삭제할때 hello 브런치에서 삭제 명령을 실행하면 안먹히고 main 브런치로 돌아가서 명령어를 실행해야하는 것 같다.

### 2\. Git 충돌 일으키기!!

merge에서 충돌이 일어난 경우를 살펴볼 것이다.

앞에서 실습한 것처럼 main 브런치에 새로운 파일을 하나 생성(`touch re-hello.py`)를 해주고 add, commit을 진행해준다. 그리고 re-hello이라는 이름으로 새로운 브런치를 생성해준다. (파일 이름이랑 브런치 이름이 달라도 상관없다..)

```
$ git branch re-hello
```

이후에 main 브런치에서 `vi re-hello.py`로 파일을 수정한다.

```
//main브런치 re-hello.py 파일
i = 3 
if i % 3 == 0:
    print('hello')
```

이후에 새로운 브런치인 re-hello에서 똑같이 re-hello.py를 수정한다.

```
//re-hello브런치 re-hello.py 파일
for _ in range(10):
    print('hello')
```

그다음에 main 브렌치로 넘어가서 병합수행한다!!

```
//main 브런치로 옮겨가기!
$ git switch main

//main에 hello 브런치를 병합해주기! 
$ git merge hello
```

그럼 이렇게 충돌이 일어남 **CONFLICT (content): Merge conflict in re-hello.py**

```
vi re-hello.py
```

파일을 열어보면 이렇게 되어있다.

[##_Image|kage@EmGvD/btrxY5vemoR/eRELqpGjUE4gMJrh2YBCWK/img.png|CDM|1.3|{"originWidth":349,"originHeight":223,"style":"alignLeft","caption":"충돌이 일어난 파일 열어봤음","filename":"blob"}_##]

이제 소스코드가 잘 작동하게 고쳐주면됨!! 특수문자 같은 것들은 잘 안지우면 소스코드에 남음..ㅋㅋㅋ 잘 지워야함!! ㅋㅋ

```
//충돌난 파일 수정하기
for i in range(1,10+1):
    if i % 3 == 0:
        print('hello')
```

이후에 \`git status\`를 쳐보면 **both modified {충돌이난 파일이름}** 이 뜬다

이 파일을 다시 git add와 git commit을 수행해야 merge가 완벽하게 수행된다.

## < git flow>

### 1\. branching models.

main - 사용자가 사용하는 소스코드

develop - 개발자들이 작업을 하는 브런치

### 2\. Git flow

[git flow](http://https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html "git flow") : **[https://danielkummer.github.io/git-flow-cheatsheet/index.ko\_KR.html](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)**

위 링크에 가면 자세하게 잘 나와있다!

윈도우의 경우 그냥 설치되어있다. 그냥 하면 된다.

```
$ git flow init
```

초기 설정이 나오는데 그냥 주어진 이름 그대로 다 엔터를 처준다.

[##_Image|kage@u5Fp0/btrxZFbL9k6/aeKSCC6Sr2Px7SXpTe6Kq0/img.png|CDM|1.3|{"originWidth":1204,"originHeight":527,"style":"alignLeft","filename":"blob"}_##]

완료하면 자동으로 브런치가 develop으로 바뀌어 있다.

이제 새 기능을 위한 브렌치를 생성한다.

```
$ git flow feature start fizzbuzz
```

그러면 feature/fizzbuzz 브렌치로 가있다.

```
//fizzbuzz.py
for num in range(1, 30+1):
    if num % 3 == 0 and num % 5 == 0:
        print('FizzBuzz')
    elif num % 3 == 0:
        print('Fizz')
    elif num % 5 == 0:
        print('Buzz')
    else:
        print(num)
```

기능 개발이 끝나면 브런치를 develop 브런치에 병합을 하고 fizzbuzz브런치를 지우는 명령어를 입력한다.

```
$ git flow feature finish fizzbuzz
```

그 다음 개발한 기능을 개시하기 위한 명령어. 릴리즈 시작하는 과정이다. 이건 develop브런치를 main에 병합하는 과정이다.

```
$ git flow release start 'v0.0.0'
```

~( V게임에서 캐릭터 사라지거나 추가하는 정도. 클래스 정도 수정. 작은 수정)~~v0.0.0 정식버전이 아님 베타버전.!! v1.0.0 드디어 정식 릴리즈!!~

릴리즈 끝!!

```
$ git flow release finish 'v1.0.0'
```

remote 저장소에는 develope 브렌치가 아직 없기때문에 -u가 필요하다.

```
$ git push -u origin develop

//main 브런치로 가기 
$ git switch main
//main에 푸시하기 
$ git push origin main
```

**수업들으면서 처음 들었던 단어.. ㅋㅋ**

-   [**ci/cd**](https://en.wikipedia.org/wiki/CI/CD "ci/cd wiki")
-   restore: git 새 버전에서 git checkout을 대신해서 switch랑 restore을 사용한다고한다. [참고블로그주소](https://blog.outsider.ne.kr/1505 "git switch, git restore명령어관련 참고 블로그")