export const scenes = {
    COMMISSIONS: "commissions",
    GALLERY: "gallery",
    BLOG: "blog",
    FAQ: "faq"
};

export const initialState = {
    flags: {
        "ArtSelected": {
            flagState: false
        },
        "0001": {
            flagState: false
        },
        "0002": {
            flagState: false
        }
    },
    selections: {
        "SelectedArt": null,
        "SelectedPage": scenes.GALLERY
    },
};
