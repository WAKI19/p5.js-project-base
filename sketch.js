//グローバル変数定義
const CANVAS_W = 640;
const CANVAS_H = 480;

//素材読み込み
function preload() {

}

function setup() {
    createCanvas(CANVAS_W, CANVAS_H);
    updateCanvasSize();
}

//ウィンドウがリサイズされた時の処理
function windowResized() {
    updateCanvasSize();
}

function updateCanvasSize() {
    // ウィンドウの高さを基準にスケーリング
    const h = windowHeight;
    const w = h * (CANVAS_W / CANVAS_H);

    resizeCanvas(w, h);
}

function draw() {
    background(150);
}