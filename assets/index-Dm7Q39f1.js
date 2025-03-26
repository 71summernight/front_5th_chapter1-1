(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();const r={get user(){return JSON.parse(localStorage.getItem("user")||"null")},set user(t){localStorage.setItem("user",JSON.stringify(t))},clear(){localStorage.removeItem("user")}};function b(){const t=r.user,o=location.hash?location.hash.slice(1):location.pathname,s=location.hostname.includes("github.io")?"/front_5th_chapter1-1":"",e=`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  `,l=`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a 
            href="${s}/" 
            class="${o==="/"?"text-blue-600 font-bold":"text-gray-600"}" 
            data-path="/">
            홈
          </a>
        </li>
        <li>
          <a 
            href="${s}/profile" 
            class="${o==="/profile"?"text-blue-600 font-bold":"text-gray-600"}" 
            data-path="/profile">
            프로필
          </a>
        </li>
        <li>
          <a 
            href="${s}/login" 
            class="${o==="/login"?"text-blue-600 font-bold":"text-gray-600"}" 
            data-path="/login" 
            id="${t?"logout":"login-link"}">
            ${t?"로그아웃":"로그인"}
          </a>
        </li>
      </ul>
    </nav>
  `,n=document.createElement("div");n.innerHTML=e+l;const d=n.querySelector("#logout");return d&&d.addEventListener("click",c=>{c.preventDefault(),r.clear(),i("/login")}),n.addEventListener("click",c=>{const p=c.target.closest("a[data-path]");if(p){c.preventDefault();const h=p.getAttribute("data-path");i(h)}}),n}function m(){return`        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`}function f(){const t=location.hostname.includes("github.io"),o=r.user,a=location.hash?location.hash.slice(1):location.pathname,s=t?"/front_5th_chapter1-1":"",e=document.createElement("nav");e.className="bg-white shadow-md p-2 sticky top-14",e.innerHTML=`
    <ul class="flex justify-around">
      <li>
        <a 
          href="${s}/" 
          class="${a==="/"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/">
          홈
        </a>
      </li>
      <li>
        <a 
          href="${s}/profile" 
          class="${a==="/profile"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/profile">
          프로필
        </a>
      </li>
      <li>
        <a 
          href="${s}/login" 
          class="${a==="/login"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/login" 
          id="${o?"logout":"login-link"}">
          ${o?"로그아웃":"로그인"}
        </a>
      </li>
    </ul>
  `,e.addEventListener("click",n=>{const d=n.target.closest("a[data-path]");if(d){n.preventDefault();const c=d.getAttribute("data-path");i(c)}});const l=e.querySelector("#logout");return l&&l.addEventListener("click",n=>{n.preventDefault(),r.clear(),i("/login")}),e}const v=()=>{const t=document.createElement("div");return t.innerHTML=`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${b()}
       <div id="nav"></div>
          <main class="p-4">
            <div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
            </div>

            <div class="space-y-4">

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                  <div>
                    <p class="font-bold">홍길동</p>
                    <p class="text-sm text-gray-500">5분 전</p>
                  </div>
                </div>
                <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                  <div>
                    <p class="font-bold">김철수</p>
                    <p class="text-sm text-gray-500">15분 전</p>
                  </div>
                </div>
                <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                  <div>
                    <p class="font-bold">이영희</p>
                    <p class="text-sm text-gray-500">30분 전</p>
                  </div>
                </div>
                <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                  <div>
                    <p class="font-bold">박민수</p>
                    <p class="text-sm text-gray-500">1시간 전</p>
                  </div>
                </div>
                <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                  <div>
                    <p class="font-bold">정수연</p>
                    <p class="text-sm text-gray-500">2시간 전</p>
                  </div>
                </div>
                <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>
            </div>
          </main>
      ${m()}
    </div>
  </div>
`,t.querySelector("#nav").replaceWith(f()),t},x=()=>{const t=document.createElement("div");t.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
      ${b()}
      <div id="nav"></div>
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
            <form id="profile-form">
              <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                <input type="text" id="username" name="username" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                <input type="email" id="email" name="email" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-6">
                <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
            </form>
          </div>
        </main>

      ${m()}

      </div>
    </div>
  `;const o=r.user||{username:"",email:"",bio:""};o&&(t.querySelector("#username").value=o.username,t.querySelector("#email").value=o.email,t.querySelector("#bio").value=o.bio);const a=t.querySelector("#profile-form"),s=e=>{e.preventDefault();const l=a.querySelector("#username").value,n=a.querySelector("#email").value,d=a.querySelector("#bio").value;r.user={username:l,email:n,bio:d},i("/profile")};return a.addEventListener("submit",s),t.querySelector("#nav").replaceWith(f()),t},y=()=>{const t=document.createElement("div");t.innerHTML=`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `;const o=t.querySelector("#login-form"),a=s=>{s.preventDefault();const e=t.querySelector("#username").value;r.user={username:e,email:"",bio:""},i("/")};return o.addEventListener("submit",a),t},g=()=>{const t=document.createElement("div");return t.innerHTML=`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" data-path="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">홈으로 돌아가기</a>
      </div>
    </main>
  `,t},w={"/":v,"/login":()=>(r.user&&i("/"),y()),"/profile":()=>r.user?x():(i("/login"),null),"/404":g},u=()=>{const t=document.getElementById("root");t.innerHTML="";const o=location.pathname,a=w[o];if(!a){if(o!=="/404"){history.pushState({},"","/404"),u();return}const e=g();t.appendChild(e);return}const s=a();s&&t.appendChild(s)},i=t=>{history.pushState({},"",t),u()},S=()=>{window.addEventListener("popstate",u),u()};S();
