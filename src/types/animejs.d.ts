/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "animejs" {
  interface AnimeParams {
    targets?: any;
    duration?: number;
    delay?: number | ((el: Element, i: number, l: number) => number);
    endDelay?: number;
    easing?: string;
    round?: number;
    direction?: string;
    loop?: boolean | number;
    autoplay?: boolean;
    translateX?: any;
    translateY?: any;
    translateZ?: any;
    rotate?: any;
    rotateX?: any;
    rotateY?: any;
    rotateZ?: any;
    scale?: any;
    scaleX?: any;
    scaleY?: any;
    opacity?: any;
    color?: any;
    backgroundColor?: any;
    width?: any;
    height?: any;
    borderRadius?: any;
    boxShadow?: any;
    left?: any;
    top?: any;
    begin?: (anim: any) => void;
    update?: (anim: any) => void;
    complete?: (anim: any) => void;
    [key: string]: any;
  }

  interface AnimeTimelineInstance {
    add(params: AnimeParams, offset?: string | number): AnimeTimelineInstance;
  }

  interface AnimeStatic {
    (params: AnimeParams): any;
    timeline(params?: AnimeParams): AnimeTimelineInstance;
    stagger(value: number | any[], options?: any): any;
    random(min: number, max: number): number;
    set(targets: any, props: any): void;
  }

  const anime: AnimeStatic;
  export default anime;
}
