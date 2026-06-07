// 1. パソコンに、動かしたい「電車」と「左右のボタン」の場所を教える
const stage = document.getElementById('js-stage');
const nextBtn = document.getElementById('js-next');
const prevBtn = document.getElementById('js-prev');

let counter = 0;
const totalSlides = 3; // 本物の写真の枚数（1枚目〜3枚目）

// 電車を動かす専用の関数（命令のまとまり）
// useTransition が true なら「シュッと動く」、false なら「一瞬（0秒）でワープする」
function moveSlider(useTransition) {
  if (useTransition) {
    stage.style.transition = 'transform 0.5s ease'; // 0.5秒かけてなめらかに動かす
  } else {
    stage.style.transition = 'none'; // アニメーションをオフ（0秒）にする
  }
  // 4枚並んだ電車を、25%ずつ左にズラす計算
  stage.style.transform = 'translateX(' + (-counter * 25) + '%)';
}

// ==========================================================
// 【▶】右矢印ボタンが押されたときの動き
// ==========================================================
nextBtn.addEventListener('click', function() {
  counter++; // カウンターを1増やす
  
  // まずは普通に「ニセモノの4枚目（カウンター3）」までシュッと右へ動かす
  moveSlider(true);

  // もしニセモノの4枚目（カウンター3）に到達したら…
  if (counter === totalSlides) {
    // 0.5秒のスライドが終わった瞬間に、こっそりワープさせるタイマーを起動！
    setTimeout(function() {
      counter = 0;      // カウンターを本物の1枚目（0）に戻す
      moveSlider(false); // アニメーションを消して、一瞬で本物の1枚目にすり替える！
    }, 500); // スライド時間と同じ0.5秒（500ミリ秒）待つ
  }
});

// ==========================================================
// 【◀】左矢印ボタンが押されたときの動き
// ==========================================================
prevBtn.addEventListener('click', function() {
  if (counter === 0) {
    // 1枚目から戻るときは、まずアニメーション無しで「ニセモノの4枚目」に一瞬でワープ
    counter = totalSlides;
    moveSlider(false);
    
    // その直後に、0.5秒かけて「本物の3枚目（カウンター2）」へシュッと左へ戻す
    setTimeout(function() {
      counter--;
      moveSlider(true);
    }, 20); // パソコンがワープを認識するための、ほんの一瞬（20ミリ秒）の待ち時間
  } else {
    counter--;
    moveSlider(true);
  }
});