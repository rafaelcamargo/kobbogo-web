import '@glorious/taslonic/taslonic.css'
import './index.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
import analyticsService from '@src/base/services/analytics/analytics';

ReactDOM.render(<Router />, document.querySelector('[data-app-container]'));
analyticsService.init();
