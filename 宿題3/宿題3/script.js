$(function() {
  // 1. パソコンに、動かしたい「電車」と「左右のボタン」の場所を教える（jQueryの書き方）
  const $stage = $('#js-stage');
  const $nextBtn = $('#js-next');
  const $prevBtn = $('#js-prev');

  let counter = 0;
  const totalSlides = 3; // 本物の写真の枚数
  let timerId = null;    // 自動で動くタイマーを入れておく箱

  // 電車を動かす専用の関数（命令のまとまり）
  function moveSlider(useTransition) {
    if (useTransition) {
      $stage.css('transition', 'transform 0.5s ease'); // 0.5秒かけて動かす
    } else {
      $stage.css('transition', 'none'); // アニメーションをオフ（0秒）
    }
    // 電車を25%ずつ左にズラす
    $stage.css('transform', 'translateX(' + (-counter * 25) + '%)');
  }

  // ==========================================================
  // 共通パーツ】次に進む（右へスライド）の仕組み
  // ==========================================================
  function nextSlide() {
    counter++; 
    moveSlider(true);

    if (counter === totalSlides) {
      setTimeout(function() {
        counter = 0;      
        moveSlider(false); // 一瞬で本物の1枚目にワープ！
      }, 500); 
    }
  }

  // ==========================================================
  // クリックイベント（jQueryの書き方）
  // ==========================================================
  
  // 【▶】右矢印ボタンが押されたとき
  $nextBtn.on('click', function() {
    nextSlide();
    resetTimer(); // 人間がボタンを押したら、タイマーをリセットして数え直す
  });

  // 【◀】左矢印ボタンが押されたとき
  $prevBtn.on('click', function() {
    if (counter === 0) {
      counter = totalSlides;
      moveSlider(false);
      setTimeout(function() {
        counter--;
        moveSlider(true);
      }, 20); 
    } else {
      counter--;
      moveSlider(true);
    }
    resetTimer(); // 人間がボタンを押したら、タイマーをリセットして数え直す
  });

  // ==========================================================
  // 4秒ごとに自動で右へ動かす「オートプレイ」の仕掛け
  // ==========================================================
  
  // タイマーをスタートさせる関数
  function startTimer() {
    // setInterval で「4000ミリ秒（4秒）ごとに nextSlide を実行してね」と命令
    timerId = setInterval(nextSlide, 4000);
  }

  // タイマーをストップさせて数え直す関数
  function resetTimer() {
    clearInterval(timerId); // 今動いている4秒タイマーを一度ゴミ箱に捨てる
    startTimer();           // 新しく4秒タイマーを測り直す
  }

  // 🚀 サイトを開いた瞬間に、自動スライドのタイマーをスタート！
  startTimer();
});