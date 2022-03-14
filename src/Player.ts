import { Application } from "pixi.js";

export class Player {
  private _app: Application;

  constructor(onCanvas: HTMLCanvasElement, width: number, height: number) {
    this._app = new Application({
      view: onCanvas,
      width,
      height,
      resolution: window.devicePixelRatio,
      autoDensity: true,
      backgroundColor: 0x333333,
    });
  }

  get app() {
    return this._app;
  }
}

export const initPlayer = (canvasContainer: HTMLDivElement, player: Player) => {
  // Resize window
  window.addEventListener("resize", () => {
    const { width, height } = canvasContainer.getBoundingClientRect();
    player.app.renderer.resize(width, height);
  });
};
