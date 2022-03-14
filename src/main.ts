/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { initPlayer, Player } from "./Player";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const PROJECT_NAME = "Project name";

// Config the project name
const titleHead = document.head.querySelector("title")!;
const title = app.querySelector<HTMLDivElement>(".projectName")!;
title.innerText = PROJECT_NAME;
titleHead.innerText = PROJECT_NAME;

const canvasContainer =
  document.querySelector<HTMLDivElement>("#canvas-container")!;
const canvas = document.querySelector<HTMLCanvasElement>("#sketch")!;

const { width, height } = canvasContainer.getBoundingClientRect();

// App initialization
const player = new Player(canvas, width, height);
initPlayer(canvasContainer, player);
