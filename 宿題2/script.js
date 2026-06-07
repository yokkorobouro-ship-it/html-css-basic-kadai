// 1. パソコンにハンバーガーボタンとヘッダーの場所を教えてあげる
const hamburger = document.getElementById('js-hamburger');
const header = document.getElementById('js-header');

// 2. ハンバーガーボタン（三本線）がクリックされたときの動き
hamburger.addEventListener('click', function () {
  header.classList.toggle('open');
});

// 3. スマホメニューの中の「決済サービス」や「導入事例」をすべて見つける
const accordions = document.querySelectorAll('.js-accordion');

// 4. 見つけたボタンたちに「クリックされたときの動き」を1つずつ仕込む
accordions.forEach(function (accordion) {
  // 中のリンク（aタグ）がクリックされたら
  const link = accordion.querySelector('a');
  
  link.addEventListener('click', function (event) {
    event.preventDefault(); // リンクをポチッと押しても別のページに飛ばないようにする
    
    // クリックされた場所に「active」というシールを、無ければつける、あれば剥がす！
    accordion.classList.toggle('active');
  });
});