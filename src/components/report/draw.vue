<template>
  <div class="el_content">
    <!--<div class="resizeMe" id="testDiv" :style="{height:obj.dH+'px'}" @mousedown.left="doDown($event)" @mousemove.left="doMove($event)" @mouseup.left="doUp">-->
    <!--<div id="innerNice">-->
    <!--<p align="center">请在边框处拖动鼠标看看效果啊</p>-->
    <!--</div>-->
    <!--</div>-->
    <template v-for="(item,index) in arry">
      <div class="testDiv" :style="{height:item.dH+'px'}"></div>
      <div class="moveDiv" :id="'move-' + index" @mousedown.left="doDown($event,index)"></div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "draw",
    data() {
      return {
        obj: {
          startX: null,
          startY: null,
          dW: null,
          dH: 300
        },
        moveFlag: false,
        moveActive: -1,
        arry: [{
          id: 1,
          name: 'div1',
          startX: null,
          startY: null,
          dH: 100
        }, {
          id: 2,
          name: 'div2',
          startX: null,
          startY: null,
          dH: 100
        }]
      }
    },
    mounted() {
      this.onMove();
      this.onUp();
    },
    methods: {
      /* 鼠标移动 */
      onMove() {
        let $this = this;
        $(document).mousemove(function (el) {
          if ($this.moveFlag && $this.moveActive >= 0) {
            $this.arry[$this.moveActive].dH = $this.arry[$this.moveActive].dH + (el.pageY - $this.arry[$this.moveActive].startY);
            if ($this.arry[$this.moveActive].dH < 0)
              $this.arry[$this.moveActive].dH = 0;
            $this.arry[$this.moveActive].startY = el.pageY;
          }
        });
      },
      /* 鼠标抬起 */
      onUp() {
        let $this = this;
        $(document).mouseup(function (el) {
          $this.moveFlag = false;
        });
      },
      /* 鼠标点下 */
      doDown(el, index) {
        this.arry[index].startX = el.pageX;
        this.arry[index].startY = el.pageY;
        this.moveActive = index;
        this.moveFlag = true;
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

  .testDiv {
    width: 100%;
    background: skyblue;
  }

  .moveDiv {
    width: 100%;
    height: 10px;
    background: #cccccc;
    cursor: n-resize;
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
