'use strict';

/*!
 * V4Fire Server Core
 * https://github.com/V4Fire/Server
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Server/blob/master/LICENSE
 */

import controllers from 'core/init';

/**
 * Initializes controllers
 * @param router - KOA router
 */
module.exports = (router) => controllers(module.parent)(router);
