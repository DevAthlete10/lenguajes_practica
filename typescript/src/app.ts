"use strict";

import { findHeroById } from "./services/hero.services";

const hero = findHeroById(4);

console.log(hero?.name ?? "No heroe found");