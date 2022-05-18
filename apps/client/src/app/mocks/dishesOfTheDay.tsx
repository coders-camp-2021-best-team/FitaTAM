export const getDay = (date: number) => {
    switch (date) {
        case 0:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 1:
            return {
                Breakfast: {
                    kcal: '2137',
                    B: '20g',
                    T: '20g',
                    W: '20g',
                    Products: [
                        {
                            name: 'product1',
                            kcal: '2136',
                            B: '10g',
                            T: '10g',
                            W: '10g',
                        },
                        {
                            name: 'product2',
                            kcal: '2136',
                            B: '10g',
                            T: '10g',
                            W: '10g',
                        },
                    ],
                },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 2:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 3:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 4:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 5:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        case 6:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
        default:
            return {
                Breakfast: { kcal: '0' },
                Dinner: { kcal: '0' },
                Supper: { kcal: '0' },
            };
    }
};
