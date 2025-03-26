(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const n={get user(){return JSON.parse(localStorage.getItem("user")||"null")},set user(e){localStorage.setItem("user",JSON.stringify(e))},clear(){localStorage.removeItem("user")}},p=()=>{const e=document.getElementById("root");e.innerHTML="";const l=h[location.pathname];if(!l){i("/404");return}const s=l();s&&e.appendChild(s)},i=e=>{history.pushState({},"",e),p()};function m(){const e=n.user,l=location.hash?location.hash.slice(1):"/",s=document.createElement("nav");s.className="bg-white shadow-md p-2 sticky top-14",s.innerHTML=`
    <ul class="flex justify-around">
      <li>
        <a 
          class="${l==="/"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/">
          홈
        </a>
      </li>
      <li>
        <a 
          class="${l==="/profile"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/profile">
          프로필
        </a>
      </li>
      <li>
        <a 
          class="${l==="/login"?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/login" 
          id="${e?"logout":"login-link"}">
          ${e?"로그아웃":"로그인"}
        </a>
      </li>
    </ul>
  `,s.addEventListener("click",t=>{const o=t.target.closest("a[data-path]");if(o){t.preventDefault();const a=o.getAttribute("data-path");i(`#/${a}`)}});const r=s.querySelector("#logout");return r&&r.addEventListener("click",t=>{t.preventDefault(),n.clear(),i("/login")}),s}function d(){const e=document.createElement("div"),l=document.createElement("header");l.className="bg-blue-600 text-white p-4 sticky top-0 z-10";const s=document.createElement("h1");return s.className="text-2xl font-bold",s.textContent="항해플러스",l.appendChild(s),e.appendChild(l),e.appendChild(m()),e}function c(){return`        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`}const b=()=>{const e=document.createElement("div");return e.innerHTML=`
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
      ${c()}
    </div>
  </div>
`,e.querySelector("#header").appendChild(d()),e},f=()=>{const e=document.createElement("div");e.innerHTML=`
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

      ${c()}

      </div>
    </div>
  `;const l=n.user||{username:"",email:"",bio:""};l&&(e.querySelector("#username").value=l.username,e.querySelector("#email").value=l.email,e.querySelector("#bio").value=l.bio);const s=e.querySelector("#profile-form"),r=t=>{t.preventDefault();const o=s.querySelector("#username").value,a=s.querySelector("#email").value,u=s.querySelector("#bio").value;n.user={username:o,email:a,bio:u},i("/profile")};return s.addEventListener("submit",r),e.querySelector("#header").appendChild(d()),e},g=()=>{const e=document.createElement("div");e.innerHTML=`
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
  `;const l=e.querySelector("#login-form"),s=r=>{r.preventDefault();const t=e.querySelector("#username").value;n.user={username:t,email:"",bio:""},i("/")};return l.addEventListener("submit",s),e},v=()=>{const e=document.createElement("div");return e.innerHTML=`
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
  `,e},h={"/":b,"/login":()=>(n.user&&i("/"),g()),"/profile":()=>n.user?f():(i("/login"),null),"/404":v};export{h as R,p as r};
