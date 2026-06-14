$(function() {
  // 1. 4枚の写真（.fv-slide）をグループとしてパソコンに覚えさせる
  const $slides = $('.fv-slide');
  let currentIndex = 0; // 今、何枚目の写真を表示しているか（0始まりなので、0＝1枚目）
  const slideCount = $slides.length; // 写真が全部で何枚あるか自動計算（今回は4枚）

  // 写真を1枚ずつ次に進める「フェード切り替え」の関数
  function fadeNextSlide() {
    // 現在映っている写真から「active」シールを剥がす（＝ふわっと消える）
    $slides.eq(currentIndex).removeClass('active');

    // インデックスを1進める（0→1→2→3 と増えていく）
    currentIndex++;

    // もし最後の写真（3）の次に行ってしまったら、最初の写真（0）に戻す
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }

    // 次の写真に「active」シールを貼り付ける（＝ふわっと浮き出て、拡大が始まる）
    $slides.eq(currentIndex).addClass('active');
  }

  // 5秒（5000ミリ秒）ごとに、上の切り替え関数（fadeNextSlide）を自動で実行する！
  setInterval(fadeNextSlide, 5000);
});