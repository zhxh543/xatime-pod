<template>
  <div class="el_content">
    <div class="resizeMe" id="testDiv" :style="{height:obj.dH+'px'}" @mousedown.left="doDown($event)" @mousemove.left="doMove($event)" @mouseup.left="doUp">
      <div id="innerNice">
        <p align="center">请在边框处拖动鼠标看看效果啊</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "draw",
    data() {
      return {
        obj: {
          startX:null,
          startY:null,
          dW:null,
          dH:300
        },
        moveFlag:false
      }
    },
    methods: {
      doDown(el){
        this.obj.startX = el.pageX;
        this.obj.startY = el.pageY;
        this.moveFlag = true;
        console.log(this.obj.dH);
      },
      doMove(el){
        if(this.moveFlag){
          this.obj.dH = this.obj.dH + (el.pageY - this.obj.startY);
          this.obj.startY = el.pageY;
          console.log(this.obj.dH);
        }
      },
      doUp(){
        this.moveFlag = false;
      }
    }
  }
</script>

<style>
  #testDiv {
    background-color: buttonface;
    background-repeat: repeat;
    background-attachment: scroll;
    color: #3969A5;
    height: 300px;
    left: 30px;
    overflow: hidden;
    width: 500px;
    z-index: 2;
    border: 2px outset white;
    margin: 0px;
    padding: 2px;
    background-position: 0% 50%
  }

  #innerNice {
    background-color: white;
    background-repeat: repeat;
    background-attachment: scroll;
    color: #3969A5;
    height: 100%;
    overflow: auto;
    width: 100%;
    border: 2px inset white;
    padding: 8px;
    background-position: 0% 50%
  }
</style>
