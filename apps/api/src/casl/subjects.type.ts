import { InferSubjects } from '@casl/ability';

import {
    Dish,
    DishTag,
    MealPlanCategory,
    MealPlanEntry,
    Product,
    User,
} from '@fitatam/common';

export type Subjects =
    | InferSubjects<
          | typeof Dish
          | typeof DishTag
          | typeof MealPlanCategory
          | typeof MealPlanEntry
          | typeof Product
          | typeof User
      >
    | 'all';
