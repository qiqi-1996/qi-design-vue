var settings = {
    // theme: "light", 
    // color: "poe",

    global: {
        theme: "light",
        color: "poe"
    },

    defaults: {
        toast_duration: 3000,
        toast_theme: "light",
        toast_color: "poe",

        typography_mode: "single",
        title_mode: "",
        text_mode: "",
        footnote_mode: "",
        quote_mode: "",

        image_lazy: false,
        image_loading: false,
        image_error: false,

        avatar_shape: "square",
        avatar_size: "normal",
        avatar_lazy: undefined,
        avatar_loading: undefined,
        avatar_error: undefined,
    }
}

export default settings;

export function replaceSettingsObject(obj) {
    settings = obj;
}