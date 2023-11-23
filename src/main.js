import { MODULE_NAME } from "./constants.js";
import "./scene-fade.css"

let board = null
const boardTransitionBackground = $(`<div class="scene-fade__background"></div>`)

Hooks.on('canvasInit', async () => {
    console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);
    board = document.getElementById("board");
    $(boardTransitionBackground).insertBefore(board)
    $(board).addClass("scene-fade").addClass("scene-fade--initial");
});

Hooks.on('canvasTearDown', async (canvas) => {
    console.log(`${MODULE_NAME} | Canvas is being torn down`);
    // console.log(canvas.masks.canvas)
    console.log(canvas)
    $(board).addClass("scene-fade--transitioning");
});

Hooks.on("canvasReady", async () => {
    console.log(`${MODULE_NAME} | Canvas is ready`);
    // setTimeout(() => {
    //     $(board).removeClass("scene-fade--transitioning");
    // }, 10000);
    $(board).removeClass("scene-fade--transitioning").removeClass("scene-fade--initial");
});
