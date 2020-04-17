const initialState = {
    records: [
        {
            id: 1,
            name: "Redux Fossil 1",
            finder: "Heather Siple",
            location: "Wilmington, DE",
            description: "Nam malesuada, nunc ac accumsan hendrerit, eros lacus hendrerit dui, et ultricies libero lectus eget odio. Quisque dapibus, sem non euismod sagittis, sem mauris bibendum ligula, ac luctus turpis arcu quis justo. Sed eget rhoncus ligula, nec hendrerit diam. Morbi faucibus non risus non ultrices. Suspendisse sollicitudin eros lorem. Fusce et semper tortor, in accumsan velit. Morbi convallis diam quis nisi convallis accumsan. Praesent congue nisi sed sollicitudin hendrerit. Phasellus posuere augue eget sem dictum, eu porta tellus scelerisque. Nulla id neque vel metus eleifend finibus. Fusce luctus eget nisl in hendrerit. Nunc dignissim orci convallis sapien tristique molestie."
        },
        {
            id: 2,
            name: "Redux Fossil 2",
            finder: "Peter Parker",
            location: "New York, NY",
            description: "Integer volutpat, metus sed ultrices consectetur, sem leo elementum magna, vel auctor leo erat et tortor. Curabitur gravida lacus augue, id ullamcorper leo iaculis a. Curabitur euismod risus metus. Maecenas augue enim, consectetur a neque sed, lacinia vulputate velit. Suspendisse quis ipsum in libero pretium semper. Aliquam lacinia felis in venenatis facilisis. Phasellus rutrum, massa a egestas mollis, erat nisi mollis neque, vitae tincidunt libero magna sed tellus. Sed nec libero id tortor scelerisque efficitur ut id quam. Vestibulum non ullamcorper tortor. Nullam ac commodo tortor. Nunc tortor dolor, aliquet ac interdum sed, consequat sed dui. Sed in congue urna, ut volutpat neque. Morbi dolor mauris, aliquam sit amet volutpat vitae, fringilla at tellus. Phasellus bibendum sed mauris ac faucibus. Aenean neque velit, pellentesque ac volutpat et, dapibus id ante."
        },
        {
            id: 3,
            name: "Redux Fossil 3",
            finder: "Tony Stark",
            location: "Malibu, CA",
            description: "Nulla vel tortor erat. Ut sed faucibus ante. Ut sit amet vestibulum dui, non vehicula ligula. Duis id pellentesque orci. Proin tortor neque, tristique sagittis blandit eget, tincidunt sed nulla. Nunc facilisis mauris vel laoreet hendrerit. Ut ac arcu dui. Donec eget magna sollicitudin, volutpat tortor vitae, ullamcorper massa. "
        }    
    ]
};

const types = {
    DELETE: "FOSSIL_DELETE"
};

const handlers = {
    delete: (state, action) => {
        console.log(`fossil.handlers.delete(${action})`);
        const newRecords = state.records.filter(r => r.id !== action.id);
        return { ...state, records: newRecords, selected: null };
    }
};

export const actions = {
    delete: id => {
        console.log(`fossil.actions.delete(${id})`);
        return { type: types.DELETE, id: id }
    }
};

export const reducer = (state = initialState, action) => {
    console.log(`fossilReducer(${action.type})`);
    switch (action.type) {
        case types.DELETE:
            return handlers.delete(state, action);
        default:
            return state;
    }
};
