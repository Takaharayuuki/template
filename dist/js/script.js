"use strict";

// JS ハンバーガーメニュー
const hamburger = () => {
  const body = document.body;
  const hamburger = document.getElementById('js-hamburger');
  const blackBg = document.getElementById('js-black-bg');
  const textList = document.getElementById('list');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
  textList.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
hamburger();

//JS バリデーション
const form = document.querySelector('.p-main-contact__form');
const feedbackName = document.querySelector('.js-feedback-name');
const feedbackEmail = document.querySelector('.js-feedback-email');
const feedbackText = document.querySelector('.js-feedback-text');
const feedbackCheck = document.querySelector('.js-feedback-check');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const useremailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
const usertextPattern = /.+/;

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value;
  const useremail = form.useremail.value;
  const usertext = form.usertext.value;
  const privayCheck = form.usercheck.checked;

  if(usernamePattern.test(username)) {
    feedbackName.textContent = 'ユーザー名は有効です';
  } else {
    feedbackName.textContent = 'ユーザー名は 6 ~ 12 文字で入力してください';
    feedbackName.style.color = "red";
  }
  if(useremailPattern.test(useremail)) {
    feedbackEmail.textContent = 'メールアドレスは有効です。';
  } else {
    feedbackEmail.textContent = 'メールアドレスの形式が正しくないか、 扱うことができないメールアドレスです';
    feedbackEmail.style.color = "red";
  }
  if(usertextPattern.test(usertext)) {
    feedbackText.textContent = '入力された値は有効です';
  } else {
    feedbackText.textContent = 'お問い合わせ内容を入力してください';
    feedbackText.style.color = "red";
  }
  if(privayCheck == true) {
    feedbackCheck.textContent = '';
  } else {
    feedbackCheck.textContent = 'プライバシーに同意するを選択してください。';
    feedbackCheck.style.color = "red";
  }
});


form.username.addEventListener('keyup', e => {
  if(usernamePattern.test(e.target.value)){
      form.username.setAttribute('class', 'is-success');
  }else{
      form.username.setAttribute('class', 'is-error');
  }
});

form.useremail.addEventListener('keyup', e => {
  if(useremailPattern.test(e.target.value)){
      form.useremail.setAttribute('class', 'is-success');
  }else{
      form.useremail.setAttribute('class', 'is-error');
  }
});

form.usertext.addEventListener('keyup', e => {
  if(usertextPattern.test(e.target.value)){
      form.usertext.setAttribute('class', 'is-success');
  }else{
      form.usertext.setAttribute('class', 'is-error');
  }
});

// fetchAPI form
const myForm = document.getElementById('js-form');

myForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('？', {
    method: 'post',
    body: formData
  }).then((responce) => {
    if(response.ok) { // ステータスがokならば
      return response.text(); // レスポンスをテキストとして変換する
    } else {
      throw new Error();
    }
  })
  .then((text) => console.log(text))
  .catch((error) => console.error(error));
});

