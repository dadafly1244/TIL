---
title: GitHub와 Netlify를 이용한 쉽고 빠른 HTTPS 무료 호스팅
date: 2018-01-10 14:33:14
thumbnail: netlify
tags:
  - netlify
  - hosting
  - https
description:
  GitHub, GitLab 등과 계정 연동 및 쉬운 호스팅을 제공하는 PaaS 서비스로, Continuous Deployment, One-Click HTTPS 제공 등 고성능 사이트 / 웹 응용 프로그램을 제작하는데 필요한 쉽고 빠른 다양한 서비스들을 제공합니다.
---
​
많은 사람들이 대표적인 [PaaS](https://ko.wikipedia.org/wiki/PaaS)로 [Heroku](https://www.heroku.com/)를 꼽습니다.
Node.js를 사용하는 저로서는 GitHub 나 Dropbox 를 기반으로 쉽고 빠르게 호스팅할 수 있는 아주 좋은 서비스죠.
하지만 Heroku는 일반적으로 백엔드 호스팅을 위해 사용하는데, 단순한 정적(Static) 웹사이트를 호스팅하기에는 약간 군더더기가 있다고 느끼고 있었죠.
그 와중에 [Netlify](https://www.netlify.com/)를 알게되어 사용하게 되었습니다.
Heroku 보다 더욱 쉽고 빠르게 정적 웹사이트를 호스팅할 수 있습니다.
​
<!-- toc -->
​
# Netlify 란?
​
[Netlity](https://www.netlify.com/)는 GitHub, GitLab 등과 계정 연동 및 쉬운 호스팅을 제공하며,
CDN, [Continuous Deployment(지속적 배포)](https://ko.wikipedia.org/wiki/%EC%A7%80%EC%86%8D%EC%A0%81_%EB%B0%B0%ED%8F%AC), One-Click HTTPS 제공 등 고성능 사이트 / 웹 응용 프로그램을 제작하는데 필요한 쉽고 빠른 다양한 서비스들을 제공합니다.
​
# Netlify 사용법
​
간단하지만 헷갈릴 수 있는 부분들을 하나씩 진행하면서 살펴보겠습니다.
​
## GitHub에 프로젝트 푸쉬
​
정적(Static) 웹사이트를 완성했다면 GitHub에 Push합니다.
보통 `public/`이나 `dist/` 정도가 정적 디렉토리(Public directory)가 됩니다.
혹시 다른 이름으로 되어 있다면 Netlify에서 설정할 수 있습니다.
​
> 혹시 Netlify에서 반복되는 `Deploy Failed` 메세지로 스트레스를 받고 싶지 않다면, Public directory 안에는 `index.html`을 두는 것을 권장합니다.
혹시 EJS나 PUG 같은 템플릿엔진을 사용한다면 컴파일(빌드) 후 푸쉬하시고, 마찬가지로 SASS나 Stylus 같은 CSS preprocessor를 사용할 때도 컴파일 후 사용하세요.
​
## Netlify에서 새로운 사이트 생성
​
Netlify로 이동하여 Sign-up(회원가입) 합니다.
원하는 방식으로 회원 가입 후 접속합니다.
​
![Netlify Login](/images/screenshot/netlify_1_login.jpg)
​
접속 후 바로 'New site from git'를 선택할 수 있습니다.
그러면 Git 솔루션를 선택할 수 있습니다.
​
![Netlify Create a new site](/images/screenshot/netlify_1_new_site.jpg)
​
다음과 같은 Git 솔루션을 지원합니다.
​
- [GitHub](https://github.com/)
- [GitLab](https://about.gitlab.com/)
- [Bitbucket](https://bitbucket.org/)
​
### 액세스 제한
​
업체를 선택하기 전에 `Limit GitHub access to public repositories.`를 체크할 수 있습니다.
​
![Netlify Limit GitHub Access](/images/screenshot/netlify_1_limit_github_access.jpg)
​
민감한 저장소에 대한 액세스 권한을 부여하는 것에 대해 걱정이된다면 GitHub를 사용하여 응용 프로그램 액세스를 제한 할 수 있습니다.
자세한 내용은 [Netlify - GitHub Permissions](https://www.netlify.com/docs/github-permissions/)에서 확인할 수 있습니다.
원할 경우 체크합니다.
​
전 단계에서 프로젝트를 GitHub에 푸쉬했으니 업체 중 'GitHub'를 선택하여 진행합니다.
​
### 승인 요청
​
'Limit GitHub access to public repositories. What's this?'를 체크하고 넘어왔다면 다음과 같은 승인 화면을 볼 수 있습니다.
'Authorize netlify'를 선택하여 승인합니다.
​
![Netlify Authorize](/images/screenshot/netlify_1_authorize_netlify.jpg)
​
권한 설정을 위해 GitHub 비밀번호를 입력합니다.
​
![Netlify Authorize Confirm Password](/images/screenshot/netlify_1_authorize_netlify_password.jpg)
​
### 저장소 선택
​
나의 GitHub 저장소(repository) 목록이 나타납니다.
여기서 상위 단계에서 푸쉬했던 저장소를 찾아 선택합니다.
​
![Netlify Select repository](/images/screenshot/netlify_1_select_repository.jpg)
​
### 기본 빌드 설정
​
![Netlify Deploy Setting](/images/screenshot/netlify_1_deploy_setting.jpg)
​
빌드 커맨드(Build Command)가 있다면 설정합니다.
예를들면 `npm start`, `npm run prod`, `grunt` 등의 빌드용 명령을 작성할 수 있습니다.
필요하지 않다면 값을 적지 않아도 됩니다.
​
다음으로 정적 디렉토리(Public Directory)를 설정합니다.
보통 `public/`이나 `dist/` 정도가 정적 디렉토리(Public directory)가 됩니다.
설정하지 않는다면 루트(root, `/`)에서 검색합니다.
​
마지막으로 `Deploy site` 버튼을 눌러 새로운 사이트를 배포합니다.
약간의 로딩이 끝나고 잘 배포되었다면 `Your site is deployed` 메시지를 볼 수 있습니다.
​
![Netlify Deploying Your Site](/images/screenshot/netlify_1_deploying_your_site.jpg)
![Netlify Deploy Log](/images/screenshot/netlify_1_deploy_log.jpg)
​
만약 `Deploy Failed` 메시지가 뜬다면 'Deploy Log'를 잘 확인하시고 프로젝트 구조를 Netlify에 맞게 변경하시길 권장합니다.
이제 1단계의 설정이 끝났습니다.
​
### 사이트 이름(도메인) 설정
​
우리의 사이트 배포는 끝났고 당장 사용할 수 있습니다.
하지만 당장은 Netlify에서 제공하는 다음과 같은 (예쁘지 않은) 도메인을 사용해야 합니다.
​
```domain
https://happy-noether-c27ffa.netlify.com/
```
​
2단계로 커스텀(Custom) 도메인을 사용할 수 있습니다만 그 전에 Netlify에서 제공하는 도메인을 (조금 더 예쁘게) 수정해서 사용할 수 있습니다.
​
`Site setting` 버튼을 선택합니다.
​
![Netlify Site Setting Button](/images/screenshot/netlify_1_site_setting_btn.jpg)
​
'Site information > Site name:' 을 클릭하여 이름을 수정할 수 있습니다.
​
![Netlify Site Naming](/images/screenshot/netlify_1_site_naming.jpg)
​
좀 더 나은 **고유 이름** 을 선택할 수 있습니다.
당장 나의 사용자 정의 도메인이 없을 경우 유용합니다.
​
## 사용자 정의 도메인(Custom Domain) 설정
​
이제 별도의 사용자 정의 도메인을 설정하겠습니다.
2단계에서 'Set up a custom domain'을 선택합니다.
​
![Netlify Set up a custom domain](/images/screenshot/netlify_2_set_custom_domain.jpg)
​
'Add custom domain' 버튼을 눌러 보유하고 있는 나의 도메인을 추가합니다.
​
![Netlify Add custom domain](/images/screenshot/netlify_2_add_custom_domain.jpg)
![Netlify Add custom domain naming](/images/screenshot/netlify_2_add_custom_domain_naming.jpg)
​
### DNS 설정
​
다음과 같이 도메인이 등록되었고 Netlify DNS를 설정('Set up Netlify DNS')해야 합니다.
​
![Netlify Set up Netlify DNS](/images/screenshot/netlify_2_set_up_netlify_dns.jpg)
​
사용자 정의 도메인에 대한 DNS 레코드가 포함될 DNS 영역을 만들어야 합니다. 그러면 사이트의 필수 DNS 레코드가 자동으로 생성됩니다.
​
![Netlify Create DNS Zone](/images/screenshot/netlify_2_create_dns_zone.jpg)
![Netlify Add DNS Records](/images/screenshot/netlify_2_add_dns_records.jpg)
![Netlify Hostnames](/images/screenshot/netlify_2_hostnames.jpg)
​
### 네임서버 변경
​
마지막 단계로, 도메인 제공 업체([GoDaddy](https://kr.godaddy.com), [Cafe24](https://www.cafe24.com/?controller=domain_main), [Gabia](https://www.gabia.com) 등..)의 계정에 로그인하고 제공되는 호스트 이름으로 네임 서버를 변경합니다.
참고로 저는 [GoDaddy](https://kr.godaddy.com)에서 도메인을 구입했습니다.
​
![Netlify Update Nameserver Enter](/images/screenshot/netlify_2_update_nameserver_enter.jpg)
​
도메인의 네임서버를 변경 후 잠시(5~10분) 기다리면 완료됩니다.
이제 사용자 정의 도메인을 사용할 수 있습니다.
​
## 무료 TLS 인증서로 HTTPS 보안 및 암호화를 추가
​
3단계로 HTTPS 보안 및 암호화를 추가하겠습니다.
Netlify의 최대 장점은 **무료 SSL 자동 발급** 이라 할 수 있습니다.
정말 간단한 절차로 HTTPS를 사용할 수 있습니다.
​
### DNS 구성 확인
​
3단계의 'Secure your site with HTTPS' 버튼을 선택합니다.
페이지 중간에 'HTTPS' 영역에서 'Verify DNS configuration' 버튼을 선택합니다.
​
![Netlify Verify DNS configuration](/images/screenshot/netlify_3_verify_dns_configuration.jpg)
​
DNS 변경 사항이 전파될 때까지 1시간 정도 기다립니다.
​
### Let's Encrypt 인증서 프로비저닝
​
1시간 정도 기다린 후 HTTPS를 사용할 준비가 되면 'Let's Encrypt certificate' 버튼이 생성됩니다.
버튼을 누르면, [Let 's Encrypt](https://letsencrypt.org/)에서 TLS 인증서를 제공하고 CDN에 설치합니다.
​
![Netlify Let's Encrypt certificate](/images/screenshot/netlify_3_encrypt_certificate.jpg)
![Netlify Automatic TLS setup](/images/screenshot/netlify_3_automatic_tls_setup.jpg)
![Netlify Provisioning](/images/screenshot/netlify_3_provisioning.jpg)
​
역시 몇 분 기다리면 무료 인증서의 [프로비저닝](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EB%B9%84%EC%A0%80%EB%8B%9D)이 완료됩니다.
만약 사용에 대한 대가를 지불하고 싶다면 [Donate to Let's Encrypt](https://letsencrypt.org/donate/)를 통해 기부할 수 있습니다.
Let's Encrypt에 대해 좀 더 알고 싶다면 [> Lets' Encrypt로 무료로 HTTPS 지원하기](https://blog.outsider.ne.kr/1178)를 참고하세요.
​
![Netlify HTTPS enabled](/images/screenshot/netlify_3_https_enabled.jpg)
​
이제 HTTPS를 사용할 수 있습니다.
​
![Netlify HTTPS enabled href](/images/screenshot/netlify_3_https_enabled_href.jpg)
​
### 프로젝트 업데이트
​
프로젝트를 수정하여 GitHub에 푸쉬하면 Netlify에서 자동으로 빌드하여 배포합니다.
푸쉬 후 자동 배포까지 대략 1~5분이 소요됩니다.
​
지금까지 Netlify를 이용하여 쉽고 빠르게 GitHub를 기반으로 하는 HTTPS 웹사이트를 호스팅하였습니다.
무료 비공개 저장소를 원한다면 [GitLab](https://about.gitlab.com/)도 좋은 선택이 될 것입니다.