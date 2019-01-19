import cc from 'react-control-center';
import chartModel from './models-cc/chart';
import formModel from './models-cc/form';

const store = {}, reducer = {}, init = {}, computed = {};
const modelItems = [
  { module: 'chart', model: chartModel },
  { module: 'form', model: formModel },
]
modelItems.forEach(item => {
  const model = item.model;
  store[item.module] = model.state || {};
  reducer[item.module] = model.reducer || {};
  init[item.module] = model.init;
  computed[item.module] = model.computed || {};
});

console.log(`startup cc with ${modelItems.length} models!`);
cc.startup({ isModuleMode:true, store, reducer, init, computed });