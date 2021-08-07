/**
 * Object containing options that tweak the behavior of a local svelte-reveal instance.
 */
export interface IOptions {
	/**
	 * It enables/disables the transition.
	 */
	disable?: boolean;
	/**
	 * It enables/disables debugging mode for the targeted DOM element.
	 * This will log all options and configs to the console.
	 *
	 * In order to be able to use this mode, you are required to also set the ref property.
	 */
	debug?: boolean;
	/**
	 * When debug is set to true, you are required to specificy a ref string.
	 * When multiple DOM nodes have debug mode enabled, ref strings allow you to
	 * know to which DOM node a console log statement belongs to.
	 */
	ref?: string;
	/**
	 * When set to true the console logs of the target node get colored,
	 * making it easier to see them quicker among many other logs.
	 */
	highlightLogs?: boolean;
	/**
	 * You can use this option to tweak the console logs when highlightLogs is set to true.
	 *
	 * Any valid CSS color can be used here.
	 */
	highlightColor?: string;
	/**
	 * The root element used by the Intersection Observer API.
	 */
	root?: ObserverRoot;
	/**
	 * Top margin of the rootMargin property of the Intersection Observer API.
	 */
	marginTop?: number;
	/**
	 * Bottom margin of the rootMargin property of the Intersection Observer API.
	 */
	marginBottom?: number;
	/**
	 * Left margin of the rootMargin property of the Intersection Observer API.
	 */
	marginLeft?: number;
	/**
	 * Right margin of the rootMargin property of the Intersection Observer API.
	 */
	marginRight?: number;
	/**
	 * The threshold (in percentage from 0 to 1) property used by the Intersection
	 * Observer API to know when its target element is considered visible or not.
	 */
	threshold?: number;
	/**
	 * The animation that will be triggered when your target node becomes visible.
	 */
	transition?: Transitions;
	/**
	 * The amount of milliseconds (ms) you want to delay a given transition.
	 */
	delay?: number;
	/**
	 * The amount of milliseconds (ms) you want a given transition to last.
	 */
	duration?: number;
	/**
	 * The type of easing function you want to apply to a given element.
	 */
	easing?: Easing;
	/**
	 * The individual weights of a custom cubic-bezier curve.
	 */
	customEasing?: CustomEasing;
	/**
	 * The starting position on the x-axis of a given transition.
	 */
	x?: number;
	/**
	 * The starting position on the y-axis of a given transition.
	 */
	y?: number;
	/**
	 * The number of degrees you want your node to rotate when being revealed with the "spin" transition.
	 */
	deg?: number;
	/**
	 * Function that gets fired when the node starts being revealed. It's similar to the ontransitionstart event.
	 */
	onRevealStart?: (node: HTMLElement) => void;
	/**
	 * Function that gets fired when the node is fully revealed. It's similar to the ontransitionend event.
	 */
	onRevealEnd?: (node: HTMLElement) => void;
	/**
	 * Function that gets fired when the node is mounted on the DOM.
	 */
	onMount?: (node: HTMLElement) => void;
	/**
	 * Function that gets fired when the action options are updated.
	 */
	onUpdate?: (node: HTMLElement) => void;
	/**
	 * Function that gets fired when the node is unmounted from the DOM.
	 */
	onDestroy?: (node: HTMLElement) => void;
}

/**
 * The root element used by the Intersection Observer API.
 * It can either be an HTML element or nothing.
 */
export type ObserverRoot = HTMLElement | null | undefined;

export interface IObserverOptions {
	/**
	 * The Intersection Observer API root element.
	 */
	root?: HTMLElement | null;
	/**
	 * The Intersection Observer API rootMargin property.
	 */
	rootMargin: string;
	/**
	 * The Intersection Observer API threshold property.
	 */
	threshold: number;
}

/**
 * Object containing global configurations. They apply to all instances of this library.
 */
export interface IConfig {
	/**
	 * Globally enables/disables all logs.
	 */
	dev: boolean;
	/**
	 * Runs the scroll animations only once when set to true.
	 * When set to true, refreshing the page doesn't re-run them.
	 */
	once: boolean;
	/**
	 * The Intersection Observer API options.
	 */
	observer: IObserverOptions;
}

/**
 * The return type of the Svelte action.
 */
export interface IReturnAction {
	update?: (options?: IOptions) => void;
	destroy?: () => void;
}

/**
 * The animations that can be used by the library users.
 */
export type Transitions = 'fly' | 'fade' | 'blur' | 'scale' | 'slide' | 'spin';

/**
 * The easing functions that can be specified by the user to tweak the animation timing.
 */
export type Easing =
	| 'linear'
	| 'easeInSine'
	| 'easeOutSine'
	| 'easeInOutSine'
	| 'easeInQuad'
	| 'easeOutQuad'
	| 'easeInOutQuad'
	| 'easeInCubic'
	| 'easeOutCubic'
	| 'easeInOutCubic'
	| 'easeInQuart'
	| 'easeOutQuart'
	| 'easeInOutQuart'
	| 'easeInQuint'
	| 'easeOutQuint'
	| 'easeInOutQuint'
	| 'easeInExpo'
	| 'easeOutExpo'
	| 'easeInOutExpo'
	| 'easeInCirc'
	| 'easeOutCirc'
	| 'easeInOutCirc'
	| 'easeInBack'
	| 'easeOutBack'
	| 'easeInOutBack'
	| 'custom';

/**
 * The individual weights of a custom cubic-bezier curve.
 */
export type CustomEasing = [number, number, number, number];
