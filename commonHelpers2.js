import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),t=a.querySelector('input[name="email"]'),o=a.querySelector('textarea[name="message"]');function m(){const e={email:a.querySelector('input[name="email"]').value.trim(),message:a.querySelector('textarea[name="message"]').value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",m);function l(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.value=e.email,o.value=e.message)}window.addEventListener("load",l);a.addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");const r={email:t.value.trim(),message:o.value.trim()};t.value="",o.value="",console.log(r)});
//# sourceMappingURL=commonHelpers2.js.map
