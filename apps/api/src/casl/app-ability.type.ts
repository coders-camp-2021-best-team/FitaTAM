import { Ability } from '@casl/ability';

import { Action, Subjects } from '.';

export type AppAbility = Ability<[Action, Subjects]>;
