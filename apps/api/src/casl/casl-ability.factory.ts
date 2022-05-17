import { Injectable } from '@nestjs/common';
import {
    AbilityBuilder,
    Ability,
    AbilityClass,
    ExtractSubjectType,
} from '@casl/ability';

import {
    Dish,
    DishStatus,
    MealPlanCategory,
    MealPlanEntry,
    Product,
    User,
} from '@fitatam/common';
import { AppAbility, Action, Subjects } from '.';

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, build } = new AbilityBuilder(
            Ability as AbilityClass<AppAbility>
        );

        if (user.isAdmin()) {
            can(Action.Manage, 'all');
        }

        can(Action.Read, [Dish, Product], { status: DishStatus.PUBLIC });
        can(Action.Manage, [Dish, Product], { author: user });

        can(Action.Manage, MealPlanCategory, { user });

        can(Action.Manage, MealPlanEntry, { user });

        can(Action.Read, User);
        can(Action.Manage, User, { id: user.id });

        return build({
            detectSubjectType: (item) =>
                item.constructor as ExtractSubjectType<Subjects>,
        });
    }
}