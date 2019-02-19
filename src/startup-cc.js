import cc from 'react-control-center';
import chartModel from './models-cc/chart';
import formModel from './models-cc/form';
import profileModel from './models-cc/profile';
import listModel from './models-cc/list';
import ruleModel from './models-cc/rule';
import userModel from './models-cc/user';
import loginModel from './models-cc/login';
import monitorModel from './models-cc/monitor';
import activitiesModel from './models-cc/activities';
import projectModel from './models-cc/project';
import ccStageModel from './models-cc/cc-stage';

const store = {}, reducer = {}, init = {}, computed = {};
const modelItems = [
  { module: 'chart', model: chartModel },
  { module: 'form', model: formModel },
  { module: 'profile', model: profileModel },
  { module: 'list', model: listModel },
  { module: 'rule', model: ruleModel },
  { module: 'user', model: userModel },
  { module: 'login', model: loginModel },
  { module: 'monitor', model: monitorModel },
  { module: 'activities', model: activitiesModel },
  { module: 'project', model: projectModel },
  { module: 'ccStage', model: ccStageModel, isSingleClass: true },
]
const moduleSingleClass = {};

modelItems.forEach(item => {
  const { model, module, isSingleClass } = item;
  store[module] = model.state || {};
  reducer[module] = model.reducer || {};
  init[module] = model.init;
  computed[module] = model.computed || {};
  moduleSingleClass[module] = isSingleClass === true;
});

console.log(`startup cc with ${modelItems.length} models!`);
cc.startup({ isModuleMode: true, store, reducer, init, computed, moduleSingleClass });