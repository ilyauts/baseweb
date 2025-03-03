/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {StatefulCalendar, ORIENTATION} from '../index.js';

export function Scenario() {
  return (
    <>
      <StatefulCalendar
        onChange={({date}) => console.log(date)}
        orientation={ORIENTATION.vertical}
        highlightedDate={new Date('March 10, 2019')}
        monthsShown={3}
        range
        quickSelect
        dateLabel={date => (date.getDay() <= 3 ? 'Aa' : null)}
      />

      <StatefulCalendar
        onChange={({date}) => console.log(date)}
        orientation={ORIENTATION.horizontal}
        highlightedDate={new Date('March 10, 2019')}
        monthsShown={3}
        peekNextMonth
        range
        quickSelect
      />
    </>
  );
}
