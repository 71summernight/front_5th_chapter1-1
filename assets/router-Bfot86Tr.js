(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();function m(){return`        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`}const i={get user(){return JSON.parse(localStorage.getItem("user")||"null")},set user(e){localStorage.setItem("user",JSON.stringify(e))},clear(){localStorage.removeItem("user")}};function g(){const e=location.hostname.includes("github.io"),l=i.user,t=e?"/front_5th_chapter1-1":"",n=location.pathname.includes("index.hash.html"),o=location.pathname.startsWith(t)?location.pathname:`${t}${location.pathname}`,s=document.createElement("nav");s.className="bg-white shadow-md p-2 sticky top-14",s.innerHTML=`
    <ul class="flex justify-around">
      <li>
        <a 
          href="${n?"/":t}/" 
          class="${o===`${n?"/":t}/`?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/">
          홈
        </a>
      </li>
      <li>
        <a 
          href="${n?"/profile":t}/profile" 
          class="${o===`${n?"/profile":t}/profile`?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/profile">
          프로필
        </a>
      </li>
      <li>
        <a 
          href="${n?"/login":t}/login" 
          class="${o===`${n?"/login":t}/login`?"text-blue-600 font-bold":"text-gray-600"}" 
          data-path="/login" 
          id="${l?"logout":"login-link"}">
          ${l?"로그아웃":"로그인"}
        </a>
      </li>
    </ul>
  `,s.addEventListener("click",d=>{const p=d.target.closest("a[data-path]");if(p){d.preventDefault();const h=p.getAttribute("data-path");u(h)}});const r=s.querySelector("#logout");return r&&r.addEventListener("click",d=>{d.preventDefault(),i.clear(),u(n?"/login":t+"/login")}),s}function b(){const e=document.createElement("div"),l=document.createElement("header");l.className="bg-blue-600 text-white p-4 sticky top-0 z-10";const t=document.createElement("h1");return t.className="text-2xl font-bold",t.textContent="항해플러스",l.appendChild(t),e.appendChild(l),e.appendChild(g()),e}const v=()=>{const e=document.createElement("div");return e.innerHTML=`
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
      ${m()}
    </div>
  </div>
`,e.querySelector("#header").replaceWith(b()),e},x=()=>{const e=document.createElement("div");e.innerHTML=`
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

      ${m()}

      </div>
    </div>
  `;const l=i.user||{username:"",email:"",bio:""};l&&(e.querySelector("#username").value=l.username,e.querySelector("#email").value=l.email,e.querySelector("#bio").value=l.bio);const t=e.querySelector("#profile-form"),n=o=>{o.preventDefault();const s=t.querySelector("#username").value,r=t.querySelector("#email").value,d=t.querySelector("#bio").value;i.user={username:s,email:r,bio:d},u("/profile")};return t.addEventListener("submit",n),e.querySelector("#header").replaceWith(b()),e},y=()=>{const e=document.createElement("div");e.innerHTML=`
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
  `;const l=e.querySelector("#login-form"),t=n=>{n.preventDefault();const o=e.querySelector("#username").value;i.user={username:o,email:"",bio:""},u("/")};return l.addEventListener("submit",t),e},w=()=>{const e=document.createElement("div");return e.innerHTML=`
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
  `,e},S=location.hostname.includes("github.io"),a=S?"/front_5th_chapter1-1":"",c=location.pathname.includes("index.hash.html"),P={[c?"/":a+"/"]:v,[c?"/login":a+"/login"]:()=>(i.user&&u(c?"/":a+"/"),y()),[c?"/profile":a+"/profile"]:()=>i.user?x():(u(c?"/login":a+"/login"),null),[c?"/404":a+"/404"]:w},f=()=>{const e=document.getElementById("root");e.innerHTML="";const l=location.pathname.replace(a,"")||"/",t=P[a+l];if(!t){l!=="/404"&&(history.pushState({},"",a+"/404"),f());return}const n=t();n&&e.appendChild(n)},u=e=>{history.pushState({},"",`${a}${e}`),f()};export{P as R,f as r};
