'use strict';

/*!
 * V4Fire Server Core
 * https://github.com/V4Fire/Server
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Server/blob/master/LICENSE
 */

import init from 'core/init';

/**
 * Initializes workers
 */
module.exports = () => {
	console.log('WORKER_MODE is enabled!');
	return init(module.parent)();
};
