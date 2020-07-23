import { observable, action } from 'mobx';

export default class YourStore {
  @observable Info = false;
  @observable hold = true;
  @observable boot = false;
  @observable quit = false;
  @observable info = false;

  // @action changeStoreValue = (value: string) => {
  //   this.yourStore = value;
  // };
  // @action changeToWorld = () => {
  // 	this.yourStore = "World";
  // }
}