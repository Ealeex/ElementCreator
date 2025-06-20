export default class ElementCreator {
    static generic(e, options) {
        if (options?.id)
            e.id = options.id;
        if (options?.class)
            options.class.split(' ').forEach(_class => e.classList.add(_class));
        if (options?.parent)
            options.parent.appendChild(e);
        return e;
    }
    static input(options) {
        let e = document.createElement('input');
        e = ElementCreator.generic(e, options);
        return e;
    }
    static option(options) {
        let e = document.createElement('option');
        e.value = options.value;
        e.innerHTML = options.name;
        return e;
    }
    static dropdown(options) {
        // It seems that you need to wrap a select element with a parent to get it to size properly...
        let eCont = document.createElement('div');
        eCont.style.padding = '0px 10px';
        options?.parent?.appendChild(eCont);
        if (options)
            options.parent = eCont;
        let e = document.createElement('select');
        e = ElementCreator.generic(e, options);
        options?.options.forEach(option => {
            e.appendChild(ElementCreator.option(option));
        });
        return e;
    }
    static button(options) {
        let e = ElementCreator.input(options);
        e.type = 'button';
        if (options?.value)
            e.value = options.value;
        if (options?.onclick)
            e.onclick = () => { if (options?.onclick)
                options.onclick(); };
        return e;
    }
    static textInput(options) {
        let e = ElementCreator.input(options);
        e.type = 'text';
        e.autocomplete = 'off';
        e.autocapitalize = 'off';
        e.spellcheck = false;
        if (options?.type)
            e.type = options.type;
        if (options?.value)
            e.value = options.value;
        if (options?.placeholder)
            e.placeholder = options.placeholder;
        if (options?.min)
            e.min = options.min;
        if (options?.max)
            e.max = options.max;
        return e;
    }
    static textArea(options) {
        // It seems that you need to wrap a select element with a parent to get it to size properly...
        let eCont = document.createElement('div');
        eCont.style.padding = '0px 10px';
        options?.parent?.appendChild(eCont);
        if (options)
            options.parent = eCont;
        let e = document.createElement('textarea');
        e = ElementCreator.generic(e, options);
        if (options?.innerHTML)
            e.innerHTML = options.innerHTML;
        return e;
    }
    static text(options) {
        let e = document.createElement(options.type);
        if (options?.innerHTML)
            e.innerHTML = options.innerHTML;
        return ElementCreator.generic(e, options);
    }
    static div(options) {
        let e = document.createElement('div');
        e = ElementCreator.generic(e, options);
        if (options?.innerHTML)
            e.innerHTML = options.innerHTML;
        return e;
    }
    static link(options) {
        let e = document.createElement('a');
        e = ElementCreator.generic(e, options);
        if (options?.href)
            e.href = options.href;
        if (options?.target)
            e.target = options.target;
        if (options?.innerHTML)
            e.innerHTML = options.innerHTML;
        return e;
    }
    static video(options) {
        let e = document.createElement('video');
        e = ElementCreator.generic(e, options);
        if (options?.src)
            e.src = options.src;
        if (options?.autoplay)
            e.autoplay = options.autoplay;
        if (options?.volume)
            e.volume = options.volume;
        if (options?.controls)
            e.controls = options.controls;
        return e;
    }
    static image(options) {
        let e = document.createElement('img');
        e = ElementCreator.generic(e, options);
        if (options?.src)
            e.src = options.src;
        return e;
    }
    static audio(options) {
        let e = document.createElement('audio');
        e = this.generic(e, options);
        if (options?.src)
            e.src = options.src;
        if (options?.autoplay)
            e.autoplay = options.autoplay;
        if (options?.volume)
            e.volume = options.volume;
        if (options?.controls)
            e.controls = options.controls;
        return e;
    }
    static form(options) {
        let e = document.createElement('form');
        e = ElementCreator.generic(e, options);
        return e;
    }
    static span(options) {
        let e = document.createElement('span');
        e = ElementCreator.generic(e, options);
        return e;
    }
    static ul(options) {
        let e = document.createElement('ul');
        e = ElementCreator.generic(e, options);
        return e;
    }
}
