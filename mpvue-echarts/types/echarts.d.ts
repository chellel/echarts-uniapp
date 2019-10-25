import Vue from 'vue'

/** Echarts Component */
export declare class Ecahrts extends Vue {
  echarts: object
  onInit?: () => object
  canvasId?: string
  lazyLoad?: boolean
  disableTouch?: boolean
  throttleTouch?: boolean
}
