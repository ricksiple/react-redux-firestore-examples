const initialState = {
    records: [
        {
            id: 0,
            name:"Fossil 1", 
            finder: "Heather Siple", 
            location:"Wilmington, DE", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend enim sit amet condimentum sollicitudin. Vestibulum suscipit ligula vulputate libero vestibulum, vel fringilla ante auctor. Proin dictum nisl at nulla molestie, at dapibus diam pretium. Praesent vel convallis tortor. Donec bibendum, metus a suscipit convallis, erat nulla consequat odio, pulvinar convallis metus ligula sed tellus. Praesent finibus rutrum purus, non suscipit massa porta non. Nunc neque magna, semper vel justo et, mollis pulvinar ipsum. Duis pharetra efficitur lectus sit amet vehicula. Morbi iaculis egestas cursus. In ullamcorper mi a arcu luctus, a imperdiet tellus laoreet. Proin tristique vehicula massa ac tristique.  Mauris nec convallis lectus. Aliquam porta posuere porttitor. Maecenas volutpat diam efficitur nunc volutpat eleifend. Aliquam erat volutpat. Nulla facilisi. Donec eget lorem imperdiet, tristique libero et, luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu eleifend magna. Pellentesque eget diam non purus dapibus viverra. Maecenas nec laoreet elit. Pellentesque cursus aliquet iaculis. Donec blandit faucibus iaculis. Suspendisse condimentum nibh vitae lacinia dignissim. Nam id neque et lorem porttitor feugiat. Quisque pellentesque nulla sit amet odio rutrum consequat. Donec vitae metus mi."
        },
        {
            id: 1,
            name:"Fossil 2", 
            finder: "Joe Schmoe", 
            location:"Wilmington, NC", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend enim sit amet condimentum sollicitudin. Vestibulum suscipit ligula vulputate libero vestibulum, vel fringilla ante auctor. Proin dictum nisl at nulla molestie, at dapibus diam pretium. Praesent vel convallis tortor. Donec bibendum, metus a suscipit convallis, erat nulla consequat odio, pulvinar convallis metus ligula sed tellus. Praesent finibus rutrum purus, non suscipit massa porta non. Nunc neque magna, semper vel justo et, mollis pulvinar ipsum. Duis pharetra efficitur lectus sit amet vehicula. Morbi iaculis egestas cursus. In ullamcorper mi a arcu luctus, a imperdiet tellus laoreet. Proin tristique vehicula massa ac tristique.  Mauris nec convallis lectus. Aliquam porta posuere porttitor. Maecenas volutpat diam efficitur nunc volutpat eleifend. Aliquam erat volutpat. Nulla facilisi. Donec eget lorem imperdiet, tristique libero et, luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu eleifend magna. Pellentesque eget diam non purus dapibus viverra. Maecenas nec laoreet elit. Pellentesque cursus aliquet iaculis. Donec blandit faucibus iaculis. Suspendisse condimentum nibh vitae lacinia dignissim. Nam id neque et lorem porttitor feugiat. Quisque pellentesque nulla sit amet odio rutrum consequat. Donec vitae metus mi."
        },
        {
            id: 2,
            name:"Fossil 3", 
            finder: "Jane Doe", 
            location:"Dover, DE", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend enim sit amet condimentum sollicitudin. Vestibulum suscipit ligula vulputate libero vestibulum, vel fringilla ante auctor. Proin dictum nisl at nulla molestie, at dapibus diam pretium. Praesent vel convallis tortor. Donec bibendum, metus a suscipit convallis, erat nulla consequat odio, pulvinar convallis metus ligula sed tellus. Praesent finibus rutrum purus, non suscipit massa porta non. Nunc neque magna, semper vel justo et, mollis pulvinar ipsum. Duis pharetra efficitur lectus sit amet vehicula. Morbi iaculis egestas cursus. In ullamcorper mi a arcu luctus, a imperdiet tellus laoreet. Proin tristique vehicula massa ac tristique.  Mauris nec convallis lectus. Aliquam porta posuere porttitor. Maecenas volutpat diam efficitur nunc volutpat eleifend. Aliquam erat volutpat. Nulla facilisi. Donec eget lorem imperdiet, tristique libero et, luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu eleifend magna. Pellentesque eget diam non purus dapibus viverra. Maecenas nec laoreet elit. Pellentesque cursus aliquet iaculis. Donec blandit faucibus iaculis. Suspendisse condimentum nibh vitae lacinia dignissim. Nam id neque et lorem porttitor feugiat. Quisque pellentesque nulla sit amet odio rutrum consequat. Donec vitae metus mi."
        }
    ]
};

const types = {
    DELETE: "FOSSIL_DELETE"
};

const handlers = {

    delete: (state, action) => {
        const newRecords = state.records.filter(r =>
            r.id !== action.id
        );
        return { ...state, records: newRecords };
    }

};

export const actions = {
    rdxDelete: id => ({ type: types.DELETE, id: id })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE:
            return handlers.delete(state, action);
        default:
            return state;
    }
};

export default reducer;
