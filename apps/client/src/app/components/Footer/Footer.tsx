import { dailyGoal } from '../../mocks/dailyGoal';

type Eaten = {
    kcal: number;
    prot: number;
    fat: number;
    carbs: number;
};

type Props = {
    eaten: Eaten;
};

export const Footer = ({ eaten }: Props) => {
    const goal = dailyGoal();
    return (
        <footer
            style={{
                height: 'fit-content',
                padding: '0 3px',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                fontSize: '13px',
                width: '100%',
                alignSelf: 'flex-end',
            }}
        >
            <div>
                Kcal {eaten.kcal}/{goal.kcal} kcal
            </div>
            <div>
                Prot. {eaten.prot}/{goal.prot} g
            </div>
            <div>
                Fats {eaten.fat}/{goal.fat} g
            </div>
            <div>
                Carbs {eaten.carbs}/{goal.carbs} g
            </div>
        </footer>
    );
};
