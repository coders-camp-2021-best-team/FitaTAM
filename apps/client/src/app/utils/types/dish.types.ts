export type product = {
    name: string;
    kcal: string;
    B: string;
    T: string;
    W: string;
};

export type dish = {
    kcal: string;
    B?: string;
    T?: string;
    W?: string;
    Products?: product[];
};
