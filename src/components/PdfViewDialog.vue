<template>
  <el-dialog :visible="visible" fixed-footer width="1000px" :fullscreen="fullscreen" :before-close="handleClose">
    <div class="pdf-viewer" v-loading="!loaded">
<!--      <div v-if="loaded" class="tool-bar">-->
<!--        <div class="pdf_down">-->
<!--          <i class="icon ext-icon-zoom-out" @click="scaleSmall"></i>-->
<!--          <i class="icon ext-icon-zoom-in" @click="scaleBig"></i>-->
<!--        </div>-->
<!--      </div>-->
      <div class="pdf" :style="{width:pdf_div_width}">
        <canvas v-for="page in pdf_pages" :id="'the_canvas'+page" :key="page"></canvas>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="handleClose">{{ $t('common.close') }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
let PDFJS = require('pdfjs-dist');
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");
export default {
  data() {
    return {
      pdf_scale: 1.5,//pdf放大系数
      pdf_pages: [],
      pdf_div_width: '',
      pdf_src: null,
      loaded: false
    }
  },
  components: {
    // pdf
  },
  props: {
    visible: Boolean,
    pdfUrl: String,
    fullscreen: Boolean,
  },

  mounted() {
    this.get_pdfurl();
  },

  watch: {
    pdfUrl() {
      this.get_pdfurl();
    }
  },

  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },
    scaleBig() {  //放大
      let max = 0
      if (window.screen.width > 1200) {
        max = 1.8;
      } else {
        max = 1.4;
      }
      if (this.pdf_scale >= max) {
        return;
      }
      this.pdf_scale = this.pdf_scale + 0.2;
      this._loadFile(this.pdf_src);
    },
    scaleSmall() {  //缩小
      let min = 1.0
      if (this.pdf_scale <= min) {
        return
      }
      this.pdf_scale = this.pdf_scale - 0.2
      this._loadFile(this.pdf_src)
    },
    get_pdfurl() {
      //加载本地
      this.pdf_src = this.pdfUrl;
      // this.pdf_src = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
      this._loadFile(this.pdf_src)
      return
    },
    _loadFile(url) {  //初始化pdf
      let loadingTask = PDFJS.getDocument(url)
      loadingTask.promise
        .then((pdf) => {
          this.pdfDoc = pdf
          this.pdf_pages = this.pdfDoc.numPages
          this.$nextTick(() => {
            this._renderPage(1)
          })
        })
    },
    _renderPage(num) {  //渲染pdf页
      // @ts-ignore
      const that = this
      this.pdfDoc.getPage(num)
        .then((page) => {
          let canvas = document.getElementById('the_canvas' + num)
          let ctx = canvas.getContext('2d')
          let dpr = window.devicePixelRatio || 1
          let bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1
          let ratio = dpr / bsr
          let viewport = page.getViewport({scale: this.pdf_scale})

          canvas.width = viewport.width * ratio
          canvas.height = viewport.height * ratio

          canvas.style.width = viewport.width + 'px'

          that.pdf_div_width = viewport.width + 20 + 'px' // 滚动条宽度

          canvas.style.height = viewport.height + 'px'

          ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport
          }
          this.loaded = true;
          page.render(renderContext)
          if (this.pdf_pages > num) {
            this._renderPage(num + 1)
          }
        }).catch(() => {
        this.loaded = true;
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.pdf-viewer {
  margin: 24px auto;
  height: 500px;
  .pdf {
    margin: 0 auto;
    background-color: #FFFFFF;
  }

  //.tool-bar {
  //  left: 0;
  //  right: 0;
  //  height: 50px;
  //  background-color: var(--rcd-color-fill-100);
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //
  //  .pdf_down {
  //    display: flex;
  //    z-index: 20;
  //    right: 26px;
  //    bottom: 7%;
  //
  //    .icon {
  //      font-size: 20px;
  //      color: var(--rcd-color-text-100);
  //      cursor: pointer;
  //
  //      & + .icon {
  //        margin-left: 20px;
  //      }
  //
  //      &:hover {
  //        color: var(--rcd-color-text-200);
  //      }
  //    }
  //  }
  //}

}
</style>
