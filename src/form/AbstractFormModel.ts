/*
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ValidationErrors from '../common/validation/ValidationErrors';
import EventsModel from '../common/Events';

class AbstractFormModel extends EventsModel {
  /**
   * Abstract form model
   *
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Get data
   *
   * @param {Array} fields     Required fields
   * @returns {Object}  Promise
   * @abstract
   */
  getData(/*fields*/) {
    return Promise.resolve({});
  }

  /**
   * Process form data
   *
   * @param   {Object}      changes     Form data
   * @returns {Object}  Promise
   * @abstract
   */
  submit(/*changes*/) {
    return Promise.resolve();
  }

  /**
   * Record validity check
   *
   * @param {Object}      record  Record object
   * @returns {Object}  Promise
   * @abstract
   */
  isValidRecord(/*record*/) {
    return Promise.resolve(new ValidationErrors());
  }

  /**
   * Get all dependent fields, that are required for validation
   *
   * @param   {Array}  fields  Fields list
   * @returns {Array}  Dependencies
   * @abstract
   */
  getValidationDependency(/*fields*/) {
    return [];
  }
}

export default AbstractFormModel;
