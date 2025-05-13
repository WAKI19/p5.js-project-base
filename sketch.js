//グローバル変数定義部分
const CANVAS_W = 640;
const CANVAS_H = 480;
let scaleRate; //キャンバスの拡大率

let sceneManager;

class SceneManager {
    constructor() {
        this.scenes = {};
        this.current = null;
        this.currentInstance = null;
    }

    addScene(_name, _sceneClass) {
        this.scenes[_name] = _sceneClass;
    }

    switchScene(_name) {
        if (this.scenes[_name]) {
            this.current = _name;
            this.currentInstance = new this.scenes[_name]();
            this.currentInstance.setup();
        } else {
            console.log('ページが見つかりません');
        }
    }

    updateScene() {
        this.currentInstance.draw();
    }
}

//素材読み込み
function preload() {

}

function setup() {
    createCanvas(CANVAS_W, CANVAS_H);
    fitCanvasToWindow();

    sceneManager = new SceneManager();
    sceneManager.addScene('top', TitleScene);

    sceneManager.switchScene('top');
}

//ウィンドウがリサイズされた時の処理
function windowResized() {
    fitCanvasToWindow();
}

function fitCanvasToWindow() {
    // ウィンドウの高さを基準にリサイズし、ウィンドウに合わせる
    const h = windowHeight;
    const w = h * (CANVAS_W / CANVAS_H);

    resizeCanvas(w, h);
}

function keyPressed() {
    sceneManager.currentInstance.keyPressed();
}

function scaling() {
    scaleRate = height / CANVAS_H; //キャンバスの拡大率（高さで計算）
    scale(scaleRate);
}

function draw() {
    scaling();
    sceneManager.updateScene();
}

//各ページの実装部分
//基底クラス
class Scene {
    setup() {};
    preload() {};
    keyPressed() {};
    draw() {};
}

class TitleScene extends Scene {
    setup() {}
    preload() {}
    keyPressed() {}

    draw() {
        background(255);
        textAlign(CENTER);
        text('トップページ', CANVAS_W / 2, CANVAS_H / 2);
    }
}