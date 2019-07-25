# Web Starter Kit

Gulp4로 작성된 HTML, SCSS, JS, Image, Fonts 를 포함하는 웹스타터킷 입니다.


기본 작업외에 [jquery](https://jquery.com/), [bootstrap](https://getbootstrap.com/), [swiper](https://idangero.us/swiper/) 파일들이 있습니다.


## 설치

[Nodejs](https://nodejs.org)가 설치되어 있어야 합니다.

[Gulp](http://gulpjs.com)를 사용하므로 설치가 안되어 있다면 설치하세요.

```sh
npm install gulpjs/gulp-cli -g
```

웹스타터킷을 다운로드하고 압축을 풀고 폴더 안으로 들어가서 아래처럼 플러그인을 모두 설치하세요.

```sh
npm install
```



## 사용법

gulpn 명령으로 프로젝트를 구축하고 감시작업하고 개발서버를 통해 브라우져을 엽니다.

```sh
gulp
```

`build` 폴더에 만들어집니다.

개발버젼과 완성버젼 모두 사용할 수 있습니다. 개발버젼은 `gulp` 를 한것과 같습니다.


```sh
gulp dev
```


최적화한 완성버젼은 아래처럼 입력합니다.

```sh
gulp production
```

`production/` 폴더에 `build` 폴더가 만들어집니다.


## 구조

```
├── assets          # 컴파일 후 파일이있는 폴더
├── src             # 소스가있는 폴더
├── tasks           # gulpfile 작업이 있는 폴더
├── LICENSE
├── README.md
├── gulp-config.js  # gulp 환경설정
├── gulpfile.js     # gulp 파일
├── index.html      # 인덱스 파일
└── package.json    

```


## 사용자정의

추가적으로 플러그인를 설치하려면 아래처럼 원하는 플러그인를 입력합니다.

```sh
npm i -D 플러그인명
```

다음 프로젝트에 포함해야 합니다.

`src/vendor_entries` 에 추가합니다.

`js`는 `vendor.js` 에 경로를 추가하고, `css` 또는 `scss` 는 `vendor.scss` 에 추가합니다.

`vendor.js` 의 예:

```js
module.exports = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/swiper/dist/js/swiper.js'
];
```

`vendor.js` 는 빌드후 `vendor.min.js` 로 `vendor.scss`는 `vendor.min.scss` 로 압축됩니다.


npm 으로 설치하지 않는 플러그인의 경우

다운로드 받은후 `src` 폴더에 임의의 폴더를 만들고 넣어둔다.

예를들어 `src/js/vendor` 폴더를 만들고 `jquery.rwdImageMaps.js` 플러그인을 넣어둔다.

그럼 `vendor.js`의 경로는 아래처럼 수정된다.


```js
module.exports = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/swiper/dist/js/swiper.js',
    './src/js/vendor/jquery.rwdImageMaps.js'
];
```

