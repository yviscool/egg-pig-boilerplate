// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportStudent from '../../../app/controller/student';

declare module 'egg' {
  interface IController {
    student: ExportStudent;
  }
}
