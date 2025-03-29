(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();function p(){return`        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`}const a={get user(){return JSON.parse(localStorage.getItem("user")||"null")},set user(e){localStorage.setItem("user",JSON.stringify(e))},clear(){localStorage.removeItem("user")}};function g(){const e=location.hostname.includes("github.io"),o=a.user,s=location.hash?location.hash.slice(1):location.pathname,r=e?"/front_5th_chapter1-1":"/",t=document.createElement("nav");t.className="bg-white shadow-md p-2 sticky top-14",t.innerHTML=`
    <ul class="flex justify-around">
      <li>
        <a 
          href="${r}/" 
          class="${s==="/"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/">
          홈
        </a>
      </li>
      <li>
        <a 
          href="${r}/profile" 
          class="${s==="/profile"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/profile">
          프로필
        </a>
      </li>
      <li>
        <a 
          href="${r}/login" 
          class="${s==="/login"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/login" 
          id="${o?"logout":"login-link"}">
          ${o?"로그아웃":"로그인"}
        </a>
      </li>
    </ul>
  `,t.addEventListener("click",n=>{const c=n.target.closest("a[data-path]");if(c){n.preventDefault();const h=c.getAttribute("data-path");d(h)}});const l=t.querySelector("#logout");return l&&l.addEventListener("click",n=>{n.preventDefault(),a.clear(),d("/login")}),t}function m(){const e=document.createElement("div"),o=document.createElement("header");o.className="bg-blue-600 text-white p-4 sticky top-0 z-10";const s=document.createElement("h1");return s.className="text-2xl font-bold",s.textContent="항해플러스",o.appendChild(s),e.appendChild(o),e.appendChild(g()),e}const v=()=>{const e=document.createElement("div");return e.innerHTML=`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
        <div id="header"></div>
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
      ${p()}
    </div>
  </div>
`,e.querySelector("#header").replaceWith(m()),e},x=()=>{const e=document.createElement("div");e.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <div id="header"></div>
      <div id="nav-placeholder"></div>
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

      ${p()}

      </div>
    </div>
  `;const o=a.user||{username:"",email:"",bio:""};o&&(e.querySelector("#username").value=o.username,e.querySelector("#email").value=o.email,e.querySelector("#bio").value=o.bio);const s=e.querySelector("#profile-form"),r=t=>{t.preventDefault();const l=s.querySelector("#username").value,n=s.querySelector("#email").value,c=s.querySelector("#bio").value;a.user={username:l,email:n,bio:c},d("/profile")};return s.addEventListener("submit",r),e.querySelector("#header").replaceWith(m()),e},y=()=>{const e=document.createElement("div");e.innerHTML=`
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
  `;const o=e.querySelector("#login-form"),s=r=>{r.preventDefault();const t=e.querySelector("#username").value;a.user={username:t,email:"",bio:""},d("/")};return o.addEventListener("submit",s),e},b=()=>{const e=document.createElement("div");return e.innerHTML=`
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
  `,e},w=location.hostname.includes("github.io"),i=w?"/front_5th_chapter1-1":"",S={[i+"/"]:v,[i+"/login"]:()=>(a.user&&d(i+"/"),y()),[i+"/profile"]:()=>a.user?x():(d(i+"/login"),null),[i+"/404"]:b},P=location.hostname.includes("github.io"),u=P?"/front_5th_chapter1-1":"",f=()=>{const e=document.getElementById("root");e.innerHTML="";const o=location.pathname.replace(u,"")||"/",s=S[u+o];if(!s){if(o!=="/404"){history.pushState({},"",u+"/404"),f();return}const t=b();e.appendChild(t);return}const r=s();r&&e.appendChild(r)},d=e=>{history.pushState({},"",u+e),f()};export{i as B,S as R,f as r};
