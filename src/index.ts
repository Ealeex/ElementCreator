type ElementOptions = {id?:string, class?:string, parent?:HTMLElement|null};
type VideoOptions = ElementOptions & {src?:string, autoplay?:boolean, volume?:number, controls?:boolean};
type ImageOptions = ElementOptions & {src?:string};
type AudioOptions = ElementOptions & {src?:string, volume?:number, autoplay?:boolean, controls?:boolean};
type ButtonOptions = ElementOptions & {value?:string, onclick?:Function};
type TextInputOptions = ElementOptions & {value?:string, placeholder?:string, type?:string, min?:string, max?:string};
type TextAreaOptions = ElementOptions & {innerHTML?:string};
type TextElementOptions = ElementOptions & {type:string, innerHTML?:string};
type DropdownOptions = ElementOptions & {options:DropdownOption[]};
type DropdownOption = {name:string, value:string};
type DivOptions = ElementOptions & {innerHTML?:string};
type LinkOptions = ElementOptions & {href:string, target?:string, innerHTML:string};

export default class ElementCreator {

    private static generic(e: HTMLElement, options?: ElementOptions): HTMLElement {
        if(options?.id) e.id = options.id;
        if(options?.class) options.class.split(' ').forEach(_class => e.classList.add(_class));
        if(options?.parent) options.parent.appendChild(e);
        return e;
    }

    private static input(options?: ElementOptions): HTMLInputElement {
        let e = document.createElement('input');
        e = ElementCreator.generic(e, options) as HTMLInputElement;
        return e;
    }

    private static option(options: DropdownOption) {
        let e = document.createElement('option');
        e.value = options.value;
        e.innerHTML = options.name;
        return e;
    }

    static dropdown(options?: DropdownOptions): HTMLSelectElement {

        // It seems that you need to wrap a select element with a parent to get it to size properly...
        let eCont = document.createElement('div');
        eCont.style.padding = '0px 10px';
        options?.parent?.appendChild(eCont);
        if(options) options.parent = eCont;

        let e = document.createElement('select');
        e = ElementCreator.generic(e, options) as HTMLSelectElement;

        options?.options.forEach(option => {
            e.appendChild(ElementCreator.option(option));
        });

        return e;
    }

    static button(options?: ButtonOptions): HTMLInputElement {
        let e = ElementCreator.input(options);
        e.type = 'button';
        if(options?.value) e.value = options.value;
        if(options?.onclick) e.onclick = () => { if(options?.onclick) options.onclick(); }
        return e;
    }

    static textInput(options?: TextInputOptions): HTMLInputElement {
        let e = ElementCreator.input(options);
        e.type = 'text';
        e.autocomplete = 'off';
        e.autocapitalize = 'off';
        e.spellcheck = false;
        if(options?.type) e.type = options.type;
        if(options?.value) e.value = options.value;
        if(options?.placeholder) e.placeholder = options.placeholder;
        if(options?.min) e.min = options.min;
        if(options?.max) e.max = options.max;
        return e;
    }

    static textArea(options?: TextAreaOptions): HTMLTextAreaElement {

        // It seems that you need to wrap a select element with a parent to get it to size properly...
        let eCont = document.createElement('div');
        eCont.style.padding = '0px 10px';
        options?.parent?.appendChild(eCont);
        if(options) options.parent = eCont;
        let e = document.createElement('textarea');
        e = ElementCreator.generic(e, options) as HTMLTextAreaElement;
        if(options?.innerHTML) e.innerHTML = options.innerHTML;
        return e;
    }

    static text(options: TextElementOptions): HTMLElement {
        let e = document.createElement(options.type);
        if(options?.innerHTML) e.innerHTML = options.innerHTML;
        return ElementCreator.generic(e, options);
    }

    static div(options?: DivOptions): HTMLDivElement {
        let e = document.createElement('div');
        e = ElementCreator.generic(e, options) as HTMLDivElement;
        if(options?.innerHTML) e.innerHTML = options.innerHTML;
        return e;
    }

    static link(options?: LinkOptions): HTMLAnchorElement {
        let e = document.createElement('a');
        e = ElementCreator.generic(e, options) as HTMLAnchorElement;
        if(options?.href) e.href = options.href;
        if(options?.target) e.target = options.target;
        if(options?.innerHTML) e.innerHTML = options.innerHTML;
        return e;
    }

    static video(options?: VideoOptions): HTMLVideoElement {
        let e = document.createElement('video');
        e = ElementCreator.generic(e, options) as HTMLVideoElement;
        if(options?.src) e.src = options.src;
        if(options?.autoplay) e.autoplay = options.autoplay;
        if(options?.volume) e.volume = options.volume;
        if(options?.controls) e.controls = options.controls;
        return e;
    }

    static image(options?: ImageOptions): HTMLImageElement {
        let e = document.createElement('img');
        e = ElementCreator.generic(e, options) as HTMLImageElement;
        if(options?.src) e.src = options.src;
        return e;
    }

    static audio(options?: AudioOptions): HTMLAudioElement {
        let e = document.createElement('audio');
        e = this.generic(e, options) as HTMLAudioElement;
        if(options?.src) e.src = options.src;
        if(options?.autoplay) e.autoplay = options.autoplay;
        if(options?.volume) e.volume = options.volume;
        if(options?.controls) e.controls = options.controls;
        return e;
    }

    static form(options?: ElementOptions): HTMLFormElement {
        let e = document.createElement('form');
        e = ElementCreator.generic(e, options) as HTMLFormElement;
        return e;
    }

    static span(options?: ElementOptions): HTMLSpanElement {
        let e = document.createElement('span');
        e = ElementCreator.generic(e, options) as HTMLFormElement;
        return e;
    }

    static ul(options?: ElementOptions): HTMLUListElement {
        let e = document.createElement('ul');
        e = ElementCreator.generic(e, options) as HTMLUListElement;
        return e;
    }

}
