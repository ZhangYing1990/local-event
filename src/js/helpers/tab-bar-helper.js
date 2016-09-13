/**
 * Created by ZhiyuanSun on 16/9/13.
 */
// export URL_PATH = {
//   HOME: '/home',
//   CONTENT: '/content',
//   MINE: '/mine',
//   INDEX: '/'
// };
//
// const tabBarMap = new Map();
// tabBarMap.set(URL_PATH.HOME,0);
// tabBarMap.set(URL_PATH.INDEX,0);
// tabBarMap.set(URL_PATH.CONTENT,1);
// tabBarMap.set(URL_PATH.MINE,2);
//
// export function getTabBarIndexByUrlPath(urlPath) {
//   return tabBarMap.get(urlPath);
// };

export class TabBarHelper{

  static URL_PATH = {
    HOME: '/home',
    CONTENT: '/content',
    MINE: '/mine',
    INDEX: '/'
  };

  static TAB_BAR_ID = {
    HOME: 0,
    CONTENT: 1,
    INDEX: 2
  };

  static tabBarMap = new Map([
    [this.URL_PATH.HOME, this.TAB_BAR_ID.HOME],
    [this.URL_PATH.INDEX, this.TAB_BAR_ID.HOME],
    [this.URL_PATH.CONTENT, this.TAB_BAR_ID.CONTENT],
    [this.URL_PATH.MINE, this.TAB_BAR_ID.INDEX]
  ]);

  getTabIdByUrlPath(urlPath){
    return this.tabBarMap.get(urlPath);
  }
}