type ElementOptions = {
    id?: string;
    class?: string;
    parent?: HTMLElement | null;
};
type VideoOptions = ElementOptions & {
    src?: string;
    autoplay?: boolean;
    volume?: number;
    controls?: boolean;
};
type ImageOptions = ElementOptions & {
    src?: string;
};
type AudioOptions = ElementOptions & {
    src?: string;
    volume?: number;
    autoplay?: boolean;
    controls?: boolean;
};
type ButtonOptions = ElementOptions & {
    value?: string;
    onclick?: Function;
};
type TextInputOptions = ElementOptions & {
    value?: string;
    placeholder?: string;
    type?: string;
    min?: string;
    max?: string;
};
type TextAreaOptions = ElementOptions & {
    innerHTML?: string;
};
type TextElementOptions = ElementOptions & {
    type: string;
    innerHTML?: string;
};
type DropdownOptions = ElementOptions & {
    options: DropdownOption[];
};
type DropdownOption = {
    name: string;
    value: string;
};
type DivOptions = ElementOptions & {
    innerHTML?: string;
};
type LinkOptions = ElementOptions & {
    href: string;
    target?: string;
    innerHTML: string;
};
export default class ElementCreator {
    private static generic;
    private static input;
    private static option;
    static dropdown(options?: DropdownOptions): HTMLSelectElement;
    static button(options?: ButtonOptions): HTMLInputElement;
    static textInput(options?: TextInputOptions): HTMLInputElement;
    static textArea(options?: TextAreaOptions): HTMLTextAreaElement;
    static text(options: TextElementOptions): HTMLElement;
    static div(options?: DivOptions): HTMLDivElement;
    static link(options?: LinkOptions): HTMLAnchorElement;
    static video(options?: VideoOptions): HTMLVideoElement;
    static image(options?: ImageOptions): HTMLImageElement;
    static audio(options?: AudioOptions): HTMLAudioElement;
    static form(options?: ElementOptions): HTMLFormElement;
    static span(options?: ElementOptions): HTMLSpanElement;
    static ul(options?: ElementOptions): HTMLUListElement;
}
export {};
